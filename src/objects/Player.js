export default class Player
{
    constructor(scene, physics){
        this.scene = scene;
        this.physics = physics;
        let ball = scene.add.circle(400,400,10,0xffffff);
        scene.physics.add.existing(ball);
        ball.body.setBounce(0.2);
        ball.body.setCollideWorldBounds(true);
        ball.body.setGravityY(100);
    }

}