function Point(x,y){
	this.x = x; // X coordinate
	this.y = y; // Y coordinate
}

function cell(x,y){
    this.point=new Point(x,y);
    this.occupied=false;
    this.door = false;
    this.player = false;
    this.npc = false;
}

function room(start_x, start_y){

  this.active = true; // This signifies that player is within the room
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
	this.occupied = true;
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
		ctx.rect(this.map[3][7].point.x, this.map[3][7].point.y + this.cellsize - this.door_thickness, 2 * this.cellsize, this.door_thickness);      
      	ctx.fillStyle = 'brown';
      	ctx.fill();
      	ctx.lineWidth = 1;
      	ctx.strokeStyle = 'black';
      	ctx.stroke();
	}

	this.drawplayer = function(){
		  ctx.beginPath();
      ctx.arc(this.map[this.player_position.x][this.player_position.y].point.x + this.cellsize/2, this.map[this.player_position.x][this.player_position.y].point.y + this.cellsize/2, this.cellsize/2 - 2, 0, 2*Math.PI, true);
     	ctx.fillStyle = 'red';
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
      ctx.fillStyle = 'brown';
      ctx.fill();
      ctx.lineWidth = 2;
      break;
      case 2: // DOWN
      ctx.beginPath();
      ctx.arc(this.map[this.player_position.x][this.player_position.y].point.x + this.cellsize/2, this.map[this.player_position.x][this.player_position.y].point.y + (3 * this.cellsize/4), 2, 0, 2*Math.PI, true);
      ctx.fillStyle = 'brown';
      ctx.fill();
      ctx.lineWidth = 2;
      break;
      case 3: // LEFT
      ctx.beginPath();
      ctx.arc(this.map[this.player_position.x][this.player_position.y].point.x + this.cellsize/4, this.map[this.player_position.x][this.player_position.y].point.y + this.cellsize/2, 2, 0, 2*Math.PI, true);
      ctx.fillStyle = 'brown';
      ctx.fill();
      ctx.lineWidth = 2;
      break;
      case 4: // RIGHT
      ctx.beginPath();
      ctx.arc(this.map[this.player_position.x][this.player_position.y].point.x + (3 * this.cellsize/4), this.map[this.player_position.x][this.player_position.y].point.y + this.cellsize/2, 2, 0, 2*Math.PI, true);
      ctx.fillStyle = 'brown';
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

        
        // Drawing the doors
        ctx.beginPath();
        ctx.rect(this.map[7][2].point.x, this.map[7][2].point.y + this.cellsize - this.door_thickness, 2 * this.cellsize, this.door_thickness);      
        ctx.fillStyle = 'brown';
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'black';
        ctx.stroke();
        
  }

}