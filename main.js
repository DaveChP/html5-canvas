const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
canvas.width = innerWidth; // window property;
canvas.height = innerHeight;

const players = { 
  player1: [20,20,50,50,"green"],
  player2: [80,50,20,20,"red"],
  player3: [90,100,25,30,"blue"]
};


class Player {
  constructor(x,y,width,height,color) {
  this.position = {x: x, y: y}
  this.velocity = {x: 0, y: 10}
  this.width = width;
  this.height = height;
  this.color = color;
  }


  draw() {
  context.fillStyle = this.color;
  context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
  this.position.y += this.velocity.y;
  this.draw();
  }

} // end class;

/*
const player1 = new Player(...players[0]);
const player2 = new Player(...players[1]);
*/

function randomColor() {
let opacity = Math.random()*0.7 + 0.1;
let rgbColors = [
  `rgb(255,0,0,${opacity})`,
  `rgb(255, 128, 0,${opacity})`,
  `rgb(255, 255, 0,${opacity})`,
  `rgb(128, 255,0,${opacity})`,
  `rgb(0, 255, 0,${opacity})`,
  `rgb(0, 255, 128,${opacity})`,
  `rgb(0, 255, 255,${opacity})`,
  `rgb(0, 128, 255,${opacity})`,
  `rgb(0, 0, 255,${opacity})`,
  `rgb(128, 0, 255,${opacity})`,
  `rgb(255, 0, 255,${opacity})`,
  `rgb(255, 0, 128,${opacity})`
];
return rgbColors[(parseInt(Math.random()*rgbColors.length))];
}

// colors[parseInt(Math.random()*colors.length)];

const colors = ["red", "blue", "green", "orange", "yellow", "indigo", "violet", "lime", "deeppink", "teal", "aquamarine"];

for (let i=0; i<300; i++) {
  let maxWidth = 120;
  let minWidth = 20;
  let maxHeight = 80;
  let minHeight = 20;

  let player = new Player(Math.random()*(canvas.width-maxWidth), Math.random()*(canvas.height-maxHeight), Math.random()*(maxWidth-minWidth)+minWidth, Math.random()*(maxHeight-minHeight)+minHeight,randomColor());
  player.draw();
}


  for (keyName in players) {
   // use window[variableReference] to adopt keyName as new player name;
   window[keyName] = new Player(...players[keyName]);
   // new person has name of key used in persons array;
   // and has global scope;
  } // next players keyname;
player1.draw();
player2.draw();
player3.draw();

player1.update();