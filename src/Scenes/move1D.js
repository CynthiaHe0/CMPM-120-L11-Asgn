class Move1D extends Phaser.Scene{
    constructor(){
        super("move1D");
        this.my = {sprite : {}};
        this.bodyX = 400;
        this.bodyY = 550;
    }
    preload(){
        this.load.setPath("./assets/");
        this.load.image("greenBody", "character_roundGreen.png")
        this.load.image("gemShot", "tile_gem.png");
    }
    create(){
        let my = this.my;
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "greenBody");
        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        let spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        my.sprite.gemShot = this.add.sprite(0, 0, "gemShot");
        my.sprite.gemShot.visible = false;
        spaceBar.on('down', (key, event) => {
            console.log("Made it here!");
            my.sprite.gemShot.x = my.sprite.body.x;
            my.sprite.gemShot.y = this.bodyY + 10;
            my.sprite.gemShot.visible = true;
        });
    }
    update(){
        let my = this.my;
        if (this.aKey.isDown){
            my.sprite.body.x -= 1;
            if (my.sprite.body.x <= 0) my.sprite.body.x = 0;
        }
        if (this.dKey.isDown){
            my.sprite.body.x += 1;
            if (my.sprite.body.x >= 800) my.sprite.body.x = 800;
        }
        if (my.sprite.gemShot.y > 0){
            my.sprite.gemShot.y -= 2;
        } else {
            my.sprite.gemShot.visible = false;
        }
    }
}