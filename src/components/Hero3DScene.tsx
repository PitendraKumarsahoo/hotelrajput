import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useIsMobile } from '../lib/appsScript';

export default function Hero3DScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Skip heavy Three.js setup on small mobile devices to ensure fast initial page load (FCP optimization)
    if (isMobile) {
      setIsLoading(false);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let renderer: THREE.WebGLRenderer;

    try {
      // Scene setup
      const scene = new THREE.Scene();

      // Camera setup
      const camera = new THREE.PerspectiveCamera(
        50,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
      );
      camera.position.z = 6;

      // Renderer setup
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      // Create Luxury Hotel Gateway 3D Geometry
      const group = new THREE.Group();

      // Outer Torus Ring 1 (Gold Accent)
      const ringGeometry1 = new THREE.TorusGeometry(2.2, 0.04, 16, 100);
      const ringMaterial1 = new THREE.MeshStandardMaterial({
        color: 0xd97706,
        metalness: 0.9,
        roughness: 0.2,
        emissive: 0x4a2800,
      });
      const ring1 = new THREE.Mesh(ringGeometry1, ringMaterial1);
      group.add(ring1);

      // Inner Torus Ring 2 (Burgundy Wine Accent)
      const ringGeometry2 = new THREE.TorusGeometry(1.6, 0.03, 16, 100);
      const ringMaterial2 = new THREE.MeshStandardMaterial({
        color: 0x8b2613,
        metalness: 0.8,
        roughness: 0.3,
        emissive: 0x330005,
      });
      const ring2 = new THREE.Mesh(ringGeometry2, ringMaterial2);
      ring2.rotation.x = Math.PI / 4;
      group.add(ring2);

      // Center Crystal Octahedron (Pinnacle Luxury)
      const octGeometry = new THREE.OctahedronGeometry(0.8, 0);
      const octMaterial = new THREE.MeshStandardMaterial({
        color: 0xf59e0b,
        metalness: 0.95,
        roughness: 0.1,
        wireframe: false,
      });
      const oct = new THREE.Mesh(octGeometry, octMaterial);
      group.add(oct);

      // Wireframe overlay for 3D depth grid
      const wireGeometry = new THREE.IcosahedronGeometry(2.8, 1);
      const wireMaterial = new THREE.MeshBasicMaterial({
        color: 0xd97706,
        wireframe: true,
        transparent: true,
        opacity: 0.12,
      });
      const wireMesh = new THREE.Mesh(wireGeometry, wireMaterial);
      group.add(wireMesh);

      // Particle Field (Sparkling stars around gateway)
      const particleCount = 120;
      const particlesGeometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 10;
        positions[i + 1] = (Math.random() - 0.5) * 10;
        positions[i + 2] = (Math.random() - 0.5) * 10;
      }

      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const particlesMaterial = new THREE.PointsMaterial({
        color: 0xf3efea,
        size: 0.03,
        transparent: true,
        opacity: 0.6,
      });
      const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
      group.add(particleSystem);

      scene.add(group);

      // Lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
      scene.add(ambientLight);

      const pointLight1 = new THREE.PointLight(0xd97706, 3, 20);
      pointLight1.position.set(3, 3, 4);
      scene.add(pointLight1);

      const pointLight2 = new THREE.PointLight(0x8b2613, 2, 20);
      pointLight2.position.set(-3, -2, 2);
      scene.add(pointLight2);

      setIsLoading(false);

      // Mouse Parallax Interaction
      let mouseX = 0;
      let mouseY = 0;
      const handleMouseMove = (event: MouseEvent) => {
        mouseX = (event.clientX / window.innerWidth - 0.5) * 0.8;
        mouseY = (event.clientY / window.innerHeight - 0.5) * 0.8;
      };

      window.addEventListener('mousemove', handleMouseMove);

      // Handle Window Resize
      const handleResize = () => {
        if (!container) return;
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      };

      window.addEventListener('resize', handleResize);

      // Animation Loop
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        // Constant smooth 3D rotation
        group.rotation.y += 0.006;
        ring2.rotation.y += 0.008;
        ring2.rotation.z += 0.004;
        oct.rotation.x += 0.01;
        oct.rotation.y += 0.01;
        wireMesh.rotation.y -= 0.002;

        // Smooth Mouse Parallax Ease
        group.rotation.x += (mouseY * 0.5 - group.rotation.x) * 0.05;
        group.rotation.y += (mouseX * 0.5 - group.rotation.y) * 0.05;

        renderer.render(scene, camera);
      };

      animate();

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
        if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
          renderer.dispose();
        }
      };
    } catch (e) {
      console.warn("WebGL initialization skipped:", e);
      setIsLoading(false);
    }
  }, [isMobile]);

  if (isMobile) {
    // Mobile CSS 3D fallback - elegant, static/CSS animated vector emblem
    return (
      <div className="relative w-full h-[280px] sm:h-[340px] flex items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-[#1A0A10] to-[#0D0B0D] border border-[#D97706]/30 shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.15)_0%,transparent_70%)]" />
        <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-[#D97706] p-2 flex items-center justify-center shadow-[0_0_30px_rgba(217,119,6,0.3)] animate-pulse">
            <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#8B2613] to-[#D97706] flex items-center justify-center text-white font-serif text-3xl font-bold shadow-inner">
              R
            </div>
          </div>
          <span className="mt-4 text-xs font-semibold uppercase tracking-widest text-[#D97706]">3D Gateway View</span>
          <p className="text-sm text-[#E2D9CE] mt-1">Rajput Highway Gateway Daspalla</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[360px] md:h-[460px] lg:h-[520px]">
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-[#0D0B0D]/80 backdrop-blur-md rounded-3xl border border-[#D97706]/20">
          <div className="w-12 h-12 border-4 border-[#D97706]/30 border-t-[#D97706] rounded-full animate-spin" />
          <span className="mt-3 text-xs uppercase tracking-widest text-[#D97706]">Initializing 3D Gateway...</span>
        </div>
      )}
      <div ref={containerRef} className="w-full h-full rounded-3xl overflow-hidden cursor-grab active:cursor-grabbing" />
    </div>
  );
}
