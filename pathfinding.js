function pathfinding(room, outside){


this.steering = function(NPC, destination, inside, condition){

	// Inside tells the steering if the destination is inside or outside
	// inside = true means the destination is in the room
	// inside = false means the destination is outside

	//Condition - Use to check for pathfinding. Always try to move towards target. If condition = 4, move to avoid obstacle

	//If destination in the same room
	if(NPC.inside && inside)
	{		
			
			if(NPC.destination.y < NPC.y && NPC.y != 0)// If destination higher than current position, go up
			{
				if(!room.map[NPC.x][NPC.y - 1].occupied)
				{
					this.move_up(NPC, room);
					console.log('up');
					condition = 0;
				}
				else if(NPC.x != 0 && !room.map[NPC.x - 1][NPC.y].occupied && condition >= 4)// If can't go up, go left
				{	
					this.move_left(NPC, room);
					condition = 0;					
					if(!room.map[NPC.x][NPC.y - 1].occupied)
					{
						this.move_up(NPC, room);
						console.log('up');
						condition = 0;
					}
					
				}
				else if(NPC.x != room.column - 1 && !room.map[NPC.x + 1][NPC.y].occupied && condition >= 4)		// If can't go left, go right
				{
					this.move_right(NPC, room);
					condition = 0;					
					if(!room.map[NPC.x][NPC.y - 1].occupied)
					{
						this.move_up(NPC, room);
						console.log('up');
						condition = 0;
					}
					
				}
				else
				{
					condition++; // tells the NPC that there is an obstacle or not the correct direction
				}
			}
			else
			{
				condition++; // tells the NPC that there is an obstacle or not the correct direction
			}

			if(NPC.destination.y > NPC.y && NPC.y != room.row - 1)// if destination lower than current position, go down
			{
				if(!room.map[NPC.x][NPC.y + 1].occupied)
				{
					this.move_down(NPC, room);
					console.log('down');
					condition = 0;
				}
				else if(NPC.x != 0 && !room.map[NPC.x - 1][NPC.y].occupied && condition >= 4)		// If can't go down, go left
				{
					this.move_left(NPC, room);
					condition = 0;
					if(!room.map[NPC.x][NPC.y + 1].occupied)
					{	
						this.move_down(NPC, room);
						console.log('down');
						condition = 0;
					}
					

				}
				else if(NPC.x != room.column - 1 && !room.map[NPC.x + 1][NPC.y].occupied && condition >= 4)		// If can't go left, go right
				{
					this.move_right(NPC, room);
					condition = 0;
					if(!room.map[NPC.x][NPC.y + 1].occupied)
					{
						this.move_down(NPC, room);
						console.log('down');
						condition = 0;
					}
					
				}
				else
				{
					condition++; // tells the NPC that there is an obstacle or not the correct direction
				}
			}
			else
			{
				condition++; // tells the NPC that there is an obstacle or not the correct direction
			}

			if(NPC.destination.x < NPC.x && NPC.x != 0)// If destination to the left of current position, go left
			{
				if(!room.map[NPC.x -1][NPC.y].occupied)
				{
					this.move_left(NPC, room);
					console.log('left');
					condition = 0;
				}
				else if(NPC.y != 0 && !room.map[NPC.x][NPC.y -1].occupied && condition >= 4)// If can't go left, go up
				{
					this.move_up(NPC, room);
					condition = 0;
					if(!room.map[NPC.x -1][NPC.y].occupied)
					{
						this.move_left(NPC, room);
						console.log('left');
						condition = 0;
					}
					

				}
				else if(NPC.y != room.row - 1 && !room.map[NPC.x][NPC.y + 1].occupied && condition >= 4)// If can't go up, go down
				{
					this.move_down(NPC, room);
					condition = 0;
					if(!room.map[NPC.x -1][NPC.y].occupied)
					{
						this.move_left(NPC, room);
						console.log('left');
						condition = 0;
					}
					
				}
				else
				{
					condition++; // tells the NPC that there is an obstacle or not the correct direction
				}
			}
			else
			{
				condition++; // tells the NPC that there is an obstacle or not the correct direction
			}	

			if(NPC.destination.x > NPC.x && NPC.x != room.column - 1)// If destination to the right of current position, go right
			{
				if(!room.map[NPC.x + 1][NPC.y].occupied)
				{
					this.move_right(NPC,room);
					console.log('right');
					condition = 0;
					console.log("Look here");
				}
				else if(NPC.y != 0 && !room.map[NPC.x][NPC.y -1].occupied && condition >= 4)// If can't go right, go up
				{
					this.move_up(NPC, room);
					condition = 0;
					if(!room.map[NPC.x + 1][NPC.y].occupied)
					{
						this.move_right(NPC,room);
						console.log('right');
						condition = 0;
					}
				}
				else if(NPC.y != room.row - 1 && !room.map[NPC.x][NPC.y + 1].occupied && condition >= 4)		// If can't go up, go down
				{
					this.move_down(NPC, room);
					condition = 0;
					if(!room.map[NPC.x + 1][NPC.y].occupied)
					{
						this.move_right(NPC,room);
						console.log('right');
						condition = 0;
					}					
				}
				else
				{
					condition++; // tells the NPC that there is an obstacle or not the correct direction
				}
			}
			else
			{
				condition++; // tells the NPC that there is an obstacle or not the correct direction
			}
			console.log(condition);
	}
	else if(!NPC.inside && !inside)
	{
			if(NPC.destination.y < NPC.y && NPC.y != 0)// If destination higher than current position, go up
			{
				if(!outside.map[NPC.x][NPC.y - 1].occupied)
				{
					this.move_up(NPC, outside);
					console.log('up');
					NPC.condition = 0;
				}
				else if(NPC.x != 0 && !outside.map[NPC.x - 1][NPC.y].occupied && NPC.condition >= 4)// If can't go up, go left
				{	
					this.move_left(NPC, outside);
					NPC.condition = 0;					
					if(!outside.map[NPC.x][NPC.y - 1].occupied)
					{
						this.move_up(NPC, outside);
						console.log('up');
						NPC.condition = 0;
					}
					
				}
				else if(NPC.x != outside.column - 1 && !outside.map[NPC.x + 1][NPC.y].occupied && NPC.condition >= 4)		// If can't go left, go right
				{
					this.move_right(NPC, outside);
					NPC.condition = 0;					
					if(!outside.map[NPC.x][NPC.y - 1].occupied)
					{
						this.move_up(NPC, outside);
						console.log('up');
						NPC.condition = 0;
					}
					
				}
				else
				{
					NPC.condition++; // tells the NPC that there is an obstacle or not the correct direction
				}
			}
			else
			{
				NPC.condition++; // tells the NPC that there is an obstacle or not the correct direction
			}

			if(NPC.destination.y > NPC.y && NPC.y != outside.row - 1)// if destination lower than current position, go down
			{
				if(!outside.map[NPC.x][NPC.y + 1].occupied)
				{
					this.move_down(NPC, outside);
					console.log('down');
					NPC.condition = 0;
				}
				else if(NPC.x != 0 && !outside.map[NPC.x - 1][NPC.y].occupied && NPC.condition >= 4)		// If can't go down, go left
				{
					this.move_left(NPC, outside);
					NPC.condition = 0;
					if(!outside.map[NPC.x][NPC.y + 1].occupied)
					{	
						this.move_down(NPC, outside);
						console.log('down');
						NPC.condition = 0;
					}
					

				}
				else if(NPC.x != outside.column - 1 && !outside.map[NPC.x + 1][NPC.y].occupied && NPC.condition >= 4)		// If can't go left, go right
				{
					this.move_right(NPC, outside);
					NPC.condition = 0;
					if(!outside.map[NPC.x][NPC.y + 1].occupied)
					{
						this.move_down(NPC, outside);
						console.log('down');
						NPC.condition = 0;
					}
					
				}
				else
				{
					NPC.condition++; // tells the NPC that there is an obstacle or not the correct direction
				}
			}
			else
			{
				NPC.condition++; // tells the NPC that there is an obstacle or not the correct direction
			}

			if(NPC.destination.x < NPC.x && NPC.x != 0)// If destination to the left of current position, go left
			{
				if(!outside.map[NPC.x -1][NPC.y].occupied)
				{
					this.move_left(NPC, outside);
					console.log('left');
					NPC.condition = 0;
				}
				else if(NPC.y != 0 && !outside.map[NPC.x][NPC.y -1].occupied && NPC.condition >= 4)// If can't go left, go up
				{
					this.move_up(NPC, outside);
					NPC.condition = 0;
					if(!outside.map[NPC.x -1][NPC.y].occupied)
					{
						this.move_left(NPC, outside);
						console.log('left');
						NPC.condition = 0;
					}
					

				}
				else if(NPC.y != outside.row - 1 && !outside.map[NPC.x][NPC.y + 1].occupied && NPC.condition >= 4)// If can't go up, go down
				{
					this.move_down(NPC, outside);
					NPC.condition = 0;
					if(!outside.map[NPC.x -1][NPC.y].occupied)
					{
						this.move_left(NPC, outside);
						console.log('left');
						NPC.condition = 0;
					}
					
				}
				else
				{
					NPC.condition++; // tells the NPC that there is an obstacle or not the correct direction
				}
			}
			else
			{
				NPC.condition++; // tells the NPC that there is an obstacle or not the correct direction
			}	

			if(NPC.destination.x > NPC.x && NPC.x != outside.column - 1)// If destination to the right of current position, go right
			{
				if(!outside.map[NPC.x + 1][NPC.y].occupied)
				{
					this.move_right(NPC,outside);
					console.log('right');
					NPC.condition = 0;
					console.log("Look here");
				}
				else if(NPC.y != 0 && !outside.map[NPC.x][NPC.y -1].occupied && NPC.condition >= 4)// If can't go right, go up
				{
					this.move_up(NPC, outside);
					NPC.condition = 0;
					if(!outside.map[NPC.x + 1][NPC.y].occupied)
					{
						this.move_right(NPC,outside);
						console.log('right');
						NPC.condition = 0;
					}
				}
				else if(NPC.y != outside.row - 1 && !outside.map[NPC.x][NPC.y + 1].occupied && NPC.condition >= 4)		// If can't go up, go down
				{
					this.move_down(NPC, outside);
					NPC.condition = 0;
					if(!outside.map[NPC.x + 1][NPC.y].occupied)
					{
						this.move_right(NPC,outside);
						console.log('right');
						NPC.condition = 0;
					}					
				}
				else
				{
					NPC.condition++; // tells the NPC that there is an obstacle or not the correct direction
				}
			}
			else
			{
				NPC.condition++; // tells the NPC that there is an obstacle or not the correct direction
			}
			console.log(NPC.condition);
	}



	//If destination in not the same area
	//If npc inside and destination outside
	if(NPC.inside && !inside)
	{
		//Make the NPC to to the position of the door in the room first which is [3][6]
		if(7 < NPC.y && NPC.y != 0)// If destination higher than current position, go up
			{
				if(!room.map[NPC.x][NPC.y - 1].occupied)
				{
					this.move_up(NPC, room);
					console.log('up');
					condition = 0;
				}
				else if(NPC.x != 0 && !room.map[NPC.x - 1][NPC.y].occupied && condition >= 4)// If can't go up, go left
				{	
					this.move_left(NPC, room);
					condition = 0;					
					if(!room.map[NPC.x][NPC.y - 1].occupied)
					{
						this.move_up(NPC, room);
						console.log('up');
						condition = 0;
					}
					
				}
				else if(NPC.x != room.column - 1 && !room.map[NPC.x + 1][NPC.y].occupied && condition >= 4)		// If can't go left, go right
				{
					this.move_right(NPC, room);
					condition = 0;					
					if(!room.map[NPC.x][NPC.y - 1].occupied)
					{
						this.move_up(NPC, room);
						console.log('up');
						condition = 0;
					}
					
				}
				else
				{
					condition++; // tells the NPC that there is an obstacle or not the correct direction
				}
			}
			else
			{
				condition++; // tells the NPC that there is an obstacle or not the correct direction
			}

			if(7 > NPC.y && NPC.y != room.row - 1)// if destination lower than current position, go down
			{
				if(!room.map[NPC.x][NPC.y + 1].occupied)
				{
					this.move_down(NPC, room);
					console.log('down');
					condition = 0;
				}
				else if(NPC.x != 0 && !room.map[NPC.x - 1][NPC.y].occupied && condition >= 4)		// If can't go down, go left
				{
					this.move_left(NPC, room);
					condition = 0;
					if(!room.map[NPC.x][NPC.y + 1].occupied)
					{	
						this.move_down(NPC, room);
						console.log('down');
						condition = 0;
					}
					

				}
				else if(NPC.x != room.column - 1 && !room.map[NPC.x + 1][NPC.y].occupied && condition >= 4)		// If can't go left, go right
				{
					this.move_right(NPC, room);
					condition = 0;
					if(!room.map[NPC.x][NPC.y + 1].occupied)
					{
						this.move_down(NPC, room);
						console.log('down');
						condition = 0;
					}
					
				}
				else
				{
					condition++; // tells the NPC that there is an obstacle or not the correct direction
				}
			}
			else
			{
				condition++; // tells the NPC that there is an obstacle or not the correct direction
			}

			if(3 < NPC.x && NPC.x != 0)// If destination to the left of current position, go left
			{
				if(!room.map[NPC.x -1][NPC.y].occupied)
				{
					this.move_left(NPC, room);
					console.log('left');
					condition = 0;
				}
				else if(NPC.y != 0 && !room.map[NPC.x][NPC.y -1].occupied && condition >= 4)// If can't go left, go up
				{
					this.move_up(NPC, room);
					condition = 0;
					if(!room.map[NPC.x -1][NPC.y].occupied)
					{
						this.move_left(NPC, room);
						console.log('left');
						condition = 0;
					}
					

				}
				else if(NPC.y != room.row - 1 && !room.map[NPC.x][NPC.y + 1].occupied && condition >= 4)// If can't go up, go down
				{
					this.move_down(NPC, room);
					condition = 0;
					if(!room.map[NPC.x -1][NPC.y].occupied)
					{
						this.move_left(NPC, room);
						console.log('left');
						condition = 0;
					}
					
				}
				else
				{
					condition++; // tells the NPC that there is an obstacle or not the correct direction
				}
			}
			else
			{
				condition++; // tells the NPC that there is an obstacle or not the correct direction
			}	

			if(3 > NPC.x && NPC.x != room.column - 1)// If destination to the right of current position, go right
			{
				if(!room.map[NPC.x + 1][NPC.y].occupied)
				{
					this.move_right(NPC,room);
					console.log('right');
					condition = 0;
					console.log("Look here");
				}
				else if(NPC.y != 0 && !room.map[NPC.x][NPC.y -1].occupied && condition >= 4)// If can't go right, go up
				{
					this.move_up(NPC, room);
					condition = 0;
					if(!room.map[NPC.x + 1][NPC.y].occupied)
					{
						this.move_right(NPC,room);
						console.log('right');
						condition = 0;
					}
				}
				else if(NPC.y != room.row - 1 && !room.map[NPC.x][NPC.y + 1].occupied && condition >= 4)		// If can't go up, go down
				{
					this.move_down(NPC, room);
					condition = 0;
					if(!room.map[NPC.x + 1][NPC.y].occupied)
					{
						this.move_right(NPC,room);
						console.log('right');
						condition = 0;
					}					
				}
				else
				{
					condition++; // tells the NPC that there is an obstacle or not the correct direction
				}
			}
			else
			{
				condition++; // tells the NPC that there is an obstacle or not the correct direction
			}

			// After that, teleport the NPC to oustide location
			if(NPC.x == 3 && NPC.y == 7 && outside.map[7][3].occupied == false)
			{
				NPC.inside = false;
				NPC.x = 7;
				NPC.y = 3;
				outside.map[7][3].occupied = true;
				room.map[3][7].occupied = false ;
				outside.map[7][3].npc = room.map[3][7].npc;
				room.map[3][7].npc = -1;
			}
	}
	
	//If npc outside and destination inside
	if(!NPC.inside && inside)
	{
		// Make the NPC go to the position of the door first which is [7][2]
		if(3 < NPC.y && NPC.y != 0)// If destination higher than current position, go up
			{
				if(!outside.map[NPC.x][NPC.y - 1].occupied)
				{
					this.move_up(NPC, outside);
					console.log('up');
					condition = 0;
				}
				else if(NPC.x != 0 && !outside.map[NPC.x - 1][NPC.y].occupied && condition >= 4)// If can't go up, go left
				{	
					this.move_left(NPC, outside);
					condition = 0;					
					if(!outside.map[NPC.x][NPC.y - 1].occupied)
					{
						this.move_up(NPC, outside);
						console.log('up');
						condition = 0;
					}
					
				}
				else if(NPC.x != outside.column - 1 && !outside.map[NPC.x + 1][NPC.y].occupied && condition >= 4)		// If can't go left, go right
				{
					this.move_right(NPC, outside);
					condition = 0;					
					if(!outside.map[NPC.x][NPC.y - 1].occupied)
					{
						this.move_up(NPC, outside);
						console.log('up');
						condition = 0;
					}
					
				}
				else
				{
					condition++; // tells the NPC that there is an obstacle or not the correct direction
				}
			}
			else
			{
				condition++; // tells the NPC that there is an obstacle or not the correct direction
			}

			if(3 > NPC.y && NPC.y != outside.row - 1)// if destination lower than current position, go down
			{
				if(!outside.map[NPC.x][NPC.y + 1].occupied)
				{
					this.move_down(NPC, outside);
					console.log('down');
					condition = 0;
				}
				else if(NPC.x != 0 && !outside.map[NPC.x - 1][NPC.y].occupied && condition >= 4)		// If can't go down, go left
				{
					this.move_left(NPC, outside);
					condition = 0;
					if(!outside.map[NPC.x][NPC.y + 1].occupied)
					{	
						this.move_down(NPC, outside);
						console.log('down');
						condition = 0;
					}
					

				}
				else if(NPC.x != outside.column - 1 && !outside.map[NPC.x + 1][NPC.y].occupied && condition >= 4)		// If can't go left, go right
				{
					this.move_right(NPC, outside);
					condition = 0;
					if(!outside.map[NPC.x][NPC.y + 1].occupied)
					{
						this.move_down(NPC, outside);
						console.log('down');
						condition = 0;
					}
					
				}
				else
				{
					condition++; // tells the NPC that there is an obstacle or not the correct direction
				}
			}
			else
			{
				condition++; // tells the NPC that there is an obstacle or not the correct direction
			}

			if(7 < NPC.x && NPC.x != 0)// If destination to the left of current position, go left
			{
				if(!outside.map[NPC.x -1][NPC.y].occupied)
				{
					this.move_left(NPC, outside);
					console.log('left');
					condition = 0;
				}
				else if(NPC.y != 0 && !outside.map[NPC.x][NPC.y -1].occupied && condition >= 4)// If can't go left, go up
				{
					this.move_up(NPC, outside);
					condition = 0;
					if(!outside.map[NPC.x -1][NPC.y].occupied)
					{
						this.move_left(NPC, outside);
						console.log('left');
						condition = 0;
					}
					

				}
				else if(NPC.y != outside.row - 1 && !outside.map[NPC.x][NPC.y + 1].occupied && condition >= 4)// If can't go up, go down
				{
					this.move_down(NPC, outside);
					condition = 0;
					if(!outside.map[NPC.x -1][NPC.y].occupied)
					{
						this.move_left(NPC, outside);
						console.log('left');
						condition = 0;
					}
					
				}
				else
				{
					condition++; // tells the NPC that there is an obstacle or not the correct direction
				}
			}
			else
			{
				condition++; // tells the NPC that there is an obstacle or not the correct direction
			}	

			if(7 > NPC.x && NPC.x != outside.column - 1)// If destination to the right of current position, go right
			{
				if(!outside.map[NPC.x + 1][NPC.y].occupied)
				{
					this.move_right(NPC,outside);
					console.log('right');
					condition = 0;
					console.log("Look here");
				}
				else if(NPC.y != 0 && !outside.map[NPC.x][NPC.y -1].occupied && condition >= 4)// If can't go right, go up
				{
					this.move_up(NPC, outside);
					condition = 0;
					if(!outside.map[NPC.x + 1][NPC.y].occupied)
					{
						this.move_right(NPC,outside);
						console.log('right');
						condition = 0;
					}
				}
				else if(NPC.y != outside.row - 1 && !outside.map[NPC.x][NPC.y + 1].occupied && condition >= 4)		// If can't go up, go down
				{
					this.move_down(NPC, outside);
					condition = 0;
					if(!outside.map[NPC.x + 1][NPC.y].occupied)
					{
						this.move_right(NPC,outside);
						console.log('right');
						condition = 0;
					}					
				}
				else
				{
					condition++; // tells the NPC that there is an obstacle or not the correct direction
				}
			}
			else
			{
				condition++; // tells the NPC that there is an obstacle or not the correct direction
			}

		// When the NPC reaches the position at the door, teleport him into the room!
		if(NPC.x == 7 && NPC.y == 3 && room.map[3][7].occupied == false)
		{
			NPC.inside = true;
			NPC.x = 3;
			NPC.y = 7;
			outside.map[7][3].occupied = false;
			room.map[3][7].occupied = true;
			room.map[3][7].npc = outside.map[7][3].npc;
			outside.map[7][3].npc = -1;
		}
	}
}

	this.move_left = function(NPC, place){
		place.map[NPC.x -1][NPC.y].occupied = true;//New position occupied
		place.map[NPC.x -1][NPC.y].npc = place.map[NPC.x][NPC.y].npc// New position NPC now contains index
		NPC.x = NPC.x - 1;//Change position
		place.map[NPC.x + 1][NPC.y].occupied = false;//Old position unoccupied
		place.map[NPC.x + 1][NPC.y].npc = -1;// Old position NPC changed back to -1
	}

	this.move_right = function(NPC, place){
		place.map[NPC.x + 1][NPC.y].occupied = true;//New position occupied
		place.map[NPC.x + 1][NPC.y].npc = place.map[NPC.x][NPC.y].npc; // New position NPC now contains index
		NPC.x = NPC.x + 1;//Change position
		place.map[NPC.x - 1][NPC.y].occupied = false;//Old position unoccupied
		place.map[NPC.x - 1][NPC.y].npc = -1;// Old position NPC changed back to -1
	}

	this.move_up = function(NPC, place){
		place.map[NPC.x][NPC.y - 1].occupied = true;//New position occupied
		place.map[NPC.x][NPC.y - 1].npc = place.map[NPC.x][NPC.y].npc; // New position NPC now contains index
		NPC.y = NPC.y - 1;//Change position
		place.map[NPC.x][NPC.y + 1].occupied = false;//Old position unoccupied
		place.map[NPC.x][NPC.y + 1].npc = -1;// Old position NPC changed back to -1
	}

	this.move_down = function(NPC, place){
		place.map[NPC.x][NPC.y + 1].occupied = true;//New position occupied
		place.map[NPC.x][NPC.y + 1].npc = place.map[NPC.x][NPC.y].npc; // New position NPC now contains index
		NPC.y = NPC.y + 1;//Change position
		place.map[NPC.x][NPC.y - 1].occupied = false;//Old position unoccupied
		place.map[NPC.x][NPC.y - 1].npc = -1;// Old position NPC changed back to -1
	}

}