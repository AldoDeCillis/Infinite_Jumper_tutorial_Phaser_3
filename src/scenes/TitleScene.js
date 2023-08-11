import Phaser from 'phaser';

export default class TitleScene extends Phaser.Scene {

    preload() {

    };

    create() {
        const welcomeText = this.add.text(400, 300, 'Infinite Jumper Test', { fontSize: '32px', fill: '#fff' })
        welcomeText.setOrigin(0.5, 0.5);
    };


}