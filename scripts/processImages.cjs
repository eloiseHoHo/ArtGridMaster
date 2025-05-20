const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Create directories
const dirs = [
  'client/public/images/examples/grid',
  'client/public/images/examples/lineart',
  'client/public/images/examples/sketch'
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Process portrait with grid
async function createGridOverlay() {
  console.log('Creating grid overlay...');
  const inputImage = 'client/public/images/examples/original/portrait.jpg';
  const outputImage = 'client/public/images/examples/grid/portrait-grid.jpg';
  
  // Load the image
  const image = await loadImage(inputImage);
  
  // Create canvas with same dimensions as image
  const canvas = createCanvas(image.width, image.height);
  const ctx = canvas.getContext('2d');
  
  // Draw the image
  ctx.drawImage(image, 0, 0);
  
  // Draw grid lines
  const gridSize = 50;
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
  ctx.lineWidth = 1;
  
  // Draw horizontal lines
  for (let y = gridSize; y < image.height; y += gridSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(image.width, y);
    ctx.stroke();
  }
  
  // Draw vertical lines
  for (let x = gridSize; x < image.width; x += gridSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, image.height);
    ctx.stroke();
  }
  
  // Save the output
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(outputImage, buffer);
  console.log('Grid overlay created');
}

// Process landscape with line art
async function createLineArt() {
  console.log('Creating line art...');
  const inputImage = 'client/public/images/examples/original/landscape.jpg';
  const outputImage = 'client/public/images/examples/lineart/landscape-lineart.jpg';
  
  await sharp(inputImage)
    .grayscale()
    .normalize()
    .threshold(125)
    .toFile(outputImage);
  
  console.log('Line art created');
}

// Process flower with sketch effect
async function createSketch() {
  console.log('Creating sketch effect...');
  const inputImage = 'client/public/images/examples/original/flower.jpg';
  const outputImage = 'client/public/images/examples/sketch/flower-sketch.jpg';
  
  // Create sketch effect using multiple processing steps
  await sharp(inputImage)
    .grayscale()
    .modulate({ brightness: 1.5 })
    .negate()
    .blur(0.3)
    .gamma(3)
    .toFile(outputImage);
  
  console.log('Sketch effect created');
}

// Run all processes
async function processAllImages() {
  try {
    await createGridOverlay();
    await createLineArt();
    await createSketch();
    console.log('All image processing completed successfully');
  } catch (error) {
    console.error('Error processing images:', error);
  }
}

processAllImages();