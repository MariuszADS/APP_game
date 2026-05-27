import Phaser from 'phaser'

let bird: Phaser.Physics.Arcade.Sprite
let poles: Phaser.Physics.Arcade.Group


const config: Phaser.Types.Core.GameConfig = {
  physics: {
    default: "arcade",
    arcade: {
      x: 1000,
      y: 600,
      gravity: {
        x: 0,
        y: 500
      },
      debug: true,
      customUpdate: true,
      //    checkCollision: {
      //        up: true,
      //        down: true,
      //        left: true,
      //        right: true
      //    },
      //    fixedStep: true,
      //    fps: 60,
      //    timeScale: 1,     // 2.0 = half speed, 0.5 = double speed
      //    customUpdate: false,
      //    overlapBias: 4,
      //    tileBias: 16,
      //    forceX: false,
      //    isPaused: false,
      //    debugShowBody: true,
      //    debugShowStaticBody: true,
      //    debugShowVelocity: true,
      //    debugBodyColor: 0xff00ff,
      //    debugStaticBodyColor: 0x0000ff,
      //    debugVelocityColor: 0x00ff00,
      //    maxEntries: 16,
      //    useTree: true   // set false if amount of dynamic bodies > 5000
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

new Phaser.Game(config)

function preload(this: Phaser.Scene) {
  this.load.image("background", "choose from assets")
  this.load.image("bird", "choose from assets")
  this.load.image("pole", "choose from assets")
}

/*
gravity
jump
moving poles
collision
score
 */
function create(this: Phaser.Scene) {
  this.add.image(500, 500, "background")
  bird = this.physics.add.sprite(500, 500, "bird")
  poles = this.physics.add.group()

  //GRAVITY
  this.physics.world.gravity.x;
  this.physics.world.gravity.y;



}

function update(this: Phaser.Scene) {

}
