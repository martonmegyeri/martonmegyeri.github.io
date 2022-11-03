#pragma glslify: cnoise2 = require(glsl-noise/classic/2d)

uniform float u_strength;
uniform vec3 u_color1;
uniform vec3 u_color2;
uniform float u_time;

varying vec2 vUv; // UVs from vertex shader

void main() {
  float strength = cnoise2(vUv * u_strength);
  vec3 color = mix(u_color1, u_color2, strength);
  color = mix(color, vec3(0.0, 0.0, 0.0), 1.0 - vUv.y); // creates the black fade-out effect at y axis

  gl_FragColor = vec4(color, 1.0);

  // gl_FragColor = vec4(vUv.x, vUv.y, 0.0, 1.0);
}