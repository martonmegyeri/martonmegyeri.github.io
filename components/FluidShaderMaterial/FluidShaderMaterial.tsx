import { shaderMaterial } from '@react-three/drei';
import { extend, Object3DNode, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Color, ShaderMaterial as ThreeShaderMaterial } from 'three';
import fluidDefaults from './config';
import fragmentShader from './shaders/fragment.glsl';
import vertexShader from './shaders/vertex.glsl';

type ShaderMaterialType = ThreeShaderMaterial & {
  u_frequency: number;
  u_strength: number;
  u_speed: number;
  u_colorBase: Color;
  u_color1: Color;
  u_color2: Color;
  u_color3: Color;
  u_color4: Color;
  u_time: number;
};

declare module '@react-three/fiber' {
  interface ThreeElements {
    fluidShaderMaterial: Object3DNode<ShaderMaterialType, typeof ShaderMaterial>;
  }
}

const ShaderMaterial = shaderMaterial(
  {
    u_frequency: fluidDefaults.frequency,
    u_strength: fluidDefaults.strength,
    u_speed: fluidDefaults.speed,
    u_colorBase: new Color(fluidDefaults.colorBase),
    u_color1: new Color(fluidDefaults.color1),
    u_color2: new Color(fluidDefaults.color2),
    u_color3: new Color(fluidDefaults.color3),
    u_color4: new Color(fluidDefaults.color4),
    u_time: 0,
  },
  vertexShader,
  fragmentShader
);

extend({ FluidShaderMaterial: ShaderMaterial });

type Props = {
  frequency: number;
  strength: number;
  speed: number;
  colorBase: Color;
  color1: Color;
  color2: Color;
  color3: Color;
  color4: Color;
};

export default function FluidShaderMaterial(props: Props) {
  const ref = useRef<ShaderMaterialType>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;

    ref.current.uniforms.u_time = { value: clock.getElapsedTime() };
  });

  return (
    <fluidShaderMaterial
      ref={ref}
      key={ShaderMaterial.key}
      u_frequency={props.frequency}
      u_strength={props.strength}
      u_speed={props.speed}
      u_colorBase={props.colorBase}
      u_color1={props.color1}
      u_color2={props.color2}
      u_color3={props.color3}
      u_color4={props.color4}
    />
  );
}
