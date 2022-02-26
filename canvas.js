var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let content = canvas.getContext('2d');
// content.fillRect(x,y,width,height);
content.fillRect(100, 100, 100, 100);
content.fillRect(150, 150, 100, 100);
content.fillRect(200, 200, 100, 100);
console.log(canvas);
