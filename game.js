
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

    // Init Objects Here

//
//  Registering mouse position - Hong Shing
//
    canvas.addEventListener('mousemove', function(evt) {
        var mousePos = getMousePos(canvas, evt);
        var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
        writeMessage(canvas, message);
      }, false);
//
//  End
//

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
        context.clearRect(0, 0, canvas.width, canvas.height);
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