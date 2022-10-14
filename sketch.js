
var canvas
let profile
function preload()
{
    img = loadImage('1x\Asset1.png');
}

//when p5 detects that the window has been resized update Canvas Height and Width

function windowResized()
{
    resizeCanvas(windowWidth, windowHeight);
 
}

//-------------------------------------------------------------------------------




function setup() {

    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0)
    canvas.style('z-index', '-1');
  
    image(img, 0, 0);

  }
  
  function draw() {



    background('#3F1B35');

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


  }