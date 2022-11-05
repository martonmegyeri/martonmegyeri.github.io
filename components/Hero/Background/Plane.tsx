import { useThree } from '@react-three/fiber';
import { useControls } from 'leva';
import * as THREE from 'three';
import FluidShaderMaterial, { fluidDefaults } from '~/components/FluidShaderMaterial';

export default function Plane() {
  const viewport = useThree(state => state.viewport);
  const { frequency, strength, speed, colorBase, color1, color2, color3, color4 } = useControls('Background', {
    ...fluidDefaults,
    frequency: { value: fluidDefaults.frequency, min: 0, max: 5 },
    strength: { value: fluidDefaults.strength, min: 0, max: 2 },
    speed: { value: fluidDefaults.speed, min: 0, max: 1 },
  });

  return (
    <mesh>
      <planeBufferGeometry args={[viewport.width, viewport.height]} />
      <FluidShaderMaterial
        frequency={frequency}
        strength={strength}
        speed={speed}
        colorBase={new THREE.Color(colorBase)}
        color1={new THREE.Color(color1)}
        color2={new THREE.Color(color2)}
        color3={new THREE.Color(color3)}
        color4={new THREE.Color(color4)}
      />
    </mesh>
  );
}
