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
  opacity: number = 0.5,
  style: string = "lines",
  thickness: number = 1
): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      
      if (!ctx) {
        reject(new Error("Unable to get canvas context"));
        return;
      }
      
      // Set canvas size to match the image
      canvas.width = img.width;
      canvas.height = img.height;
      
      // Draw the original image
      ctx.drawImage(img, 0, 0, img.width, img.height);
      
      // Set global grid properties
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.lineWidth = thickness; // 使用传入的线条粗细参数
      ctx.globalAlpha = opacity;
      
      // Draw grid based on selected style
      if (style === "dots") {
        // Draw dots at grid intersections
        const dotSize = 2;
        for (let x = 0; x <= img.width; x += size) {
          for (let y = 0; y <= img.height; y += size) {
            ctx.beginPath();
            ctx.arc(x, y, dotSize, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      } else if (style === "dashed") {
        // Draw dashed lines
        ctx.setLineDash([5, 5]); // 5px dash, 5px gap
        
        // Draw vertical dashed lines
        for (let x = 0; x <= img.width; x += size) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, img.height);
          ctx.stroke();
        }
        
        // Draw horizontal dashed lines
        for (let y = 0; y <= img.height; y += size) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(img.width, y);
          ctx.stroke();
        }
        
        // Reset line dash
        ctx.setLineDash([]);
      } else {
        // Default: solid lines
        // Draw vertical lines
        for (let x = 0; x <= img.width; x += size) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, img.height);
          ctx.stroke();
        }
        
        // Draw horizontal lines
        for (let y = 0; y <= img.height; y += size) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(img.width, y);
          ctx.stroke();
        }
      }
      
      // Reset opacity
      ctx.globalAlpha = 1;
      
      resolve(canvas.toDataURL("image/jpeg", 0.9));
    };
    
    img.onerror = () => {
      reject(new Error("Failed to load image"));
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
  lineThickness: number = 1,
  style: string = "normal"
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
      
      // 设置线条粗细
      ctx.lineWidth = lineThickness;
      
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
      
      // 应用不同的线稿样式
      let sobelData = new Uint8ClampedArray(data.length);
      let edgeMultiplier = 5; // 默认边缘检测倍数
      let lineMultiplier = 1; // 线条粗细调整
      let contrastLevel = 1; // 对比度调整
      let invertOutput = true; // 是否反转输出（黑底白线或白底黑线）
      
      // 根据样式调整处理参数
      if (style === "detailed") {
        // 详细模式 - 较低阈值，显示更多细节
        edgeMultiplier = 3;
        contrastLevel = 1.2;
      } else if (style === "minimal") {
        // 极简模式 - 较高阈值，只显示主要轮廓
        edgeMultiplier = 8;
        lineMultiplier = 0.8;
      } else if (style === "pen") {
        // 钢笔和墨水风格 - 锐利的边缘，高对比度
        edgeMultiplier = 6;
        contrastLevel = 1.5;
        lineMultiplier = 0.7;
      } else if (style === "technical") {
        // 技术绘图风格 - 精确的线条，中等阈值
        edgeMultiplier = 4;
        lineMultiplier = 0.8;
        contrastLevel = 1.4;
      } else if (style === "comic") {
        // 漫画艺术风格 - 粗线条，高对比度
        edgeMultiplier = 7;
        lineMultiplier = 1.5;
        contrastLevel = 1.8;
      }
      
      // 进行Sobel边缘检测
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
          
          // 应用样式特定的阈值处理
          let edgeValue = 255;
          
          if (style === "detailed") {
            // 详细模式 - 较低阈值，渐变边缘
            edgeValue = gradientMag > threshold * edgeMultiplier 
              ? Math.max(255 - gradientMag/2, 0) 
              : 255;
          } else if (style === "minimal") {
            // 极简模式 - 较高阈值，清晰边缘
            edgeValue = gradientMag > threshold * edgeMultiplier ? 0 : 255;
          } else {
            // 普通模式
            edgeValue = gradientMag > threshold * edgeMultiplier ? 0 : 255;
          }
          
          sobelData[idx] = edgeValue;
          sobelData[idx + 1] = edgeValue;
          sobelData[idx + 2] = edgeValue;
          sobelData[idx + 3] = 255;
        }
      }
      
      // 将处理后的数据放回画布
      const processedImageData = new ImageData(sobelData, canvas.width, canvas.height);
      ctx.putImageData(processedImageData, 0, 0);
      
      // 样式特定的后处理
      if (style !== "minimal") {
        // 调整对比度
        ctx.globalCompositeOperation = "difference";
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // 反转颜色
        ctx.globalCompositeOperation = "difference";
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      
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
  pencilType: string = "graphite",
  shadingLevel: number = 50,
  sketchStyle: string = "classic"
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
      
      // 获取样式参数
      let contrastFactor = 1.0;
      let toneFactor = 1.0;
      let grainAmount = 0.0;
      let textureStyle = "smooth";
      let inverted = false;
      
      // 针对不同的素描风格应用特定的处理参数
      switch (sketchStyle) {
        case "classic":
          // 经典素描 - 平衡的对比度和纹理
          contrastFactor = 1.0;
          grainAmount = 0.05;
          break;
        case "pencil":
          // 铅笔绘图 - 更精细的线条，更少的阴影
          contrastFactor = 0.9;
          toneFactor = 0.8;
          grainAmount = 0.03;
          break;
        case "charcoal":
          // 木炭效果 - 高对比度，粗糙纹理
          contrastFactor = 1.3;
          toneFactor = 1.2;
          grainAmount = 0.1;
          textureStyle = "rough";
          break;
        case "conte":
          // 康铉蜡笔 - 温暖的色调，中等纹理
          contrastFactor = 1.2;
          toneFactor = 1.1;
          grainAmount = 0.08;
          textureStyle = "medium";
          break;
        case "pastel":
          // 软蜡笔 - 柔和的边缘，低对比度
          contrastFactor = 0.7;
          toneFactor = 0.9;
          grainAmount = 0.12;
          textureStyle = "soft";
          break;
        case "crosshatch":
          // 交叉阴影 - 高对比度，特殊纹理
          contrastFactor = 1.4;
          toneFactor = 1.0;
          grainAmount = 0.06;
          textureStyle = "hatched";
          inverted = true;
          break;
        default:
          // 默认为经典素描
          break;
      }
      
      // 针对不同的铅笔类型应用额外的调整
      let pencilContrast = 1.0;
      let pencilWarmth = 0.0;
      let pencilDarkness = 1.0;
      
      switch (pencilType) {
        case "graphite_soft":
          // 软石墨铅笔 (6B) - 更暗，更柔和的线条
          pencilContrast = 0.9;
          pencilDarkness = 1.2;
          break;
        case "graphite_hard":
          // 硬石墨铅笔 (2H) - 更亮，更锐利的线条
          pencilContrast = 1.1;
          pencilDarkness = 0.8;
          break;
        case "charcoal_soft":
          // 软木炭 - 非常暗，非常柔和
          pencilContrast = 0.8;
          pencilWarmth = 0.2;
          pencilDarkness = 1.3;
          break;
        case "charcoal":
          // 木炭 - 暗，温暖的色调
          pencilContrast = 1.0;
          pencilWarmth = 0.15;
          pencilDarkness = 1.2;
          break;
      }
      
      // 转换为灰度图并应用样式特定的处理
      for (let i = 0; i < data.length; i += 4) {
        let gray = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
        
        // 根据需要反转
        if (!inverted) {
          gray = 255 - gray;
        }
        
        // 应用对比度、色调和强度调整
        gray = gray * contrastFactor;
        gray = Math.min(Math.max(gray, 0), 255);
        
        // 应用阴影级别 - 较高的值会保留更多的阴影细节
        const shadowFactor = shadingLevel / 50; // 转换到大约1.0范围
        gray = Math.pow(gray / 255, intensity / (5 * shadowFactor) * toneFactor) * 255;
        gray = gray * pencilDarkness;
        gray = Math.min(Math.max(gray, 0), 255);
        
        // 添加粒状纹理（基于坐标的随机值）
        const pixelIndex = i / 4;
        const x = pixelIndex % canvas.width;
        const y = Math.floor(pixelIndex / canvas.width);
        
        // 简单的伪随机数生成
        let noise = 0;
        if (grainAmount > 0) {
          // 生成一个伪随机噪点
          const randomValue = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
          noise = (randomValue - Math.floor(randomValue)) * grainAmount * 50;
          
          // 为交叉阴影样式生成特殊的纹理
          if (textureStyle === "hatched") {
            // 交叉阴影模式根据亮度值和坐标决定是否应用线条
            const hatchSpacing = 8 - Math.floor(gray / 255 * 6); // 根据亮度调整线条密度
            if ((x % hatchSpacing < 1 || y % hatchSpacing < 1) ||
                ((x + y) % hatchSpacing < 1 && gray < 150)) {
              noise = -30;
            } else {
              noise = 30;
            }
          }
        }
        
        // 应用噪点
        gray = Math.min(Math.max(gray + noise, 0), 255);
        
        // 应用铅笔色调
        const warmth = pencilWarmth;
        if (warmth > 0) {
          // 将暖色调添加到颜色通道中
          data[i] = gray;  // 红色保持不变
          data[i + 1] = gray * (1 - warmth * 0.3); // 绿色略减
          data[i + 2] = gray * (1 - warmth * 0.5); // 蓝色减少更多
        } else {
          // 中性灰色
          data[i] = gray;
          data[i + 1] = gray;
          data[i + 2] = gray; 
        }
      }
      
      // 将处理后的数据放回画布
      ctx.putImageData(imageData, 0, 0);
      
      // 添加背景纹理 - 基于素描样式和铅笔类型调整
      ctx.globalCompositeOperation = "multiply";
      
      // 根据素描样式选择合适的纹理颜色和强度
      let textureColor = "#f8f8f8"; // 默认纸张颜色
      let textureAlpha = 0.15 + (shadingLevel / 100 * 0.15); // 基础纹理强度
      
      switch (sketchStyle) {
        case "charcoal":
        case "crosshatch":
          // 木炭和交叉阴影使用略带灰色的纸张
          textureColor = "#f2f2f2";
          textureAlpha = 0.25 + (shadingLevel / 100 * 0.2);
          break;
        case "conte":
          // 康铉蜡笔使用带米色的纸张
          textureColor = "#f7f4e9";
          textureAlpha = 0.25 + (shadingLevel / 100 * 0.15);
          break;
        case "pastel":
          // 软蜡笔使用深色纹理纸
          textureColor = "#f0f0e8";
          textureAlpha = 0.3 + (shadingLevel / 100 * 0.2);
          break;
      }
      
      // 根据铅笔类型进一步调整
      if (pencilType.includes("charcoal")) {
        // 木炭类型需要更明显的纸张纹理
        textureAlpha += 0.1;
        textureColor = "#f5f2f0"; // 略带暖调的纸张颜色
      } else if (pencilType.includes("graphite_hard")) {
        // 硬铅笔使用更亮的纸张
        textureColor = "#fafafa";
        textureAlpha -= 0.05;
      }
      
      // 应用纸张纹理
      ctx.fillStyle = textureColor;
      ctx.globalAlpha = textureAlpha;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // 对于某些风格，添加额外的纹理层
      if (sketchStyle === "crosshatch" || sketchStyle === "conte" || sketchStyle === "pastel") {
        // 添加第二层纹理，模拟纸张粗糙度
        ctx.globalAlpha = 0.05;
        
        // 使用噪点模式
        for (let x = 0; x < canvas.width; x += 4) {
          for (let y = 0; y < canvas.height; y += 4) {
            if (Math.random() > 0.7) {
              ctx.fillStyle = textureColor;
              ctx.fillRect(x, y, 2, 2);
            }
          }
        }
      }
      
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 1;
      
      resolve(canvas.toDataURL("image/jpeg", 0.9));
    };
    
    img.onerror = () => {
      reject(new Error("Failed to load image"));
    };
    
    img.src = imageUrl;
  });
}

export async function generateColoringPageEffect(
  imageUrl: string,
  lineThickness: number = 2,
  detailLevel: number = 50,
  style: string = "classic"
): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) { reject(new Error("Unable to get canvas context")); return; }
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      const w = canvas.width, h = canvas.height;
      for (let i = 0; i < data.length; i += 4) {
        const gray = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
        data[i] = gray; data[i + 1] = gray; data[i + 2] = gray;
      }
      let edgeThreshold = 4 + (100 - detailLevel) / 10;
      if (style === "detailed") edgeThreshold = 2;
      else if (style === "simple") edgeThreshold = 8;
      else if (style === "bold") edgeThreshold = 5;
      else if (style === "kids") edgeThreshold = 10;
      const sobelData = new Uint8ClampedArray(data.length);
      for (let y = 1; y < h - 1; y++) {
        for (let x = 1; x < w - 1; x++) {
          const idx = (y * w + x) * 4;
          const gx = -data[idx-4-w*4] - 2*data[idx-w*4] - data[idx+4-w*4] + data[idx-4+w*4] + 2*data[idx+w*4] + data[idx+4+w*4];
          const gy = -data[idx-4-w*4] - 2*data[idx-4] - data[idx-4+w*4] + data[idx+4-w*4] + 2*data[idx+4] + data[idx+4+w*4];
          const mag = Math.sqrt(gx * gx + gy * gy);
          const edge = mag > edgeThreshold * 5 ? 0 : 255;
          sobelData[idx] = edge; sobelData[idx+1] = edge; sobelData[idx+2] = edge; sobelData[idx+3] = 255;
        }
      }
      for (let x = 0; x < w; x++) {
        const t = x * 4; sobelData[t]=255; sobelData[t+1]=255; sobelData[t+2]=255; sobelData[t+3]=255;
        const b = ((h-1)*w+x)*4; sobelData[b]=255; sobelData[b+1]=255; sobelData[b+2]=255; sobelData[b+3]=255;
      }
      for (let y = 0; y < h; y++) {
        const l = (y*w)*4; sobelData[l]=255; sobelData[l+1]=255; sobelData[l+2]=255; sobelData[l+3]=255;
        const r = (y*w+w-1)*4; sobelData[r]=255; sobelData[r+1]=255; sobelData[r+2]=255; sobelData[r+3]=255;
      }
      ctx.putImageData(new ImageData(sobelData, w, h), 0, 0);
      if (lineThickness > 1) {
        const tc = document.createElement("canvas"); tc.width=w; tc.height=h;
        const tctx = tc.getContext("2d")!; tctx.drawImage(canvas, 0, 0);
        ctx.fillStyle = "white"; ctx.fillRect(0, 0, w, h);
        for (let dx = -(lineThickness-1); dx <= lineThickness-1; dx++) {
          for (let dy = -(lineThickness-1); dy <= lineThickness-1; dy++) {
            if (dx*dx+dy*dy <= (lineThickness-1)*(lineThickness-1)) {
              ctx.globalCompositeOperation = "multiply"; ctx.drawImage(tc, dx, dy);
            }
          }
        }
        ctx.globalCompositeOperation = "source-over";
      }
      resolve(canvas.toDataURL("image/jpeg", 0.95));
    };
    img.onerror = () => reject(new Error("Failed to load image"));
    img.src = imageUrl;
  });
}

export async function generatePaintByNumbersEffect(
  imageUrl: string,
  numColors: number = 12,
  cellSize: number = 20,
  showNumbers: boolean = true,
  showOutlines: boolean = true
): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) { reject(new Error("Unable to get canvas context")); return; }
      canvas.width = img.width; canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      const w = canvas.width, h = canvas.height;
      const sampleStep = Math.max(1, Math.floor(w * h / 10000));
      const samples: [number,number,number][] = [];
      for (let i = 0; i < data.length; i += 4 * sampleStep) samples.push([data[i], data[i+1], data[i+2]]);
      const kMeans: [number,number,number][] = [];
      for (let i = 0; i < numColors; i++) { const idx = Math.floor(i * samples.length / numColors); kMeans.push([...samples[idx]]); }
      for (let iter = 0; iter < 8; iter++) {
        const clusters: [number,number,number][][] = Array.from({length: numColors}, () => []);
        for (const s of samples) {
          let minD = Infinity, best = 0;
          for (let c = 0; c < numColors; c++) { const d = (s[0]-kMeans[c][0])**2+(s[1]-kMeans[c][1])**2+(s[2]-kMeans[c][2])**2; if (d < minD) { minD=d; best=c; } }
          clusters[best].push(s);
        }
        for (let c = 0; c < numColors; c++) {
          if (clusters[c].length > 0) {
            let sr=0,sg=0,sb=0; for (const p of clusters[c]) { sr+=p[0]; sg+=p[1]; sb+=p[2]; }
            kMeans[c] = [Math.round(sr/clusters[c].length), Math.round(sg/clusters[c].length), Math.round(sb/clusters[c].length)];
          }
        }
      }
      const colorMap = new Uint8Array(w * h);
      for (let i = 0; i < data.length; i += 4) {
        let minD = Infinity, best = 0;
        for (let c = 0; c < numColors; c++) { const d = (data[i]-kMeans[c][0])**2+(data[i+1]-kMeans[c][1])**2+(data[i+2]-kMeans[c][2])**2; if (d < minD) { minD=d; best=c; } }
        colorMap[i/4] = best; data[i]=kMeans[best][0]; data[i+1]=kMeans[best][1]; data[i+2]=kMeans[best][2];
      }
      ctx.putImageData(imageData, 0, 0);
      if (showOutlines) {
        for (let y = 1; y < h; y++) for (let x = 1; x < w; x++) {
          const idx = y*w+x;
          if (colorMap[idx] !== colorMap[idx-1] || colorMap[idx] !== colorMap[idx-w]) { ctx.fillStyle="#333"; ctx.fillRect(x,y,1,1); }
        }
      }
      if (showNumbers) {
        const fs = Math.max(8, Math.min(cellSize/2, 14));
        ctx.font = `bold ${fs}px Arial`; ctx.textAlign="center"; ctx.textBaseline="middle";
        for (let cy = Math.floor(cellSize/2); cy < h; cy += cellSize) {
          for (let cx = Math.floor(cellSize/2); cx < w; cx += cellSize) {
            const idx = Math.min(cy,h-1)*w+Math.min(cx,w-1);
            const ci = colorMap[idx]+1; const bg = kMeans[colorMap[idx]];
            const br = 0.299*bg[0]+0.587*bg[1]+0.114*bg[2];
            ctx.fillStyle = br > 128 ? "#333" : "#fff"; ctx.strokeStyle = br > 128 ? "#fff" : "#333"; ctx.lineWidth = 2;
            ctx.strokeText(String(ci), cx, cy); ctx.fillText(String(ci), cx, cy);
          }
        }
      }
      resolve(canvas.toDataURL("image/jpeg", 0.9));
    };
    img.onerror = () => reject(new Error("Failed to load image"));
    img.src = imageUrl;
  });
}

function medianCutQuantize(pixels: [number,number,number][], targetColors: number): [number,number,number][] {
  if (pixels.length === 0) return [[0,0,0]];
  type Box = { pixels: [number,number,number][] };
  const boxes: Box[] = [{ pixels: [...pixels] }];
  const getRange = (box: Box, ch: number) => {
    let min = 255, max = 0;
    for (const p of box.pixels) { if (p[ch] < min) min = p[ch]; if (p[ch] > max) max = p[ch]; }
    return max - min;
  };
  while (boxes.length < targetColors) {
    let bestIdx = 0, bestRange = -1;
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i].pixels.length < 2) continue;
      for (let ch = 0; ch < 3; ch++) {
        const range = getRange(boxes[i], ch);
        if (range > bestRange) { bestRange = range; bestIdx = i; }
      }
    }
    if (bestRange <= 0) break;
    const box = boxes[bestIdx];
    let splitCh = 0, maxR = 0;
    for (let ch = 0; ch < 3; ch++) { const r = getRange(box, ch); if (r > maxR) { maxR = r; splitCh = ch; } }
    box.pixels.sort((a, b) => a[splitCh] - b[splitCh]);
    const mid = Math.floor(box.pixels.length / 2);
    boxes.splice(bestIdx, 1, { pixels: box.pixels.slice(0, mid) }, { pixels: box.pixels.slice(mid) });
  }
  return boxes.map(box => {
    let r = 0, g = 0, b = 0;
    for (const p of box.pixels) { r += p[0]; g += p[1]; b += p[2]; }
    const n = box.pixels.length;
    return [Math.round(r/n), Math.round(g/n), Math.round(b/n)] as [number,number,number];
  });
}

export async function generatePixelArtEffect(
  imageUrl: string, pixelSize: number = 10, colorCount: number = 16, style: string = "classic"
): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) { reject(new Error("Unable to get canvas context")); return; }
      canvas.width = img.width; canvas.height = img.height;
      const smallW = Math.max(1, Math.floor(img.width / pixelSize));
      const smallH = Math.max(1, Math.floor(img.height / pixelSize));
      const sc = document.createElement("canvas"); sc.width=smallW; sc.height=smallH;
      const sctx = sc.getContext("2d")!; sctx.imageSmoothingEnabled=true; sctx.drawImage(img, 0, 0, smallW, smallH);
      const sd = sctx.getImageData(0, 0, smallW, smallH);
      const sdd = sd.data;
      if (colorCount < 256) {
        const sampleStep = Math.max(1, Math.floor(smallW * smallH / 5000));
        const samples: [number,number,number][] = [];
        for (let i = 0; i < sdd.length; i += 4 * sampleStep) samples.push([sdd[i], sdd[i+1], sdd[i+2]]);
        const palette = medianCutQuantize(samples, colorCount);
        for (let i = 0; i < sdd.length; i += 4) {
          let minD = Infinity, best = 0;
          for (let c = 0; c < palette.length; c++) {
            const d = (sdd[i]-palette[c][0])**2 + (sdd[i+1]-palette[c][1])**2 + (sdd[i+2]-palette[c][2])**2;
            if (d < minD) { minD = d; best = c; }
          }
          sdd[i] = palette[best][0]; sdd[i+1] = palette[best][1]; sdd[i+2] = palette[best][2];
        }
        sctx.putImageData(sd, 0, 0);
      }
      ctx.imageSmoothingEnabled = false;
      if (style === "rounded") {
        ctx.fillStyle="#f5f5f5"; ctx.fillRect(0,0,canvas.width,canvas.height);
        for (let y=0;y<smallH;y++) for (let x=0;x<smallW;x++) {
          const idx=(y*smallW+x)*4; ctx.fillStyle=`rgb(${sdd[idx]},${sdd[idx+1]},${sdd[idx+2]})`;
          ctx.beginPath(); ctx.roundRect(x*pixelSize+1,y*pixelSize+1,pixelSize-2,pixelSize-2,pixelSize*0.3); ctx.fill();
        }
      } else if (style === "outline") {
        for (let y=0;y<smallH;y++) for (let x=0;x<smallW;x++) {
          const idx=(y*smallW+x)*4; ctx.fillStyle=`rgb(${sdd[idx]},${sdd[idx+1]},${sdd[idx+2]})`;
          ctx.fillRect(x*pixelSize,y*pixelSize,pixelSize,pixelSize);
          ctx.strokeStyle="rgba(0,0,0,0.15)"; ctx.lineWidth=0.5; ctx.strokeRect(x*pixelSize,y*pixelSize,pixelSize,pixelSize);
        }
      } else if (style === "isometric") {
        ctx.fillStyle="#e8e8e8"; ctx.fillRect(0,0,canvas.width,canvas.height);
        for (let y=0;y<smallH;y++) for (let x=0;x<smallW;x++) {
          const idx=(y*smallW+x)*4; const r=sdd[idx],g=sdd[idx+1],b=sdd[idx+2];
          const br=(r+g+b)/3; const bH=Math.max(1,Math.floor(br/255*pixelSize*0.5));
          ctx.fillStyle=`rgb(${Math.floor(r*0.7)},${Math.floor(g*0.7)},${Math.floor(b*0.7)})`; ctx.fillRect(x*pixelSize,y*pixelSize+pixelSize-bH,pixelSize,bH);
          ctx.fillStyle=`rgb(${r},${g},${b})`; ctx.fillRect(x*pixelSize,y*pixelSize,pixelSize,pixelSize-bH);
        }
      } else {
        ctx.drawImage(sc, 0, 0, canvas.width, canvas.height);
      }
      resolve(canvas.toDataURL("image/png"));
    };
    img.onerror = () => reject(new Error("Failed to load image"));
    img.src = imageUrl;
  });
}

function fastBoxBlur(data: Uint8ClampedArray, w: number, h: number, radius: number): Uint8ClampedArray {
  const out = new Uint8ClampedArray(data.length);
  const tmp = new Uint8ClampedArray(data.length);
  const d = radius * 2 + 1;
  for (let y = 0; y < h; y++) {
    let ri = 0, gi = 0, bi = 0;
    for (let x = -radius; x <= radius; x++) {
      const cx = Math.min(w - 1, Math.max(0, x));
      const idx = (y * w + cx) * 4;
      ri += data[idx]; gi += data[idx + 1]; bi += data[idx + 2];
    }
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      tmp[idx] = ri / d; tmp[idx + 1] = gi / d; tmp[idx + 2] = bi / d; tmp[idx + 3] = 255;
      const addX = Math.min(w - 1, x + radius + 1);
      const remX = Math.max(0, x - radius);
      const addIdx = (y * w + addX) * 4;
      const remIdx = (y * w + remX) * 4;
      ri += data[addIdx] - data[remIdx];
      gi += data[addIdx + 1] - data[remIdx + 1];
      bi += data[addIdx + 2] - data[remIdx + 2];
    }
  }
  for (let x = 0; x < w; x++) {
    let ri = 0, gi = 0, bi = 0;
    for (let y = -radius; y <= radius; y++) {
      const cy = Math.min(h - 1, Math.max(0, y));
      const idx = (cy * w + x) * 4;
      ri += tmp[idx]; gi += tmp[idx + 1]; bi += tmp[idx + 2];
    }
    for (let y = 0; y < h; y++) {
      const idx = (y * w + x) * 4;
      out[idx] = ri / d; out[idx + 1] = gi / d; out[idx + 2] = bi / d; out[idx + 3] = 255;
      const addY = Math.min(h - 1, y + radius + 1);
      const remY = Math.max(0, y - radius);
      const addIdx = (addY * w + x) * 4;
      const remIdx = (remY * w + x) * 4;
      ri += tmp[addIdx] - tmp[remIdx];
      gi += tmp[addIdx + 1] - tmp[remIdx + 1];
      bi += tmp[addIdx + 2] - tmp[remIdx + 2];
    }
  }
  return out;
}

export async function generateWatercolorEffect(
  imageUrl: string, intensity: number = 50, wetness: number = 50, style: string = "classic"
): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) { reject(new Error("Unable to get canvas context")); return; }
      canvas.width = img.width; canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);
      const w = canvas.width, h = canvas.height;
      const imageData = ctx.getImageData(0, 0, w, h);
      const data = imageData.data;
      const blurR = Math.max(1, Math.floor(wetness / 10));
      let blurred = fastBoxBlur(data, w, h, blurR);
      if (blurR > 2) blurred = fastBoxBlur(blurred, w, h, Math.max(1, Math.floor(blurR / 2)));
      const satBoost = 1 + intensity / 100;
      for (let i = 0; i < blurred.length; i += 4) {
        let r=blurred[i],g=blurred[i+1],b=blurred[i+2];
        const gray = 0.299*r+0.587*g+0.114*b;
        r=gray+(r-gray)*satBoost; g=gray+(g-gray)*satBoost; b=gray+(b-gray)*satBoost;
        r=Math.min(255,r*1.05+10); g=Math.min(255,g*1.05+10); b=Math.min(255,b*1.05+10);
        const pi=i/4, px=pi%w, py=Math.floor(pi/w);
        const ns=Math.sin(px*12.9898+py*78.233)*43758.5453;
        const n=(ns-Math.floor(ns))*10-5;
        blurred[i]=Math.min(255,Math.max(0,r+n)); blurred[i+1]=Math.min(255,Math.max(0,g+n)); blurred[i+2]=Math.min(255,Math.max(0,b+n));
      }
      ctx.putImageData(new ImageData(blurred as unknown as Uint8ClampedArray<ArrayBuffer>, w, h), 0, 0);
      if (style==="classic"||style==="wet") { ctx.globalCompositeOperation="screen"; ctx.globalAlpha=0.08+wetness/500; ctx.fillStyle="#faf8f0"; ctx.fillRect(0,0,w,h); }
      if (style==="oil") { ctx.globalCompositeOperation="multiply"; ctx.globalAlpha=0.05; ctx.fillStyle="#f0e8d8"; ctx.fillRect(0,0,w,h); }
      if (style==="impressionist") {
        ctx.globalCompositeOperation="overlay"; ctx.globalAlpha=0.03;
        for (let i=0;i<200;i++) { ctx.beginPath(); ctx.arc(Math.random()*w,Math.random()*h,Math.random()*20+5,0,Math.PI*2); ctx.fillStyle="rgba(255,255,255,0.03)"; ctx.fill(); }
      }
      ctx.globalCompositeOperation="screen"; ctx.globalAlpha=0.15;
      const grad=ctx.createRadialGradient(w/2,h/2,0,w/2,h/2,Math.max(w,h)*0.7);
      grad.addColorStop(0,"rgba(255,255,255,0.3)"); grad.addColorStop(1,"rgba(255,255,255,0)");
      ctx.fillStyle=grad; ctx.fillRect(0,0,w,h);
      ctx.globalCompositeOperation="source-over"; ctx.globalAlpha=1;
      resolve(canvas.toDataURL("image/jpeg", 0.9));
    };
    img.onerror = () => reject(new Error("Failed to load image"));
    img.src = imageUrl;
  });
}