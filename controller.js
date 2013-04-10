function Controller(){
	var timeSimulate = null;
	var variance = 0;

	/*Does the simulation. Enter time skipped in 10sec intervals*/
	this.simulate =  function(timeSkip){
		timeSimulate = timeSkip;
		for (var i = 0; i < timeSimulate; i++){
			this.countryMovement();
			this.cityMovement();
		};
	}//this.simulate*/

	/*NPC movement across the country*/
	this.countryMovement = function(){
		/*simulate movement between cities*/
		//get population data from level 3
		for (var i = 0; i < 6; i++){
			//choose 1 random NPC type
			//1- Neutral, 2- Police, 3- Rival, 4- Allied, 5-6- No movement
			var npcType = Math.floor((Math.random()*6)+1);
			switch(i){
			case 1:
				//move npc from east to west
				moveNPCity(npcType, east, west);
				break;
			case 2:
				//move npc from north to west
				moveNPCity(npcType, north, west);
				break;
			case 3:
				//move npc from east to north
				moveNPCity(npcType, east, north);
				break;
			case 4:
				//move npc from west to east
				moveNPCity(npcType, west, east);
				break;
			case 5:
				//move npc from west to north
				moveNPCity(npcType, west, north);
				break;
			default:
				//move npc from north to east
				moveNPCity(npcType, north, east);
			}//end switch
		}//end for
	}//this.countryMovement*/

	/*Move NPC from one city to another*/
	this.moveNPCity = function(npc, city1, city2){
		//move npc type from city1 to city2
		switch(npc){
		case 1:
			//move neutral
			break;
		case 2:
			//move police
			break;
		case 3:
			//move rival
			break;
		case 4:
			//move allied
			break;
		default:
			//do nothing
		}//end switch
	}//this.moveNPC*/

	/*NPC movement across the city*/
	this.cityMovement = function(){
		//simulate movement in cities
	}//this.cityMovement*/

	/*NPC interaction within the city*/
	this.npcInteract = function(city, vigil){
		var npcGen = 3 + vigil;//determine police selection rate
		if (npcGen < 4){
			npcGen = 4;
		} else if (npcGen >7){
			npcGen = 7;
		}
		/*choose 2 random NPC type*/
		//1- Neutral, 2- Police, 3- Rival, 4- Allied, 5-7- Police(vigilance dependant)
		var npcType1 = Math.floor((Math.random()*npcGen)+1);
		if (npcType1 > 4){//make 5-7 become 2
			npcType1 = 2;//police
		}//end if(npcType1 > 4)
		var npcType2 = Math.floor((Math.random()*npcGen)+1);
		if (npcType2 > 4){//make 5-7 become 2
			npcType1 = 2;//police
		}//end if(npcType2 > 4)
		while(npcType1 == npcType2){ //if 2 similar npcs meet, then nothing will happen, so avoid it
			npcType2 = Math.floor((Math.random()*npcGen)+1);
			if (npcType2 > 4){//make 5-7 become 2
				npcType1 = 2;//police
			}//end if(npcType2 > 4)
		}//end while
		/*Simulate interaction*/
		if(npcType1 == 2 || npcType2 == 2){//police vs.
			if (npcType1 == 3 || npcType2 == 3 || npcType1 == 4 || npcType2 == 4) {//allied or rival
				//simulate fight
				var fightOutcome = Math.floor((Math.random()*2)+1);
				if (fightOutcome == 1) {//success
				} else {//fail
				}//end if-else
			}//end if
		} else if(npcType1 == 1 || npcType2 == 1){//neutral vs.
			if (npcType1 == 3 || npcType2 == 3 || npcType1 == 4 || npcType2 == 4) {//allied or rival
				//simulate fight
				var fightOutcome = Math.floor((Math.random()*2)+1);
				if (fightOutcome == 1) {//success
				} else {//fail
				}//end if-else
			}//end if
		} else if(npcType1 == 3 || npcType2 == 3){//rival vs.
			if (npcType1 == 4 || npcType2 == 4) {//allied
				//simulate fight
				var fightOutcome = Math.floor((Math.random()*2)+1);
				if (fightOutcome == 1) {//success
				} else {//fail
				}//end if-else
			}//end if
		}
	}//this.npcInteract*/

	
	/*Variance function*/
	this.variance = function(){
		var tempVariance = Math.random();
		variance = tempVariance.toFixed(3);
	}//this.variance*/
}