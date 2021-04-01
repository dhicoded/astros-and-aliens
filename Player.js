class Player{
    constructor(){
        this.name=null;
        this.x=1;
        this.y=1;
        this.gridX=0;
        this.gridY=0;
        this.color=null;
    }

    display(){
        fill(this.color);
        circle(this.x,this.y,20);
    }

    calculatePosition(){
        //console.log('calculate position for',this.name);
        this.x=grid.snlGrid[activeCell.x][activeCell.y].boxSprite.x;
        this.y=grid.snlGrid[activeCell.x][activeCell.y].boxSprite.y;
        this.gridX=grid.snlGrid[activeCell.x][activeCell.y].rowno;
        this.gridY=grid.snlGrid[activeCell.x][activeCell.y].colno;
        console.log(this.x,this.y,this.gridX,this.gridY);
    }

    checkSnakeAndLadder(){
        var i=0;
        for(var i=0;i<totalSnakes;i++){
            if((this.gridX===snakes[i].start.x)&&(this.gridY===snakes[i].start.y)){
                activeCell.x=snakes[i].end.x;
                activeCell.y=snakes[i].end.y;
            }            
        }

        for(var i=0;i<totalLadders;i++){
            console.log(this.gridX,ladders[i].start.x,this.gridY,ladders[i].start.y)
            if((this.gridX===ladders[i].start.x)&&(this.gridY===ladders[i].start.y)){
                console.log('ladder match')
                activeCell.x=ladders[i].end.x;
                activeCell.y=ladders[i].end.y;
            }
        }
    }
}