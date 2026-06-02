import { Scene } from "phaser";

export class Boot extends Scene {

    constructor() {
        super("Boot")
    }
    preload(){
        //fix assets alias
        this.load.image("background","/client/public/assets/kenney_physics-assets/PNG/Backgrounds/blue_grass.png")
    }
    create(){
        this.scene.start("Preloader")
    }
}
