var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let content = canvas.getContext('2d');
let play = true;

window.addEventListener('click', () => {play = !play; animate()})


let step = 5; // step size per frame refresh, related to speed, higher no.=faster;
let radius = 30;
let y = -radius;
let cols = ['rgb(255,0,0,0.6)', 'rgb(255,60,0,0.6)', 'rgb(255,255,0,0.6)', 'rgb(0,255,125,0.6)', 'rgb(0,125,255,0.6)'];
let colChoice = 0;

function animate() {

 if (play) {
  requestAnimationFrame(animate);
// single shot to include in next refresh;
  } // toggle on-off by toggling play true/false with click;

content.clearRect(0,0,innerWidth,innerHeight);
// origin circle
content.beginPath();
content.arc(0,0,30,0,Math.PI*2, false);
content.strokeStyle = "green";
content.stroke();
// demonstrates, xy coordinates define centre of arc;

// draw circle;
content.beginPath();
content.arc(200,y,30,0,Math.PI*2, false);
content.strokeStyle = "green";
content.fillStyle = cols[colChoice];
//content.stroke();
content.fill();

if ( y > canvas.height + radius) {y = -radius; colChoice = ++colChoice%(cols.length); } 


// move y coordinate next for next draw;
y += step;


}

animate();



/*
let content = canvas.getContext('2d');
// content.fillRect(x,y,width,height);
content.fillStyle = 'rgb(255,0,0,0.3)';
content.fillRect(100, 100, 100, 100);
content.fillStyle = 'rgb(0,255,0,0.3)';
content.fillRect(150, 150, 100, 100);
content.fillStyle = 'rgb(0,0,255,0.3)';
content.fillRect(200, 200, 100, 100);
console.log(canvas);

// line;
content.beginPath();
content.moveTo(50,300);
content.lineTo(300,100);
content.lineTo(400,300);
content.strokeStyle = "#0ff";
content.stroke();

// arc;
content.beginPath();
// content.arc(x,y,radius,startRadians,RadianLength,renderinrevers);
content.arc(300,300,30,0,Math.PI*2, false);
content.strokeStyle = "green";
content.stroke();

for (let i=0; i<255; i++) {
  content.beginPath();
  //let x = 210 + (i*10);
  //let y = 210 + (i*12);
  var radius = 40;
  var r = i;
  var g = 255-i;
  var b = Math.random()*255;

  content.arc(Math.random()*window.innerWidth,Math.random()*window.innerHeight,radius,0,Math.PI*2, false);
  //content.strokeStyle = 'rgba(255,0,0,1)';
  content.strokeStyle = `rgba(${r},${g},${b},1)`;
  content.stroke();
} // next i;
*/