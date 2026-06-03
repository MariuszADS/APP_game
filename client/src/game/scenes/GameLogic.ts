import { Scene } from "phaser";

export class GameLogic extends Scene {

    background!: Phaser.GameObjects.Image;
    camera!: Phaser.Cameras.Scene2D.Camera
    gameText!: Phaser.GameObjects.Text

    constructor() {
        super("GameLogic")
    }

    create() {
        this.camera = this.cameras.main
        this.camera.setBackgroundColor(0.5)

        this.background = this.add.image(500, 400, 'background')
        this.background.setAlpha(0.5);


        this.gameText = this.add.text(512, 384, 'Make something fun!\nand share it with us:\nsupport@phaser.io', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setDepth(100);
    }
}