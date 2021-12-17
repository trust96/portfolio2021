import { PerspectiveCamera, Scene, WebGLRenderer } from "three";
const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
const mainElement = document.querySelector("main") as HTMLElement;
mainElement.appendChild(renderer.domElement);

const camera = new PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  500
);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

const scene = new Scene();
