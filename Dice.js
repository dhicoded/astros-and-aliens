class Dice{
    constructor(){
        this.button=createButton('Roll');
        this.title=createElement('h6');
        this.aPlayer=createElement('h4');
        this.diceImage=createSprite(625,375,50,50);
    }
    display(){
//        this.title.html('Dice is rolling '+diceNumber);
//        this.title.position(600,250);

        this.button.position(600,300);
        
        this.aPlayer.html(activePlayer.name+' s turn');
        this.aPlayer.position(575,250);

        
        this.button.position(600,300);

        this.button.mousePressed(()=>{

            //var myVar = setTimeout(function(){
                dice.diceImage.scale=0.25;
                dice.diceImage.addAnimation('rolling',rollingdice);
                console.log('rolling');
            //}, 2000);

            //clearInterval();
            
      //      setTimeout(()=>{
            diceNumber=Math.round(random(1,6));
            switch(diceNumber){
                case 1:
                    dice.diceImage.addAnimation('rolling',diceface1);
                    break;
                case 2:
                    dice.diceImage.addAnimation('rolling',diceface2);
                    break;    
                case 3:
                    dice.diceImage.addAnimation('rolling',diceface3);
                    break;
                case 4:
                    dice.diceImage.addAnimation('rolling',diceface4);
                    break;    
                case 5:
                    dice.diceImage.addAnimation('rolling',diceface5);
                    break;
                case 6:
                    dice.diceImage.addAnimation('rolling',diceface6);
                    break;    
            }

            
            //console.log('rolling',diceNumber,activeCell)


            var player=activePlayer;
            var curr;
            //console.log('act'+activePlayer.name,activePlayer.gridX,activePlayer.gridY);
            activeCell.x=activePlayer.gridX;
            activeCell.y=activePlayer.gridY;
            //console.log(activeCell);
            //var curr=grid.snlGrid[activeCell.x][activeCell.y].value;
            if(gameState===1){
                curr=grid.snlGrid[player.gridX][player.gridY].value;
            }
            else{
                curr=-1;
                gameState=1;
            }
            console.log(curr);
            //console.log('active player is in '+curr);
            //console.log(activePlayer);
            if(diceNumber+curr===100){
                gameState=2;
                console.log('Won');
                alert('Game Over!!!');
                this.button.hide();
                activeCell.x=9;
                activeCell.y=9;
            }
            else if(diceNumber+curr<100){
                //gameState=1;
                if(activeCell.y+diceNumber>9){
                    activeCell.x+=1;
                    activeCell.y=diceNumber-(10-activeCell.y);
                }
                else{
                    activeCell.y=activeCell.y+diceNumber;
                }
                //console.log('rolling',diceNumber,activeCell)
                //console.log('Moving to',grid.snlGrid[activeCell.x][activeCell.y].value);
            }
            if(activePlayer===player1){
                player1.calculatePosition();
                player1.checkSnakeAndLadder();
                player1.calculatePosition();
            }
            else{
                player2.calculatePosition();
                player2.checkSnakeAndLadder();    
                player2.calculatePosition();

            }                

            if(activePlayer===player1) activePlayer=player2;
            else activePlayer=player1;
            //this.diceValue.html='Hello'+diceNumber;
        })
 //   }
    }
}