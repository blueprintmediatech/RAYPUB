uniform float uTime;
uniform vec2 uMouse;
uniform vec2 uResolution;
varying vec2 vUv;

// Simplex noise functions
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                      -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
                           + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
                           dot(x12.zw,x12.zw)), 0.0);
  m = m*m;
  m = m*m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

float fbm(vec2 p) {
  float value = 0.0;
  float amplitude = 0.5;
  float frequency = 1.0;
  for (int i = 0; i < 6; i++) {
    value += amplitude * snoise(p * frequency);
    amplitude *= 0.5;
    frequency *= 2.0;
  }
  return value;
}

void main() {
  vec2 uv = vUv;
  vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);

  // Mouse influence
  vec2 mouse = uMouse * 0.5 + 0.5;
  float mouseDist = length((uv - mouse) * aspect);
  float mouseInfluence = smoothstep(0.5, 0.0, mouseDist) * 0.3;

  // Warped coordinates
  float t = uTime * 0.15;
  vec2 warp = vec2(
    fbm(uv * 3.0 + vec2(t, 0.0) + mouseInfluence),
    fbm(uv * 3.0 + vec2(0.0, t) + mouseInfluence)
  );

  float n1 = fbm(uv * 2.0 + warp * 1.5 + t * 0.5);
  float n2 = fbm(uv * 3.0 - warp + t * 0.3);
  float n3 = fbm(uv * 4.0 + vec2(n1, n2) * 0.8);

  // Gold color palette
  vec3 gold1 = vec3(0.831, 0.659, 0.263);  // #d4a843
  vec3 gold2 = vec3(0.722, 0.573, 0.180);  // #b8922e
  vec3 dark = vec3(0.02, 0.02, 0.02);
  vec3 amber = vec3(0.91, 0.788, 0.416);   // bright gold

  // Mix colors based on noise
  vec3 color = mix(dark, gold2 * 0.3, smoothstep(-0.5, 0.8, n1));
  color = mix(color, gold1 * 0.5, smoothstep(0.0, 1.0, n2) * 0.6);
  color = mix(color, amber * 0.4, smoothstep(0.2, 0.8, n3) * 0.4);

  // Mouse glow
  color += gold1 * mouseInfluence * 2.0;

  // Vignette
  float vig = 1.0 - smoothstep(0.3, 1.2, length((uv - 0.5) * 1.8));
  color *= vig;

  // Subtle pulsing
  color *= 0.8 + 0.2 * sin(uTime * 0.5);

  gl_FragColor = vec4(color, 1.0);
}
