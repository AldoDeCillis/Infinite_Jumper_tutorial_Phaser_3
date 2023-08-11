import Phaser from 'phaser';
import TitleScene from './scenes/TitleScene';
import Level_1 from './scenes/Level_1';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
        }
    }
};

const game = new Phaser.Game(config);
//Adding Scenes
game.scene.add('titlescene', TitleScene);
game.scene.add('level1', Level_1);

game.scene.start('level1')
