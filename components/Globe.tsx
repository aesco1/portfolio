'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Text } from '@react-three/drei';
import * as THREE from 'three';

interface Skill {
  name: string;
  category: string;
}

const skills: Skill[] = [
  { name: 'Python', category: 'Languages' },
  { name: 'Java', category: 'Languages' },
  { name: 'JavaScript', category: 'Languages' },
  { name: 'TypeScript', category: 'Languages' },
  { name: 'PHP', category: 'Languages' },
  { name: 'SQL', category: 'Languages' },
  { name: 'React', category: 'Frameworks' },
  { name: 'Next.js', category: 'Frameworks' },
  { name: 'Flask', category: 'Frameworks' },
  { name: 'WordPress', category: 'Frameworks' },
  { name: 'Git', category: 'Tools' },
  { name: 'MySQL', category: 'Tools' },
  { name: 'Apache', category: 'Tools' },
  { name: 'VS Code', category: 'Tools' },
];

function SkillOrbit({ skill, radius, angle, speed }: { skill: Skill; radius: number; angle: number; speed: number }) {
  const ref = useRef<THREE.Group>(null);
  const textRef = useRef<any>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime() * speed + angle;
      ref.current.position.x = Math.cos(t) * radius;
      ref.current.position.y = Math.sin(t * 0.5) * 0.5;
      ref.current.position.z = Math.sin(t) * radius;
    }
    if (textRef.current) {
      textRef.current.quaternion.copy((ref.current as any)?.quaternion);
    }
  });

  return (
    <group ref={ref}>
      <Text
        ref={textRef}
        fontSize={0.15}
        color="#8b5cf6"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.01}
        outlineColor="#000000"
      >
        {skill.name}
      </Text>
    </group>
  );
}

function GlobeScene() {
  const globeRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.001;
    }
  });

  const skillOrbits = useMemo(() => {
    return skills.map((skill, index) => {
      const radius = 2 + Math.random() * 0.5;
      const angle = (index / skills.length) * Math.PI * 2;
      const speed = 0.1 + Math.random() * 0.05;
      return (
        <SkillOrbit
          key={skill.name}
          skill={skill}
          radius={radius}
          angle={angle}
          speed={speed}
        />
      );
    });
  }, []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />

      {/* Main Globe */}
      <Sphere ref={globeRef} args={[1.5, 64, 64]}>
        <meshStandardMaterial
          color="#1a1a1a"
          wireframe
          transparent
          opacity={0.3}
        />
      </Sphere>

      {/* Inner glow */}
      <Sphere args={[1.4, 32, 32]}>
        <meshBasicMaterial
          color="#8b5cf6"
          transparent
          opacity={0.1}
        />
      </Sphere>

      {/* Skill orbits */}
      {skillOrbits}

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
}

export default function Globe() {
  return (
    <div className="w-full h-[600px] relative">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <p className="text-gray-400 text-sm mb-4 absolute top-4">
          Drag to explore skills universe
        </p>
      </div>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{
          antialias: true,
          alpha: true,
          preserveDrawingBuffer: false,
          powerPreference: "high-performance"
        }}
        onCreated={({ gl }) => {
          gl.setClearColor('#0a0a0a', 0);
        }}
      >
        <GlobeScene />
      </Canvas>
    </div>
  );
}
