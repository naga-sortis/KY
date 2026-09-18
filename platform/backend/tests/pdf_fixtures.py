"""Builds small in-memory PDFs for tests -- no fixture files to keep in sync."""

from __future__ import annotations

import io

from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas


def make_pdf(pages: list[list[str]]) -> bytes:
    """`pages` is a list of pages, each a list of lines."""
    buf = io.BytesIO()
    c = canvas.Canvas(buf, pagesize=letter)
    width, height = letter
    for lines in pages:
        y = height - 72
        for line in lines:
            c.drawString(72, y, line)
            y -= 16
        c.showPage()
    c.save()
    return buf.getvalue()
