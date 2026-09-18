# Deploying Provenance (Phase 1)

Everything below needs your actual Azure or Zadara account credentials — I
built and containerized the app, but provisioning real cloud resources is a
step only whoever holds those credentials can take. This is the handoff.

The app itself doesn't care which cloud it's on: the only cloud-specific
surface is object storage, and that's behind the S3-compatible API in
`backend/app/storage.py`. Everything else (the API container, the web
container, the database) is identical on both targets.

## What "validated against both" means right now

I couldn't actually build the Docker images in this sandbox — its network
policy blocks pulling base images from Docker Hub's registry (confirmed: both
`python:3.11-slim` and `node:22-slim` pulls got a 403 from the CDN). What I
*did* validate:
- `docker compose config` and the `docker-compose.s3.yml` overlay merge
  cleanly (see `platform/docker-compose.yml`).
- The Python dependency set installs and the full test suite (22 tests)
  passes in a real virtualenv.
- The frontend type-checks and builds with `npm run build`.
- `LocalStorage` (the default backend) is unit-tested; `S3Storage` is
  reviewed but not unit-tested against a real S3-compatible endpoint — that's
  the one piece worth a manual smoke test wherever you first run
  `docker compose -f docker-compose.yml -f docker-compose.s3.yml up --build`,
  since it's the piece I couldn't exercise here.

Run `docker compose build` yourself first, anywhere with normal registry
access, before trusting either deployment path below.

## Azure

1. **Resource group** — one per environment (`provenance-demo`, etc).
2. **Database** — Azure Database for PostgreSQL Flexible Server. Set
   `DATABASE_URL=postgresql://user:pass@host:5432/provenance` on the API
   container. (SQLite, the local default, is fine for a single-instance demo
   but won't survive a container restart on most platforms — move to
   Postgres before anything you need to persist.)
3. **Object storage** — either:
   - Azure Blob Storage behind an S3-compatibility layer, or
   - a small MinIO/Blob-gateway container, matching the `docker-compose.s3.yml`
     pattern.
   Set `STORAGE_BACKEND=s3`, `S3_BUCKET`, `S3_ENDPOINT`, plus AWS-style
   credentials env vars (boto3's normal `AWS_ACCESS_KEY_ID` /
   `AWS_SECRET_ACCESS_KEY`).
4. **Compute** — Azure Container Apps is the fastest path for two containers
   (api, web) with no Kubernetes to manage; push both images to Azure
   Container Registry first (`az acr build`), then `az containerapp up` for
   each. AKS is the right call later, not for a one-week demo.
5. **Ingestion** — SharePoint/Graph API access needs an app registration in
   Entra ID with `Files.Read.All` (or narrower, per site) — a separate
   credential from everything above, provisioned by whoever owns the
   SharePoint tenant.
6. **Networking** — put the web container's `VITE_API_URL` build arg at the
   api container's public URL before building the web image (it's baked in
   at build time, see `web/Dockerfile`).

## Zadara

1. **Compute** — zCompute instances or a Kubernetes cluster on zCompute, per
   whatever Zadara offering the account already has. Same two containers.
2. **Object storage** — Zadara's zIOS object storage speaks the S3 API
   natively, so `S3_ENDPOINT` points straight at the zIOS endpoint with no
   gateway needed — this is the cleaner of the two storage integrations.
3. **Database** — Postgres, either a Zadara-managed instance if offered, or a
   self-run Postgres container on zCompute with a persistent volume.
4. **Credentials** — Zadara access key/secret go in the same
   `AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY` env vars boto3 already
   expects; nothing in the app code needs to know it isn't AWS.

## Local (what actually runs today)

```bash
# Backend
cd platform/backend
python3 -m venv .venv && . .venv/bin/activate
pip install -r requirements-dev.txt
uvicorn app.main:app --reload

# Frontend, in another shell
cd platform/web
npm install
VITE_API_URL=http://localhost:8000 npm run dev
```

Or, once you've confirmed `docker compose build` works in an environment
with registry access:

```bash
cd platform
docker compose up --build                 # SQLite + local filesystem
# or, to validate the S3-compatible path:
docker compose -f docker-compose.yml -f docker-compose.s3.yml up --build
```

## Not in this deploy

Multi-tenant isolation, SSO, the authenticity/screening modules and the
feedback-retraining loop are out of scope for this phase by design — see the
[Provenance architecture doc](https://claude.ai/artifact/VuBvYYB1VcZpq739p5maEJ)
for the full roadmap and why they're staged for after a pilot partner is
signed.
