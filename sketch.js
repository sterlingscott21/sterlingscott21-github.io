var jackson
var back
var pegusMoon
var pegusImgs = [];
var ok;
var currentPegus = 0;
var timeChecked = 0;
var pegus;

//Pike pictures
function preload(){
  back  = loadImage("hqdefault.jpg")
  pegusMoon = loadImage("PegusMoon.png")
  pegusImgs[0] = loadImage("pegus1.png")
  pegusImgs[1] =loadImage("pegus2.png")
  pegusImgs[2] =loadImage("pegus3.png")
  pegusImgs[3] =loadImage("pegus4.png")
  jackson =loadSound("Don't Stop 'Til You Get Enough (1).mp3")
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  ok = prompt("Is Pegus Ok???")
  pegus = new Pegus();
}
//CAll TO ACTION
function draw() {
  background(back);
  pegus.moonwalk();
  pegus.display();

}

function Pegus(){
  this.x= 50;
  this.y= 50;
  this.moonwalk = function() {
    this.x = 100* sin(millis()/1000.0) + 350;
  };
  //Pike Movents display
  this.display=function() {
    if (ok == "no") {
      for (var i = 0; i<10; i++){
        image(pegusImgs[0],this.x -150 + i*100, this.y, 300, 300);
      }
      //Pike Movemen
    }
    else if (ok == "maybe") {
      image(pegusImgs[3],this.x,this.y,300,300)
    }
    else {
      if (!jackson.isPlaying()) jackson.play()
      if (millis() - timeChecked >  1000)  {
        timeChecked =  millis();
        currentPegus++;
      }
      if (currentPegus == 0) {
        image(pegusMoon,this.x,this.y,300,300)
      }
      else if (currentPegus == 1) {
        image(pegusImgs[0],this.x,this.y,300,300)
      }
      else if (currentPegus == 2) {
        image(pegusImgs[1],this.x,this.y,300,300)
      }
      else if (currentPegus == 3) {
        image(pegusImgs[2],this.x,this.y,300,300)
      }
      else {
        image(pegusImgs[3],this.x,this.y,300,300)
      }
    }
  }
}
