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

function room(start_x, start_y, level2){

  this.active = false; // This signifies that player is within the room
	this.map = [];
	this.cellsize = 40;
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
	this.player_key = 0;
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
		
		
		
		var inimg= new Image();
	
	switch(level2.playerLocation)						//where is the player ? 
    {
      
      case 2: //Building1
     
	  inimg.src= "images/interior1.png"
      break;
	  
      case 3: // building2
      
	  inimg.src= "images/interior2.png"
      break;
	  
      case 4: // building3
      
	  inimg.src= "images/interior3.png"
      break;
	  
	  case 5: // building4
	
	  inimg.src= "images/interior4.png"
	  break;
	  }
	      
	ctx.drawImage(inimg, 10,10);
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
			if(this.player_key==1){
			this.flag=!this.flag;
			this.player_key=0;
			}
			if(this.flag==0){testx=40;}
			else{testx=60;}
			ctx.drawImage(heroimg, testx,0,20,26,herox,heroy,40,40);
		}
		
		if(this.player_direction==2){				//Down
			if(this.player_key==1){
			this.flag=!this.flag;
			this.player_key=0;
			}
			if(this.flag==0){testx=0;}
			else{testx=20;}
			ctx.drawImage(heroimg, testx,0,20,26,herox,heroy,40,40);
		}
		
		if(this.player_direction==3){				//Left
			if(this.player_key==1){
			this.flag=!this.flag;
			this.player_key=0;
			}
			if(this.flag==0){testx=120;}
			else{testx=140;}
			ctx.drawImage(heroimg, testx,0,20,26,herox,heroy,40,40);
				
				
		}
		
		if(this.player_direction==4){				//Right
			if(this.player_key==1){
			this.flag=!this.flag;
			this.player_key=0;
			}
			if(this.flag==0){testx=80;}
			else{testx=100;}
			ctx.drawImage(heroimg, testx,0,20,26,herox,heroy,40,40);
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

function outdoor(start_x, start_y, level2){

  this.active = true; // Player is outside
  this.map = [];
  this.cellsize = 30;
  this.column = 16;
  this.row = 8;
  this.door_thickness = 8;
  this.flag=0;
  
  for(var i = 0; i < this.column; i++)
  {
    this.map[i] = [];

    for(var j = 0; j < this.row; j++)
    {
      this.map[i][j] = new cell(start_x + (i * this.cellsize), start_y + (j * this.cellsize));
      if(j == 2)
      {
        this.map[i][j].occupied = true;
      }
    }
  }

  // Initialize player position to the door
  this.map[15][4].player = true;
  this.map[15][4].occupied = true;
  this.player_position = new Point(15,4); //Cell coordinates of the player
  this.player_direction = 3; // 1 = up, 2 = down, 3 = left, 4 = right
  this.player_key = 0;
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
	
	var outimg = new Image();
	var inimg= new Image();
	
	switch(level2.playerLocation)						//where is the player ? 
    {
      
      case 2: //Building1
      outimg.src= "images/building1.png";
	 
      break;
	  
      case 3: // building2
      outimg.src= "images/building2.png";
	 
      break;
	  
      case 4: // building3
      outimg.src= "images/building3.png";
	 
      break;
	  
	  case 5: // building4
	  outimg.src= "images/building4.png";
	 
	  break;
	  }
	      
	ctx.drawImage(outimg, 0,0);
	
	
        
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
			if(this.player_key==1){
			this.flag=!this.flag;
			this.player_key=0;
			}
			if(this.flag==0){testx=40;}
			else{testx=60;}
			ctx.drawImage(heroimg, testx,0,20,26,herox,heroy,30,30);
		}
		
		if(this.player_direction==2){				//Down
			if(this.player_key==1){
			this.flag=!this.flag;
			this.player_key=0;
			}
			if(this.flag==0){testx=0;}
			else{testx=20;}
			ctx.drawImage(heroimg, testx,0,20,26,herox,heroy,30,30);
		}
		
		if(this.player_direction==3){				//Left
			if(this.player_key==1){
			this.flag=!this.flag;
			this.player_key=0;
			}
			if(this.flag==0){testx=120;}
			else{testx=140;}
			ctx.drawImage(heroimg, testx,0,20,26,herox,heroy,30,30);
				
				
		}
		
		if(this.player_direction==4){				//Right
			if(this.player_key==1){
			this.flag=!this.flag;
			this.player_key=0;
			}
			if(this.flag==0){testx=80;}
			else{testx=100;}
			ctx.drawImage(heroimg, testx,0,20,26,herox,heroy,30,30);
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

  this.list_flag = [];
  this.list_flag[0] = 0;
  this.list_flag[1] = 0;
  this.list_flag[2] = 0;
  this.list_flag[3] = 0;
  this.list_flag[4] = 0;
  this.list_flag[5] = 0;
  this.list_flag[6] = 0;
  this.list_flag[7] = 0;
  this.list_flag[8] = 0;
  this.list_flag[9] = 0;
  this.list_flag[10] = 0;
  this.list_flag[11] = 0;


}

function city(start_x, start_y){

  this.active = false; // This signifies that player is in the city
  this.map = [];
  this.cellsize = 40;
  this.column = 15;
  this.row = 10;

  for(var i = 0; i < this.column; i++)
  {
    this.map[i] = [];

    for(var j = 0; j < this.row; j++)
    {
      this.map[i][j] = new cell(start_x + (i * this.cellsize), start_y + (j * this.cellsize));
    }
  }

  //
  // Create this into player class
  //
  // Initialize player position to the door
  this.map[3][3].player = true;
  this.map[3][3].occupied = false;
  this.player_position = new Point(3,3); //Cell coordinates of the player
  this.player_direction = 2; // 1 = up, 2 = down, 3 = left, 4 = right
  this.player_key = 0;
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

        //Draw the building
        for(var i = 2; i < 5; i++)
        {
          for(var j = 1; j < 3; j++)
          {
            this.map[i][j].occupied = true;
            ctx.beginPath();
            ctx.rect(this.map[i][j].point.x, this.map[i][j].point.y, this.cellsize, this.cellsize);      
            ctx.fillStyle = 'grey';
            ctx.fill();

          }
        }

        for(var i = 6; i < 9; i++)
        {
          for(var j = 1; j < 3; j++)
          {
            this.map[i][j].occupied = true;
            ctx.beginPath();
            ctx.rect(this.map[i][j].point.x, this.map[i][j].point.y, this.cellsize, this.cellsize);      
            ctx.fillStyle = 'grey';
            ctx.fill();

          }
        }

        for(var i = 10; i < 13; i++)
        {
          for(var j = 1; j < 3; j++)
          {
            this.map[i][j].occupied = true;
            ctx.beginPath();
            ctx.rect(this.map[i][j].point.x, this.map[i][j].point.y, this.cellsize, this.cellsize);      
            ctx.fillStyle = 'grey';
            ctx.fill();

          }
        }

        for(var i = 2; i < 5; i++)
        {
          for(var j = 5; j < 7; j++)
          {
            this.map[i][j].occupied = true;
            ctx.beginPath();
            ctx.rect(this.map[i][j].point.x, this.map[i][j].point.y, this.cellsize, this.cellsize);      
            ctx.fillStyle = 'grey';
            ctx.fill();

          }
        }

        for(var i = 6; i < 9; i++)
        {
          for(var j = 5; j < 7; j++)
          {
            this.map[i][j].occupied = true;
            ctx.beginPath();
            ctx.rect(this.map[i][j].point.x, this.map[i][j].point.y, this.cellsize, this.cellsize);      
            ctx.fillStyle = 'grey';
            ctx.fill();

          }
        }

        for(var i = 10; i < 13; i++)
        {
          for(var j = 5; j < 7; j++)
          {
            this.map[i][j].occupied = true;
            ctx.beginPath();
            ctx.rect(this.map[i][j].point.x, this.map[i][j].point.y, this.cellsize, this.cellsize);      
            ctx.fillStyle = 'grey';
            ctx.fill();

          }
        }
       // var cityimg= new Image();
		//cityimg.src= "images/city.png";
		//ctx.drawImage(cityimg, 10,10);
		
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
   
    if(this.player_direction==1){       //UP
      if(this.player_key==1){
      this.flag=!this.flag;
      this.player_key=0;
      }
      if(this.flag==0){testx=40;}
      else{testx=60;}
      ctx.drawImage(heroimg, testx,0,20,26,herox,heroy,40,40);
    }
    
    if(this.player_direction==2){       //Down
      if(this.player_key==1){
      this.flag=!this.flag;
      this.player_key=0;
      }
      if(this.flag==0){testx=0;}
      else{testx=20;}
      ctx.drawImage(heroimg, testx,0,20,26,herox,heroy,40,40);
    }
    
    if(this.player_direction==3){       //Left
      if(this.player_key==1){
      this.flag=!this.flag;
      this.player_key=0;
      }
      if(this.flag==0){testx=120;}
      else{testx=140;}
      ctx.drawImage(heroimg, testx,0,20,26,herox,heroy,40,40);
        
        
    }
    
    if(this.player_direction==4){       //Right
      if(this.player_key==1){
      this.flag=!this.flag;
      this.player_key=0;
      }
      if(this.flag==0){testx=80;}
      else{testx=100;}
      ctx.drawImage(heroimg, testx,0,20,26,herox,heroy,40,40);
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