#pragma glslify: noise = require(glsl-noise/simplex/2d)

uniform float uFrequency;
uniform float uStrength;
uniform float uSpeed;
uniform vec3 uColorBase;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform vec3 uColor4;
uniform float uTime;

varying vec2 vUv; // UVs from vertex shader

vec2 rotateUv(vec2 uv, float rotation) {
  float mid = 0.5;
  return vec2(
      cos(rotation) * (uv.x - mid) + sin(rotation) * (uv.y - mid) + mid,
      cos(rotation) * (uv.y - mid) - sin(rotation) * (uv.x - mid) + mid
  );
}

void main() {
  // Roate the UV coordinates of the sphere with the nosie factor
  float noiseFactor = noise(vUv + uTime * uSpeed) * uStrength;
  vec2 position = rotateUv(vUv, noiseFactor);

  // Create gradient
  float strength = noise(position * uFrequency);
  vec3 color = mix(uColorBase, uColor1, smoothstep(0.0, 0.8, strength));
  color = mix(color, uColor2, smoothstep(0.4, 0.8, strength));
  color = mix(color, uColor3, smoothstep(0.6, 1.0, strength));
  color = mix(color, uColor4, smoothstep(0.4, 1.0, noise(position * strength)));
  color = mix(color, uColorBase, smoothstep(0.7, 1.0, 1.0 - vUv.y)); // creates the black fade-out effect at y axis

  gl_FragColor = vec4(color, 1.0);
}