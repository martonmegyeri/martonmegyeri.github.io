import { Canvas, ThreeElements, useThree } from '@react-three/fiber';
import styles from './Background.module.scss';

export default function Background() {
  return (
    <div className={styles.background}>
      <Canvas camera={{ fov: 45, position: [0, 0, 10] }}>
        <ambientLight intensity={1} />
        <Sphere position={[6, 3, 0]} />
        <Plane />
      </Canvas>
    </div>
  );
}

function Sphere(props: ThreeElements['mesh']) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry args={[6, 16, 16]} />
      <meshStandardMaterial color="lightcoral" />
    </mesh>
  );
}

function Plane() {
  const { viewport } = useThree();

  return (
    <mesh>
      <planeBufferGeometry args={[viewport.width, viewport.height]} />
      <meshStandardMaterial color="#333" />
    </mesh>
  );
}
