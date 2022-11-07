import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Leva, useControls } from 'leva';
import { NoToneMapping } from 'three';
import styles from './Background.module.scss';
import Plane from './Plane/Plane';
import Sphere from './Sphere/Sphere';

export default function Background() {
  const { cameraControlsEnabled } = useControls({ cameraControlsEnabled: false });

  return (
    <div className={styles.background}>
      <Canvas camera={{ fov: 45, position: [0, 0, 10] }} gl={{ antialias: true, toneMapping: NoToneMapping }}>
        <ambientLight intensity={1} />
        <Sphere position={[5, 3.5, 0]} />
        <Plane />
        <OrbitControls enabled={cameraControlsEnabled} />
      </Canvas>
      <Leva collapsed hidden={false} />
    </div>
  );
}
