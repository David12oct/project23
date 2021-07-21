class Computerbase {
    constructor(x, y, w, h) {
      var computerbase_features = {
        isStatic: true,
      };
      this.computerbase = Bodies.rectangle(x, y, w, h, computerbase_features);
      World.add(world, this.computerbase);
      this.w = w;
      this.h = h;
      this.computerbaseimg = loadImage("assets/base1.png");
    }
  
    display() {
      push();
      translate(this.computerbase.position.x, this.computerbase.position.y);
      rotate(this.computerbase.angle);
      imageMode(CENTER);
      image(this.computerbaseimg, 0, 0, this.w, this.h);
      pop();
    }
  }
  