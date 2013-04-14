// ------------------------------------------------------------------
// Initialise Game Backend and setting
// ------------------------------------------------------------------
function load() {
	// Game
	canvas = document.getElementById("game");
	ctx = canvas.getContext("2d");
	// Debug
	debug = document.getElementById("debug");
	ctxDebug = canvas.getContext("2d");

	//-------------------
	//  Init Objects Here
	//-------------------
	var abstraction = new level(); // HS
	var renderingEngine = new Renderer(); // HS
	var lobby = new room(20, 20); // HS
	var Outside = new outdoor(20, 20); // HS
	var FPS = 30; //HS
	var screenUpdateTime = 1000 / FPS; //HS
	var level3 = new levelThree(); //Lionel
	var level2 = new levelTwo(); //Lionel
	level2.decompressDataL3(level3);
	var simulator = new Controller(level3, level2); //Lionel
	var npc_controller = new NPC_controller(lobby, Outside); // HS
	var navigate = new pathfinding(lobby, Outside); //HS
	var debug_mode = true; // HS
	var npc_movement = 0; //HS
	//------------------------------
	//  End initialization of object
	//------------------------------

	//-------------------------
	//  Registering key-presses - Hong Shing
	//-------------------------

	document
			.addEventListener(
					'keydown',
					function(event) {

						// Press up down left right to move the player on screen
						if (event.keyCode == 37) {
							//go left
							if (lobby.active)// If player in the room
							{
								lobby.player_direction = 3;
								if (lobby.player_position.x != 0
										&& !lobby.map[lobby.player_position.x - 1][lobby.player_position.y].occupied) // Not at the left most column
								{
									lobby.player_position.x = lobby.player_position.x - 1; // Change position of player in room
									lobby.map[lobby.player_position.x][lobby.player_position.y].occupied = true; // Change new position to occupied
									lobby.map[lobby.player_position.x + 1][lobby.player_position.y].occupied = false;// Change old position to unoccupied
									console.log(lobby.player_position.x + ','
											+ lobby.player_position.y);
								}
							}

							if (Outside.active)// If player in the room
							{
								Outside.player_direction = 3;
								if (Outside.player_position.x != 0
										&& !Outside.map[Outside.player_position.x - 1][Outside.player_position.y].occupied) // Not at the left most column
								{
									Outside.player_position.x = Outside.player_position.x - 1; // Change position of player in room
									Outside.map[Outside.player_position.x][Outside.player_position.y].occupied = true; // Change new position to occupied
									Outside.map[Outside.player_position.x + 1][Outside.player_position.y].occupied = false;// Change old position to unoccupied
									console.log(Outside.player_position.x + ','
											+ Outside.player_position.y);
								}
							}

						}//end if(event.keyCode == 37)

						if (event.keyCode == 39) {
							//go right
							if (lobby.active) {
								lobby.player_direction = 4;
								if (lobby.player_position.x != (lobby.column - 1)
										&& !lobby.map[lobby.player_position.x + 1][lobby.player_position.y].occupied) {
									lobby.player_position.x = lobby.player_position.x + 1; // Change position of player in room
									lobby.map[lobby.player_position.x][lobby.player_position.y].occupied = true; // Change new position to occupied
									lobby.map[lobby.player_position.x - 1][lobby.player_position.y].occupied = false;// Change old position to unoccupied
									console.log(lobby.player_position.x + ','
											+ lobby.player_position.y);
								}
							}

							if (Outside.active) {
								Outside.player_direction = 4;
								if (Outside.player_position.x != (Outside.column - 1)
										&& !Outside.map[Outside.player_position.x + 1][Outside.player_position.y].occupied) {
									Outside.player_position.x = Outside.player_position.x + 1; // Change position of player in room
									Outside.map[Outside.player_position.x][Outside.player_position.y].occupied = true; // Change new position to occupied
									Outside.map[Outside.player_position.x - 1][Outside.player_position.y].occupied = false;// Change old position to unoccupied
									console.log(Outside.player_position.x + ','
											+ Outside.player_position.y);
								}
							}
						}//end if(event.keyCode == 39)

						if (event.keyCode == 38) {
							//go up
							if (lobby.active) {
								lobby.player_direction = 1;
								if (lobby.player_position.y != 0
										&& !lobby.map[lobby.player_position.x][lobby.player_position.y - 1].occupied) {
									lobby.player_position.y = lobby.player_position.y - 1; // Change position of player in room
									lobby.map[lobby.player_position.x][lobby.player_position.y].occupied = true; // Change new position to occupied
									lobby.map[lobby.player_position.x][lobby.player_position.y + 1].occupied = false;// Change old position to unoccupied
									console.log(lobby.player_position.x + ','
											+ lobby.player_position.y);
								}
							}

							if (Outside.active) {
								Outside.player_direction = 1;
								if (Outside.player_position.y != 0
										&& !Outside.map[Outside.player_position.x][Outside.player_position.y - 1].occupied) {
									Outside.player_position.y = Outside.player_position.y - 1; // Change position of player in room
									Outside.map[Outside.player_position.x][Outside.player_position.y].occupied = true; // Change new position to occupied
									Outside.map[Outside.player_position.x][Outside.player_position.y + 1].occupied = false;// Change old position to unoccupied
									console.log(Outside.player_position.x + ','
											+ Outside.player_position.y);
								}

								// Player enters the door to enter the building
								else if (Outside.player_position.y == 3
										&& Outside.player_position.x == 7) {
									Outside.active = false;
									lobby.active = true;
									lobby.player_direction = 1;
								}
							}

						}//end if(event.keyCode == 38)

						if (event.keyCode == 40) {
							//go down
							if (lobby.active) {
								lobby.player_direction = 2;
								if (lobby.player_position.y != (lobby.row - 1)
										&& !lobby.map[lobby.player_position.x][lobby.player_position.y + 1].occupied) {
									lobby.player_position.y = lobby.player_position.y + 1; // Change position of player in room
									lobby.map[lobby.player_position.x][lobby.player_position.y].occupied = true; // Change new position to occupied
									lobby.map[lobby.player_position.x][lobby.player_position.y - 1].occupied = false;// Change old position to unoccupied
									console.log(lobby.player_position.x + ','
											+ lobby.player_position.y);
								}

								// Player exits the building to go outside
								else if (lobby.player_position.y == 7
										&& lobby.player_position.x == 3) {
									lobby.active = false;
									Outside.active = true;
									Outside.player_direction = 2;
								}

							}

							else if (Outside.active) {
								Outside.player_direction = 2;
								if (Outside.player_position.y != (Outside.row - 1)
										&& !Outside.map[Outside.player_position.x][Outside.player_position.y + 1].occupied) {
									Outside.player_position.y = Outside.player_position.y + 1; // Change position of player in room
									Outside.map[Outside.player_position.x][Outside.player_position.y].occupied = true; // Change new position to occupied
									Outside.map[Outside.player_position.x][Outside.player_position.y - 1].occupied = false;// Change old position to unoccupied
									console.log(Outside.player_position.x + ','
											+ Outside.player_position.y);
								}
							}
						}//end if (event.keyCode == 40)

						if (event.keyCode == 90){
							//Z key pressed - Interact with NPC
							if(Outside.active)//If outside
							{
								if(Outside.player_position.y != 0 && Outside.player_direction == 1 && Outside.map[Outside.player_position.x][Outside.player_position.y - 1].occupied)// If facing up and NPC there
								{
									if(Outside.map[Outside.player_position.x][Outside.player_position.y - 1].npc != -1) // Ensures that the NPC index contains a proper number
									{
										alert(npc_controller.NPC_array[Outside.map[Outside.player_position.x][Outside.player_position.y - 1].npc].message + Outside.map[Outside.player_position.x][Outside.player_position.y - 1].npc);
									}
								}
								if(Outside.player_position.y != (Outside.row - 1) && Outside.player_direction == 2 && Outside.map[Outside.player_position.x][Outside.player_position.y + 1].occupied)// If facing down and NPC below
								{
									if(Outside.map[Outside.player_position.x][Outside.player_position.y + 1].npc != -1) // Ensures that the NPC index contains a proper number
									{
										alert(npc_controller.NPC_array[Outside.map[Outside.player_position.x][Outside.player_position.y + 1].npc].message + Outside.map[Outside.player_position.x][Outside.player_position.y + 1].npc);
									}
								}
								if(Outside.player_position.x != 0 && Outside.player_direction == 3 && Outside.map[Outside.player_position.x - 1][Outside.player_position.y].occupied) // If facing left and NPC left
								{
									if(Outside.map[Outside.player_position.x - 1][Outside.player_position.y].npc != -1) // Ensures that the NPC index contains a proper number
									{
										alert(npc_controller.NPC_array[Outside.map[Outside.player_position.x - 1][Outside.player_position.y].npc].message + Outside.map[Outside.player_position.x - 1][Outside.player_position.y].npc);
									}
								}
								if(Outside.player_position.x != (Outside.column - 1) && Outside.player_direction == 4 && Outside.map[Outside.player_position.x + 1][Outside.player_position.y].occupied) // If facing right and NPC left
								{
									if(Outside.map[Outside.player_position.x + 1][Outside.player_position.y].npc != -1) // Ensures that the NPC index contains a proper number
									{
										alert(npc_controller.NPC_array[Outside.map[Outside.player_position.x + 1][Outside.player_position.y].npc].message + Outside.map[Outside.player_position.x + 1][Outside.player_position.y].npc);
									}
								}
							}
							
							if(lobby.active)//If inside
							{
								if(lobby.player_position.y != 0 && lobby.player_direction == 1 && lobby.map[lobby.player_position.x][lobby.player_position.y - 1].occupied)// If facing up and NPC there
								{
									if(lobby.map[lobby.player_position.x][lobby.player_position.y - 1].npc != -1) // Ensures that the NPC index contains a proper number
									{
										alert(npc_controller.NPC_array[lobby.map[lobby.player_position.x][lobby.player_position.y - 1].npc].message + lobby.map[lobby.player_position.x][lobby.player_position.y - 1].npc);
									}
								}
								if(lobby.player_position.y != (lobby.row - 1) && lobby.player_direction == 2 && lobby.map[lobby.player_position.x][lobby.player_position.y + 1].occupied)// If facing down and NPC below
								{
									if(lobby.map[lobby.player_position.x][lobby.player_position.y + 1].npc != -1) // Ensures that the NPC index contains a proper number
									{
										alert(npc_controller.NPC_array[lobby.map[lobby.player_position.x][lobby.player_position.y + 1].npc].message + lobby.map[lobby.player_position.x][lobby.player_position.y + 1].npc);
									}
								}
								if(lobby.player_position.x != 0 && lobby.player_direction == 3 && lobby.map[lobby.player_position.x - 1][lobby.player_position.y].occupied) // If facing left and NPC left
								{
									if(lobby.map[lobby.player_position.x - 1][lobby.player_position.y].npc != -1) // Ensures that the NPC index contains a proper number
									{
										alert(npc_controller.NPC_array[lobby.map[lobby.player_position.x - 1][lobby.player_position.y].npc].message + lobby.map[lobby.player_position.x - 1][lobby.player_position.y].npc);
									}
								}
								if(lobby.player_position.x != (lobby.column - 1) && lobby.player_direction == 4 && lobby.map[lobby.player_position.x + 1][lobby.player_position.y].occupied) // If facing right and NPC left
								{
									if(lobby.map[lobby.player_position.x + 1][lobby.player_position.y].npc != -1) // Ensures that the NPC index contains a proper number
									{
										alert(npc_controller.NPC_array[lobby.map[lobby.player_position.x + 1][lobby.player_position.y].npc].message + lobby.map[lobby.player_position.x + 1][lobby.player_position.y].npc);
									}
								}
							}
							//console.log(Outside.map[Outside.player_position.x][Outside.player_position.y - 1].npc);
						}

					}

			);///end addEventListener

	//----------------------------------------
	//  End registering key press - Hong Shing
	//----------------------------------------

	//--------------------------------------------------------
	//  Registering mouse position on mouse click - Hong Shing
	//--------------------------------------------------------
	canvas.addEventListener('mousedown', function(evt) {
		var mousePos = getMousePos(canvas, evt);
		abstraction.mousepos_x = mousePos.x;
		abstraction.mousepos_y = mousePos.y;
		abstraction.Mouseclick();
		renderingEngine.Draw_level(abstraction.abst_level);
		//var message = 'Level: ' + abstraction.abst_level;
		//writeMessage(canvas, message);
	}, false);
	//--------------------------------------------------------
	//  End
	//--------------------------------------------------------

	//renderingEngine.Draw_country();
	//renderingEngine.mark_HUD();

	//------------------
	//  Rendering screen
	//------------------
	setInterval(function() {
		if (lobby.active){
			lobby.draw();
			npc_controller.drawNPC(true);
			//if(npc_controller.NPC_array[9].x != npc_controller.NPC_array[9].destination.x && npc_controller.NPC_array[9].y != npc_controller.NPC_array[9].destination.y)
			//{
				//navigate.steering(npc_controller.NPC_array[9], npc_controller.NPC_array[9].destination, true);
			//}
			if(debug_mode)
			{
				lobby.draw_debug();
			}
		}
		if (Outside.active){
			Outside.draw();
			npc_controller.drawNPC(false);
			
			
			if(debug_mode)
			{
				Outside.draw_debug();
			}

		}


			// Pathfinding to destination of NPC
			if(npc_controller.NPC_array[8].x != npc_controller.NPC_array[8].destination.x || npc_controller.NPC_array[8].y != npc_controller.NPC_array[8].destination.y)
			{
				if(npc_movement%15 == 0)
				{
				navigate.steering(npc_controller.NPC_array[8], npc_controller.NPC_array[8].destination, false);
				}
				npc_movement++;
			}


	}, screenUpdateTime);
	//----------------------
	//  Rendering screen end
	//----------------------

	/* Constant timer thread - Lionel
	/* 1s = 10 mins in-game*/
	var timeCounter = 0;
	var skipTime = 0;
	var timer = new timeInterval(1000, function(){
		timeCounter++;
		if((timeCounter%18) == 0){//3 hrs in-game
			//L3 simulation
			simulator.countryMovement();
			simulator.interactLevel3();
		}
		if ((timeCounter%6) == 0){//1 hrs in-game
			//L2 simulation
			simulator.cityMovement();
			simulator.interactLevel2();
			level2.compressDataL3(level3);
		}
    });
    timer.run();
    //End Timer*/

}

//
//  Testing the printing of mouse position (HONG SHING)
//

function writeMessage(canvas, message) {
	var context = canvas.getContext('2d');
	context.clearRect(0, 0, 500, 100);
	context.font = '18pt Calibri';
	context.fillStyle = 'black';
	context.fillText(message, 10, 25);
}

function getMousePos(canvas, evt) {
	var rect = canvas.getBoundingClientRect();
	return {
		x : evt.clientX - rect.left,
		y : evt.clientY - rect.top
	};
}

//
//  End
//