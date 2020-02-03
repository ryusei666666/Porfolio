// window.addEventListener('DOMContentLoaded', init);
window.addEventListener('load', init);

function init() {
    // レンダラーを作成
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#canvas')
    });
    renderer.setClearColor( 0xbff3f5, 1);//second param is opacity=> transparent
    // ウィンドウサイズ設定
    // width = document.getElementById('main_canvas').getBoundingClientRect().width;
    // height = document.getElementById('main_canvas').getBoundingClientRect().height;
    width = window.innerWidth;
    height = window.innerHeight-10;
    renderer.setPixelRatio(2);
    renderer.setSize(width, height);
    console.log(window.devicePixelRatio);
    console.log(width+", "+height);
 
    // シーンを作成
    const scene = new THREE.Scene();
 
    // カメラを作成
    camera = new THREE.PerspectiveCamera(60, width / height, 1, 6000);
    camera.position.set(0, 0, -1000);
    
    const controls = new THREE.OrbitControls(camera);
    controls.enableZoom = false;//スクロールオフ
    // camera.lookAt(new THREE.Vector3(0, 400, 0));//orbiccontrolを使わないとき用
    // controls.enableDamping = true;
    // controls.dampingFactor = 0.6;

    // Load GLTF or GLB
    const loader = new THREE.GLTFLoader();

    // 3Ddata
    const urlPoltfolio = './models/poltfolioText/portfolio_Text.glb';// 3Dtext
    const urlDonut = './models/donuttt/model.gltf';// ドーナツ
    const urlCandy = './models/candy/peppermint candy.gltf';// キャンディ
    const urlCathle = './models/cathle/model.gltf';// お城
    const urlIceCream = './models/icecream/model.gltf';//  アイス
    const urlKibble = './models/kibble/model.gltf';// シリアル的な
    const urlPafe = './models/pafe/model.gltf';// パフェ
    const urlhouse = './models/house/model.gltf';// 家
    const melon = './models/groupC1.glb';// メロンキャラ
    const urlcloud = './models/cloud/cloud.gltf';// 雲



    let model = null;
    const Pai = Math.PI;

    loader.load(
        urlPoltfolio, 
        function ( gltf ){
            model = gltf.scene;
            model.name = "donut";
            model.scale.set(600.0, 600.0, 500.0);
            model.position.set(-100, 200, 1500);
            model.rotation.y = Pai;
            scene.add( gltf.scene );

            model["test"] = 100;
            // console.log("model");
        },
        function ( error ) {
            console.log( 'An error happened' );
            console.log( error );
        }
    );

    // ーーーーー Donutーーーーー
    loader.load(
        urlDonut, 
        function ( gltf ){
            model = gltf.scene;
            model.name = "donut";
            model.scale.set(800.0, 800.0, 800.0);
            model.position.set(400, -1700, 700);
            model.rotation.x = -35 * Pai / 180;
            scene.add( gltf.scene );

            model["test"] = 100;
            // console.log("model");
        },
        function ( error ) {
            console.log( 'An error happened' );
            console.log( error );
        }
    );
    loader.load(
        urlDonut, 
        function ( gltf ){
            model = gltf.scene;
            model.name = "donut";
            model.scale.set(800.0, 800.0, 800.0);
            model.position.set(3000, -1900, 700);
            // model.color = new THREE.Color(0xff00cc);
            scene.add( gltf.scene );

            model["test"] = 100;
            // console.log("model");
        },
        function ( error ) {
            console.log( 'An error happened' );
            console.log( error );
        }
    );


    //ーーーーー Candy　ーーーーーー
    loader.load(
        urlCandy, 
        function ( gltf ){
            model = gltf.scene;
            model.name = "candy";
            model.scale.set(300.0, 300.0, 300.0);
            model.position.set(300,-1000,600);
            scene.add( gltf.scene );

            model["test"] = 100;
            // console.log("model");
        },
        function ( error ) {
            console.log( 'An error happened' );
            console.log( error );
        }
    );
    for (let index = 0; index < 20; index++) {
        let A = Math.floor(Math.random() * 8000) - 4000;
        let B = Math.floor(Math.random() * 8000)- 4000;
        let setSize = Math.floor(Math.random() * 100) + 30;
        loader.load(
            urlCandy, 
            function ( gltf ){
                model = gltf.scene;
                model.name = "candy";
                model.scale.set(setSize, setSize, setSize);
                model.position.set(A,-1100,B);
                scene.add( gltf.scene );
    
                model["test"] = 100;
                // console.log("model");
            },
            function ( error ) {
                console.log( 'An error happened' );
                console.log( error );
            }
        );    
    }

    loader.load(
        urlCathle, 
        function ( gltf ){
            model = gltf.scene;
            model.name = "cathle";
            model.scale.set(700.0, 700.0, 700.0);
            model.position.set(-1800, -1100, 2000);
            model.rotation.y = 30 * Pai / 180;
            scene.add( gltf.scene );

            model["test"] = 100;
            // console.log("model");
        },
        function ( error ) {
            console.log( 'An error happened' );
            console.log( error );
        }
    );


    // loader.load(
    //     urlIceCream, 
    //     function ( gltf ){
    //         model = gltf.scene;
    //         model.name = "icecream";
    //         model.scale.set(3000.0, 3000.0, 3000.0);
    //         model.position.set(300,-1000,-1000);
    //         scene.add( gltf.scene );

    //         model["test"] = 100;
    //         // console.log("model");
    //     },
    //     function ( error ) {
    //         console.log( 'An error happened' );
    //         console.log( error );
    //     }
    // );

    loader.load(
        urlKibble, 
        function ( gltf ){
            model = gltf.scene;
            model.name = "kibble";
            model.scale.set(2000.0,2000.0,2000.0);
            model.position.set(1000, -4000, 2000);
            scene.add(gltf.scene);
            

            model["test"] = 100;
            // console.log("model");
        },
        function ( error ) {
            console.log( 'An error happened' );
            console.log( error );
        }
    );

    // ーーーーーー pafe ーーーーーー
    loader.load(
        urlPafe, 
        function ( gltf ){
            model = gltf.scene;
            model.name = "pafe";
            model.scale.set(700.0, 400.0, 700.0);
            model.position.set(0, -700, 0);
            scene.add( gltf.scene );

            model["test"] = 100;
            // console.log("model");
        },
        function ( error ) {
            console.log( 'An error happened' );
            console.log( error );
        }
    );
    loader.load(
        urlPafe, 
        function ( gltf ){
            model = gltf.scene;
            model.name = "pafe";
            model.scale.set(700.0, 400.0, 700.0);
            model.position.set(-2000, -700, 1000);
            scene.add( gltf.scene );

            model["test"] = 100;
            // console.log("model");
        },
        function ( error ) {
            console.log( 'An error happened' );
            console.log( error );
        }
    );
    loader.load(
        urlPafe, 
        function ( gltf ){
            model = gltf.scene;
            model.name = "pafe";
            model.scale.set(700.0, 400.0, 700.0);
            model.position.set(-1800, -700, -400);
            scene.add( gltf.scene );

            model["test"] = 100;
            // console.log("model");
        },
        function ( error ) {
            console.log( 'An error happened' );
            console.log( error );
        }
    );
    loader.load(
        urlPafe, 
        function ( gltf ){
            model = gltf.scene;
            model.name = "pafe";
            model.scale.set(700.0, 700.0, 700.0);
            model.position.set(-1200, -400, -700);
            scene.add( gltf.scene );

            model["test"] = 100;
            // console.log("model");
        },
        function ( error ) {
            console.log( 'An error happened' );
            console.log( error );
        }
    );
    loader.load(
        urlPafe, 
        function ( gltf ){
            model = gltf.scene;
            model.name = "pafe";
            model.scale.set(700.0, 700.0, 700.0);
            model.position.set(2000, -400, 1000);
            scene.add( gltf.scene );

            model["test"] = 100;
            // console.log("model");
        },
        function ( error ) {
            console.log( 'An error happened' );
            console.log( error );
        }
    );
    loader.load(
        urlPafe, 
        function ( gltf ){
            model = gltf.scene;
            model.name = "pafe";
            model.scale.set(2000.0, 2000.0, 2000.0);
            model.position.set(3000, 800, 3000);
            scene.add( gltf.scene );

            model["test"] = 100;
            // console.log("model");
        },
        function ( error ) {
            console.log( 'An error happened' );
            console.log( error );
        }
    );
    loader.load(
        urlPafe, 
        function ( gltf ){
            model = gltf.scene;
            model.name = "pafe";
            model.scale.set(2000.0, 2000.0, 2000.0);
            model.position.set(-2700, 800, 3000);
            scene.add( gltf.scene );

            model["test"] = 100;
            // console.log("model");
        },
        function ( error ) {
            console.log( 'An error happened' );
            console.log( error );
        }
    );
    loader.load(
        urlPafe, 
        function ( gltf ){
            model = gltf.scene;
            model.name = "pafe";
            model.scale.set(2000.0, 2000.0, 2000.0);
            model.position.set(-3000, 800, -3000);
            scene.add( gltf.scene );

            model["test"] = 100;
            // console.log("model");
        },
        function ( error ) {
            console.log( 'An error happened' );
            console.log( error );
        }
    );



    //ーーーーーhouseーーーーー
    loader.load(
        urlhouse, 
        function ( gltf ){
            model = gltf.scene;
            model.name = "house";
            model.scale.set(800.0, 800.0, 800.0);
            model.position.set(200, -1500, -3500);
            model.rotation.y = 150 * Pai / 180;
            scene.add( gltf.scene );

            model["test"] = 100;
            // console.log("model");
        },
        function ( error ) {
            console.log( 'An error happened' );
            console.log( error );
        }
    );
    for (let index = 0; index < 5.; index++) {
        let posX = Math.floor(Math.random() * 6000) -3000;
        let posy = Math.floor(Math.random() * 6000) -3000;
        let angleHouse = Math.floor(Math.random() * 360);

        loader.load(
            urlhouse, 
            function ( gltf ){
                model = gltf.scene;
                model.name = "house";
                model.scale.set(200.0, 200.0, 200.0);
                model.position.set(posX, -1180, posy);
                model.rotation.y = angleHouse * Pai / 180;
                scene.add( gltf.scene );
    
                model["test"] = 100;
                // console.log("model");
            },
            function ( error ) {
                console.log( 'An error happened' );
                console.log( error );
            }
        );
    
    }


    let melonflg = true;
    // クリックしたときに出てくる
    function melonFunc() {
        if (melonflg == true) {
            loader.load(
                melon, 
                function ( gltf ){
                    const model_melon = gltf.scene;
                    model_melon.name = "melonChar";
                    model_melon.scale.set(50.0, 50.0, 50.0);
                    model_melon.position.set(1400, -1200, -1300);
                    model_melon.rotation.y = 130 * (Pai / 180);
                    scene.add(gltf.scene);
        
                    model["test"] = 100;
                    // console.log("model");
                },
                function ( error ) {
                    console.log( 'An error happened' );
                    console.log( error );
                }
            );
            melonflg = false;
        }
    }


        // function melonRemove() {
        //     loader.load(
        //         melon, 
        //         function ( gltf ){
        //             scene.remove(gltf.scene);        
        //         },
        //         function ( error ) {
        //             console.log( 'An error happened' );
        //             console.log( error );
        //         }
        //     );
        //     console.log("rrremove");
        // }
    
    // ーーーーー　cloud　ーーーーーー
    for (let index = 0; index < 5; index++) {
        let sizeX = Math.floor(Math.random() * 200) + 500;
        let sizeY = Math.floor(Math.random() * 300) + 200;
        let sizeZ = Math.floor(Math.random() * 200) + 300;
        let posX = Math.floor(Math.random() * 500) + 3000;
        if (Math.random() > 0.5) {
           posX = -(posX);
        }
        let posY = Math.floor(Math.random() * 700) + 2000;
        let posZ = Math.floor(Math.random() * 500) + 3000;
        if (Math.random() > 0.5) {
            posZ = -(posZ);
        }
        let Angle = Math.floor(Math.random() * 180 );

        loader.load(
            urlcloud, 
            function ( gltf ){
                model = gltf.scene;
                model.name = "cloud";
                model.scale.set(sizeX, sizeY, sizeZ);
                model.position.set(posX, posY, posZ);
                model.rotation.y = Angle * Pai / 180;
                model.opacity = 0.5;
                model.Roughness = 0;

                scene.add( gltf.scene );
    
                model["test"] = 100;
                // console.log("model");
            },
            function ( error ) {
                console.log( 'An error happened' );
                console.log( error );
            }
        );
    
    }




    // 画像を出す
    // 床
    var texture_floor = new THREE.TextureLoader().load('./img/floor.jpg',
    (tex) => { // 読み込み完了時
        // 縦横比を保って適当にリサイズ
        const w = 5;
        const h = tex.image.height/(tex.image.width/w);

        // 平面
        const geometry = new THREE.PlaneGeometry(1, 1);
        const material = new THREE.MeshBasicMaterial( { map:texture_floor } );
        const plane_floor = new THREE.Mesh( geometry, material );
        plane_floor.scale.set(10000, 10000, 1);
        plane_floor.position.set(0, -1100,-500);
        plane_floor.rotation.x = -Pai/2;
        scene.add( plane_floor );
        });    
    
    // myself
    var texture_myself = new THREE.TextureLoader().load('./img/image_2.jpg',
    (tex) => { // 読み込み完了時
        // 縦横比を保って適当にリサイズ
        const w = 5;
        const h = tex.image.height/(tex.image.width/w);

        // 平面
        const geometry = new THREE.PlaneGeometry(1, 1);
        const material = new THREE.MeshBasicMaterial( { map:texture_myself } );
        const plane_myself = new THREE.Mesh( geometry, material );
        plane_myself.scale.set(2500,1686, 1);
        plane_myself.position.set(-100, 1600, 1200);
        plane_myself.rotation.x = -30 * (Pai/180);
        plane_myself.rotation.y = Pai;
        plane_myself.rotation.z = 0 * (Pai/180);
        scene.add( plane_myself );
        });    
    
//MeshBasicMaterialが光に反応しない
// MeshPhongMaterial光に反応する

    // ずっち
    var texture_dutti = new THREE.TextureLoader().load('./img/image_dutti.jpg',
    (tex) => { // 読み込み完了時
        // 縦横比を保って適当にリサイズ
        const w = 5;
        const h = tex.image.height/(tex.image.width/w);

        // 平面
        const geometry = new THREE.PlaneGeometry(1, 1);
        const material = new THREE.MeshBasicMaterial( { map:texture_dutti } );
        const plane_dutti = new THREE.Mesh(geometry, material);
        plane_dutti.name = "dutti";
        plane_dutti.scale.set(700, 700, 1);
        plane_dutti.position.set(-1500, 0, 700);
        plane_dutti.rotation.y = 125 * (Pai/180);
        scene.add( plane_dutti );
        });
    
    // asrapot
    var texture_asrapot = new THREE.TextureLoader().load('./img/image_asrapot.jpg',
    (tex) => { // 読み込み完了時
        // 縦横比を保って適当にリサイズ
        const w = 5;
        const h = tex.image.height/(tex.image.width/w);

        // 平面
        const geometry = new THREE.PlaneGeometry(1, 1);
        const material = new THREE.MeshBasicMaterial( { map:texture_asrapot } );
        const plane_asrapot = new THREE.Mesh(geometry, material);
        plane_asrapot.name = "assra";
        plane_asrapot.scale.set(700, 700, 1);
        plane_asrapot.position.set(-1800, 0, -500);
        plane_asrapot.rotation.y = 85 * (Pai/180);
        scene.add( plane_asrapot );
        });
    
    // penging
    var texture_penging = new THREE.TextureLoader().load('./img/image_penging1.jpg',
    (tex) => { // 読み込み完了時
        // 縦横比を保って適当にリサイズ
        const w = 5;
        const h = tex.image.height/(tex.image.width/w);

        // 平面
        const geometry = new THREE.PlaneGeometry(1, 1);
        const material = new THREE.MeshBasicMaterial( { map:texture_penging } );
        const plane_penging = new THREE.Mesh(geometry, material);
        plane_penging.name = "penging";
        plane_penging.scale.set(700, 700, 1);
        plane_penging.position.set(-1300, 0, -1600);
        plane_penging.rotation.y = 50 * (Pai/180);
        scene.add( plane_penging );
        });
    
    // digital_galaxy
    var texture_galaxy = new THREE.TextureLoader().load('./img/image_galaxy.jpg',
    (tex) => { // 読み込み完了時
        // 縦横比を保って適当にリサイズ
        const w = 5;
        const h = tex.image.height/(tex.image.width/w);

        // 平面
        const geometry = new THREE.PlaneGeometry(1, 1);
        const material = new THREE.MeshBasicMaterial( { map:texture_galaxy } );
        const plane_galaxy = new THREE.Mesh(geometry, material);
        plane_galaxy.name = "digital_galaxy";
        plane_galaxy.scale.set(700, 700, 1);
        plane_galaxy.position.set(-300, 0, -2200);
        plane_galaxy.rotation.y = 10 * (Pai/180);
        scene.add( plane_galaxy );
        });

    // fff_act2
    var texture_fff_act2 = new THREE.TextureLoader().load('./img/image_FFF_act2.jpg',
    (tex) => { // 読み込み完了時
        // 縦横比を保って適当にリサイズ
        const w = 5;
        const h = tex.image.height/(tex.image.width/w);

        // 平面
        const geometry = new THREE.PlaneGeometry(1, 1);
        const material = new THREE.MeshBasicMaterial( { map:texture_fff_act2 } );
        const plane_fff_act2 = new THREE.Mesh(geometry, material);
        plane_fff_act2.name = "fffact2";
        plane_fff_act2.scale.set(700, 700, 1);
        plane_fff_act2.position.set(950, 0, -2100);
        plane_fff_act2.rotation.y = -20 * (Pai/180);
        scene.add( plane_fff_act2 );
        });

    // fff
    var texture_fff = new THREE.TextureLoader().load('./img/image_FFF_act1_2.jpg',
    (tex) => { // 読み込み完了時
        // 縦横比を保って適当にリサイズ
        const w = 5;
        const h = tex.image.height/(tex.image.width/w);

        // 平面
        const geometry = new THREE.PlaneGeometry(1, 1);
        const material = new THREE.MeshBasicMaterial( { map:texture_fff } );
        const plane_fff = new THREE.Mesh(geometry, material);
        plane_fff.name = "fff";
        plane_fff.scale.set(700, 700, 1);
        plane_fff.position.set(1900, 0, -1400);
        plane_fff.rotation.y = -50 * (Pai/180);
        scene.add( plane_fff );
        });

    // petstay
    var texture_petstay = new THREE.TextureLoader().load('./img/image_petstay.jpg',
    (tex) => { // 読み込み完了時
        // 縦横比を保って適当にリサイズ
        const w = 5;
        const h = tex.image.height/(tex.image.width/w);

        // 平面
        const geometry = new THREE.PlaneGeometry(1, 1);
        const material = new THREE.MeshBasicMaterial( { map:texture_petstay } );
        const plane_petstay = new THREE.Mesh(geometry, material);
        plane_petstay.name = "petstay";
        plane_petstay.scale.set(700, 700, 1);
        plane_petstay.position.set(2100, 0, -300);
        plane_petstay.rotation.y = -95 * (Pai/180);
        scene.add( plane_petstay );
        });

    // candle night
    var texture_candle = new THREE.TextureLoader().load('./img/image_candle.jpg',
    (tex) => { // 読み込み完了時
        // 縦横比を保って適当にリサイズ
        const w = 5;
        const h = tex.image.height/(tex.image.width/w);

        // 平面
        const geometry = new THREE.PlaneGeometry(1, 1);
        const material = new THREE.MeshBasicMaterial( { map:texture_candle } );
        const plane_candle = new THREE.Mesh(geometry, material);
        plane_candle.name = "candle";
        plane_candle.scale.set(700, 700, 1);
        plane_candle.position.set(1700, 0, 1000);
        plane_candle.rotation.y = -125 * (Pai/180);
        scene.add( plane_candle );
        });
    
    //下の列
    // fireworks
    var texture_fireworks = new THREE.TextureLoader().load('./img/images_fireworks.jpg',
    (tex) => { // 読み込み完了時
        // 縦横比を保って適当にリサイズ
        const w = 5;
        const h = tex.image.height/(tex.image.width/w);

        // 平面
        const geometry = new THREE.PlaneGeometry(1, 1);
        const material = new THREE.MeshBasicMaterial( { map:texture_fireworks } );
        const plane_fireworks = new THREE.Mesh(geometry, material);
        plane_fireworks.name = "fireworks";
        plane_fireworks.scale.set(550, 550, 1);
        plane_fireworks.position.set(-1800, -800, 600);
        plane_fireworks.rotation.x = 50 * (Pai/180);
        plane_fireworks.rotation.y = 125 * (Pai/180);
        plane_fireworks.rotation.z = -45 * (Pai/180);
        scene.add( plane_fireworks );
        });
        
    // culcuration 
    var texture_culcuration = new THREE.TextureLoader().load('./img/image_culcuration.jpg',
    (tex) => { // 読み込み完了時
        // 縦横比を保って適当にリサイズ
        const w = 5;
        const h = tex.image.height/(tex.image.width/w);

        // 平面
        const geometry = new THREE.PlaneGeometry(1, 1);
        const material = new THREE.MeshBasicMaterial( { map:texture_culcuration} );
        const plane_culcuration = new THREE.Mesh(geometry, material);
        plane_culcuration.name = "culcuration";
        plane_culcuration.scale.set(550, 550, 1);
        plane_culcuration.position.set(-2000, -800, -300);
        plane_culcuration.rotation.x = 70 * (Pai/180);
        plane_culcuration.rotation.y = 110 * (Pai /180);
        plane_culcuration.rotation.z = -70 * (Pai/180);
        scene.add( plane_culcuration );
        });
    
    // carelink
    var texture_carelink = new THREE.TextureLoader().load('./img/image_carelink1.jpg',
    (tex) => { // 読み込み完了時
        // 縦横比を保って適当にリサイズ
        const w = 5;
        const h = tex.image.height/(tex.image.width/w);

        // 平面
        const geometry = new THREE.PlaneGeometry(1, 1);
        const material = new THREE.MeshBasicMaterial( { map:texture_carelink} );
        const plane_carelink = new THREE.Mesh(geometry, material);
        plane_carelink.name = "carelink";
        plane_carelink.scale.set(550, 550, 1);
        plane_carelink.position.set(-1900, -800, -1200);
        plane_carelink.rotation.x = -30 * (Pai/180);
        plane_carelink.rotation.y = 60 * (Pai /180);
        plane_carelink.rotation.z = 30 * (Pai/180);
        scene.add( plane_carelink );
        });
    
    // umebizin
    var texture_umebizin = new THREE.TextureLoader().load('./img/image_ume1.jpg',
    (tex) => { // 読み込み完了時
        // 縦横比を保って適当にリサイズ
        const w = 5;
        const h = tex.image.height/(tex.image.width/w);

        // 平面
        const geometry = new THREE.PlaneGeometry(1, 1);
        const material = new THREE.MeshBasicMaterial( { map:texture_umebizin} );
        const plane_umebizin = new THREE.Mesh(geometry, material);
        plane_umebizin.name = "umebizin";
        plane_umebizin.scale.set(550, 550, 1);
        plane_umebizin.position.set(-1500, -800, -2000);
        plane_umebizin.rotation.x = -30 * (Pai/180);
        plane_umebizin.rotation.y = 50 * (Pai /180);
        plane_umebizin.rotation.z = 25 * (Pai/180);
        scene.add( plane_umebizin );
        });
    
        // filter
        var texture_filter = new THREE.TextureLoader().load('./img/image_filter1.jpg',
        (tex) => { // 読み込み完了時
            // 縦横比を保って適当にリサイズ
            const w = 5;
            const h = tex.image.height/(tex.image.width/w);
    
            // 平面
            const geometry = new THREE.PlaneGeometry(1, 1);
            const material = new THREE.MeshBasicMaterial( { map:texture_filter} );
            const plane_filter = new THREE.Mesh(geometry, material);
            plane_filter.name = "miyaget";
            plane_filter.scale.set(550, 550, 1);
            plane_filter.position.set(-800, -800, -2550);
            plane_filter.rotation.x = -20 * (Pai/180);
            plane_filter.rotation.y = 25 * (Pai /180);
            plane_filter.rotation.z = 10 * (Pai/180);
            scene.add( plane_filter );
            });
    
        // yonayona
        var texture_yonayona = new THREE.TextureLoader().load('./img/image_yonayona1.jpg',
        (tex) => { // 読み込み完了時
            // 縦横比を保って適当にリサイズ
            const w = 5;
            const h = tex.image.height/(tex.image.width/w);
    
            // 平面
            const geometry = new THREE.PlaneGeometry(1, 1);
            const material = new THREE.MeshBasicMaterial( { map:texture_yonayona} );
            const plane_yonayona = new THREE.Mesh(geometry, material);
            plane_yonayona.name = "yonayona";
            plane_yonayona.scale.set(550, 550, 1);
            plane_yonayona.position.set(100, -800, -2700);
            plane_yonayona.rotation.x = -20 * (Pai/180);
            plane_yonayona.rotation.y = 0 * (Pai /180);
            plane_yonayona.rotation.z = 0 * (Pai/180);
            scene.add( plane_yonayona );
            });
    
        // calender
        var texture_calender = new THREE.TextureLoader().load('./img/image_calender1.jpg',
        (tex) => { // 読み込み完了時
            // 縦横比を保って適当にリサイズ
            const w = 5;
            const h = tex.image.height/(tex.image.width/w);
    
            // 平面
            const geometry = new THREE.PlaneGeometry(1, 1);
            const material = new THREE.MeshBasicMaterial( { map:texture_calender} );
            const plane_calender = new THREE.Mesh(geometry, material);
            plane_calender.name = "calender";
            plane_calender.scale.set(550, 550, 1);
            plane_calender.position.set(1000, -800, -2500);
            plane_calender.rotation.x = -20 * (Pai/180);
            plane_calender.rotation.y = -30 * (Pai /180);
            plane_calender.rotation.z = -10 * (Pai/180);
            scene.add( plane_calender );
            });
    
        // melon
        var texture_melon = new THREE.TextureLoader().load('./img/image_melon1.jpg',
        (tex) => { // 読み込み完了時
            // 縦横比を保って適当にリサイズ
            const w = 5;
            const h = tex.image.height/(tex.image.width/w);
    
            // 平面
            const geometry = new THREE.PlaneGeometry(1, 1);
            const material = new THREE.MeshBasicMaterial( { map:texture_melon} );
            const plane_melon = new THREE.Mesh(geometry, material);
            plane_melon.name = "melon";
            plane_melon.scale.set(550, 550, 1);
            plane_melon.position.set(1800, -800, -1900);
            plane_melon.rotation.x = -30 * (Pai/180);
            plane_melon.rotation.y = -40 * (Pai /180);
            plane_melon.rotation.z = -20 * (Pai/180);
            scene.add(plane_melon);
            });
    
        // photoshop
        var texture_photoshop = new THREE.TextureLoader().load('./img/image_my_life_clock1.jpg',
        (tex) => { // 読み込み完了時
            // 縦横比を保って適当にリサイズ
            const w = 5;
            const h = tex.image.height/(tex.image.width/w);
    
            // 平面
            const geometry = new THREE.PlaneGeometry(1, 1);
            const material = new THREE.MeshBasicMaterial( { map:texture_photoshop} );
            const plane_photoshop = new THREE.Mesh(geometry, material);
            plane_photoshop.name = "photoshop";
            plane_photoshop.scale.set(550, 550, 1);
            plane_photoshop.position.set(2300, -800, -1000);
            plane_photoshop.rotation.x = -60 * (Pai/180);
            plane_photoshop.rotation.y = -70 * (Pai /180);
            plane_photoshop.rotation.z = -55 * (Pai/180);
            scene.add( plane_photoshop );
            });
    
        // dragon
        var texture_dragon = new THREE.TextureLoader().load('./img/image_dragon1.jpg',
        (tex) => { // 読み込み完了時
            // 縦横比を保って適当にリサイズ
            const w = 5;
            const h = tex.image.height/(tex.image.width/w);
    
            // 平面
            const geometry = new THREE.PlaneGeometry(1, 1);
            const material = new THREE.MeshBasicMaterial( { map:texture_dragon} );
            const plane_dragon = new THREE.Mesh(geometry, material);
            plane_dragon.name = "dragon";
            plane_dragon.scale.set(550, 550, 1);
            plane_dragon.position.set(2400, -800, 0);
            plane_dragon.rotation.x = -30 * (Pai/180);
            plane_dragon.rotation.y = -80 * (Pai /180);
            plane_dragon.rotation.z = -30 * (Pai/180);
            scene.add( plane_dragon );
            });
    
        // book
        var texture_book = new THREE.TextureLoader().load('./img/image_book1.jpg',
        (tex) => { // 読み込み完了時
            // 縦横比を保って適当にリサイズ
            const w = 5;
            const h = tex.image.height/(tex.image.width/w);
    
            // 平面
            const geometry = new THREE.PlaneGeometry(1, 1);
            const material = new THREE.MeshBasicMaterial( { map:texture_book} );
            const plane_book = new THREE.Mesh(geometry, material);
            plane_book.name = "book";
            plane_book.scale.set(550, 550, 1);
            plane_book.position.set(2200, -800, 900);
            plane_book.rotation.x = 50 * (Pai/180);
            plane_book.rotation.y = -110 * (Pai /180);
            plane_book.rotation.z = 50 * (Pai/180);
            scene.add( plane_book );
            });
    
    // 上の列    
        // soundGALAXY
        var texture_sound = new THREE.TextureLoader().load('./img/image_sound1.jpg',
        (tex) => { // 読み込み完了時
            // 縦横比を保って適当にリサイズ
            const w = 5;
            const h = tex.image.height/(tex.image.width/w);

            // 平面
            const geometry = new THREE.PlaneGeometry(1, 1);
            const material = new THREE.MeshBasicMaterial( { map:texture_sound} );
            const plane_sound = new THREE.Mesh(geometry, material);
            plane_sound.name = "sound";
            plane_sound.scale.set(550, 550, 1);
            plane_sound.position.set(-1500, 800, -2000);
            plane_sound.rotation.x = 30 * (Pai/180);
            plane_sound.rotation.y = 50 * (Pai /180);
            plane_sound.rotation.z = -25 * (Pai/180);
            scene.add( plane_sound );
            });
    
        // um
        var texture_um = new THREE.TextureLoader().load('./img/image_um.jpg',
        (tex) => { // 読み込み完了時
            // 縦横比を保って適当にリサイズ
            const w = 5;
            const h = tex.image.height/(tex.image.width/w);
    
            // 平面
            const geometry = new THREE.PlaneGeometry(1, 1);
            const material = new THREE.MeshBasicMaterial( { map:texture_um} );
            const plane_um = new THREE.Mesh(geometry, material);
            plane_um.name = "um";
            plane_um.scale.set(550, 550, 1);
            plane_um.position.set(-800, 800, -2550);
            plane_um.rotation.x = 20 * (Pai/180);
            plane_um.rotation.y = 25 * (Pai /180);
            plane_um.rotation.z = -10 * (Pai/180);
            scene.add( plane_um );
            });
    
        // taptap
        var texture_taptap = new THREE.TextureLoader().load('./img/image_taptap.jpg',
        (tex) => { // 読み込み完了時
            // 縦横比を保って適当にリサイズ
            const w = 5;
            const h = tex.image.height/(tex.image.width/w);
    
            // 平面
            const geometry = new THREE.PlaneGeometry(1, 1);
            const material = new THREE.MeshBasicMaterial( { map:texture_taptap } );
            const plane_taptap = new THREE.Mesh(geometry, material);
            plane_taptap.name = "taptap";
            plane_taptap.scale.set(550, 550, 1);
            plane_taptap.position.set(100, 800, -2700);
            plane_taptap.rotation.x = 20 * (Pai/180);
            plane_taptap.rotation.y = 0 * (Pai /180);
            plane_taptap.rotation.z = 0 * (Pai/180);
        scene.add( plane_taptap );
            });
    
        // poo
        var texture_poo = new THREE.TextureLoader().load('./img/image_poo1.jpg',
        (tex) => { // 読み込み完了時
            // 縦横比を保って適当にリサイズ
            const w = 5;
            const h = tex.image.height/(tex.image.width/w);
    
            // 平面
            const geometry = new THREE.PlaneGeometry(1, 1);
            const material = new THREE.MeshBasicMaterial( { map:texture_poo} );
            const plane_poo = new THREE.Mesh(geometry, material);
            plane_poo.name = "poo";
            plane_poo.scale.set(550, 550, 1);
            plane_poo.position.set(-1900, 800, -1200);
            plane_poo.rotation.x = 30 * (Pai/180);
            plane_poo.rotation.y = 60 * (Pai /180);
            plane_poo.rotation.z = -30 * (Pai/180);
            scene.add( plane_poo );
            });
    
    
    
    




    renderer.gammaOutput = true;
    renderer.gammaFactor = 2.2;


    // 点光源
    const light1 = new THREE.PointLight(0xFFFFFF,2,3000,0.6);
    light1.intensity = 1; // 光の強さを倍に
    light1.position.set(-1800, 2000, -1800);

    // const light2 = new THREE.PointLight(0xFFFFFF,2,500,0.6);
    // light2.intensity = 1; // 光の強さを倍に
    // light2.position.set(1000, 500, -1500);


    // 平行光源
    // const light2 = new THREE.DirectionalLight(0xFFFFFF);
    // light2.intensity = 0.2; // 光の強さを倍に
    // light2.position.set(500, 1000, -3000);

    // const light3 = new THREE.DirectionalLight(0xFF0000);
    // light3.intensity = 0.6; // 光の強さを倍に
    // light3.position.set(-500, -1000, -3000);
    // light3.rotation.y = 30 * (Pai / 180);


    // let CameyaY = 0;
    // シーンに追加
    scene.add(light1);
    // scene.add(light2);
    // scene.add(light3);

    // 初回実行
    tick();
    function tick() {
        controls.update();
        
        scene.traverse(function(obj) {
            if(obj.name == "J_Bip_C_Chest"){
                obj.rotation.z += 2 /180*3.1415;
            }
        });
        if (model != null){
            // console.log(model);
        }

        // CameyaY += 0.1 * (Pai / 180); 
        // camera.rotation.y += CameyaY;

        renderer.render(scene, camera);
        requestAnimationFrame(tick);
    }
    

    // 初期化のために実行
    onResize();
    // リサイズイベント発生時に実行
    window.addEventListener('resize', onResize);
    function onResize() {
        // サイズを取得
        width = document.getElementById('main_canvas').getBoundingClientRect().width;
        // height = document.getElementById('main_canvas').getBoundingClientRect().height;
        width = window.innerWidth;
        height = window.innerHeight;
        // レンダラーのサイズを調整する
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(width, height);

        // カメラのアスペクト比を正す
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        console.log(width);
        console.log(height);
    }


    // ーーーオブジェクトをクリックしたときのイベントーーー
    // マウスクリックイベントで出したhtmlを消す
    $('#canvas').mousedown(function (event) {
        // 画面上のマウスクリック位置
        var x = event.clientX;
        var y = event.clientY;
         
        // マウスクリック位置を正規化
        var mouse = new THREE.Vector2();
        mouse.x =  ( x / window.innerWidth ) * 2 - 1;
        mouse.y = -( y / window.innerHeight ) * 2 + 1;
         
        // Raycasterインスタンス作成
        var raycaster = new THREE.Raycaster();
        // 取得したX、Y座標でrayの位置を更新
        raycaster.setFromCamera( mouse, camera );
        // オブジェクトの取得
        var intersects = raycaster.intersectObjects( scene.children );
         
        // console.log(intersects[0].object.name);


        function objClick() {
                $('.contents').css({
                    'display': 'none'
                })
                $('.contentsWrap').css({
                    'display': 'block'
                })
        }
        // クリックされた時
        // 何も無いとこクリック
        if (  intersects[0] === undefined || intersects[0].object.name === '') {
            $('.contentsWrap').css({
                'display': 'none'
            })
            $('.contents').css({
                'display': 'none'
            })
        }
        // オブジェクトクリック
        else if ( intersects[0].object.name == 'dutti' ) {
            objClick();
            $('.contentsDutti').css({
                'display': 'block'
            })
        }
        else if (intersects[0].object.name == 'assra') {
            objClick();
            $('.contentsAssra').css({
                'display': 'block'
            })
        }
        else if (intersects[0].object.name == 'penging') {
            objClick();
            $('.contentsPenging').css({
                'display': 'block'
            })
        }
        else if (intersects[0].object.name == 'digital_galaxy') {
            objClick();
            $('.contentsGalaxy').css({
                'display': 'block'
            })     
        }
        else if (intersects[0].object.name == 'fffact2') {
            objClick();
            $('.contentsFffact2').css({
                'display': 'block'
            })     
        }
        else if (intersects[0].object.name == 'fff') {
            objClick();
            $('.contentsFff').css({
                'display': 'block'
            })     
        }
        else if (intersects[0].object.name == 'petstay') {
            objClick();
            $('.contentsPetstay').css({
                'display': 'block'
            })
        }
        else if (intersects[0].object.name == 'candle') {
            objClick();
            $('.contentsCandle').css({
                'display': 'block'
            })
        }
        else if (intersects[0].object.name == 'fireworks') {
            objClick();
            $('.contentsFireworks').css({
                'display': 'block'
            })
        }
        else if (intersects[0].object.name == 'carelink') {
            objClick();
            $('.contentsLinkcare').css({
                'display': 'block'
            })     
        }
        else if (intersects[0].object.name == 'culcuration') {
            objClick();
            $('.contentsCulcuration').css({
                'display': 'block'
            })     
        }
        else if (intersects[0].object.name == 'umebizin') {
            objClick();
            $('.contentsUmebizin').css({
                'display': 'block'
            })     
        }
        else if (intersects[0].object.name == 'miyaget') {
            objClick();
            $('.contentsMiyaget').css({
                'display': 'block'
            })     
        }
        else if (intersects[0].object.name == 'yonayona') {
            objClick();
            $('.contentsYonayona').css({
                'display': 'block'
            })     
        }
        else if (intersects[0].object.name == 'calender') {
            objClick();
            $('.contentsCalender').css({
                'display': 'block'
            })     
        }
        else if (intersects[0].object.name == 'melon') {
            melonFunc();
        }
        else if (intersects[0].object.name == 'photoshop') {
            objClick();
            $('.contentsPhotoShop').css({
                'display': 'block'
            })
        }
        else if (intersects[0].object.name == 'dragon') {
            objClick();
            $('.contentsIllust').css({
                'display': 'block'
            })
        }
        else if (intersects[0].object.name == 'book') {
            objClick();
            $('.contentsBook').css({
                'display': 'block'
            })
        }
        else if (intersects[0].object.name == 'poo') {
            objClick();
            $('.contentsPoo').css({
                'display': 'block'
            })
        }
        else if (intersects[0].object.name == 'taptap') {
            objClick();
            $('.contentsTaptap').css({
                'display': 'block'
            })
        }
        else if (intersects[0].object.name == 'um') {
            objClick();
            $('.contentsUm').css({
                'display': 'block'
            })
        }

        else if (intersects[0].object.name == 'sound') {
            objClick();
            $('.contentsSound').css({
                'display': 'block'
            })
        }

    });

}