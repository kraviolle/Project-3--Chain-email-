
// ------------------------------------------------------------------
// Global animate frame with rate of 16 milliseconds
// ------------------------------------------------------------------
window.requestAnimFrame = (function(){
    return window.requestAnimationFrame  ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame  ||
        window.msRequestAnimationFrame  ||
        function(/* function */ callback, /* DOMElement */ element){
            window.setTimeout(callback, 1000 / 60);
        };
})();

// ------------------------------------------------------------------
// Load the game when html body is loaded
// ------------------------------------------------------------------
function load(){
    
    initGlobal();
	// Initialise game
	initGame();

	// Time that game start
	gameStart = Date.now();

	update();
};


// -------------------------------------------------------------------
// Globals
// -------------------------------------------------------------------
function initGlobal(){
	// Key Control
	keysDown = {};
	keysUp = {};
}

// ------------------------------------------------------------------
// Initialise Game Backend and setting
// ------------------------------------------------------------------
function initGame(){
    // Game
    canvas = document.getElementById("game");
    ctx = canvas.getContext("2d");

    //-------------------
    //  Init Objects Here
    //-------------------
    var abstraction = new level(); // HS
    var renderingEngine = new Renderer(); // HS
    var lobby = new room(20, 20); // HS
    var FPS = 30; //HS
    var screenUpdateTime = 1000/FPS; //HS
    //------------------------------
    //  End initialization of object
    //------------------------------

    // Listen for key set
    addEventListener("keydown", function (e){
        e.preventDefault();
        delete keysUp[e.KeyCode];
        keysDown[e.keyCode] = true;
    }, false);
    // Listen for key unset
    addEventListener("keyup", function (e){
        e.preventDefault();
        delete keysDown[e.keyCode];
        keysUp[e.keyCode] = true;
    }, false);


    //-------------------------
    //  Registering key-presses - Hong Shing
    //-------------------------

    document.addEventListener('keydown', function(event) {


            // Press up down left right to move the player on screen
          if(event.keyCode == 37) {
            //go left
            if(lobby.player_position.x != 0 && !lobby.map[lobby.player_position.x - 1][lobby.player_position.y].occupied) // Not at the left most column
            {
              lobby.player_position.x = lobby.player_position.x - 1; // Change position of player in room
              lobby.map[lobby.player_position.x][lobby.player_position.y].occupied = true; // Change new position to occupied
              lobby.map[lobby.player_position.x + 1][lobby.player_position.y].occupied = false;// Change old position to unoccupied
              console.log(lobby.player_position.x + ',' + lobby.player_position.y);
            }
          }//end if(event.keyCode == 37)
          
          if(event.keyCode == 39) {
            //go right
            if(lobby.player_position.x != (lobby.column - 1) && !lobby.map[lobby.player_position.x + 1][lobby.player_position.y].occupied)
            {
              lobby.player_position.x = lobby.player_position.x + 1; // Change position of player in room
              lobby.map[lobby.player_position.x][lobby.player_position.y].occupied = true; // Change new position to occupied
              lobby.map[lobby.player_position.x - 1][lobby.player_position.y].occupied = false;// Change old position to unoccupied
              console.log(lobby.player_position.x + ',' + lobby.player_position.y);
            }
          }//end if(event.keyCode == 39)
          
          if(event.keyCode == 38) {
            //go up
            if(lobby.player_position.y != 0 && !lobby.map[lobby.player_position.x][lobby.player_position.y - 1].occupied)
            {
              lobby.player_position.y = lobby.player_position.y - 1; // Change position of player in room
              lobby.map[lobby.player_position.x][lobby.player_position.y].occupied = true; // Change new position to occupied
              lobby.map[lobby.player_position.x][lobby.player_position.y + 1].occupied = false;// Change old position to unoccupied
              console.log(lobby.player_position.x + ',' + lobby.player_position.y);
            }
          }//end if(event.keyCode == 38)
          
          if(event.keyCode == 40) {
            //go down
            if(lobby.player_position.y != (lobby.row - 1) && !lobby.map[lobby.player_position.x][lobby.player_position.y + 1].occupied)
            {
              lobby.player_position.y = lobby.player_position.y + 1; // Change position of player in room
              lobby.map[lobby.player_position.x][lobby.player_position.y].occupied = true; // Change new position to occupied
              lobby.map[lobby.player_position.x][lobby.player_position.y - 1].occupied = false;// Change old position to unoccupied
              console.log(lobby.player_position.x + ',' + lobby.player_position.y);
            }
          }//end if (event.keyCode == 40)
          
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
    setInterval(function () {lobby.draw()}, screenUpdateTime);
    //----------------------
    //  Rendering screen end
    //----------------------




}

// ------------------------------------------------------------------
// Update the objects at frame rate
// ------------------------------------------------------------------
function update(){
}

// ------------------------------------------------------------------
// Animate objects
// ------------------------------------------------------------------
function animate(){
    // Clear contexts
    ctx.clearRect(0,0,canvas.width,canvas.height);
        
    // Draw Objects Here

    // Keep running update
    requestAnimFrame(update);
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
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}


//
//  End
//