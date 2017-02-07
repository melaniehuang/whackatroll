var game = new Phaser.Game(1200, 600, Phaser.AUTO, "phaser-example", { preload: preload, create: create, render: render, update: update });

function preload() {

    game.load.image("phaser", "assets/sprites/character.png");

}

var sprite;

var trollHoleP1 = ["U1", "R1", "D1", "L1"];
var trollHoleP2 = ["U2", "R2", "D2", "L2"];

var trollHole = [];

var upKey;
var downKey;
var leftKey;
var rightKey;

function create() {

  game.stage.backgroundColor = "#736357";
  sprite = game.add.sprite(300, 300, "phaser");

  upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
  downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
  leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
  rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
  wKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
  aKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
  sKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
  dKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
  
  trollHole[0] = new Phaser.Rectangle(300, 100, 70, 50);
  trollHole[1] = new Phaser.Rectangle(150, 250, 70, 50);
  trollHole[2] = new Phaser.Rectangle(300, 400, 70, 50);
  trollHole[3] = new Phaser.Rectangle(450, 250, 70, 50);

  trollHole[4] = new Phaser.Rectangle(800, 100, 70, 50);
  trollHole[5] = new Phaser.Rectangle(650, 250, 70, 50);
  trollHole[6] = new Phaser.Rectangle(800, 400, 70, 50);
  trollHole[7] = new Phaser.Rectangle(950, 250, 70, 50);
  
}

function render(){
  for (var i = 0; i < 8; i++){
    game.debug.geom(trollHole[i], "#000"); 
  }
  
  if (upKey.isDown){
    game.debug.geom(trollHole[0], "#fff");
  } else if (downKey.isDown){
    game.debug.geom(trollHole[2], "#fff");
  }

  if (leftKey.isDown){
    game.debug.geom(trollHole[1], "#fff");
  } else if (rightKey.isDown){
    game.debug.geom(trollHole[3], "#fff");
  }

  if (wKey.isDown){
    game.debug.geom(trollHole[4], "#fff");
  } else if (sKey.isDown){
    game.debug.geom(trollHole[6], "#fff");
  }

  if (aKey.isDown){
    game.debug.geom(trollHole[5], "#fff");
  } else if (dKey.isDown){
    game.debug.geom(trollHole[7], "#fff");
  }
}

function update() {
}
