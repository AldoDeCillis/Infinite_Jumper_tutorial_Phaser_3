import Phaser from 'phaser';
import Player from '../objects/Player';

class Level_1 extends Phaser.Scene {
    preload() {
        this.load.image('background', 'public/assets/background.jpg');
    }
    create() {
        let player = new Player(this, this.physics)
    }

}

export default Level_1;