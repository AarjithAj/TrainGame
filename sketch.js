var s;
var f;
var r;
var scl = 25;
var b = 0;
var turned = false;
var speed = 10;
var apple;
var rockIMG;
var food_count = 0;
var rockArray = [];
var trainImg;
var trainCartImg;
var goodGasImg;
var badGasImg;
var gasMeter = 200;

function preload() {
    apple = loadImage("MyFinalGame.assets/apple.png");
    rockIMG = loadImage("MyFinalGame.assets/rock.jpg");
    trainImg = loadImage("MyFinalGame.assets/trainFront.png")
    trainCartImg = loadImage("MyFinalGame.assets/trainCartr.jpg")
    goodGasImg = loadImage("MyFinalGame.assets/goodGas.png");
    badGasImg = loadImage("MyFinalGame.assets/badGasr.png")
}
function setup() {
     createCanvas(600, 600);
     s = new Snake();
     f = new Food();
     r = new Rock();
     r1 = new Rock();
     //frameRate(10);
     for(var i = 0; i < food_count; i++) {
          r = new Rock();
          rockArray.push(r);
     }

     
}

function draw() {
     background(b);
     f.show();
     r.show();
     r.end();
     r1.show();
     r1.end();
     s.update();
     s.show();
     s.end();
     

     if (s.eat(f)) {
          f.eaten();
          food_count += 1;
          console.log(food_count);
     }
     for(var i = 0; i < rockArray.length; i++) {
          r.show();
          console.log(rockArray.length);
     }
     s.challenge();
     frameRate(speed + s.count / 3);
     turned = false;

     gasMeter = gasMeter - 0.2;

     fill("grey")
     rect(10,10,200,20)

     fill("red")
     rect(10,10,gasMeter,20)
}

function keyPressed() {

     if (keyCode === UP_ARROW && (this.s.yspeed != 1) && (turned === false)) {
          s.dir(0, -1);
          turned = true;
          return;
     }
     if (keyCode === DOWN_ARROW && (this.s.yspeed != -1) && (turned === false)) {
          s.dir(0, 1);
          turned = true;
          return;
     }
     if (keyCode === RIGHT_ARROW && (this.s.xspeed != -1) && (turned === false)) {
          s.dir(1, 0);
          turned = true;
          return;
     }
     if (keyCode === LEFT_ARROW && (this.s.xspeed != 1) && (turned === false)) {
          s.dir(-1, 0);
          turned = true;
     }
     if(keyCode === 32 && s.count >= 5) //space
     {
          s.increase();
          //console.log("this will be how i stop the game");
         // alert("hi");
     }
     

}