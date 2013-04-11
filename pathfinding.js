function pathfinding(room, outside){

this.steering = function(NPC, destination, inside){

	// Inside tells the steering if the destination is inside or outside
	// inside = true means the destination is in the room
	// inside = false means the destination is outside

	//If destination in the same room
	if(NPC.inside && inside)
	{		
			
			if(destination.y < NPC.y && NPC.y != 0 && !room.map[NPC.x][NPC.y - 1].occupied )// If destination higher than current position, go up
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
			if(destination.y > NPC.y && NPC.y != room.row - 1 && !room.map[NPC.x][NPC.y + 1].occupied)// if destination lower than current position, go down
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

			if(destination.x < NPC.x && NPC.x != 0 && !room.map[NPC.x -1][NPC.y].occupied)// If destination to the left of current position, go left
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
			if(destination.x > NPC.x && NPC.x != room.column - 1 && !room.map[NPC.x + 1][NPC.y].occupied)// If destination to the right of current position, go right
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

	}



	//If destination in not the same area
}

	this.move_left = function(NPC, place){
		place.map[NPC.x -1][NPC.y].occupied = true;//New position occupied
		NPC.x = NPC.x - 1;//Change position
		place.map[NPC.x + 1][NPC.y].occupied = false;//Old position unoccupied
	}

	this.move_right = function(NPC, place){
		place.map[NPC.x + 1][NPC.y].occupied = true;//New position occupied
		NPC.x = NPC.x + 1;//Change position
		place.map[NPC.x - 1][NPC.y].occupied = false;//Old position unoccupied
	}

	this.move_up = function(NPC, place){
		place.map[NPC.x][NPC.y - 1].occupied = true;//New position occupied
		NPC.y = NPC.x - 1;//Change position
		place.map[NPC.x][NPC.y + 1].occupied = false;//Old position unoccupied
	}

	this.move_down = function(NPC, place){
		place.map[NPC.x][NPC.y + 1].occupied = true;//New position occupied
		NPC.y = NPC.y + 1;//Change position
		place.map[NPC.x][NPC.y - 1].occupied = false;//Old position unoccupied
	}

}