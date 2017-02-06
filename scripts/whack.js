var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {

    game.load.image('phaser', 'assets/sprites/character.png');

}

var sprite;

var upKey;
var downKey;
var leftKey;
var rightKey;

function create() {

    game.stage.backgroundColor = '#736357';

    sprite = game.add.sprite(300, 300, 'phaser');

    upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);

}

function update() {

    if (upKey.isDown)
    {
      game.stage.backgroundColor = "#30d4f0";
      sprite.y--;
    }
    else if (downKey.isDown)
    {
        game.stage.backgroundColor = "#a9ffe3";
        sprite.y++;
    }

    if (leftKey.isDown)
    {
        game.stage.backgroundColor = "#f8f118";
        sprite.x--;
    }
    else if (rightKey.isDown)
    {
        game.stage.backgroundColor = "#ef828f";
        sprite.x++;
    }

}
