import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const publicDir = join(__dirname, '..', 'public');

async function convertImage() {
  const inputPath = join(publicDir, 'newHero.jpg');
  const outputPath = join(publicDir, 'newHero.webp');

  try {
    const info = await sharp(inputPath)
      .webp({ quality: 75 })
      .toFile(outputPath);

    console.log('Converted successfully:');
    console.log(`  Input: newHero.jpg`);
    console.log(`  Output: newHero.webp`);
    console.log(`  Size: ${(info.size / 1024).toFixed(1)} KB`);
  } catch (error) {
    console.error('Error converting image:', error);
  }
}

convertImage();
