function getValues(){
let v1=Number(document.getElementById("value1").value);
let v2=Number(document.getElementById("value2").value);
return[v1,v2];
}

function Add(){
let[v1,v2]=getValues();
document.getElementById("display").innerText=v1+v2;
}

function Sub(){
let[v1,v2]=getValues();
document.getElementById("display").innerText=v1-v2;
}

function Mul(){
let[v1,v2]=getValues();
document.getElementById("display").innerText=v1*v2;
}

function Div(){
let[v1,v2]=getValues();
document.getElementById("display").innerText=v2===0?"Error":v1/v2;
}

const symbols=document.querySelectorAll(".symbol");

symbols.forEach(s=>{
let x=Math.random()*innerWidth;
let y=Math.random()*innerHeight;
let dx=(Math.random()*2+1)*(Math.random()<0.5?-1:1);
let dy=(Math.random()*2+1)*(Math.random()<0.5?-1:1);

function move(){
x+=dx;
y+=dy;

if(x<=0||x>=innerWidth-20)dx*=-1;
if(y<=0||y>=innerHeight-20)dy*=-1;

s.style.transform=`translate(${x}px,${y}px)`;
requestAnimationFrame(move);
}
move();
});