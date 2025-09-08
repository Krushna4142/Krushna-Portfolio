"use client"
import { useEffect } from 'react'

export function NeonEffects() {
  useEffect(() => {
    // Add neon glow styles to the document
    const style = document.createElement('style')
    style.textContent = `
      .neon-glow {
        transition: all 0.3s ease;
      }
      
      .neon-glow:hover {
        filter: drop-shadow(0 0 10px currentColor) drop-shadow(0 0 20px currentColor);
        transform: scale(1.05);
      }
      
      .cursor-glow {
        cursor: none;
      }
      
      .cursor-glow::after {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: all 0.1s ease;
      }
      
      .skill-icon {
        transition: all 0.3s ease;
        filter: brightness(0.8);
        cursor: pointer;
      }
      
      .skill-icon:hover {
        filter: brightness(1.2) drop-shadow(0 0 15px #00ffff) drop-shadow(0 0 30px #00ffff) drop-shadow(0 0 45px #00ffff);
        transform: scale(1.15) rotate(8deg);
        animation: neonPulse 1.5s infinite alternate;
      }
      
      @keyframes neonPulse {
        0% {
          filter: brightness(1.2) drop-shadow(0 0 15px #00ffff) drop-shadow(0 0 30px #00ffff);
        }
        100% {
          filter: brightness(1.4) drop-shadow(0 0 20px #ff00ff) drop-shadow(0 0 40px #ff00ff) drop-shadow(0 0 60px #ff00ff);
        }
      }
      
      .interactive-cursor {
        cursor: none;
      }
      
      .interactive-cursor::after {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 30px;
        height: 30px;
        background: radial-gradient(circle, rgba(0, 255, 255, 0.8) 0%, rgba(255, 0, 255, 0.6) 50%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: all 0.2s ease;
        mix-blend-mode: screen;
      }
      
      .interactive-element:hover ~ .interactive-cursor::after {
        width: 50px;
        height: 50px;
        background: radial-gradient(circle, rgba(255, 0, 255, 0.9) 0%, rgba(0, 255, 255, 0.7) 50%, transparent 70%);
      }
      
      .project-card {
        transition: all 0.3s ease;
        cursor: pointer;
      }
      
      .project-card:hover {
        transform: translateY(-10px) scale(1.02);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(59, 130, 246, 0.3);
      }
      
      .cert-badge {
        transition: all 0.3s ease;
      }
      
      .cert-badge:hover {
        filter: brightness(1.2) drop-shadow(0 0 10px currentColor);
        transform: scale(1.1) rotate(-2deg);
      }
    `
    document.head.appendChild(style)

    // Custom cursor effect
    let mouseX = 0
    let mouseY = 0
    
    const updateCursor = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      
      const cursor = document.querySelector('.cursor-glow::after') as HTMLElement
      if (cursor) {
        cursor.style.left = mouseX + 'px'
        cursor.style.top = mouseY + 'px'
      }
    }

    document.addEventListener('mousemove', updateCursor)

    return () => {
      document.head.removeChild(style)
      document.removeEventListener('mousemove', updateCursor)
    }
  }, [])

  return null
}
