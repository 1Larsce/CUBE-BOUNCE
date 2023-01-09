//Quiz 2 - ARRIESGADO, HILARIO II B.

const scene= new THREE.Scene();
const camera = new THREE.OrthographicCamera();
const renderer = new THREE.WebGLRenderer();
renderer.setSize ( 800, 800 );
document.body.appendChild( renderer.domElement );

// Geometry / Object

const planeGeometry = new THREE.PlaneGeometry( 0.35, 0.2 );
const planeMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
const dvd = new THREE.Mesh( planeGeometry, planeMaterial );
scene.add( dvd );

camera.position. z = 1;

// Random Color
dvd.material.color.setRGB(Math.random(256), Math.random(256), Math.random(256));

// Variables

let xSpeed = 0.0029;
let ySpeed = 0.0039;
let dvdBounces = 8;

// Functions

function dvdBouncesLeft() {
    dvdBounces -=1;
    console.log(" DVD BOUNCES LEFT: " + dvdBounces)
}
function stop() {
    xSpeed = 0;
    ySpeed = 0;
}

// Animation

function animate() {
    requestAnimationFrame( animate );
    
    // console.log("Position of X: " + dvd.position.x);
    // console.log("Position of Y: " + dvd.position.y);
   
    dvd.position.x += xSpeed;
    if (dvd.position.x > 0.82)
    {
        xSpeed = -0.0029;
        dvd.material.color.setRGB(Math.random(256), Math.random(256), Math.random(256));
        dvd.scale.x -= 0.15;
        dvd.scale.y -= 0.15;
        dvdBouncesLeft();
    }
    if (dvd.position.x < -0.82)
    {
        xSpeed = 0.0029;
        dvd.material.color.setRGB(Math.random(256), Math.random(256), Math.random(256));
        dvd.scale.x -= 0.15;
        dvd.scale.y -= 0.15;
        dvdBouncesLeft();
    }
    dvd.position.y += ySpeed;
    if (dvd.position.y > 0.82)
    {
        ySpeed = -0.0039;
        dvd.material.color.setRGB(Math.random(256), Math.random(256), Math.random(256));
        dvd.scale.x -= 0.15;
        dvd.scale.y -= 0.15;
        dvdBouncesLeft();
    }
    if (dvd.position.y < -0.82)
    {
        ySpeed = 0.0039;
        dvd.material.color.setRGB(Math.random(256), Math.random(256), Math.random(256));
        dvd.scale.x -= 0.15;
        dvd.scale.y -= 0.15;
        dvdBouncesLeft();
    } else if (dvdBounces <=0) {
        dvd.scale.set(0); stop();
    }

    renderer.render( scene, camera );
}
animate();