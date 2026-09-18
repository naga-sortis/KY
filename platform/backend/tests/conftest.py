import os
import sys
import tempfile
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

# Must be set before any test imports app.db (it reads these at import time).
_tmp = tempfile.mkdtemp(prefix="provenance-test-")
os.environ.setdefault("DATABASE_URL", f"sqlite:///{_tmp}/test.db")
os.environ.setdefault("LOCAL_STORAGE_ROOT", f"{_tmp}/files")
