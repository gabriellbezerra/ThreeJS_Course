import * as THREE from './three.module.min.js';

function animate() {
    requestAnimationFrame(animate);

    // Atualize a rotação do cubo
    mesh.rotation.y += 0.005;

    // Renderize a cena com a câmera
    renderer.render(scene, camera);
}

function onWindowResize() {
    // Atualiza o tamanho do renderizador
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Atualiza o aspecto da câmera
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}

// Scene:

const scene = new THREE.Scene();

// Mesh:
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshStandardMaterial({color:"white"});
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// Camera:
const aspect = {
    width:window.innerWidth,
    height:window.innerHeight
}
const camera = new THREE.PerspectiveCamera(75, (aspect.width/aspect.height), 1, 2000);
camera.position.z = 3;

scene.add(camera);

// Iluminacao
const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Luz branca
scene.add(directionalLight);
directionalLight.position.copy(camera.position);

// Render:
const canvas = document.querySelector(".draw");
const renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setSize(aspect.width, aspect.height);
//renderer.render(scene, camera);

window.addEventListener('resize', onWindowResize);
animate();

