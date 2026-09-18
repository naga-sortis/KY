import sys
import tempfile
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

from app.storage import LocalStorage


def test_local_storage_roundtrip():
    with tempfile.TemporaryDirectory() as tmp:
        storage = LocalStorage(tmp)
        storage.put("raw/abc-resume.pdf", b"hello world")
        assert storage.get("raw/abc-resume.pdf") == b"hello world"


def test_local_storage_rejects_path_traversal_segments():
    with tempfile.TemporaryDirectory() as tmp:
        storage = LocalStorage(tmp)
        storage.put("../escape.txt", b"nope")
        # ".." is stripped, so this lands inside root, not above it.
        assert (Path(tmp) / "escape.txt").exists()
