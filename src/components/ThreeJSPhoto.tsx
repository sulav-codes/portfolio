"use client";

import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  MeshDistortMaterial,
  RoundedBox,
} from "@react-three/drei";
import * as THREE from "three";

interface PhotoDisplayProps {
  imageUrl?: string;
}

// Spinning sphere at bottom
function SpinningSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
      meshRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -2.8, 0]}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        color="#8b5cf6"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.7}
        emissive="#8b5cf6"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

// Floating image card above
function PhotoCard({ imageUrl }: PhotoDisplayProps) {
  const cardRef = useRef<THREE.Mesh>(null);
  const frameRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  const texture = useMemo(() => {
    if (imageUrl) {
      const tex = new THREE.TextureLoader().load(imageUrl);
      tex.colorSpace = THREE.SRGBColorSpace;
      return tex;
    }
    return null;
  }, [imageUrl]);

  useFrame((state) => {
    if (cardRef.current) {
      cardRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
      cardRef.current.rotation.y = hovered
        ? Math.sin(state.clock.elapsedTime * 2) * 0.1
        : 0;
    }
    if (frameRef.current) {
      frameRef.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.05;
    }
  });

  return (
    <group
      ref={cardRef}
      position={[0, 0, 0]}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      {/* Glowing frame */}
      <RoundedBox
        ref={frameRef}
        args={[3.2, 3.2, 0.1]}
        radius={0.12}
        smoothness={4}
        position={[0, 0, -0.1]}
      >
        <meshStandardMaterial
          color="#818cf8"
          emissive="#6366f1"
          emissiveIntensity={hovered ? 0.6 : 0.3}
          metalness={0.8}
          roughness={0.2}
        />
      </RoundedBox>

      {/* Image card */}
      <mesh scale={hovered ? 1.05 : 1}>
        <planeGeometry args={[3, 3]} />
        {texture ? (
          <meshStandardMaterial
            map={texture}
            metalness={0}
            roughness={0.5}
            side={THREE.DoubleSide}
          />
        ) : (
          <meshStandardMaterial
            color="#e0e7ff"
            metalness={0.2}
            roughness={0.4}
          />
        )}
      </mesh>

      {/* Corner sparkles */}
      {hovered &&
        [
          [-1.4, 1.4, 0.1],
          [1.4, 1.4, 0.1],
          [-1.4, -1.4, 0.1],
          [1.4, -1.4, 0.1],
        ].map((pos, i) => (
          <mesh key={i} position={pos as [number, number, number]}>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshStandardMaterial
              color="#fbbf24"
              emissive="#fbbf24"
              emissiveIntensity={1}
            />
          </mesh>
        ))}
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <pointLight position={[-5, 3, -5]} intensity={0.8} color="#818cf8" />
      <spotLight
        position={[0, 5, 0]}
        intensity={1}
        angle={0.3}
        penumbra={1}
        color="#fbbf24"
      />

      <SpinningSphere />
      <PhotoCard imageUrl="/profile.jpeg" />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        rotateSpeed={0.4}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
}

export function ThreeJSPhoto() {
  return (
    <Canvas
      camera={{ position: [0, 0.2, 5], fov: 45 }}
      dpr={[1, 2]}
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        margin: 0,
        padding: 0,
      }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
    >
      <Scene />
    </Canvas>
  );
}
