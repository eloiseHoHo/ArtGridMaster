"use client";

export function GridCollageThumbnail() {
  return (
    <div className="w-full h-full grid grid-cols-2 gap-1 bg-gray-100 p-1">
      {[
        "photo-1506905925346-21bda4d32df4",
        "photo-1518173946687-a4c8892bbd9f",
        "photo-1477959858617-67f85cf4f1df",
        "photo-1470770841072-f978cf4d019e",
      ].map((id, i) => (
        <img
          key={i}
          src={`https://images.unsplash.com/${id}?w=200&h=200&fit=crop&auto=format`}
          alt=""
          className="w-full h-full object-cover rounded-sm"
        />
      ))}
    </div>
  );
}

export function GridSplitterThumbnail() {
  // background-image approach avoids the absolute-positioning height issue
  const src = "https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?w=600&h=600&fit=crop&auto=format";
  const tiles = Array.from({ length: 9 });
  return (
    <div className="w-full h-full grid gap-1 bg-white p-1" style={{ gridTemplateColumns: "repeat(3,1fr)", gridTemplateRows: "repeat(3,1fr)" }}>
      {tiles.map((_, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        return (
          <div
            key={i}
            className="rounded-sm overflow-hidden relative"
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: "300% 300%",
              backgroundPosition: `${col * 50}% ${row * 50}%`,
            }}
          >
            <span className="absolute bottom-0.5 right-0.5 text-white text-[7px] font-bold bg-black/40 rounded px-0.5 leading-tight">
              {i + 1}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export function GridOverlayThumbnail() {
  return (
    <div className="relative w-full h-full">
      <img
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&auto=format"
        alt=""
        className="w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "25% 25%",
        }}
      />
    </div>
  );
}

export function LineArtThumbnail() {
  // Botanical/flower subject — high contrast gives clean outlines, clearly "line art"
  return (
    <img
      src="https://images.unsplash.com/photo-1490750967868-88df5691cc96?w=400&h=300&fit=crop&auto=format"
      alt=""
      className="w-full h-full object-cover"
      style={{ filter: "grayscale(100%) contrast(400%) brightness(180%)" }}
    />
  );
}

export function SketchThumbnail() {
  // Portrait with soft pencil-like gray tones — clearly different from line art
  return (
    <img
      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&auto=format"
      alt=""
      className="w-full h-full object-cover"
      style={{ filter: "grayscale(100%) contrast(105%) brightness(112%) sepia(10%)" }}
    />
  );
}

export function ColoringPageThumbnail() {
  // Simple cat face — moderate contrast gives clean outlines without going pure black
  return (
    <img
      src="https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=300&fit=crop&auto=format"
      alt=""
      className="w-full h-full object-cover"
      style={{ filter: "grayscale(100%) contrast(350%) brightness(165%)" }}
    />
  );
}

export function PaintByNumbersThumbnail() {
  // Colorful parrot — vibrant colors suit the paint-by-numbers concept
  return (
    <img
      src="https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400&h=300&fit=crop&auto=format"
      alt=""
      className="w-full h-full object-cover"
      style={{ filter: "saturate(150%) contrast(120%) brightness(105%)" }}
    />
  );
}

export function PixelArtThumbnail() {
  // Parrot resized to 18×14 then scaled up with pixelated rendering
  return (
    <img
      src="https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=18&h=14&fit=crop&auto=format"
      alt=""
      className="w-full h-full"
      style={{ imageRendering: "pixelated", objectFit: "cover" }}
    />
  );
}

export function WatercolorThumbnail() {
  // Soft flower photo with blur + saturation = watercolor feel
  return (
    <img
      src="https://images.unsplash.com/photo-1490750967868-88df5691cc96?w=400&h=300&fit=crop&auto=format"
      alt=""
      className="w-full h-full object-cover"
      style={{ filter: "saturate(220%) blur(3px) brightness(110%) contrast(90%)" }}
    />
  );
}
