class Grid{
    constructor(){
        this.rows=10;
        this.columns=10;
        this.snlGrid=[];

        var num=1;
        
        for(var i=0;i<this.rows;i++){
            this.snlGrid[i]=[];
            for(var j=0;j<this.columns;j++){
                var options={
                    boxSprite:null,
                    color:null,
                    rowno:i,
                    colno:j,
                    value:num,
                }
               this.snlGrid[i][j]=options;
               num++;
            }
        }
    }
    display(){
        var x=50,y=500,flag=1,num=1,reverse=false;
        for(var i=0;i<this.rows;i++){
            for(var j=0;j<this.columns;j++){
                this.snlGrid[i][j].boxSprite=createSprite(x,y,50,50);
                //  this.snlGrid[i][j].boxSprite.visible=false;
                var box=this.snlGrid[i][j].boxSprite;
                //drawSprites();
                //console.log(x,y);
                if(flag===1){
                   box.shapeColor='grey';
                   flag=0;
                }
                else{
                    box.shapeColor='skyblue';
                    flag=1;
                }
                num++;
                if(reverse===true){
                    x=x-50;
                }
                else{
                    x=x+50;
                }
            }
            if (reverse===true) reverse=false
            else reverse=true
            if(reverse===true){
                x=500;
                y=y-50;    
            }
            else{
                x=50;
                y=y-50;
            }
        }
    }
    displayNumbers(){
        var x,y;
        push();
        for(var i=0;i<this.rows;i++){
            for(var j=0;j<this.columns;j++){
                stroke('white');
                fill('white')
                var temp=this.snlGrid[i][j].value;
                x=this.snlGrid[i][j].boxSprite.x-10;
                y=this.snlGrid[i][j].boxSprite.y+5;
                text(temp,x,y)
            }
        }
        pop();
    }
}