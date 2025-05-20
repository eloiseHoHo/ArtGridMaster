// 生成示例图片脚本
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createCanvas, loadImage } from 'canvas';

// 获取当前文件的目录路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 确保目标目录存在
const afterDir = path.join(__dirname, '../client/public/images/after');
if (!fs.existsSync(afterDir)) {
  fs.mkdirSync(afterDir, { recursive: true });
}

/**
 * 生成网格效果图像
 */
async function generateGridEffect(inputPath, outputPath, size = 50, color = '#000000', opacity = 0.5) {
  try {
    const image = await loadImage(inputPath);
    const canvas = createCanvas(image.width, image.height);
    const ctx = canvas.getContext('2d');
    
    // 绘制原始图像
    ctx.drawImage(image, 0, 0, image.width, image.height);
    
    // 绘制网格
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.globalAlpha = opacity;
    
    // 绘制垂直线
    for (let x = 0; x <= image.width; x += size) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, image.height);
      ctx.stroke();
    }
    
    // 绘制水平线
    for (let y = 0; y <= image.height; y += size) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(image.width, y);
      ctx.stroke();
    }
    
    // 重置透明度
    ctx.globalAlpha = 1;
    
    // 保存图像
    const buffer = canvas.toBuffer('image/jpeg');
    fs.writeFileSync(outputPath, buffer);
    console.log(`网格效果已保存到: ${outputPath}`);
    
    return outputPath;
  } catch (error) {
    console.error('生成网格效果时出错:', error);
    throw error;
  }
}

/**
 * 生成线稿效果
 */
async function generateLineArtEffect(inputPath, outputPath, threshold = 10, lineThickness = 1) {
  try {
    const image = await loadImage(inputPath);
    const canvas = createCanvas(image.width, image.height);
    const ctx = canvas.getContext('2d');
    
    // 设置线条粗细
    ctx.lineWidth = lineThickness;
    
    // 绘制原始图像
    ctx.drawImage(image, 0, 0, image.width, image.height);
    
    // 获取图像数据
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    
    // 转换为灰度图
    for (let i = 0; i < data.length; i += 4) {
      const gray = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
      data[i] = gray;
      data[i + 1] = gray;
      data[i + 2] = gray;
    }
    
    // 进行Sobel边缘检测
    const sobelData = new Uint8ClampedArray(data.length);
    for (let y = 1; y < canvas.height - 1; y++) {
      for (let x = 1; x < canvas.width - 1; x++) {
        const idx = (y * canvas.width + x) * 4;
        
        // 索贝尔算子计算梯度
        const gx = 
            -1 * data[idx - 4 - canvas.width * 4] +
            -2 * data[idx - canvas.width * 4] +
            -1 * data[idx + 4 - canvas.width * 4] +
            1 * data[idx - 4 + canvas.width * 4] +
            2 * data[idx + canvas.width * 4] +
            1 * data[idx + 4 + canvas.width * 4];
            
        const gy = 
            -1 * data[idx - 4 - canvas.width * 4] +
            -2 * data[idx - 4] +
            -1 * data[idx - 4 + canvas.width * 4] +
            1 * data[idx + 4 - canvas.width * 4] +
            2 * data[idx + 4] +
            1 * data[idx + 4 + canvas.width * 4];
        
        // 计算梯度幅值
        const gradientMag = Math.sqrt(gx * gx + gy * gy);
        
        // 阈值处理
        const edgeValue = gradientMag > threshold * 5 ? 0 : 255;
        
        sobelData[idx] = edgeValue;
        sobelData[idx + 1] = edgeValue;
        sobelData[idx + 2] = edgeValue;
        sobelData[idx + 3] = 255;
      }
    }
    
    // 将处理后的数据放回画布
    const processedImageData = new ImageData(sobelData, canvas.width, canvas.height);
    ctx.putImageData(processedImageData, 0, 0);
    
    // 调整对比度
    ctx.globalCompositeOperation = "difference";
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // 反转颜色
    ctx.globalCompositeOperation = "difference";
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // 保存图像
    const buffer = canvas.toBuffer('image/jpeg');
    fs.writeFileSync(outputPath, buffer);
    console.log(`线稿效果已保存到: ${outputPath}`);
    
    return outputPath;
  } catch (error) {
    console.error('生成线稿效果时出错:', error);
    throw error;
  }
}

/**
 * 生成素描效果
 */
async function generateSketchEffect(inputPath, outputPath, intensity = 5, pencilType = "graphite") {
  try {
    const image = await loadImage(inputPath);
    const canvas = createCanvas(image.width, image.height);
    const ctx = canvas.getContext('2d');
    
    // 绘制原始图像
    ctx.drawImage(image, 0, 0, image.width, image.height);
    
    // 获取图像数据
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    
    // 转换为灰度图并调整对比度
    for (let i = 0; i < data.length; i += 4) {
      let gray = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
      
      // 反转并调整对比度
      gray = 255 - gray;
      gray = Math.pow(gray / 255, intensity / 5) * 255;
      
      // 根据铅笔类型调整颜色
      if (pencilType === "graphite") {
        data[i] = gray;
        data[i + 1] = gray;
        data[i + 2] = gray;
      } else {
        // 木炭效果 - 更深的黑色和更多纹理
        data[i] = gray * 0.9;
        data[i + 1] = gray * 0.85;
        data[i + 2] = gray * 0.8;
      }
    }
    
    // 将处理后的数据放回画布
    ctx.putImageData(imageData, 0, 0);
    
    // 添加简单的纹理
    ctx.globalCompositeOperation = "multiply";
    ctx.fillStyle = pencilType === "graphite" ? "#f8f8f8" : "#f0f0f0";
    ctx.globalAlpha = 0.2;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // 重置混合模式
    ctx.globalCompositeOperation = "source-over";
    ctx.globalAlpha = 1;
    
    // 保存图像
    const buffer = canvas.toBuffer('image/jpeg');
    fs.writeFileSync(outputPath, buffer);
    console.log(`素描效果已保存到: ${outputPath}`);
    
    return outputPath;
  } catch (error) {
    console.error('生成素描效果时出错:', error);
    throw error;
  }
}

/**
 * 主函数 - 生成所有示例图片
 */
async function generateAllExamples() {
  try {
    // 网格效果
    await generateGridEffect(
      path.join(__dirname, '../client/public/images/before/portrait.jpg'),
      path.join(__dirname, '../client/public/images/after/portrait-grid.jpg'),
      50,  // 网格大小
      '#3B82F6',  // 蓝色网格
      0.5  // 透明度
    );
    
    // 线稿效果
    await generateLineArtEffect(
      path.join(__dirname, '../client/public/images/before/landscape.jpg'),
      path.join(__dirname, '../client/public/images/after/landscape-lineart.jpg'),
      15,  // 阈值
      1    // 线条粗细
    );
    
    // 素描效果
    await generateSketchEffect(
      path.join(__dirname, '../client/public/images/before/flower.jpg'),
      path.join(__dirname, '../client/public/images/after/flower-sketch.jpg'),
      6,        // 效果强度
      "graphite"  // 铅笔类型
    );
    
    console.log('所有示例图片已生成完成！');
  } catch (error) {
    console.error('生成示例图片时出错:', error);
  }
}

// 运行生成示例图片的主函数
generateAllExamples();