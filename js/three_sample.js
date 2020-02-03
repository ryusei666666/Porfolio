// ページの読み込みを待つ
window.addEventListener('load', init);

function init() {

  // サイズを指定
  const width = innerWidth;
  const height = innerHeight;

  // レンダラーを作成
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#myCanvas')
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);

  // シーンを作成
  const scene = new THREE.Scene();

  // カメラを作成
  const camera = new THREE.PerspectiveCamera(45, width / height);
  // const controls = new THREE.OrbitControls(camera);
  // controls.autoRotate = true;
  camera.position.set(0, 0, +1000);

  // ライト
  const light = new THREE.PointLight(0xffffff, 0.8, 18);
	light.position.set(-3,6,-3);
	light.castShadow = true;
	light.shadow.camera.near = 0.1;
	light.shadow.camera.far = 25;
	scene.add(light);


  // 箱を作成
  // const geometry = new THREE.BoxGeometry(400, 400, 400);
  // const material = new THREE.MeshNormalMaterial();
  // const box = new THREE.Mesh(geometry, material);
  // box.scale.set(0.1, 0.1, 0.1);
  // scene.add(box);
  
    //   //---load OBJ,MTL files---
    let mtlLoader = new THREE.MTLLoader();
    // mtlLoader.setTexturePath( './models/' );
    // mtlLoader.setPath( './models/' );
    mtlLoader.load( './models/donut/model.obj', function( materials ) {
        materials.preload();

        let objLoader = new THREE.OBJLoader();
        objLoader.setMaterials( materials );
        // objLoader.setPath( './models/' );
        objLoader.load( './models/donut/materials.mtl', function ( loadedMesh ) {

            //---arrange---
            // loadedMesh.rotation.x = -0.3;
            // loadedMesh.rotation.y = 0;
            // loadedMesh.rotation.z = 0;
            // loadedMesh.position.x = 500;
            // loadedMesh.position.y = 250;
            // loadedMesh.position.z = 1000;
          loadedMesh.scale.set(1, 1, 1);
          console.log(loadedMesh);

            scene.add(loadedMesh);
        });
    });


  tick();

  // 毎フレーム時に実行されるループイベントです
  function tick() {
    // box.rotation.y += 0.01;
    // box.rotation.x += 0.01;

    renderer.render(scene, camera); // レンダリング

    requestAnimationFrame(tick);
  }

}


// var scene = new THREE.Scene(); 
// var camera = new THREE.PerspectiveCamera(45, innerWidth/innerHeight, 1, 2000); 
// var render = new THREE.WebGLRenderer(); 
// camera.position.set(0, 0, 53); 

// render.setSize(innerWidth, innerHeight); 
// // document.body.appendChild(canvas = render.domElement); 

// render.setClearColor(0x111111, 1); 

// function loadScene() { 
//  var loader = new THREE.OBJLoader(); 
//  loader.load("./models/Candy_Store.obj", function(model) { 
//   model.traverse(function(child) { 
//    if (child instanceof THREE.Mesh) { 
//     child.material.color = 0xffb830; 
//    } 
//   }); 
//   model.position.set(0, 0, -53); 
//   scene.add(model); 
//   window.model = model; 
//  }); 
//  render.render(scene, camera); 
// } 

// window.onload = loadScene; 