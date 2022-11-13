import { shaderMaterial } from '@react-three/drei';
import { extend, useFrame, useThree } from '@react-three/fiber';
import { useControls } from 'leva';
import { useRef } from 'react';
import * as THREE from 'three';
import fragmentShader from './shaders/fragment.glsl';
import vertexShader from './shaders/vertex.glsl';

const FREQUENCY = 0.75;
const STRENGTH = 1.5;
const SPEED = 0.03;
const COLOR_BASE = '#4c4c4c';
const COLOR_1 = '#be9e75';
const COLOR_2 = '#c4ba96';
const COLOR_3 = '#578669';
const COLOR_4 = '#2e3b29';

const PlaneShaderMaterial = shaderMaterial(
  {
    uFrequency: FREQUENCY,
    uStrength: STRENGTH,
    uSpeed: SPEED,
    uColorBase: new THREE.Color(COLOR_BASE),
    uColor1: new THREE.Color(COLOR_1),
    uColor2: new THREE.Color(COLOR_2),
    uColor3: new THREE.Color(COLOR_3),
    uColor4: new THREE.Color(COLOR_4),
    uTime: 0,
  },
  vertexShader,
  fragmentShader
);

extend({ PlaneShaderMaterial });

export default function Plane() {
  const ref = useRef<THREE.ShaderMaterial>(null);
  const viewport = useThree(state => state.viewport);
  const { frequency, strength, speed, colorBase, color1, color2, color3, color4 } = useControls('Background', {
    frequency: { value: FREQUENCY, min: 0, max: 5 },
    strength: { value: STRENGTH, min: 0, max: 10 },
    speed: { value: SPEED, min: 0, max: 1 },
    colorBase: COLOR_BASE,
    color1: COLOR_1,
    color2: COLOR_2,
    color3: COLOR_3,
    color4: COLOR_4,
  });

  useFrame(({ clock }) => {
    if (!ref.current) return;

    ref.current.uniforms.uTime = { value: clock.getElapsedTime() };
  });

  return (
    <mesh>
      <planeBufferGeometry args={[viewport.width, viewport.height]} />
      {/* @ts-ignore */}
      <planeShaderMaterial
        side={THREE.DoubleSide}
        ref={ref}
        key={PlaneShaderMaterial.key}
        uFrequency={frequency}
        uStrength={strength}
        uSpeed={speed}
        uColorBase={colorBase}
        uColor1={new THREE.Color(color1)}
        uColor2={new THREE.Color(color2)}
        uColor3={new THREE.Color(color3)}
        uColor4={new THREE.Color(color4)}
      />
    </mesh>
  );
}
