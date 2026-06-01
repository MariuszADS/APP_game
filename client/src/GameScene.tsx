import Phaser from 'phaser';

export function GameScene() {

  const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 1000,
    height: 600,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 100, x: -10 },
        debug: true,
      },
    },
    scene: {
      preload,
      create,
      update,
    },
  };


  // Phaser scene functions
  function preload(this: Phaser.Scene) {
    this.load.image("background", "./assets/kenney_physics-assets/PNG/Backgrounds/blue_grass.png");
    this.load.image("bird", "./assets/kenney_animal-pack-remastered/PNG/Round/bear.png");
    this.load.image("pole", "./assets/kenney_physics-assets/PNG/Stone elements/elementStone017.png");
  }

  function create(this: Phaser.Scene) {
    this.add.image(500, 300, "background")
  }

  function update(this: Phaser.Scene) {
  }
  
}

