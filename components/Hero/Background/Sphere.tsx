import { ThreeElements, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export default function Sphere({ position, ...props }: ThreeElements['mesh']) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ mouse }) => {
    if (!meshRef.current || !position) return;

    const [initialPosX, initialPosY] = position as [number, number, number];
    const x = initialPosX - mouse.x;
    const y = initialPosY - mouse.y / 2;
    const endPosition = new THREE.Vector3(x, y, 0);

    meshRef.current.position.lerp(endPosition, 0.05);
  });

  return (
    <mesh ref={meshRef} {...props}>
      <sphereBufferGeometry args={[6, 32, 32]} />
      <meshStandardMaterial color="red" wireframe />
    </mesh>
  );
}
