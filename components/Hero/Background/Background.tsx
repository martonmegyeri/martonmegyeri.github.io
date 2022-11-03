import { Canvas, ThreeElements, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import styles from './Background.module.scss';
import Plane from './Plane/Plane';

export default function Background() {
  return (
    <div className={styles.background}>
      <Canvas camera={{ fov: 45, position: [0, 0, 10] }}>
        <ambientLight intensity={1} />
        <Sphere position={[5, 3.5, 0]} />
        <Plane />
      </Canvas>
    </div>
  );
}

function Sphere({ position, ...props }: ThreeElements['mesh']) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ mouse }) => {
    if (!meshRef.current || !position) return;

    const [initialPosX, initialPosY] = position as [number, number, number];
    const x = initialPosX - mouse.x;
    const y = initialPosY - mouse.y / 2;

    const newPosition = new THREE.Vector3(x, y, 0);
    meshRef.current.position.lerp(newPosition, 0.05);
  });

  return (
    <mesh ref={meshRef} {...props}>
      <sphereBufferGeometry args={[6, 32, 32]} />
      <meshStandardMaterial color="lightcoral" wireframe />
    </mesh>
  );
}
