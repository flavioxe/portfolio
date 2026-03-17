"use client";

import { useEffect, useRef } from "react";

const fragmentShaderSource = `#version 300 es
precision highp float;
out vec4 O;
uniform float time;
uniform vec2 resolution;
uniform vec3 u_color;

#define FC gl_FragCoord.xy
#define R resolution
#define T (time+660.)

float rnd(vec2 p){p=fract(p*vec2(12.9898,78.233));p+=dot(p,p+34.56);return fract(p.x*p.y);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p),u=f*f*(3.-2.*f);return mix(mix(rnd(i),rnd(i+vec2(1,0)),u.x),mix(rnd(i+vec2(0,1)),rnd(i+1.),u.x),u.y);}
float fbm(vec2 p){float t=.0,a=1.;for(int i=0;i<5;i++){t+=a*noise(p);p*=mat2(1,-1.2,.2,1.2)*2.;a*=.5;}return t;}

void main(){
  vec2 uv=(FC-.5*R)/R.y;
  vec3 col=vec3(1);
  uv.x+=.25;
  uv*=vec2(2,1);

  float n=fbm(uv*.28-vec2(T*.01,0));
  n=noise(uv*3.+n*2.);

  col.r-=fbm(uv+vec2(0,T*.015)+n);
  col.g-=fbm(uv*1.003+vec2(0,T*.015)+n+.003);
  col.b-=fbm(uv*1.006+vec2(0,T*.015)+n+.006);

  col=mix(col, u_color, dot(col,vec3(.21,.71,.07)));
  col=mix(vec3(.08),col,min(time*.1,1.));
  col=clamp(col,.08,1.);
  O=vec4(col,1.);
}`;

class Renderer {
  private readonly vertexSrc = `#version 300 es
precision highp float;
in vec4 position;
void main(){gl_Position=position;}`;

  private readonly vertices = [-1, 1, -1, -1, 1, 1, 1, -1];
  private readonly gl: WebGL2RenderingContext;
  private readonly canvas: HTMLCanvasElement;

  private program: WebGLProgram | null = null;
  private vs: WebGLShader | null = null;
  private fs: WebGLShader | null = null;
  private buffer: WebGLBuffer | null = null;
  private color: [number, number, number] = [0.5, 0.5, 0.5];
  private resolutionLocation: WebGLUniformLocation | null = null;
  private timeLocation: WebGLUniformLocation | null = null;
  private colorLocation: WebGLUniformLocation | null = null;

  constructor(canvas: HTMLCanvasElement, fragmentSource: string) {
    const context = canvas.getContext("webgl2");

    if (!context) {
      throw new Error("WebGL2 is not supported in this browser.");
    }

    this.canvas = canvas;
    this.gl = context;
    this.setup(fragmentSource);
    this.init();
  }

  updateColor(newColor: [number, number, number]) {
    this.color = newColor;
  }

  updateScale() {
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    const bounds = this.canvas.getBoundingClientRect();
    const width = Math.max(1, Math.floor(bounds.width * dpr));
    const height = Math.max(1, Math.floor(bounds.height * dpr));

    if (this.canvas.width !== width || this.canvas.height !== height) {
      this.canvas.width = width;
      this.canvas.height = height;
    }

    this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
  }

  private compile(shader: WebGLShader, source: string) {
    const gl = this.gl;

    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      throw new Error(gl.getShaderInfoLog(shader) || "Shader compilation failed.");
    }
  }

  reset() {
    const { gl, program, vs, fs, buffer } = this;

    if (program && vs) {
      gl.detachShader(program, vs);
      gl.deleteShader(vs);
    }

    if (program && fs) {
      gl.detachShader(program, fs);
      gl.deleteShader(fs);
    }

    if (buffer) {
      gl.deleteBuffer(buffer);
    }

    if (program) {
      gl.deleteProgram(program);
    }

    this.program = null;
    this.vs = null;
    this.fs = null;
    this.buffer = null;
    this.resolutionLocation = null;
    this.timeLocation = null;
    this.colorLocation = null;
  }

  private setup(fragmentSource: string) {
    const gl = this.gl;
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    const program = gl.createProgram();

    if (!vertexShader || !fragmentShader || !program) {
      throw new Error("Unable to initialize WebGL resources.");
    }

    this.vs = vertexShader;
    this.fs = fragmentShader;
    this.program = program;

    this.compile(vertexShader, this.vertexSrc);
    this.compile(fragmentShader, fragmentSource);

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      throw new Error(gl.getProgramInfoLog(program) || "Program linking failed.");
    }
  }

  private init() {
    const { gl, program } = this;

    if (!program) {
      return;
    }

    this.buffer = gl.createBuffer();

    if (!this.buffer) {
      throw new Error("Unable to create WebGL buffer.");
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);

    const position = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    this.resolutionLocation = gl.getUniformLocation(program, "resolution");
    this.timeLocation = gl.getUniformLocation(program, "time");
    this.colorLocation = gl.getUniformLocation(program, "u_color");
  }

  render(now = 0) {
    const { gl, program, buffer, canvas } = this;

    if (!program || !buffer || !gl.isProgram(program)) {
      return;
    }

    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

    if (this.resolutionLocation) {
      gl.uniform2f(this.resolutionLocation, canvas.width, canvas.height);
    }

    if (this.timeLocation) {
      gl.uniform1f(this.timeLocation, now * 1e-3);
    }

    if (this.colorLocation) {
      gl.uniform3fv(this.colorLocation, this.color);
    }

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }
}

const hexToRgb = (hex: string): [number, number, number] | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result
    ? [
        Number.parseInt(result[1], 16) / 255,
        Number.parseInt(result[2], 16) / 255,
        Number.parseInt(result[3], 16) / 255,
      ]
    : null;
};

interface SmokeBackgroundProps {
  smokeColor?: string;
  className?: string;
}

export function SmokeBackground({
  smokeColor = "#808080",
  className = "",
}: SmokeBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rendererRef = useRef<Renderer | null>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    const canvas = canvasRef.current;
    let renderer: Renderer;

    try {
      renderer = new Renderer(canvas, fragmentShaderSource);
      rendererRef.current = renderer;
    } catch (error) {
      console.error(error);
      return;
    }

    const handleResize = () => renderer.updateScale();
    handleResize();
    window.addEventListener("resize", handleResize);

    let animationFrameId = 0;

    const loop = (now: number) => {
      renderer.render(now);
      animationFrameId = window.requestAnimationFrame(loop);
    };

    animationFrameId = window.requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.cancelAnimationFrame(animationFrameId);
      renderer.reset();
      rendererRef.current = null;
    };
  }, []);

  useEffect(() => {
    const renderer = rendererRef.current;

    if (!renderer) {
      return;
    }

    const rgbColor = hexToRgb(smokeColor);

    if (rgbColor) {
      renderer.updateColor(rgbColor);
    }
  }, [smokeColor]);

  return <canvas ref={canvasRef} className={`block h-full w-full ${className}`.trim()} />;
}