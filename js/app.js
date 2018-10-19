var scene = new THREE.Scene(); 
 var light = new THREE.AmbientLight( 0x404040 ); 
 scene.add( light );          
var camera = new THREE.PerspectiveCamera( 95, window.innerWidth/window.innerHeight, 0.1, 1000 );             var renderer = new THREE.WebGLRenderer();             renderer.setSize( window.innerWidth, window.innerHeight );             document.body.appendChild( renderer.domElement );
 var geometry = new THREE.SphereGeometry( 50, 50, 50 ); 
 var material = new THREE.PointsMaterial({size:0.1}); 
 var points = new THREE.Points(geometry, material);
//Just to change the material of the object
//  var material = new THREE.MeshBasicMaterial({
//      color:0xff0000,
//      wireframe:true,
//      transparent:true,
//      opacity:1    
//  });
//  var points=new THREE.Mesh(geometry,material);
 points.position.z=-590;
 scene.add( points);          
var animate = function () {                 
requestAnimationFrame( animate );
points.rotation.x += 0.001;                
if (points.position.z<-12) {
   points.position.z+=0.9
}           
points.rotation.y += 0.01;
points.rotation.z += 0.01;
points.rotation.x += 0.01;      
renderer.render( scene, camera );
}
animate();      
