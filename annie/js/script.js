let message = 'annie church,\nlet\'s make this formal\na religious experience\nby going together';
let index = 0;
let letterDelay = 50; // time delay in milliseconds (0.5 seconds)
let lastLetterTime = 0;
let hearts = [];

function setup() {
  createCanvas(windowHeight, windowHeight);
  textSize(100);
  textAlign(CENTER, CENTER);
  fill(255);
}

function mousePressed() {
  if (mouseX > 0 && mouseX < windowWidth && mouseY > 0 && mouseY < windowHeight) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}

function draw() {
  background(255, 102, 0);
  text(message.substring(0, index), width/2, height/2);
  
  if (index == message.length && millis() > letterDelay + lastLetterTime) {
    // generate hearts
    if (random(1) < 0.2) {
      let x = random(width);
      let y = random(height);
      hearts.push(new Heart(x, y));
    }
  }
  
  if (index < message.length) {
    if (millis() > letterDelay + lastLetterTime) {
      index++;
      lastLetterTime = millis();
    }
  }
  
  // animate hearts
  for (let i = hearts.length - 1; i >= 0; i--) {
    hearts[i].move();
    hearts[i].display();
    if (hearts[i].offscreen()) {
      hearts.splice(i, 1);
    }
  }
}

class Heart {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-2, 2), random(-5, -1));
    this.acc = createVector(0, 0.1);
    this.size = random(10, 30);
    this.color = color(random(255), random(255), random(255));
  }
  
  move() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }
  
  display() {
    fill(this.color);
    noStroke();
    beginShape();
    vertex(this.pos.x, this.pos.y + this.size/4);
    bezierVertex(this.pos.x + this.size/2, this.pos.y - this.size/2,
                 this.pos.x + this.size/4, this.pos.y - this.size/4,
                 this.pos.x, this.pos.y - this.size/2);
    bezierVertex(this.pos.x - this.size/4, this.pos.y - this.size/4,
                 this.pos.x - this.size/2, this.pos.y - this.size/2,
                 this.pos.x, this.pos.y + this.size/4);
    endShape();
  }
  
  offscreen() {
    return (this.pos.y > height + this.size);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
