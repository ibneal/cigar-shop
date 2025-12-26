const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imagesDir = path.join(__dirname, '../public/images');
const backupDir = path.join(__dirname, '../public/images-backup');

// Configuration
const config = {
  quality: 85,
  maxWidth: 1920,
  maxHeight: 1920,
  // Don't convert to WebP to avoid updating code references
  convertToWebP: false,
  // Preserve originals in backup folder
  createBackup: true,
};

// File extensions to process
const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];

// Keep track of stats
const stats = {
  processed: 0,
  skipped: 0,
  errors: 0,
  originalSize: 0,
  optimizedSize: 0,
};

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

async function optimizeImage(filePath, relativePath) {
  const ext = path.extname(filePath).toLowerCase();
  
  if (!imageExtensions.includes(ext)) {
    return;
  }

  // Skip if already optimized (has .optimized in name)
  if (filePath.includes('.optimized')) {
    stats.skipped++;
    return;
  }

  try {
    const originalStats = fs.statSync(filePath);
    stats.originalSize += originalStats.size;

    console.log(`\n📸 Processing: ${relativePath}`);
    console.log(`   Original: ${formatBytes(originalStats.size)}`);

    // Create backup if enabled
    if (config.createBackup) {
      const backupPath = path.join(backupDir, relativePath);
      const backupFolder = path.dirname(backupPath);
      if (!fs.existsSync(backupFolder)) {
        fs.mkdirSync(backupFolder, { recursive: true });
      }
      fs.copyFileSync(filePath, backupPath);
    }

    // Process image
    const image = sharp(filePath);
    const metadata = await image.metadata();

    // Determine if resize is needed
    const needsResize = metadata.width > config.maxWidth || metadata.height > config.maxHeight;

    let pipeline = image;

    if (needsResize) {
      pipeline = pipeline.resize(config.maxWidth, config.maxHeight, {
        fit: 'inside',
        withoutEnlargement: true,
      });
    }

    // Output format
    let outputPath = filePath;
    if (config.convertToWebP && ext !== '.webp') {
      outputPath = filePath.replace(ext, '.webp');
      pipeline = pipeline.webp({ quality: config.quality });
    } else if (ext === '.jpg' || ext === '.jpeg') {
      pipeline = pipeline.jpeg({ quality: config.quality, mozjpeg: true });
    } else if (ext === '.png') {
      pipeline = pipeline.png({ quality: config.quality, compressionLevel: 9 });
    } else if (ext === '.webp') {
      pipeline = pipeline.webp({ quality: config.quality });
    }

    // Save optimized image
    await pipeline.toFile(outputPath + '.tmp');

    // Replace original with optimized
    fs.unlinkSync(filePath);
    fs.renameSync(outputPath + '.tmp', outputPath);

    const optimizedStats = fs.statSync(outputPath);
    stats.optimizedSize += optimizedStats.size;
    stats.processed++;

    const savings = ((originalStats.size - optimizedStats.size) / originalStats.size * 100).toFixed(1);
    console.log(`   Optimized: ${formatBytes(optimizedStats.size)} (${savings}% smaller)`);

    // If we converted to WebP and it's a different file, we need to update references
    if (outputPath !== filePath) {
      console.log(`   ⚠️  Converted to WebP: ${path.basename(outputPath)}`);
      console.log(`   ⚠️  Update code references from ${path.basename(filePath)} to ${path.basename(outputPath)}`);
    }

  } catch (error) {
    console.error(`   ❌ Error: ${error.message}`);
    stats.errors++;
  }
}

async function processDirectory(dir, baseDir = dir) {
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const relativePath = path.relative(baseDir, fullPath);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Skip backup directory
      if (fullPath === backupDir) continue;
      await processDirectory(fullPath, baseDir);
    } else if (stat.isFile()) {
      await optimizeImage(fullPath, relativePath);
    }
  }
}

async function main() {
  console.log('🖼️  Image Optimization Script');
  console.log('================================\n');
  console.log(`Quality: ${config.quality}`);
  console.log(`Max dimensions: ${config.maxWidth}x${config.maxHeight}`);
  console.log(`Convert to WebP: ${config.convertToWebP}`);
  console.log(`Create backup: ${config.createBackup}`);
  console.log('');

  if (config.createBackup) {
    console.log(`📁 Backups will be saved to: ${backupDir}\n`);
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }
  }

  console.log('Starting optimization...\n');
  const startTime = Date.now();

  await processDirectory(imagesDir);

  const duration = ((Date.now() - startTime) / 1000).toFixed(1);
  const totalSavings = stats.originalSize - stats.optimizedSize;
  const savingsPercent = ((totalSavings / stats.originalSize) * 100).toFixed(1);

  console.log('\n\n✅ Optimization Complete!');
  console.log('================================');
  console.log(`Processed: ${stats.processed} images`);
  console.log(`Skipped: ${stats.skipped} images`);
  console.log(`Errors: ${stats.errors} images`);
  console.log(`Original size: ${formatBytes(stats.originalSize)}`);
  console.log(`Optimized size: ${formatBytes(stats.optimizedSize)}`);
  console.log(`Saved: ${formatBytes(totalSavings)} (${savingsPercent}%)`);
  console.log(`Duration: ${duration}s`);
  
  if (config.createBackup) {
    console.log(`\n💾 Original images backed up to: ${backupDir}`);
  }
  
  console.log('\n⚠️  IMPORTANT: If any images were converted to WebP,');
  console.log('   you need to update the file references in your code!');
}

main().catch(console.error);

