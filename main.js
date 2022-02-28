const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
canvas.width = innerWidth; // window property;
canvas.height = innerHeight;

const players = { 
  player1: [20,20,50,50,"green"],
  player2: [50,50,20,20,"red"],
  player3: [90,100,25,30,"blue"]
};


class Player {
  constructor(x,y,width,height,color) {
  this.position = {x: x, y: y}
  this.width = width;
  this.height = height;
  this.color = color;
  }

  draw() {
  context.fillStyle = this.color;
  context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
} // end class;

/*
const player1 = new Player(...players[0]);
const player2 = new Player(...players[1]);
*/

  for (keyName in players) {
   // use window[variableReference] to adopt keyName as new player name;
   window[keyName] = new Player(...players[keyName]);
   // new person has name of key used in persons array;
   // and has global scope;
  } // next players keyname;
player1.draw();
player2.draw();
player3.draw();


