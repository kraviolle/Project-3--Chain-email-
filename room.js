function Point(x,y){
	this.x = x; // X coordinate
	this.y = y; // Y coordinate
}

function cell(x,y){
    this.point=new Point(x,y);
    this.occupied=false;
    this.door = false;
    this.player = false;
    this.npc = -1; // Saves the index of the NPC in the NPC controller here
}

function room(start_x, start_y){

  this.active = false; // This signifies that player is within the room
	this.map = [];
	this.cellsize = 50;
	this.column = 8;
	this.row = 8;
	this.door_thickness = 8;

	for(var i = 0; i < this.column; i++)
	{
		this.map[i] = [];

		for(var j = 0; j < this.row; j++)
		{
			this.map[i][j] = new cell(start_x + (i * this.cellsize), start_y + (j * this.cellsize));
		}
	}

	// Initializing doors of the room
	// Doors are at [7,3], [7,4]
	this.map[3][7].door = true;
	this.map[3][7].door = true;

	//
  // Create this into player class
  //
  // Initialize player position to the door
	this.map[3][7].player = true;
	this.map[3][7].occupied = false;
	this.player_position = new Point(3,7); //Cell coordinates of the player
  this.player_direction = 1; // 1 = up, 2 = down, 3 = left, 4 = right
  //
  // Create this into player class
  //

	this.drawroom = function(){

		// Drawing the entire room
		ctx.beginPath();
		ctx.rect(start_x, start_y, this.column * this.cellsize, this.row * this.cellsize);      
      	ctx.fillStyle = 'white';
      	ctx.fill();
      	ctx.lineWidth = 2;
      	ctx.strokeStyle = 'black';
      	ctx.stroke();

      	// Drawing the grid
      	for(var i = 0; i < this.column; i++)
      	{
      		ctx.beginPath();
      		ctx.moveTo(start_x + (i * this.cellsize), start_y);
      		ctx.lineTo(start_x + (i * this.cellsize), start_y + (this.row * this.cellsize));
      		ctx.stroke();
      	}

      	for(var j = 0; j < this.row; j++)
      	{
      		ctx.beginPath();
      		ctx.moveTo(start_x, start_y + (j * this.cellsize));
      		ctx.lineTo(start_x + (this.column * this.cellsize), start_y + (j * this.cellsize));
      		ctx.stroke();
      	}

      	// Drawing the doors
      	ctx.beginPath();
		ctx.rect(this.map[3][7].point.x, this.map[3][7].point.y + this.cellsize - this.door_thickness, this.cellsize, this.door_thickness);      
      	ctx.fillStyle = 'brown';
      	ctx.fill();
      	ctx.lineWidth = 1;
      	ctx.strokeStyle = 'black';
      	ctx.stroke();
	}

	this.drawplayer = function(){
		  ctx.beginPath();
      ctx.arc(this.map[this.player_position.x][this.player_position.y].point.x + this.cellsize/2, this.map[this.player_position.x][this.player_position.y].point.y + this.cellsize/2, this.cellsize/2 - 2, 0, 2*Math.PI, true);
     	ctx.fillStyle = 'black';
      ctx.fill();
     	ctx.lineWidth = 2;
     	// line color
      	ctx.strokeStyle = 'black';
      	ctx.stroke();

    switch(this.player_direction)
    {
      case 1: // UP
      ctx.beginPath();
      ctx.arc(this.map[this.player_position.x][this.player_position.y].point.x + this.cellsize/2, this.map[this.player_position.x][this.player_position.y].point.y + this.cellsize/4, 2, 0, 2*Math.PI, true);
      ctx.fillStyle = 'white';
      ctx.fill();
      ctx.lineWidth = 2;
      break;
      case 2: // DOWN
      ctx.beginPath();
      ctx.arc(this.map[this.player_position.x][this.player_position.y].point.x + this.cellsize/2, this.map[this.player_position.x][this.player_position.y].point.y + (3 * this.cellsize/4), 2, 0, 2*Math.PI, true);
      ctx.fillStyle = 'white';
      ctx.fill();
      ctx.lineWidth = 2;
      break;
      case 3: // LEFT
      ctx.beginPath();
      ctx.arc(this.map[this.player_position.x][this.player_position.y].point.x + this.cellsize/4, this.map[this.player_position.x][this.player_position.y].point.y + this.cellsize/2, 2, 0, 2*Math.PI, true);
      ctx.fillStyle = 'white';
      ctx.fill();
      ctx.lineWidth = 2;
      break;
      case 4: // RIGHT
      ctx.beginPath();
      ctx.arc(this.map[this.player_position.x][this.player_position.y].point.x + (3 * this.cellsize/4), this.map[this.player_position.x][this.player_position.y].point.y + this.cellsize/2, 2, 0, 2*Math.PI, true);
      ctx.fillStyle = 'white';
      ctx.fill();
      ctx.lineWidth = 2;
      break;
    }
	}

	this.draw = function(){
		ctx.clearRect(0,0,canvas.width,canvas.height);
		this.drawroom();
		this.drawplayer();
		
	}

  this.draw_debug = function(){
    for(var i = 0; i < this.column; i++)
    {
      for(var j = 0; j < this.row; j++)
      {
          ctx.font="10px Arial";
          ctx.fillStyle = 'black';
          ctx.fillText(this.map[i][j].occupied, this.map[i][j].point.x + this.cellsize/4,this.map[i][j].point.y + this.cellsize/4); // Occupied status
          ctx.fillText(this.map[i][j].npc,this.map[i][j].point.x+this.cellsize/4,this.map[i][j].point.y + (this.cellsize/2)); // NPC ID
      }
    }
  }

}

function outdoor(start_x, start_y){

  this.active = true; // Player is outside
  this.map = [];
  this.cellsize = 30;
  this.column = 16;
  this.row = 8;
  this.door_thickness = 8;
  
  for(var i = 0; i < this.column; i++)
  {
    this.map[i] = [];

    for(var j = 0; j < this.row; j++)
    {
      this.map[i][j] = new cell(start_x + (i * this.cellsize), start_y + (j * this.cellsize));
    }
  }

  // Initialize player position to the door
  this.map[15][4].player = true;
  this.map[15][4].occupied = true;
  this.player_position = new Point(15,4); //Cell coordinates of the player
  this.player_direction = 3; // 1 = up, 2 = down, 3 = left, 4 = right
  //
  // Create this into player class
  //

  this.drawoutside = function(){
	


	
    // Drawing the entire room
        ctx.beginPath();
        ctx.rect(start_x, start_y, this.column * this.cellsize, this.row * this.cellsize);      
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'black';
        ctx.stroke();

        // Drawing the grid
        for(var i = 0; i < this.column; i++)
        {
          ctx.beginPath();
          ctx.moveTo(start_x + (i * this.cellsize), start_y);
          ctx.lineTo(start_x + (i * this.cellsize), start_y + (this.row * this.cellsize));
          ctx.stroke();
        }

        for(var j = 0; j < this.row; j++)
        {
          ctx.beginPath();
          ctx.moveTo(start_x, start_y + (j * this.cellsize));
          ctx.lineTo(start_x + (this.column * this.cellsize), start_y + (j * this.cellsize));
          ctx.stroke();
        }


        //Draw the building
        for(i = 5; i < 11; i++)
        {
          for(j = 0; j < 3; j++)
          {
            this.map[i][j].occupied = true;
            ctx.beginPath();
            ctx.rect(this.map[i][j].point.x, this.map[i][j].point.y, this.cellsize, this.cellsize);      
            ctx.fillStyle = 'grey';
            ctx.fill();

          }
        }

        //Draw the rubbish dumps
        for(i = 0; i < 16; i++)
        {
          for(j = 0; j < 2; j++)
          {
        //    this.map[i][j].occupied = true;
          }
        }

        
        // Drawing the door
        ctx.beginPath();
        ctx.rect(this.map[7][2].point.x, this.map[7][2].point.y + this.cellsize - this.door_thickness, this.cellsize, this.door_thickness);      
        ctx.fillStyle = 'brown';
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'black';
        ctx.stroke();
		
			
	// Test to draw img.
	var Testimg = new Image();        //- KEN , drawing over your cells. the door is positioned as such. will add more background stuff nxt time.
	Testimg.src= "images/city.png";
	ctx.drawImage(Testimg, 0,0);
	
	
        
  }

  this.drawplayer = function(){
      var heroimg= new Image();
	  heroimg.src="images/hero.png";
	  herox =this.map[this.player_position.x][this.player_position.y].point.x;
	  heroy = this.map[this.player_position.x][this.player_position.y].point.y;
	  
	  
	  
	  // Removing the black dot as player
	 /* ctx.beginPath();     
      ctx.arc(this.map[this.player_position.x][this.player_position.y].point.x + this.cellsize/2, this.map[this.player_position.x][this.player_position.y].point.y + this.cellsize/2, this.cellsize/2 - 2, 0, 2*Math.PI, true);
      ctx.fillStyle = 'black';
      ctx.fill();
      ctx.lineWidth = 2;
      // line color
        ctx.strokeStyle = 'black';
        ctx.stroke();
	 */
		if(this.player_direction==1){				//UP
			ctx.drawImage(heroimg, 60,0,20,26,herox, heroy,30,30);
			//this.testingX=this.testingX-20;
			//if(this.testingX<40){this.testingX=60;}
			
		}
		
		if(this.player_direction==2){				//Down
			ctx.drawImage(heroimg, 20,0,20,26,herox, heroy,30,30);
		}
		
		if(this.player_direction==3){				//Left
			ctx.drawImage(heroimg, 140,0,20,26,herox, heroy,30,30);
				
				
		}
		
		if(this.player_direction==4){				//Right
			ctx.drawImage(heroimg, 100,0,20,26,herox, heroy,30,30);
		}
    /*switch(this.player_direction)
    {
      case 1: // UP
      ctx.beginPath();
      ctx.arc(this.map[this.player_position.x][this.player_position.y].point.x + this.cellsize/2, this.map[this.player_position.x][this.player_position.y].point.y + this.cellsize/4, 2, 0, 2*Math.PI, true);
      ctx.fillStyle = 'white';
      ctx.fill();
      ctx.lineWidth = 2;
	  break;
      case 2: // DOWN
      ctx.beginPath();
      ctx.arc(this.map[this.player_position.x][this.player_position.y].point.x + this.cellsize/2, this.map[this.player_position.x][this.player_position.y].point.y + (3 * this.cellsize/4), 2, 0, 2*Math.PI, true);
      ctx.fillStyle = 'white';
      ctx.fill();
      ctx.lineWidth = 2;
      break;
      case 3: // LEFT
      ctx.beginPath();
      ctx.arc(this.map[this.player_position.x][this.player_position.y].point.x + this.cellsize/4, this.map[this.player_position.x][this.player_position.y].point.y + this.cellsize/2, 2, 0, 2*Math.PI, true);
      ctx.fillStyle = 'white';
      ctx.fill();
      ctx.lineWidth = 2;
      break;
      case 4: // RIGHT
      ctx.beginPath();
      ctx.arc(this.map[this.player_position.x][this.player_position.y].point.x + (3 * this.cellsize/4), this.map[this.player_position.x][this.player_position.y].point.y + this.cellsize/2, 2, 0, 2*Math.PI, true);
      ctx.fillStyle = 'white';
      ctx.fill();
      ctx.lineWidth = 2;
      break;
	  }*/
	  
    
  }

  this.draw = function(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    this.drawoutside();
    this.drawplayer();
    
  }

  this.draw_debug = function(){
    for(var i = 0; i < this.column; i++)
    {
      for(var j = 0; j < this.row; j++)
      {
          ctx.font="10px Arial";
          ctx.fillStyle = 'black';
          ctx.fillText(this.map[i][j].occupied, this.map[i][j].point.x + this.cellsize/4,this.map[i][j].point.y + this.cellsize/4); // Occupied status
          ctx.fillText(this.map[i][j].npc,this.map[i][j].point.x+this.cellsize/4,this.map[i][j].point.y + (this.cellsize/2)); // NPC ID
      }
    }
  }

  
  this.list = [];
  this.list[0] = new Point(0,3);
  this.list[1] = new Point(0,6);
  this.list[2] = new Point(2,4);
  this.list[3] = new Point(4,3);
  this.list[4] = new Point(4,5);
  this.list[5] = new Point(3,7);
  this.list[6] = new Point(7,7);
  this.list[7] = new Point(9,5);
  this.list[8] = new Point(11,6);
  this.list[9] = new Point(13,7);
  this.list[10] = new Point(11,3);
  this.list[11] = new Point(14,7);



}
