from PIL import Image
from pathlib import Path
from pillow_heif import register_heif_opener

register_heif_opener()

files = [
    Path('images/foto1.png'),
    Path('images/foto2.png'),
    Path('images/foto3.png'),
    Path('images/foto4.png'),
    Path('images/foto5.HEIC'),
    Path('images/foto6.HEIC'),
]

for src in files:
    print(f'processing {src}')
    img = Image.open(src).convert('RGB')
    img = img.resize((900, 900), Image.Resampling.LANCZOS)
    out = src.with_suffix('.webp')
    img.save(out, 'WEBP', quality=78, optimize=True)
    print(f' -> {out} ({out.stat().st_size / 1024:.1f} KB)')
