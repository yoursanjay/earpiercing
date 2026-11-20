import React, { useEffect, useRef } from 'react';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  type: 'marigold' | 'jasmine' | 'rose';
  opacity: number;
}

interface PetalShowerProps {
  interactive?: boolean;
}

export const PetalShower: React.FC<PetalShowerProps> = ({ interactive = true }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Initial pool of celebratory flower petals
    const petalCount = window.innerWidth < 768 ? 22 : 45;
    const petals: Petal[] = [];

    const petalTypes: ('marigold' | 'jasmine' | 'rose')[] = ['marigold', 'marigold', 'jasmine', 'rose'];

    for (let i = 0; i < petalCount; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 10 + Math.random() * 12,
        speedX: -1 + Math.random() * 2,
        speedY: 0.8 + Math.random() * 1.6,
        rotation: Math.random() * 360,
        rotationSpeed: -1.5 + Math.random() * 3,
        type: petalTypes[Math.floor(Math.random() * petalTypes.length)],
        opacity: 0.7 + Math.random() * 0.3,
      });
    }

    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.opacity;

      if (p.type === 'marigold') {
        // Marigold (சாமந்தி - Golden orange vibrant petal)
        const grad = ctx.createLinearGradient(-p.size / 2, -p.size / 2, p.size / 2, p.size / 2);
        grad.addColorStop(0, '#FFE066');
        grad.addColorStop(0.5, '#FFA500');
        grad.addColorStop(1, '#D97706');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.moveTo(0, -p.size);
        ctx.bezierCurveTo(p.size * 0.8, -p.size * 0.5, p.size * 0.8, p.size * 0.5, 0, p.size);
        ctx.bezierCurveTo(-p.size * 0.8, p.size * 0.5, -p.size * 0.8, -p.size * 0.5, 0, -p.size);
        ctx.fill();

        // Delicate inner ridge
        ctx.strokeStyle = 'rgba(180, 83, 9, 0.4)';
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(0, -p.size * 0.8);
        ctx.lineTo(0, p.size * 0.8);
        ctx.stroke();

      } else if (p.type === 'jasmine') {
        // Jasmine (மல்லிகை - Fragrant creamy white with gentle golden core)
        const grad = ctx.createRadialGradient(0, 0, 1, 0, 0, p.size);
        grad.addColorStop(0, '#FEF9C3');
        grad.addColorStop(0.4, '#FFFFFF');
        grad.addColorStop(1, '#F3E8FF');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size * 0.45, p.size * 0.85, 0, 0, Math.PI * 2);
        ctx.fill();

        // Subtle soft shadow
        ctx.strokeStyle = 'rgba(212, 175, 55, 0.3)';
        ctx.lineWidth = 0.6;
        ctx.stroke();

      } else {
        // Rose (செவ்வரளி / பன்னீர் ரோஜா - Auspicious Deep Crimson Red petal)
        const grad = ctx.createLinearGradient(0, -p.size, 0, p.size);
        grad.addColorStop(0, '#F43F5E');
        grad.addColorStop(0.6, '#BE123C');
        grad.addColorStop(1, '#881337');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.moveTo(0, -p.size * 0.9);
        ctx.bezierCurveTo(p.size * 0.9, -p.size * 0.6, p.size * 0.9, p.size * 0.6, 0, p.size * 0.9);
        ctx.bezierCurveTo(-p.size * 0.9, p.size * 0.6, -p.size * 0.9, -p.size * 0.6, 0, -p.size * 0.9);
        ctx.fill();
      }

      ctx.restore();
    };

    let wind = 0;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle breeze swaying
      wind += 0.01;
      const breeze = Math.sin(wind) * 0.4;

      petals.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX + breeze;
        p.rotation += p.rotationSpeed;

        // Reset when reaching bottom or edges
        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) {
          p.x = -20;
        } else if (p.x < -20) {
          p.x = width + 20;
        }

        drawPetal(p);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Interactive burst on screen tap or click
    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      if (!interactive) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      // Burst 8 celebration petals around tap location
      for (let i = 0; i < 8; i++) {
        const angle = Math.random() * Math.PI * 2;
        const velocity = 2 + Math.random() * 4;
        petals.push({
          x: clientX,
          y: clientY,
          size: 9 + Math.random() * 10,
          speedX: Math.cos(angle) * velocity,
          speedY: Math.sin(angle) * velocity,
          rotation: Math.random() * 360,
          rotationSpeed: -3 + Math.random() * 6,
          type: petalTypes[Math.floor(Math.random() * petalTypes.length)],
          opacity: 1,
        });
      }

      // Keep max petals under control
      if (petals.length > 70) {
        petals.splice(0, petals.length - 70);
      }
    };

    window.addEventListener('click', handlePointerDown);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('click', handlePointerDown);
    };
  }, [interactive]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30"
      style={{ opacity: 0.92 }}
    />
  );
};
