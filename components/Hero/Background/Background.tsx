import { Canvas } from '@react-three/fiber';
import { NoToneMapping } from 'three';
import styles from './Background.module.scss';
import Plane from './Plane';
import Sphere from './Sphere';

export default function Background() {
  return (
    <div className={styles.background}>
      <Canvas camera={{ fov: 45, position: [0, 0, 10] }} gl={{ antialias: true, toneMapping: NoToneMapping }}>
        <ambientLight intensity={1} />
        <Sphere position={[5, 3.5, 0]} />
        <Plane />
      </Canvas>
    </div>
  );
}
