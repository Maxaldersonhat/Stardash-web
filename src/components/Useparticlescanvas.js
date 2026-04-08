import { useEffect, useRef } from 'react';

class Bubble {
  constructor(w, h) {
    this.w = w;
    this.h = h;
    this.reset();
    this.y = Math.random() * h;
  }

  reset() {
    this.x = Math.random() * this.w;
    this.y = this.h + 10;
    this.r = 2 + Math.random() * 4;
    this.vy = -(0.3 + Math.random() * 0.5);
    this.vx = (Math.random() - 0.5) * 0.4;
    this.alpha = 0.15 + Math.random() * 0.2;
    this.color = Math.random() > 0.5 ? '26,107,90' : '45,158,130';
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.y < -10) this.reset();
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.color},${this.alpha})`;
    ctx.fill();
    ctx.strokeStyle = `rgba(${this.color},${this.alpha * 1.5})`;
    ctx.lineWidth = 0.5;
    ctx.stroke();
  }
}

class Sparkle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
    this.reset();
  }

  reset() {
    this.x = Math.random() * this.w;
    this.y = Math.random() * this.h;
    this.size = 1 + Math.random() * 2;
    this.life = 0;
    this.maxLife = 60 + Math.random() * 60;
  }

  update() {
    this.life++;
    if (this.life > this.maxLife) this.reset();
  }

  draw(ctx) {
    const t = this.life / this.maxLife;
    const a = t < 0.5 ? t * 2 : (1 - t) * 2;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(126,255,212,${a * 0.6})`;
    ctx.fill();
  }
}

export function useParticleCanvas(active) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const w = canvas.width;
    const h = canvas.height;

    const particles = [];
    for (let i = 0; i < 18; i++) particles.push(new Bubble(w, h));
    for (let i = 0; i < 12; i++) particles.push(new Sparkle(w, h));

    let animId;
    const loop = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });
      animId = requestAnimationFrame(loop);
    };
    loop();

    return () => cancelAnimationFrame(animId);
  }, [active]);

  return canvasRef;
}