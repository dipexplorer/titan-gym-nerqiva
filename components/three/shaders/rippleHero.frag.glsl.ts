// Fragment shader — Multi-point liquid water ripple displacement & sage/sand color grading
export const rippleHeroFrag = /* glsl */ `
  precision highp float;

  uniform vec3  uRipples[6];         // xy = ripple UV origin, z = start timestamp
  uniform float uTime;               // elapsed seconds
  uniform vec2  uResolution;         // viewport resolution
  uniform float uAmbientStrength;    // 0.3 for idle, 0.0 for reduced motion
  uniform sampler2D uTexture;        // studio video / background texture

  varying vec2 vUv;

  // Sage, Sand, Clay color grading targets
  const vec3 SAGE_COLOR = vec3(0.541, 0.604, 0.494); // #8A9A7E
  const vec3 SAND_COLOR = vec3(0.949, 0.925, 0.886); // #F2ECE2
  const vec3 CLAY_COLOR = vec3(0.753, 0.522, 0.322); // #C08552
  const vec3 INK_COLOR  = vec3(0.180, 0.173, 0.161); // #2E2C29

  void main() {
    vec2 uv = vUv;
    vec2 totalOffset = vec2(0.0);

    // 1 · Calculate cursor ripples (up to 6 simultaneous ripple points)
    for (int i = 0; i < 6; i++) {
      vec3 ripple = uRipples[i];
      float startTime = ripple.z;

      if (startTime > 0.0) {
        float age = uTime - startTime;

        // Wave decays over ~1.8s
        if (age >= 0.0 && age < 1.8) {
          vec2 dUv = uv - ripple.xy;
          // Correct aspect ratio distortion
          dUv.x *= uResolution.x / max(uResolution.y, 1.0);
          float dist = length(dUv);

          // Real water wave physics: frequency, wave front propagation, exponential decay
          float freq = 32.0;
          float speed = 1.4;
          float waveFront = age * speed;

          // Ring displacement mask around expanding wave front
          float ring = smoothstep(0.08, 0.0, abs(dist - waveFront));
          float decay = exp(-dist * 4.5) * exp(-age * 2.2);

          float amplitude = sin(dist * freq - age * 12.0) * ring * decay * 0.045;
          totalOffset += normalize(dUv + 0.0001) * amplitude;
        }
      }
    }

    // 2 · Ambient idle ripple (calm periodic water breathing, ~30% strength)
    if (uAmbientStrength > 0.0) {
      vec2 ambCenter = vec2(0.5, 0.5);
      vec2 ambDuv = uv - ambCenter;
      ambDuv.x *= uResolution.x / max(uResolution.y, 1.0);
      float ambDist = length(ambDuv);

      float ambWave = sin(ambDist * 14.0 - uTime * 1.5) * exp(-ambDist * 2.5) * 0.008 * uAmbientStrength;
      totalOffset += normalize(ambDuv + 0.0001) * ambWave;
    }

    // 3 · Sample displaced texture
    vec2 displacedUv = clamp(uv + totalOffset, 0.0, 1.0);
    vec4 texColor = texture2D(uTexture, displacedUv);

    // 4 · Color grading — shift raw video/image toward Sage Green and Warm Sand palette
    float luma = dot(texColor.rgb, vec3(0.299, 0.587, 0.114));
    vec3 graded = mix(INK_COLOR, SAND_COLOR, luma);
    graded = mix(graded, SAGE_COLOR, 0.28);
    graded = mix(graded, CLAY_COLOR, sin(uv.y * 3.14159) * 0.08);

    // Vignette
    float vignette = 1.0 - smoothstep(0.4, 0.95, length(uv - 0.5) * 1.3);
    graded *= mix(0.85, 1.0, vignette);

    gl_FragColor = vec4(graded, 1.0);
  }
`;
