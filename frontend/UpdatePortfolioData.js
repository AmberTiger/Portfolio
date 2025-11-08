import fs from 'fs';
import path from 'path';
const keywords = ['cat', 'dog', 'rabbit', 'hamster', 'panda', 'fox', 'hedgehog', 'bear', 'squirrel', 'bird'];
const IMAGE_COUNT = 10;
function generateRandomImage() {
  const keyword = keywords[Math.floor(Math.random() * keywords.length)];
  const randomSeed = Math.floor(Math.random() * 100000); 
  return `https://loremflickr.com/400/300/${keyword}?lock=${randomSeed}`;
}
const newImages = Array.from({ length: IMAGE_COUNT }, () => generateRandomImage());
const updatedData = { portfolioImages: newImages };
const dataPath = path.resolve('./src/data/PortfolioData.json');
fs.writeFileSync(dataPath, JSON.stringify(updatedData, null, 2), 'utf-8');
console.log('Update Cute Animal Pictures!');