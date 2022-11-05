#pragma glslify: noise = require(glsl-noise/simplex/2d)

uniform float u_frequency;
uniform float u_strength;
uniform float u_speed;
uniform vec3 u_colorBase;
uniform vec3 u_color1;
uniform vec3 u_color2;
uniform vec3 u_color3;
uniform vec3 u_color4;
uniform float u_time;

varying vec2 vUv; // UVs from vertex shader

void main() {
  // Animate the coordinate space
  float dynamicValue = sin(u_time * u_speed) * u_strength;
  vec2 position = vUv + noise(vUv * 2.0) * dynamicValue;

  float strength = noise(position * u_frequency);

  // Create gradient
  vec3 color = mix(u_colorBase, u_color1, smoothstep(0.0, 0.6, strength));
  color = mix(color, u_color2, smoothstep(0.4, 0.8, strength));
  color = mix(color, u_color3, smoothstep(0.6, 1.0, strength));
  color = mix(color, u_color4, smoothstep(0.8, 1.0, noise(position * strength)));

  // Add black fade-out effect to the y axis
  color = mix(u_colorBase, color, smoothstep(0.0, 0.2, vUv.y));

  gl_FragColor = vec4(color, 1.0);
}