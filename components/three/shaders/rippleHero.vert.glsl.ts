// Vertex shader — Pass-through UV coordinates for R3F Full-Screen Plane
export const rippleHeroVert = /* glsl */ `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;
