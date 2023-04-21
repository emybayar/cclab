let colorBlue = "#1BE7FF";
let colorGreen = "#6EEB83";
let colorYellow = "#FFB800";
let colorOrange = "#FF5714";
let colorThistle = "#D7C0D0";

let x;
let y;

let angle = 20;

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("canvasContainer");
  background(227, 217, 133);

  x = width / 2;
  y = height / 2;
}

function draw() {
  //text question mark
  textSize(10);
  noStroke();
  fill(colorGreen);
  text("press g for green", 20, 30);
  fill(colorBlue);
  text("press b for blue", 20, 45);
  fill(colorYellow);
  text("press y for yellow", 20, 60);
  fill(colorOrange);
  text("press o for orange", 20, 75);
  fill(66, 32, 64);
  text("press delete to clear the canvas", 20, 90);
  fill(66, 32, 64);
  text("emy sainbayar", 510, 570);
  fill(colorOrange);
  text("draw by using your mouse", 20, 570);
  //circle in the middle
  fill(colorThistle);
  noStroke();
  circle(x, y, 50);

  translate(width / 2, height / 2);

  for (let i = 0; i < angle; i++) {
    rotate(angle);
    //default black line
    if (mouseIsPressed == true) {
      stroke(0);
      strokeWeight(1);
      line(pmouseX, pmouseY, mouseX, mouseY);
    }
    //blue line
    if (keyIsPressed == true) {
      if (key == "b" || key == "B") {
        if (mouseIsPressed == true) {
          stroke(colorBlue);
          strokeWeight(2);
          line(pmouseX, pmouseY, mouseX, mouseY);
        }
      }
    }
    //green line
    if (keyIsPressed == true) {
      if (key == "g" || key == "G") {
        if (mouseIsPressed == true) {
          stroke(colorGreen);
          strokeWeight(3);
          line(pmouseX, pmouseY, mouseX, mouseY);
        }
      }
    }
    //yellow color
    if (keyIsPressed == true) {
      if (key == "y" || key == "Y") {
        if (mouseIsPressed == true) {
          stroke(colorYellow);
          strokeWeight(4);
          line(pmouseX, pmouseY, mouseX, mouseY);
        }
      }
    }
    //orange color
    if (keyIsPressed == true) {
      if (key == "o" || key == "O") {
        if (mouseIsPressed == true) {
          stroke(colorOrange);
          strokeWeight(5);
          line(pmouseX, pmouseY, mouseX, mouseY);
        }
      }
    }
    //clear the canvas
    if (keyIsPressed == true) {
      if (keyCode == BACKSPACE) {
        background(227, 217, 133);
      }
    }
  }
}
