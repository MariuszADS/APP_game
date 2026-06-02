import { Scene } from "phaser";

export class Preloader extends Scene {
   
    constructor() {
        super("Preloader")
    }

    init(){
        //  We loaded this image in our Boot Scene, so we can display it here
        this.add.image(500,400,"background")
    }

}