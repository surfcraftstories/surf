from collections import deque
from pathlib import Path
import shutil

import numpy as np
from PIL import Image, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
BACKGROUND = ROOT / "public" / "projects" / "shared" / "fine-concrete.png"
CATEGORIES = ("phone-straps", "crossbody", "bransoletki")


def edge_background_color(rgb: np.ndarray) -> np.ndarray:
    h, w, _ = rgb.shape
    band = max(12, min(h, w) // 45)
    edge = np.concatenate(
        (
            rgb[:band].reshape(-1, 3),
            rgb[-band:].reshape(-1, 3),
            rgb[:, :band].reshape(-1, 3),
            rgb[:, -band:].reshape(-1, 3),
        ),
        axis=0,
    )
    return np.median(edge, axis=0)


def connected_background_mask(
    rgb: np.ndarray, bg: np.ndarray, fill_large_enclosed: bool
) -> np.ndarray:
    diff = rgb.astype(np.float32) - bg.astype(np.float32)
    distance = np.sqrt(np.sum(diff * diff, axis=2))
    candidate = distance < 88

    h, w = candidate.shape
    visited = np.zeros((h, w), dtype=np.uint8)
    queue: deque[tuple[int, int]] = deque()

    for x in range(w):
        if candidate[0, x]:
            visited[0, x] = 1
            queue.append((0, x))
        if candidate[h - 1, x] and not visited[h - 1, x]:
            visited[h - 1, x] = 1
            queue.append((h - 1, x))
    for y in range(h):
        if candidate[y, 0] and not visited[y, 0]:
            visited[y, 0] = 1
            queue.append((y, 0))
        if candidate[y, w - 1] and not visited[y, w - 1]:
            visited[y, w - 1] = 1
            queue.append((y, w - 1))

    while queue:
        y, x = queue.popleft()
        if y and candidate[y - 1, x] and not visited[y - 1, x]:
            visited[y - 1, x] = 1
            queue.append((y - 1, x))
        if y + 1 < h and candidate[y + 1, x] and not visited[y + 1, x]:
            visited[y + 1, x] = 1
            queue.append((y + 1, x))
        if x and candidate[y, x - 1] and not visited[y, x - 1]:
            visited[y, x - 1] = 1
            queue.append((y, x - 1))
        if x + 1 < w and candidate[y, x + 1] and not visited[y, x + 1]:
            visited[y, x + 1] = 1
            queue.append((y, x + 1))

    if fill_large_enclosed:
        remaining = candidate & (visited == 0)
        for start_y, start_x in zip(*np.nonzero(remaining)):
            if not remaining[start_y, start_x]:
                continue
            component = []
            queue.append((start_y, start_x))
            remaining[start_y, start_x] = False
            while queue:
                y, x = queue.popleft()
                component.append((y, x))
                for ny, nx in ((y - 1, x), (y + 1, x), (y, x - 1), (y, x + 1)):
                    if 0 <= ny < h and 0 <= nx < w and remaining[ny, nx]:
                        remaining[ny, nx] = False
                        queue.append((ny, nx))
            if len(component) >= 250:
                ys, xs = zip(*component)
                visited[ys, xs] = 1

    return visited * 255


def replace_background(
    source: Path, concrete: Image.Image, fill_large_enclosed: bool
) -> None:
    image = Image.open(source).convert("RGB")
    scale = min(1.0, 480 / max(image.size))
    mask_size = (
        max(1, round(image.width * scale)),
        max(1, round(image.height * scale)),
    )
    mask_source = image.resize(mask_size, Image.Resampling.BILINEAR)
    rgb = np.asarray(mask_source)
    bg_color = edge_background_color(rgb)
    mask = connected_background_mask(rgb, bg_color, fill_large_enclosed)
    feathered = (
        Image.fromarray(mask, mode="L")
        .resize(image.size, Image.Resampling.BILINEAR)
        .filter(ImageFilter.GaussianBlur(2.2))
    )
    backdrop = concrete.resize(image.size, Image.Resampling.LANCZOS)
    result = Image.composite(backdrop, image, feathered)
    result.save(source, optimize=True)


def main() -> None:
    concrete = Image.open(BACKGROUND).convert("RGB")
    changed = 0

    for category in CATEGORIES:
        folder = ROOT / "public" / "projects" / category
        backup = folder / "raw"
        backup.mkdir(exist_ok=True)

        for source in sorted(folder.glob("*.png")):
            original = backup / source.name
            if not original.exists():
                shutil.copy2(source, original)
            else:
                shutil.copy2(original, source)
            crossbody_lifestyle = category == "crossbody" and source.stem in {
                "03",
                "05",
                "07",
                "10",
                "11",
            }
            replace_background(source, concrete, not crossbody_lifestyle)
            changed += 1

    print(f"Updated {changed} catalog images.")


if __name__ == "__main__":
    main()
