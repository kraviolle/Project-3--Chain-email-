
function NPC(pos_x,pos_y,faction,id, where){// passes in the X & Y coordinates to see where they stand, and type and unique id.
	
	this.x=pos_x;
	this.y=pos_y;

	this.inside = where; // True if NPC in building, false if NPC outside building - HS
	this.intention = 0; // 0 = Idle, 1 = Move, 2 = Recruiting  - HS
	this.destination = new Point(-1, -1); // -1,-1 signifies that there is no destination at hand - HS
	this.destination_inside = true; // True means destination is inside, false means destination is outside. - HS
	this.message = "Hello! I am NPC no. "; // HS testing interaction
	// For recruiting - HS
	this.recruiting = -1; // States the ID of the NPC which this NPC is trying to recruit
	this.recruited = -1;// States the ID of the NPC which is trying to recruit this NPC
	//
	// Condition for pathfinding - HS
	this.condition = 0;
	//
	this.interaction_start = 0; // This remembers what time the NPC started interacting such that system knows when to end the interaction
	this.id=id;
	this.health = 100;
	this.faction=faction;        // 0 = Neutral, 1 = Your lackey, 2 = Your rival's lacky, 3= undercover cop
	this.attack=20;
	this.defense=20;


	this.fight = function(targetid){

	}

	this.bribe= function(targetid){
	
	}

	this.recruit= function(tartgetid){
	
	}
	

	this.speech = function(random){
	//draw texts
	}


	this.draw= function(){
	var c=document.getElementById("game");			//canvas id	
	var ctx=c.getContext("2d");
	var img=document.getElementById("XXXX");		//havent had any images just yet.
	ctx.drawImage(img,this.x,this.y);
	
	}

}
