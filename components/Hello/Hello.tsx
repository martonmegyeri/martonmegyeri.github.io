import { MeshDistortMaterial, Text } from '@react-three/drei';
import { Canvas, ThreeElements } from '@react-three/fiber';
import styles from './Hello.module.scss';

const Hello = () => (
  <div className={styles.hello}>
    <Canvas>
      <ambientLight />
      <Font />
    </Canvas>
  </div>
);

const Font = (props: ThreeElements['mesh']) => (
  <Text {...props} characters="ehlo" fontSize={5} letterSpacing={-0.05} color="#000">
    hello
    <MeshDistortMaterial color="black" speed={4} distort={0.3} />
  </Text>
);

export default Hello;
