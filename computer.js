class Computer {
    constructor(x, y, w, h) {
      var computer_features = {
        isStatic: true,
      };
      this.computer = Bodies.rectangle(x, y, w, h, computer_features);
      World.add(world, this.computer);
      this.w = w;
      this.h = h;
      this.computerimg = loadImage("assets/player.png");
    }
  
    display() {
      push();
      translate(this.computer.position.x, this.computer.position.y);
      rotate(this.computer.angle);
      imageMode(CENTER);
      image(this.computerimg, 0, 0, this.w, this.h);
      pop();
    }
  }
  