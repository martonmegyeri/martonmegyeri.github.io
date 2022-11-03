import { shaderMaterial } from '@react-three/drei';
import { Color, extend, Object3DNode, useFrame, useThree } from '@react-three/fiber';
import { useControls } from 'leva';
import { useRef } from 'react';
import * as THREE from 'three';
import { ShaderMaterial } from 'three';
import fragmentShader from './fragment.glsl';
import vertexShader from './vertex.glsl';

type PlaneShaderMaterialType = ShaderMaterial & {
  u_strength: number;
  u_color1: Color;
  u_color2: Color;
  u_time: number;
};

declare module '@react-three/fiber' {
  interface ThreeElements {
    planeShaderMaterial: Object3DNode<PlaneShaderMaterialType, typeof THREE.ShaderMaterial>;
  }
}

const STRENGTH = 2;
const COLOR_1 = '#000';
const COLOR_2 = '#f00';

const PlaneShaderMaterial = shaderMaterial(
  {
    u_strength: STRENGTH,
    u_color1: new THREE.Color(COLOR_1),
    u_color2: new THREE.Color(COLOR_2),
    u_time: 0,
  },
  vertexShader,
  fragmentShader
);

extend({ PlaneShaderMaterial });

export default function Plane() {
  const ref = useRef<PlaneShaderMaterialType>(null);
  const viewport = useThree(state => state.viewport);
  const { strength, color1, color2 } = useControls({
    strength: { value: STRENGTH, min: 0, max: 20 },
    color1: COLOR_1,
    color2: COLOR_2,
  });

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.uniforms.u_time = { value: clock.getElapsedTime() };
  });

  return (
    <mesh>
      <planeBufferGeometry args={[viewport.width, viewport.height]} />
      <planeShaderMaterial
        ref={ref}
        key={PlaneShaderMaterial.key}
        u_strength={strength}
        u_color1={new THREE.Color(color1)}
        u_color2={new THREE.Color(color2)}
      />
    </mesh>
  );
}
