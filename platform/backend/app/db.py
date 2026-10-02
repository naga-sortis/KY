"""
SQLite by default (zero setup, one file, nothing to provision before a demo).
Set DATABASE_URL to a Postgres DSN in production -- SQLAlchemy abstracts the
difference; nothing above this module needs to change.
"""

from __future__ import annotations

import os

from sqlalchemy import create_engine, inspect, text
from sqlalchemy.orm import DeclarativeBase, Session, sessionmaker

DATABASE_URL = os.environ.get("DATABASE_URL", "sqlite:///./data/provenance.db")

connect_args = {"check_same_thread": False} if DATABASE_URL.startswith("sqlite") else {}
engine = create_engine(DATABASE_URL, connect_args=connect_args)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


class Base(DeclarativeBase):
    pass


def get_db():
    db: Session = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def _ensure_column(table: str, column: str, ddl_type: str, default_sql: str | None = None) -> None:
    """Adds a column to an already-existing table if it's missing -- a no-op
    no-Alembic migration step so a pre-existing demo DB survives new fields
    on the model without `create_all` (which never alters existing tables)."""
    inspector = inspect(engine)
    if table not in inspector.get_table_names():
        return
    existing = {col["name"] for col in inspector.get_columns(table)}
    if column in existing:
        return
    default_clause = f" DEFAULT {default_sql}" if default_sql is not None else ""
    with engine.begin() as conn:
        conn.execute(text(f"ALTER TABLE {table} ADD COLUMN {column} {ddl_type}{default_clause}"))


def init_db() -> None:
    if DATABASE_URL.startswith("sqlite:///"):
        path = DATABASE_URL.removeprefix("sqlite:///")
        if path not in (":memory:",) and "/" in path:
            os.makedirs(os.path.dirname(path), exist_ok=True)
    Base.metadata.create_all(bind=engine)
    _ensure_column("candidates", "currently_employed", "BOOLEAN", "0")
    _ensure_column("candidates", "current_role_skills", "JSON", "'[]'")
    _ensure_column("candidates", "current_role_industry_key", "VARCHAR")
    _ensure_column("candidates", "current_role_industry_label", "VARCHAR")
