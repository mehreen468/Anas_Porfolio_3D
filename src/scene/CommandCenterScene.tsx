import { Float, OrbitControls, Points, Stars } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

export function CommandCenterScene() {
  const streamRef = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const temp: number[] = [];
    for (let i = 0; i < 600; i += 1) {
      temp.push((Math.random() - 0.5) * 16);
      temp.push((Math.random() - 0.5) * 8 + 1);
      temp.push((Math.random() - 0.5) * 12);
    }
    return new Float32Array(temp);
  }, []);

  useFrame((state) => {
    if (streamRef.current) {
      streamRef.current.rotation.y += 0.0015;
      streamRef.current.rotation.x = Math.sin(state.clock.elapsedTime / 4) * 0.1;
    }
  });

  return (
    <>
      <ambientLight intensity={0.35} />
      <pointLight position={[5, 3, 6]} intensity={1.6} color="#4fd8ff" />
      <pointLight position={[-4, 2, -5]} intensity={1.2} color="#9f5bff" />
      <Stars radius={55} depth={30} count={700} factor={5} saturation={0.8} fade speed={1} />

      <Float rotationIntensity={0.35} floatIntensity={1.1} speed={1.8}>
        <mesh position={[-2.4, 0.6, -1.3]}>
          <icosahedronGeometry args={[1.1, 3]} />
          <meshStandardMaterial color="#6aeafe" emissive="#2dc7ff" emissiveIntensity={0.9} metalness={0.8} roughness={0.18} />
        </mesh>
      </Float>

      <Float rotationIntensity={0.55} floatIntensity={0.65} speed={1.4}>
        <mesh position={[2.9, -0.6, -0.7]}>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshPhysicalMaterial color="#141e32" roughness={0.12} metalness={0.95} transmission={0.92} thickness={1.2} clearcoat={0.9} clearcoatRoughness={0.05} />
        </mesh>
      </Float>

      <mesh position={[0, -1.9, 0]} rotation={[-Math.PI / 2, 0, 0]}> 
        <planeGeometry args={[22, 22]} />
        <meshStandardMaterial color="#02040f" opacity={0.65} transparent />
      </mesh>

      <points ref={streamRef} frustumCulled={false}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.08} color="#44d8ff" sizeAttenuation />
      </points>

      <Float rotationIntensity={0.25} floatIntensity={1.3} speed={0.9}>
        <mesh position={[1.6, 1.5, -2.6]}>
          <torusGeometry args={[0.9, 0.16, 32, 96]} />
          <meshStandardMaterial color="#8455ff" emissive="#6f86ff" emissiveIntensity={0.8} roughness={0.12} metalness={0.87} />
        </mesh>
      </Float>

      <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.18} />
    </>
  );
}
