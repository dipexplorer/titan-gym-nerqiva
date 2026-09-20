'use client';

import { useRef, useEffect, useState, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { rippleHeroVert } from './shaders/rippleHero.vert.glsl';
import { rippleHeroFrag } from './shaders/rippleHero.frag.glsl';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import HeroFallback from './HeroFallback';

// Generate procedural soft water studio texture for WebGL texture sampler
function createStudioTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;

  const grad = ctx.createRadialGradient(256, 256, 40, 256, 256, 256);
  grad.addColorStop(0, '#FBF8F3');
  grad.addColorStop(0.5, '#D6DECF');
  grad.addColorStop(1, '#E2D9CC');

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 512, 512);

  // Soft organic noise ripples
  ctx.fillStyle = 'rgba(138, 154, 126, 0.12)';
  for (let i = 0; i < 18; i++) {
    ctx.beginPath();
    ctx.arc(
      Math.random() * 512,
      Math.random() * 512,
      30 + Math.random() * 80,
      0,
      Math.PI * 2
    );
    ctx.fill();
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.minFilter = THREE.LinearFilter;
  return tex;
}

interface ShaderMeshProps {
  reduced: boolean;
}

function ShaderMesh({ reduced }: ShaderMeshProps) {
  const { size } = useThree();
  const matRef = useRef<THREE.ShaderMaterial>(null!);
  const rippleIdxRef = useRef(0);

  // 6 simultaneous ripple points uniform array [x, y, startTime]
  const ripplesArray = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 6; i++) {
      arr.push(new THREE.Vector3(0, 0, -1));
    }
    return arr;
  }, []);

  const texture = useMemo(() => {
    if (typeof window === 'undefined') return null;
    return createStudioTexture();
  }, []);

  // Track mouse move for cursor liquid ripples
  useEffect(() => {
    if (reduced) return;

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0]?.clientX ?? 0 : (e as MouseEvent).clientX;
      const clientY = 'touches' in e ? e.touches[0]?.clientY ?? 0 : (e as MouseEvent).clientY;

      const uvX = clientX / window.innerWidth;
      const uvY = 1.0 - clientY / window.innerHeight; // flip Y for GLSL UV space

      const idx = rippleIdxRef.current;
      ripplesArray[idx].set(uvX, uvY, performance.now() / 1000);
      rippleIdxRef.current = (idx + 1) % 6;

      if (matRef.current) {
        matRef.current.uniforms.uRipples.value = ripplesArray;
      }
    };

    window.addEventListener('mousemove', onPointerMove, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('touchmove', onPointerMove);
    };
  }, [reduced, ripplesArray]);

  useFrame(({ clock }) => {
    if (!matRef.current) return;
    const t = clock.getElapsedTime();
    matRef.current.uniforms.uTime.value = t;
    matRef.current.uniforms.uResolution.value.set(size.width, size.height);
    matRef.current.uniforms.uAmbientStrength.value = reduced ? 0.1 : 0.3;
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={rippleHeroVert}
        fragmentShader={rippleHeroFrag}
        uniforms={{
          uRipples: { value: ripplesArray },
          uTime: { value: 0 },
          uResolution: { value: new THREE.Vector2(size.width, size.height) },
          uAmbientStrength: { value: 0.3 },
          uTexture: { value: texture },
        }}
      />
    </mesh>
  );
}

export default function RippleHero() {
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <HeroFallback className="absolute inset-0" />;
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        style={{ width: '100%', height: '100%' }}
        gl={{ antialias: false, alpha: false, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
      >
        <ShaderMesh reduced={reduced} />
      </Canvas>
    </div>
  );
}
