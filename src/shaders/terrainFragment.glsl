uniform float uTime;
uniform float uScrollProgress;

varying vec2 vUv;
varying float vElevation;
varying float vDistortion;

void main() {
  // Gold color palette based on elevation
  vec3 deepGold = vec3(0.45, 0.33, 0.08);
  vec3 gold = vec3(0.831, 0.659, 0.263);
  vec3 brightGold = vec3(0.91, 0.788, 0.416);
  vec3 white = vec3(1.0, 0.95, 0.85);

  // Map elevation to color
  float e = vElevation * 2.0 + 0.5;
  vec3 color = mix(deepGold, gold, smoothstep(0.0, 0.5, e));
  color = mix(color, brightGold, smoothstep(0.5, 0.8, e));
  color = mix(color, white, smoothstep(0.8, 1.0, e));

  // Wireframe-like grid lines
  vec2 grid = abs(fract(vUv * 40.0 - 0.5) - 0.5) / fwidth(vUv * 40.0);
  float line = min(grid.x, grid.y);
  float gridAlpha = 1.0 - min(line, 1.0);

  // Mix grid with surface
  color = mix(color * 0.15, color, gridAlpha * 0.5 + 0.5);

  // Edge glow based on distortion
  float glow = abs(vDistortion) * 1.5;
  color += gold * glow * 0.3;

  // Fresnel-like edge highlight
  float fresnel = pow(1.0 - abs(dot(vec3(0.0, 0.0, 1.0), normalize(vec3(vUv - 0.5, 1.0)))), 3.0);
  color += brightGold * fresnel * 0.2;

  // Fade edges
  float fade = smoothstep(0.0, 0.15, vUv.x) * smoothstep(1.0, 0.85, vUv.x) *
               smoothstep(0.0, 0.15, vUv.y) * smoothstep(1.0, 0.85, vUv.y);

  float alpha = fade * (0.6 + gridAlpha * 0.4);

  gl_FragColor = vec4(color, alpha);
}
