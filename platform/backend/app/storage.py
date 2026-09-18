"""
Object storage abstraction.

Phase 1 default is the local filesystem — zero external dependencies, works
anywhere `pip install` works, nothing to provision before a demo. `S3Storage`
speaks the S3 API, which both Azure (via a Blob S3-compatibility gateway or
MinIO/Azurite in front of Blob) and Zadara (native S3-compatible zIOS object
storage) can serve — so moving off the filesystem is a config change
(STORAGE_BACKEND=s3 + endpoint/bucket/credentials), not a code change. See
../DEPLOY.md.
"""

from __future__ import annotations

import os
from pathlib import Path
from typing import Protocol


class Storage(Protocol):
    def put(self, key: str, data: bytes) -> None: ...
    def get(self, key: str) -> bytes: ...


class LocalStorage:
    def __init__(self, root: str | Path):
        self.root = Path(root)
        self.root.mkdir(parents=True, exist_ok=True)

    def _path(self, key: str) -> Path:
        # Keys are server-generated ids, but keep this defensive against traversal regardless.
        safe = key.replace("..", "").lstrip("/")
        path = self.root / safe
        path.parent.mkdir(parents=True, exist_ok=True)
        return path

    def put(self, key: str, data: bytes) -> None:
        self._path(key).write_bytes(data)

    def get(self, key: str) -> bytes:
        return self._path(key).read_bytes()


class S3Storage:
    """Works against AWS S3, Azure Blob (S3-compatible gateway) and Zadara zIOS alike."""

    def __init__(self, bucket: str, endpoint_url: str | None = None):
        import boto3
        from botocore.exceptions import ClientError

        self.bucket = bucket
        self._client = boto3.client("s3", endpoint_url=endpoint_url)
        try:
            self._client.head_bucket(Bucket=bucket)
        except ClientError:
            # First run against a fresh MinIO/dev target: create it. Against a real
            # cloud account the bucket is expected to already exist and this is a
            # no-op path (create_bucket failing here just means put/get will fail
            # later with a clear permissions error, instead of crashing at startup).
            try:
                self._client.create_bucket(Bucket=bucket)
            except ClientError:
                pass

    def put(self, key: str, data: bytes) -> None:
        self._client.put_object(Bucket=self.bucket, Key=key, Body=data)

    def get(self, key: str) -> bytes:
        resp = self._client.get_object(Bucket=self.bucket, Key=key)
        return resp["Body"].read()


def get_storage() -> Storage:
    backend = os.environ.get("STORAGE_BACKEND", "local")
    if backend == "s3":
        bucket = os.environ["S3_BUCKET"]
        endpoint = os.environ.get("S3_ENDPOINT")  # unset -> AWS; set -> Azure/Zadara/MinIO
        return S3Storage(bucket=bucket, endpoint_url=endpoint)
    root = os.environ.get("LOCAL_STORAGE_ROOT", "./data/files")
    return LocalStorage(root)
