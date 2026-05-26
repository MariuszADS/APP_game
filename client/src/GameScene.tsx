import Phaser from 'phaser'

const config = {
  type: Phaser.AUTO,
  width: 1000,
  height: 600,
  // scene: {
  //   preload: preload,
  //   create: create,
  //   update: update
  // }
}


const game = new Phaser.Game(config)

function preload(this: Phaser.Scene) {
  this.load.image("background", "choose from assets")
  this.load.image("pole", "choose from assets")
  // this.load.spritesheet("dude","choose from assets") //is this need?
}

function create(this: Phaser.Scene, poles: Phaser.Physics.Arcade.StaticGroup) {
  this.add.image(500, 500, "background")
  poles = this.physics.add.staticGroup()
}

