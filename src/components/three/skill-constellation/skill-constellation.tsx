'use client';

import { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import * as THREE from 'three';
import type { Skill } from '@/types';

interface SkillConstellationProps {
  skills: Skill[];
}

function SkillNode({
  skill,
  position,
  onHover,
}: {
  skill: Skill;
  position: [number, number, number];
  onHover: (skill: Skill | null) => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  const color = useMemo(() => new THREE.Color(skill.color || '#6366f1'), [skill.color]);

  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += 0.005;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={position}>
        <mesh
          ref={meshRef}
          onPointerOver={() => onHover(skill)}
          onPointerOut={() => onHover(null)}
        >
          <icosahedronGeometry args={[0.3, 0]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.3}
            roughness={0.2}
            metalness={0.8}
            wireframe
          />
        </mesh>

        <Text
          position={[0, 0.5, 0]}
          fontSize={0.15}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {skill.name}
        </Text>
      </group>
    </Float>
  );
}

function ConstellationCore() {
  return (
    <mesh>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial
        color="#6366f1"
        emissive="#6366f1"
        emissiveIntensity={0.5}
        roughness={0.1}
        metalness={0.9}
        wireframe
      />
    </mesh>
  );
}

export function SkillConstellation({ skills }: SkillConstellationProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [, setHoveredSkill] = useState<Skill | null>(null);

  const positions = useMemo(() => {
    const count = Math.min(skills.length, 12);
    return Array.from({ length: count }, (_, i) => {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      return [
        2.5 * Math.cos(theta) * Math.sin(phi),
        2.5 * Math.sin(theta) * Math.sin(phi),
        2.5 * Math.cos(phi),
      ] as [number, number, number];
    });
  }, [skills.length]);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
  });

  return (
    <group ref={groupRef}>
      <ConstellationCore />

      {positions.map((pos, i) => {
        const skill = skills[i];
        if (!skill) return null;
        return (
          <SkillNode
            key={skill.id || i}
            skill={skill}
            position={pos}
            onHover={setHoveredSkill}
          />
        );
      })}
    </group>
  );
}