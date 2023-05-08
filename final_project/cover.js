// let cap;
// let video;

// function setup() {
//   createCanvas(800, 600);
//   cap = createCapture(VIDEO);
//   cap.size(500, 300);
//   cap.position(0, 0);
//   cap.hide();
//   rectMode(CENTER);
//   imageMode(CENTER);
//   //frameRate(1000);

//   let saveButton = createButton("SAVE");
//   saveButton.position(width - 60, height - 30);
//   saveButton.mousePressed(saveImage);
// }

// function draw() {
//   let crop = cap.get(
//     random(width),
//     random(height),
//     random(500, 500),
//     random(500, 200)
//   );
//   image(crop, random(width), random(height));

//   fill(255, 255, 0);
//   textSize(80);
//   textStyle(BOLD);
//   textAlign(RIGHT, TOP);
//   text("ZEEN*", width - 10, 10); // display text on the top right corner of the canvas
//   textSize(80);
//   textStyle(BOLD);
//   text("SPRING 23", width - 10, 70);
//   textAlign(CENTER, BOTTOM); // align text to the bottom center
//   textSize(25);
//   textStyle(BOLD);
//   textAlign(CENTER, BOTTOM);
//   text("*A COLLECTIVE OF INDIVIDUALS WHO WISH", width / 2, height - 105);
//   textSize(25);
//   textStyle(BOLD);
//   textAlign(CENTER, BOTTOM);
//   text(
//     " TO EXPRESS THEIR IDENTITIES THROUGH CREATIVE WORKS.",
//     width / 2,
//     height - 80
//   );
//   textSize(25);
//   textStyle(BOLD);
//   textAlign(CENTER, BOTTOM);
//   text("THIS IS THEIR PLATFORM. THE VISION OF ZEEN*", width / 2, height - 55);
//   textSize(25);
//   textStyle(BOLD);
//   textAlign(CENTER, BOTTOM);
//   text("HAS ONE GOAL ONLY—", width / 2, height - 30);
//   textSize(25);
//   textStyle(BOLD);
//   textAlign(CENTER, BOTTOM);
//   text("TO BRING ABOUT CONVERSATION.", width / 2, height - 5);
// }

// function saveImage() {
//   let imageName = "myZeenCover.png";
//   saveCanvas(imageName);
// }


let cap;
let video;

function setup() {
  createCanvas(800, 600);
  cap = createCapture(VIDEO);
  cap.size(500, 300);
  cap.position(0, 0);
  cap.hide();
  rectMode(CENTER);
  imageMode(CENTER);

  let saveButton = createButton("SAVE");
  saveButton.position(width - 60, height - 30);
  saveButton.mousePressed(saveImage);
}

function draw() {
  let crop = cap.get(
    random(width),
    random(height),
    random(500, 500),
    random(500, 200)
  );
  image(crop, random(width), random(height));
  
  let r = random(255);
  let g = random(255);
  let b = random(255);
  
  fill(r, g, b);
  rect(random(width), random(height), random(50, 150), random(50, 150));
  noStroke();

  fill(255, 255, 0);
  textSize(80);
  textStyle(BOLD);
  textAlign(RIGHT, TOP);
  text("ZEEN*", width - 10, 10); 
  textSize(80);
  textStyle(BOLD);
  text("SPRING 23", width - 10, 70);
  textAlign(CENTER, BOTTOM); 
  textSize(25);
  textStyle(BOLD);
  textAlign(CENTER, BOTTOM);
  text("*A COLLECTIVE OF INDIVIDUALS WHO WISH", width / 2, height - 105);
  textSize(25);
  textStyle(BOLD);
  textAlign(CENTER, BOTTOM);
  text(
    " TO EXPRESS THEIR IDENTITIES THROUGH CREATIVE WORKS.",
    width / 2,
    height - 80
  );
  textSize(25);
  textStyle(BOLD);
  textAlign(CENTER, BOTTOM);
  text("THIS IS THEIR PLATFORM. THE VISION OF ZEEN*", width / 2, height - 55);
  textSize(25);
  textStyle(BOLD);
  textAlign(CENTER, BOTTOM);
  text("HAS ONE GOAL ONLY—", width / 2, height - 30);
  textSize(25);
  textStyle(BOLD);
  textAlign(CENTER, BOTTOM);
  text("TO BRING ABOUT CONVERSATION.", width / 2, height - 5);
}

function saveImage() {
  let imageName = "myZeenCover.png";
  saveCanvas(imageName);
}
