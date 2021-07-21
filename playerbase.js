class Playerbase {
    constructor(x, y, w, h) {
      var playerbase_features = {
        isStatic: true,
      };
      this.playerbase = Bodies.rectangle(x, y, w, h, playerbase_features);
      World.add(world, this.playerbase);
      this.w = w;
      this.h = h;
      this.playerbaseimg = loadImage("assets/base1.png");
    }
  
    display() {
      push();
      translate(this.playerbase.position.x, this.playerbase.position.y);
      rotate(this.playerbase.angle);
      imageMode(CENTER);
      image(this.playerbaseimg, 0, 0, this.w, this.h);
      pop();
    }
  }
  