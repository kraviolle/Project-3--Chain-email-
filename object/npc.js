
function NPC(pos_x,pos_y,faction,id, where){// passes in the X & Y coordinates to see where they stand, and type and unique id.
	
	this.x=pos_x;
	this.y=pos_y;

	this.inside = where; // True if NPC in building, false if NPC outside building - HS
	this.intention = 0; // 0 = Idle, 1 = Move, 2 = Recruiting,  3 = Fighting, 4 - Talking, 5 - Interogation - HS
	this.destination = new Point(-1, -1); // -1,-1 signifies that there is no destination at hand - HS
	this.destination_inside = true; // True means destination is inside, false means destination is outside. - HS
	
	// For recruiting - HS
	this.recruiting = -1; // States the ID of the NPC which this NPC is trying to recruit
	this.recruited = -1;// States the ID of the NPC which is trying to recruit this NPC
	this.fighting = -1; // States the ID of the gang member that this NPC is fighting
	this.interrogate = -1; // States the ID of the police or the person being interrogated
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
	this.message="HELLO";
	
	if(faction==0){
		choice=Math.random();
		if(choice<0.5){
		this.message = "Oh hi ! I want no trouble...";}
		else{this.message="I heard there is a fight going on...";}
	}
	
	
	

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
	
	
	}

}
