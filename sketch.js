var canvas
let selectedFile
let img 
let url 
let obj
//when p5 detects that the window has been resized update Canvas Height and Width
function windowResized()
{
    resizeCanvas(windowWidth, windowHeight);
 
}

function setup() {

    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0)
    canvas.style('z-index', '-1');
    /*loadImage('./src/Asset1.png', img => {
        image(img, 0, 0);
        image.style('z-index', '0');
      });
  */
      selectedFile = document.getElementById('star');
      console.log(selectedFile)
      img = selectedFile.src;
      console.log(img)

  //  url = URL.createObjectURL(img);
    obj = loadImage(img);  

  }
  
  function draw() {

    background('#3F1B35');


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

var galaxy = { 
    locationX : random(width),
    locationY : random(height),
    size : random(1,12)
  }

  obj(galaxy.locationX ,galaxy.locationY, galaxy.size, galaxy.size);
  
  }
