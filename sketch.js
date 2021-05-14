var scAngle, mnAngle, hrAngle;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  

  
  // changing anglemode to measure angle in degrees
  angleMode(DEGREES);


  // calculating hour, min and seconds using predefined functions from p5 

  hr = hour();
  text("current hour:\n" + hr,5,50);

  mn = minute();
  text("current minute:\n"+mn,5,75);

  sc = second();
  text("current second:\n"+sc,5,100);

scAngle = map(sc,0,60,0,360);

mnAngle = map(mn,0,60,0,360);

hrAngle = map(hr%12,0,12,0,360);

// drawing seconds hand

translate (400,200)
push()
rotate(scAngle);
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);
pop();

push()
rotate(mnAngle);
stroke("blue");
strokeWeight(7);
line(0,0,50,0);
pop();

push()
rotate(hrAngle);
stroke("green");
strokeWeight(7);
line(0,0,20,0);
pop();

  drawSprites();
}