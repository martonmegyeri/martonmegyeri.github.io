declare module '*.glsl';

declare module 'glslify' {
  function glsl(x: TemplateStringsArray): string;
  export = glsl;
}
