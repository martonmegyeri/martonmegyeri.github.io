import { CubeCamera, shaderMaterial } from '@react-three/drei';
import { extend, ThreeElements, useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import { useRef } from 'react';
import * as THREE from 'three';
import fragmentShader from './shaders/fragment.glsl';
import vertexShader from './shaders/vertex.glsl';

/**
 * Shader source:
 * https://github.com/ebrahma/threejs_div_testing/blob/b5aa918fba0da04e5b78ee6168450945b5630b71/js/three-lib/shaders/FresnelShader.js
 */

const REFRACTION_RATIO = 0.4;
const FRESNEL_BIAS = 0.05;
const FRESNEL_SCALE = 0.2;
const FRESNEL_POWER = 2.5;

const SphereShaderMaterial = shaderMaterial(
  {
    uCube: 0,
    uRefractionRatio: REFRACTION_RATIO,
    uFresnelBias: FRESNEL_BIAS,
    uFresnelScale: FRESNEL_SCALE,
    uFresnelPower: FRESNEL_POWER,
  },
  vertexShader,
  fragmentShader
);

extend({ SphereShaderMaterial });

export default function Sphere({ position, ...props }: ThreeElements['mesh']) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { refractionRatio, fresnelBias, fresnelScale, fresnelPower } = useControls('Sphere', {
    refractionRatio: { value: REFRACTION_RATIO, min: 0, max: 5 },
    fresnelBias: { value: FRESNEL_BIAS, min: 0, max: 5 },
    fresnelScale: { value: FRESNEL_SCALE, min: 0, max: 5 },
    fresnelPower: { value: FRESNEL_POWER, min: 0, max: 5 },
  });

  useFrame(({ mouse }) => {
    if (!meshRef.current || !position) return;

    const [initialPosX, initialPosY] = position as [number, number, number];
    const x = initialPosX - mouse.x;
    const y = initialPosY - mouse.y / 2;
    const endPosition = new THREE.Vector3(x, y, 0);

    meshRef.current.position.lerp(endPosition, 0.05);
  });

  return (
    <CubeCamera near={0.1} far={20} resolution={100}>
      {/* @ts-ignore */}
      {texture => (
        <mesh ref={meshRef} {...props}>
          <sphereBufferGeometry args={[6, 32, 32]} />
          {/* @ts-ignore */}
          <sphereShaderMaterial
            key={SphereShaderMaterial.key}
            uCube={texture}
            uRefractionRatio={refractionRatio}
            uFresnelBias={fresnelBias}
            uFresnelScale={fresnelScale}
            uFresnelPower={fresnelPower}
          />
          {/* <meshStandardMaterial color="red" wireframe /> */}
        </mesh>
      )}
    </CubeCamera>
  );
}
