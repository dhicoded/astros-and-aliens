var grid;
var diceNumber=0;

var activeCell={
  x:0,
  y:0
}

var snakes=[],ladders=[];
var totalSnakes=5,totalLadders=4;
var activePlayer;
var gameState=0; //0 for ready, 1 for play, 2 for end

function preload(){
  rollingdice=loadAnimation('images/rollingdice1.png','images/rollingdice2.png','images/rollingdice3.png','images/rollingdice4.png','images/rollingdice5.png','images/rollingdice6.png');
  diceface1=loadImage('images/diceface1.png');
  diceface2=loadImage('images/diceface2.png');
  diceface3=loadImage('images/diceface3.png');
  diceface4=loadImage('images/diceface4.png');
  diceface5=loadImage('images/diceface5.png');
  diceface6=loadImage('images/diceface6.png');

  ladder1=loadImage('images/astro1.png');
  ladder2=loadImage('images/astro2.png');
  ladder3=loadImage('images/astro3.png');
  ladder4=loadImage('images/astro4.png');

  monster1=loadImage('images/monster1.png');
  monster2=loadImage('images/monster2.png');
  monster3=loadImage('images/monster3.png');
  monster4=loadImage('images/monster4.png');
  monster5=loadImage('images/monster5.png');

  bg=loadImage('images/space.jpg');
}

function setup() {
  createCanvas(1800,1800);

  //bg=createSprite(275,275,500,500);
  

  grid=new Grid();
  dice = new Dice();
  //dice.diceImage.addAnimation('rolling',rollingdice);
  //dice.diceImage.scale=0.25;
  player1=new Player();
  player2=new Player();

  player1.color='blue';
  player2.color='orange';
 
  ladders[0]=new Ladder(0,3,5,2);
  ladders[1]=new Ladder(2,5,7,8);
  ladders[2]=new Ladder(6,3,7,3);
  ladders[3]=new Ladder(6,7,9,0);

  snakes[0]=new Snake(3,7,1,4);
  snakes[1]=new Snake(5,6,3,4);
  snakes[2]=new Snake(6,1,0,2);
  snakes[3]=new Snake(5,1,1,1);
  snakes[4]=new Snake(9,8,7,7);
  
  ladders[0].image=ladder1;
  ladders[1].image=ladder2;
  ladders[2].image=ladder3;
  ladders[3].image=ladder4;

  snakes[0].image=monster1;
  snakes[1].image=monster2;
  snakes[2].image=monster3;
  snakes[3].image=monster4;
  snakes[4].image=monster5;

  player1.x=600;
  player1.y=500;
  player1.gridX=0;
  player1.gridY=0;

  player2.x=650;
  player2.y=500;
  player2.gridX=0;
  player2.gridY=0;

  player1.name='blue';
  player2.name='orange';

  activePlayer=player1;

}

function draw() {
  //background(255,255,255);  
  

  grid.display();


  dice.display(); 

  drawSprites();

  push();
  tint(0, 153, 204, 126);
  image(bg,25,25,500,500);
  pop();

  grid.displayNumbers();

  for(var i=0;i<totalSnakes;i++)
    snakes[i].display();

  for(var i=0;i<totalLadders;i++)
    ladders[i].display();

  //if(gameState===1){
    //console.log(activePlayer.name+' is playing');

    //console.log(player1.gridX,player1.gridX,player2.gridX,player2.gridY);

  //}

  player1.display();
  player2.display();

}