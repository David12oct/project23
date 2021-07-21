class Player {
  constructor(x, y, w, h) {
    var player_features = {
      isStatic: true,
    };
    this.player = Bodies.rectangle(x, y, w, h, player_features);
    World.add(world, this.player);
    this.w = w;
    this.h = h;
    this.playerimg = loadImage("assets/player.png");
  }

  display() {
    push();
    translate(this.player.position.x, this.player.position.y);
    rotate(this.player.angle);
    imageMode(CENTER);
    image(this.playerimg, 0, 0, this.w, this.h);
    pop();
  }
}
