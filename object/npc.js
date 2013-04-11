
function NPC(pos_x,pos_y,faction,id, where){// passes in the X & Y coordinates to see where they stand, and type and unique id.
	
	this.x=pos_x;
	this.y=pos_y;

	this.inside = where; // True if NPC in building, false if NPC outside building - HS
	this.intention = 0; // 0 = Idle - HS
	this.destination = new Point(0, 0); // HS
	this.message = "Hello! I am NPC no. "; // HS testing interaction
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
