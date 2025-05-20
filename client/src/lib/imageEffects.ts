// 图像处理工具函数库

/**
 * 生成网格效果图像
 * @param imageUrl 原始图像URL
 * @param size 网格大小 (像素)
 * @param color 网格颜色
 * @param opacity 网格不透明度 (0-1)
 * @returns 处理后的图像的DataURL
 */
export async function generateGridEffect(
  imageUrl: string,
  size: number = 50,
  color: string = "#000000",
  opacity: number = 0.5
): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      
      if (!ctx) {
        reject(new Error("无法获取canvas上下文"));
        return;
      }
      
      // 设置画布尺寸与图像相同
      canvas.width = img.width;
      canvas.height = img.height;
      
      // 绘制原始图像
      ctx.drawImage(img, 0, 0, img.width, img.height);
      
      // 绘制网格
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.globalAlpha = opacity;
      
      // 绘制垂直线
      for (let x = 0; x <= img.width; x += size) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, img.height);
        ctx.stroke();
      }
      
      // 绘制水平线
      for (let y = 0; y <= img.height; y += size) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(img.width, y);
        ctx.stroke();
      }
      
      // 重置透明度
      ctx.globalAlpha = 1;
      
      resolve(canvas.toDataURL("image/jpeg", 0.9));
    };
    
    img.onerror = () => {
      reject(new Error("图像加载失败"));
    };
    
    img.src = imageUrl;
  });
}

/**
 * 生成线稿效果
 * @param imageUrl 原始图像URL
 * @param threshold 边缘检测阈值 (1-20)
 * @param lineThickness 线条粗细 (0.5-3)
 * @returns 处理后的图像的DataURL
 */
export async function generateLineArtEffect(
  imageUrl: string,
  threshold: number = 10,
  lineThickness: number = 1
): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      
      if (!ctx) {
        reject(new Error("无法获取canvas上下文"));
        return;
      }
      
      // 设置画布尺寸与图像相同
      canvas.width = img.width;
      canvas.height = img.height;
      
      // 绘制原始图像
      ctx.drawImage(img, 0, 0, img.width, img.height);
      
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
      
      resolve(canvas.toDataURL("image/jpeg", 0.9));
    };
    
    img.onerror = () => {
      reject(new Error("图像加载失败"));
    };
    
    img.src = imageUrl;
  });
}

/**
 * 生成素描效果
 * @param imageUrl 原始图像URL
 * @param intensity 效果强度 (1-10)
 * @param pencilType 铅笔类型 ("graphite" | "charcoal")
 * @returns 处理后的图像的DataURL
 */
export async function generateSketchEffect(
  imageUrl: string,
  intensity: number = 5,
  pencilType: "graphite" | "charcoal" = "graphite"
): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      
      if (!ctx) {
        reject(new Error("无法获取canvas上下文"));
        return;
      }
      
      // 设置画布尺寸与图像相同
      canvas.width = img.width;
      canvas.height = img.height;
      
      // 绘制原始图像
      ctx.drawImage(img, 0, 0, img.width, img.height);
      
      // 获取图像数据
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      
      // 转换为灰度图并调整对比度
      for (let i = 0; i < data.length; i += 4) {
        let gray = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
        
        // 调整对比度
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
      
      // 添加纹理
      ctx.globalCompositeOperation = "multiply";
      ctx.fillStyle = pencilType === "graphite" ? "#f8f8f8" : "#f0f0f0";
      ctx.globalAlpha = 0.2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // 重置混合模式
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 1;
      
      resolve(canvas.toDataURL("image/jpeg", 0.9));
    };
    
    img.onerror = () => {
      reject(new Error("图像加载失败"));
    };
    
    img.src = imageUrl;
  });
}