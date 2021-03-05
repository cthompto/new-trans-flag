// Proposal For a New Trans Flag
// Chelsea Thompto
// 2020

let r1 = 124;
let r2 = 245;
let r3 = 255;
let g1 = 192;
let g2 = 152;
let g3 = 255;
let b1 = 234;
let b2 = 192;
let b3 = 255;
let r1b = 124;
let r2b = 245;
let r3b = 255;
let g1b = 192;
let g2b = 152;
let g3b = 255;
let b1b = 234;
let b2b = 192;
let b3b = 255;

function setup() {
  var canvas = createCanvas(400, 200);
  canvas.parent('sketch-holder');
  frameRate(60);
  strokeWeight(0);
  background(255);
}

function draw() {
  if (frameCount < 180) {
  } else {
    blueBar();
    pinkBar();
    whiteBar();
  }
  drawFlag();
}

function drawFlag() {
  fill(r1,g1,b1);
  rect(0,0,400,40);
  fill(r2,g2,b2);
  rect(0,40,400,80);
  fill(r3,g3,b3);
  rect(0,80,400,120);
  fill(r2,g2,b2);
  rect(0,120,400,160);
  fill(r1,g1,b1);
  rect(0,160,400,200);
  fill(0,0,0);
  triangle(0,0,100,100,0,200);
  fill(96,57,24);
  triangle(0,50,50,100,0,150);
}

function blueBar() {
  if (r1 < r1b) {
    r1 = r1 + 1;
  } else if (r1 > r1b) {
    r1 = r1 - 1;
  } else if (r1 == r1b) {
    r1b = round(random(254));
  }
  if (g1 < g1b) {
    g1 = g1 + 1;
  } else if (g1 > g1b) {
    g1 = g1 - 1;
  } else if (g1 == g1b) {
    g1b = round(random(254));
  }
  if (b1 < b1b) {
    b1 = b1 + 1;
  } else if (b1 > b1b) {
    b1 = b1 - 1;
  } else if (b1 == b1b) {
    b1b = round(random(100,254));
  }
}

function pinkBar() {
  if (r2 < r2b) {
    r2 = r2 + 1;
  } else if (r2 > r2b) {
    r2 = r2 - 1;
  } else if (r2 == r2b) {
    r2b = round(random(100,254));
  }
  if (g2 < g2b) {
    g2 = g2 + 1;
  } else if (g2 > g2b) {
    g2 = g2 - 1;
  } else if (g2 == g2b) {
    g2b = round(random(254));
  }
  if (b2 < b2b) {
    b2 = b2 + 1;
  } else if (b2 > b2b) {
    b2 = b2 - 1;
  } else if (b2 == b2b) {
    b2b = round(random(254));
  }
}

function whiteBar () {
  if (r3 < r3b) {
    r3 = r3 + 1;
  } else if (r3 > r3b) {
    r3 = r3 - 1;
  } else if (r3 == r3b) {
    r3b = round(random(200));
  }
  if (g3 < g3b) {
    g3 = g3 + 1;
  } else if (g3 > g3b) {
    g3 = g3 - 1;
  } else if (g3 == g3b) {
    g3b = round(random(200));
  }
  if (b3 < b3b) {
    b3 = b3 + 1;
  } else if (b3 > b3b) {
    b3 = b3 - 1;
  } else if (b3 == b3b) {
    b3b = round(random(200));
  }
}
