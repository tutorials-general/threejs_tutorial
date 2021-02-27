import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75, // fieldOfView : FOV ,
  window.innerWidth / window.innerHeight,
  // aspect raiot : width/height
  0.1,
  // far and near : object further than far, closer than near would not be rendered
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: '#123' });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 0;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.11;
  if (camera.position.z < 15) {
    camera.position.z += 0.2;
  }
  renderer.render(scene, camera);
}

animate();
