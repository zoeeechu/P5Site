var canvas
let selectedFile

let obj
let cat 


const dots = [];
const border = 20;
let white

//when p5 detects that the window has been resized update Canvas Height and Width
function windowResized()
{
    resizeCanvas(windowWidth, windowHeight);
 
}

function setup() {

  
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0)
    canvas.style('z-index', '-1');


    obj = loadImage("https://i.imgur.com/w4MKMl3.png");  
    cat = loadImage("https://docs.rundeck.com/docs/assets/img/saucer-cat.30aa897b.png");  
    
    

    for (let layer = 1; layer <= 3; layer++) {
        for (let i = 0; i < 200; i++) {
          dots.push(new Dot(layer));
        }
      }

}

  function draw() {

   background(63, 27, 53)

   image(cat, 0, 0);

   for (const dot of dots) {
    dot.draw();
  }

var galaxy = { 
    locationX : random(width),
    locationY : random(height),
    size : random(5,17)
  }

 
    if(frameCount % 20 == 0){
        image(obj,galaxy.locationX ,galaxy.locationY, galaxy.size, galaxy.size);    
    }
  }

  class Dot {
    constructor(layer) {
      this.layer = layer;
      this.x = random(-border, width + border);
      this.y = random(-border, height + border);

    }


    white = (255,255,255)
   
 
  
    draw() {
      let deltaX = 0;
      let deltaY = 0;
  
      if(mouseX != 0 && mouseY != 0){
        deltaX = -this.layer *
          map(mouseX - width / 2, 0, width, 0, 5);
        deltaY = -this.layer *
          map(mouseY - height / 2, 0, height, 0, 5);
      }
  
      this.x += deltaX;
      this.y += deltaY;
  
      if (this.x < -border) {
        this.x = width + random(border);
        this.y = random(0, height);
      } else if (this.x > width + border) {
        this.x = 0 - random(border);
        this.y = random(0, height);
      }
  
      if (this.y < -border) {
       this.y = height + random(border);
        this.x = random(0, width);
      } else if (this.y > height + border) {
        this.y = 0 - random(border);
        this.x = random(0, width);
      }
  
      fill(white, white, 0,);
      noStroke();
      circle(this.x, this.y, 5 / (1 - this.layer));
    }
  }


  /*
    stroke('#492440');
    beginShape();
        curveVertex(40,40);
        curveVertex(40,40);
        curveVertex(80,60);
        curveVertex(100,100);
        curveVertex(60,120);
        curveVertex(50,150);
        curveVertex(50,150);
        endShape();
    strokeWeight(200);
    line(500, windowHeight + 100, windowWidth + 100, 500);

*/