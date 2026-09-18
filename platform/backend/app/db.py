"""
SQLite by default (zero setup, one file, nothing to provision before a demo).
Set DATABASE_URL to a Postgres DSN in production -- SQLAlchemy abstracts the
difference; nothing above this module needs to change.
"""

from __future__ import annotations

import os

from sqlalchemy import create_engine
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


def init_db() -> None:
    if DATABASE_URL.startswith("sqlite:///"):
        path = DATABASE_URL.removeprefix("sqlite:///")
        if path not in (":memory:",) and "/" in path:
            os.makedirs(os.path.dirname(path), exist_ok=True)
    Base.metadata.create_all(bind=engine)
