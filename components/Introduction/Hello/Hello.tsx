import { animated, useSpring } from '@react-spring/three';
import { MeshDistortMaterial, Text } from '@react-three/drei';
import { Canvas, ThreeElements } from '@react-three/fiber';
import { useState } from 'react';
import styles from './Hello.module.scss';

const Hello = () => {
  return (
    <div className={styles.hello}>
      <Canvas>
        <ambientLight />
        <Font />
      </Canvas>
    </div>
  );
};

const AnimatedMeshDistortMaterial = animated(MeshDistortMaterial);

const Font = (props: ThreeElements['mesh']) => {
  const [hovered, setHovered] = useState(false);
  const springs = useSpring({ distort: hovered ? 0.5 : 0.3 });

  return (
    <Text
      {...props}
      font="/merriweather.woff"
      characters="ehlo"
      fontSize={5}
      letterSpacing={-0.05}
      color="#000"
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      hello
      {/* @ts-ignore */}
      <AnimatedMeshDistortMaterial color="black" speed={4} {...springs} />
    </Text>
  );
};

export default Hello;
