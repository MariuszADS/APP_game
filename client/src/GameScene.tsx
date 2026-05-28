import{ useEffect, useRef } from 'react';
import Phaser from 'phaser';

export function GameScene() {

  // game_div
  const gameContainer = useRef<HTMLDivElement>(null);

  // game_instance
  const gameRef = useRef<Phaser.Game | null>(null);

  // if game_div exist retrun current game_instance
  useEffect(() => {
    if (!gameContainer.current) return;

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
      parent: gameContainer.current,
    };

    //
    gameRef.current = new Phaser.Game(config);

    // Clean up Phaser instance on unmount
    return () => {
      gameRef.current?.destroy(true);
    };
  }, []);

  // Phaser scene functions
  function preload(this: Phaser.Scene) {
    this.load.image("background", "./assets/kenney_physics-assets/PNG/Backgrounds/blue_grass.png");
    this.load.image("bird", "./assets/kenney_animal-pack-remastered/PNG/Round/bear.png");
    this.load.image("pole", "./assets/kenney_physics-assets/PNG/Stone elements/elementStone017.png");
  }

  function create(this: Phaser.Scene) {
    this.add.image(500,300,"background")
    // const bird = this.physics.add.sprite(500, 500, "bird");
    // const poles = this.physics.add.group();
    //dodać więcej logiki tutaj
  }

  function update(this: Phaser.Scene) {
    // Logika gry
  }
  //
  return <div ref={gameContainer} style={{ width: 1000, height: 600}} />;
}