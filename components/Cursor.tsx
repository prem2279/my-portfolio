'use client';
import { useEffect, useRef } from 'react';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth < 768) return;

    let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;

    const createBubble = (x: number, y: number) => {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      const size = Math.random() * 30 + 10;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${x}px`;
      bubble.style.top = `${y}px`;
      bubble.style.background = `linear-gradient(135deg, rgba(var(--primary-rgb), ${Math.random() * 0.4 + 0.2}), rgba(var(--secondary-rgb), ${Math.random() * 0.4 + 0.2}))`;
      document.body.appendChild(bubble);
      setTimeout(() => bubble.remove(), 1200);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX; mouseY = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
      if (Math.random() > 0.05) createBubble(mouseX, mouseY);
    };

    const animate = () => {
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;
      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%)`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    const animId = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[999999]">
      <div ref={cursorRef} className="fixed w-5 h-5 border-2 border-primary rounded-full z-[999999]" />
      <div ref={followerRef} className="fixed w-10 h-10 border-2 border-primary/30 rounded-full z-[999998]" />
    </div>
  );
}