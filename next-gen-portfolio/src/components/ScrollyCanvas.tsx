"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll();
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const frameCount = 90; // 0 to 89

  useEffect(() => {
    // Preload images
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      const frameNumber = i.toString().padStart(2, "0");
      // Adjust path if needed. Based on the folder list, the images are named frame_00_delay-0.055s.webp
      img.src = `/sequence/frame_${frameNumber}_delay-0.055s.webp`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          // All images loaded, render the first frame
          renderFrame(0, loadedImages);
        }
      };
      // Fallback in case of error
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          renderFrame(0, loadedImages);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const renderFrame = (index: number, imgs: HTMLImageElement[]) => {
    if (imgs[index] && canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (!ctx) return;
      
      const img = imgs[index];
      if (!img.width) return; // skip if error loading
      
      const canvas = canvasRef.current;
      
      // Handle object-fit: cover logic
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    }
  };

  useEffect(() => {
    // Sync canvas size with window
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Re-render current frame on resize
        if (images.length === frameCount) {
          const currentFrame = Math.round(scrollYProgress.get() * (frameCount - 1));
          renderFrame(currentFrame, images);
        }
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, scrollYProgress]);

  // Subscribe to scroll changes
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (images.length === frameCount) {
        const frameIndex = Math.min(
          frameCount - 1,
          Math.max(0, Math.round(latest * (frameCount - 1)))
        );
        renderFrame(frameIndex, images);
      }
    });
    
    return () => unsubscribe();
  }, [images, scrollYProgress]);

  return (
    <div className="h-[500vh] w-full relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
        <canvas ref={canvasRef} className="w-full h-full block" />
        <div className="absolute inset-0 bg-black/30 pointer-events-none" /> {/* Subtle darkening overlay */}
      </div>
    </div>
  );
}
