function show(id){

document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"))
document.getElementById(id).classList.add("active")

}

const canvas=document.getElementById("bg")

const scene=new THREE.Scene()
const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1000)

const renderer=new THREE.WebGLRenderer({canvas,alpha:true})
renderer.setSize(window.innerWidth,window.innerHeight)

const geometry=new THREE.TorusKnotGeometry(3,1,100,16)
const material=new THREE.MeshStandardMaterial({color:0xff6a00,wireframe:true})

const mesh=new THREE.Mesh(geometry,material)
scene.add(mesh)

const light=new THREE.PointLight(0xffffff,1)
light.position.set(10,10,10)
scene.add(light)

camera.position.z=10

function animate(){

requestAnimationFrame(animate)

mesh.rotation.x+=0.003
mesh.rotation.y+=0.003

renderer.render(scene,camera)

}

animate()

setTimeout(()=>{
if(document.getElementById("book")){
$("#book").turn()
}
},1000)

const paint=document.getElementById("paint")

if(paint){

const ctx=paint.getContext("2d")

let draw=false

paint.onmousedown=()=>draw=true
paint.onmouseup=()=>draw=false

paint.onmousemove=e=>{

if(!draw)return

ctx.fillStyle="blue"
ctx.beginPath()
ctx.arc(e.offsetX,e.offsetY,5,0,Math.PI*2)
ctx.fill()

}

}
