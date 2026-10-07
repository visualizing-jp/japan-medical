"""Original editorial line drawing for the medical catalogue.
Run with python3 scripts/generate-art.py. Coordinates share a 320 × 200 canvas.
"""
from pathlib import Path

OUT = Path(__file__).resolve().parents[1] / "public" / "art"


def path(d, **attrs):
    extra = " ".join(f'{k.replace("_", "-")}="{v}"' for k, v in attrs.items())
    return f'<path d="{d}" {extra}/>' if extra else f'<path d="{d}"/>'


def ellipse(x, y, rx, ry, **attrs):
    extra = " ".join(f'{k.replace("_", "-")}="{v}"' for k, v in attrs.items())
    return f'<ellipse cx="{x}" cy="{y}" rx="{rx}" ry="{ry}" {extra}/>'


def circle(x, y, r, **attrs):
    return ellipse(x, y, r, r, **attrs)


def rect(x, y, w, h, rx=0, **attrs):
    extra = " ".join(f'{k.replace("_", "-")}="{v}"' for k, v in attrs.items())
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}" {extra}/>'


def fine(d):
    return path(d, stroke_width=".65", opacity=".65")


def ground(x=60, y=169, w=200):
    return fine(f"M{x} {y}h{w}m{-w + 12} 4h{w - 42}m{-w + 52} 3h{w - 85}")


art = {}
art["checkup"] = (
    rect(72, 46, 78, 104, 4)
    + rect(96, 38, 30, 14, 3)
    + fine("M88 68h46M88 80h46M88 92h30")
    + path("M90 112h14l8 14 10-22 8 12h16")
    + circle(214, 58, 16)
    + path("M214 74v36M196 96h36M202 146l12-36 14 36")
    + path("M186 118h18l6 16h22")
    + circle(232, 126, 8)
    + fine("M196 122h8M214 160l-8 14m22-14 10 14")
    + ground(64, 178, 196)
)

for name, drawing in art.items():
    svg = (
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" fill="none" '
        'stroke="#303b39" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round">\n'
        '  <defs><pattern id="paper" width="1" height="1" patternUnits="userSpaceOnUse">'
        '<rect width="1" height="1" fill="#f1f2ee" stroke="none"/></pattern></defs>\n'
        f"  {drawing}\n</svg>\n"
    )
    (OUT / f"{name}.svg").write_text(svg)

print(f"Generated {len(art)} original SVG illustrations.")
