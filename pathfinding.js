function pathfinding(room, outside){

this.steering = function(NPC, destination, inside){

	// Inside tells the steering if the destination is inside or outside
	// inside = true means the destination is in the room
	// inside = false means the destination is outside

	//If destination in the same room
	if(NPC.inside && inside)
	{		
			
			if(NPC.destination.y < NPC.y && NPC.y != 0 && !room.map[NPC.x][NPC.y - 1].occupied )// If destination higher than current position, go up
			{
				this.move_up(NPC, room);
			}	
			/*
			else if(NPC.x != 0 && !room.map[NPC.x - 1][NPC.y].occupied)// If can't go up, go left
			{
				this.move_left(NPC, room);
			}
			else if(NPC.x != room.column - 1 && !room.map[NPC.x + 1][NPC.y].occupied)		// If can't go left, go right
			{
				this.move_right(NPC, room);
			}
			*/
			if(NPC.destination.y > NPC.y && NPC.y != room.row - 1 && !room.map[NPC.x][NPC.y + 1].occupied)// if destination lower than current position, go down
			{
				this.move_down(NPC, room);
			}
			/*
			else if(NPC.x != 0 && !room.map[NPC.x - 1][NPC.y].occupied)		// If can't go down, go left
			{
				this.move_left(NPC, room);
			}
			else if(NPC.x != room.column - 1 && !room.map[NPC.x + 1][NPC.y].occupied)		// If can't go left, go right
			{
				this.move_right(NPC, room);
			}
			*/

			if(NPC.destination.x < NPC.x && NPC.x != 0 && !room.map[NPC.x -1][NPC.y].occupied)// If destination to the left of current position, go left
			{
				this.move_left(NPC, room);
			}
			/*
			else if(NPC.y != 0 && !room.map[NPC.x][NPC.y -1].occupied)// If can't go left, go up
			{
				this.move_up(NPC, room);
			}
			else if(NPC.y != room.row - 1 && !room.map[NPC.x][NPC.y + 1].occupied)// If can't go up, go down
			{
				this.move_down(NPC, room);
			}
			*/
			if(NPC.destination.x > NPC.x && NPC.x != room.column - 1 && !room.map[NPC.x + 1][NPC.y].occupied)// If destination to the right of current position, go right
			{
				this.move_right(NPC,room);
			}
			/*
			else if(NPC.y != 0 && !room.map[NPC.x][NPC.y -1].occupied)// If can't go right, go up
			{
				this.move_up(NPC, room);
			}
			else if(NPC.y != room.row - 1 && !room.map[NPC.x][NPC.y + 1].occupied)		// If can't go up, go down
			{
				this.move_down(NPC, room);
			}
			*/
	}
	else if(!NPC.inside && !inside)
	{
			if(NPC.destination.y < NPC.y && NPC.y != 0)// If destination higher than current position, go up
			{
				if(!outside.map[NPC.x][NPC.y - 1].occupied)
				{
					this.move_up(NPC, outside);
					console.log('up');
				}
				else if(NPC.x != 0 && !outside.map[NPC.x - 1][NPC.y].occupied)// If can't go up, go left
				{	
					this.move_left(NPC, outside);
					if(!outside.map[NPC.x][NPC.y - 1].occupied)
					{
						this.move_up(NPC, outside);
						console.log('up');
					}
				}
				else if(NPC.x != outside.column - 1 && !outside.map[NPC.x + 1][NPC.y].occupied)		// If can't go left, go right
				{
					this.move_right(NPC, outside);
					if(!outside.map[NPC.x][NPC.y - 1].occupied)
					{
						this.move_up(NPC, outside);
						console.log('up');
					}
				}
			}

			if(NPC.destination.y > NPC.y && NPC.y != outside.row - 1)// if destination lower than current position, go down
			{
				if(!outside.map[NPC.x][NPC.y + 1].occupied)
				{
					this.move_down(NPC, outside);
					console.log('down');
				}
				else if(NPC.x != 0 && !outside.map[NPC.x - 1][NPC.y].occupied)		// If can't go down, go left
				{
					this.move_left(NPC, outside);
					if(!outside.map[NPC.x][NPC.y + 1].occupied)
					{	
						this.move_down(NPC, outside);
						console.log('down');
					}

				}
				else if(NPC.x != outside.column - 1 && !outside.map[NPC.x + 1][NPC.y].occupied)		// If can't go left, go right
				{
					this.move_right(NPC, outside);
					if(!outside.map[NPC.x][NPC.y + 1].occupied)
					{
						this.move_down(NPC, outside);
						console.log('down');
					}
				}
			}

			if(NPC.destination.x < NPC.x && NPC.x != 0)// If destination to the left of current position, go left
			{
				if(!outside.map[NPC.x -1][NPC.y].occupied)
				{
					this.move_left(NPC, outside);
					console.log('left');
				}
				else if(NPC.y != 0 && !outside.map[NPC.x][NPC.y -1].occupied)// If can't go left, go up
				{
					this.move_up(NPC, outside);
					if(!outside.map[NPC.x -1][NPC.y].occupied)
					{
						this.move_left(NPC, outside);
						console.log('left');
					}

				}
				else if(NPC.y != outside.row - 1 && !outside.map[NPC.x][NPC.y + 1].occupied)// If can't go up, go down
				{
					this.move_down(NPC, outside);
					if(!outside.map[NPC.x -1][NPC.y].occupied)
					{
						this.move_left(NPC, outside);
						console.log('left');
					}
				}
			}	

			if(NPC.destination.x > NPC.x && NPC.x != outside.column - 1)// If destination to the right of current position, go right
			{
				if(!outside.map[NPC.x + 1][NPC.y].occupied)
				{
					this.move_right(NPC,outside);
					console.log('right');
				}
				else if(NPC.y != 0 && !outside.map[NPC.x][NPC.y -1].occupied)// If can't go right, go up
				{
					this.move_up(NPC, outside);
					if(!outside.map[NPC.x + 1][NPC.y].occupied)
					{
						this.move_right(NPC,outside);
						console.log('right');
					}
				}
				else if(NPC.y != outside.row - 1 && !outside.map[NPC.x][NPC.y + 1].occupied)		// If can't go up, go down
				{
					this.move_down(NPC, outside);
					if(!outside.map[NPC.x + 1][NPC.y].occupied)
					{
						this.move_right(NPC,outside);
						console.log('right');
					}
				}
			}
	}



	//If destination in not the same area
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