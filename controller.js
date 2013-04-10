function Controller() {
	var timeSimulate = null;
	var variance = 0;
	var L3 = new levelThree();
	var L2 = new levelTwo();

	/* Does the simulation based on special time skips.
	this.simulate = function(timeSkip) {
		timeSimulate = timeSkip/;
		for ( var i = 0; i < timeSimulate; i++) {
			this.countryMovement();
			this.cityMovement();
		}
		;
	}// this.simulate*/

	/* NPC movement across the country */
	this.countryMovement = function() {
		/* simulate movement between cities */
		// get population data from level 3
		for ( var i = 0; i < 6; i++) {
			// choose 1 random NPC type
			// 1- Neutral, 2- Police, 3- Rival, 4- Allied, 5-6- No movement
			var npcType = Math.floor((Math.random() * 6) + 1);
			switch (i) {
			case 1:
				// move npc from east to west
				this.moveNPCity(npcType, L3.eastCity, L3.westCity);
				break;
			case 2:
				// move npc from north to west
				this.moveNPCity(npcType, L3.northCity, L3.westCity);
				break;
			case 3:
				// move npc from east to north
				this.moveNPCity(npcType, L3.eastCity, L3.northCity);
				break;
			case 4:
				// move npc from west to east
				this.moveNPCity(npcType, L3.westCity, L3.eastCity);
				break;
			case 5:
				// move npc from west to north
				this.moveNPCity(npcType, L3.westCity, L3.northCity);
				break;
			default:
				// move npc from north to east
				this.moveNPCity(npcType, L3.northCity, L3.eastCity);
			}// end switch
		}// end for
	}// this.countryMovement*/

	/* Move NPC from one city to another */
	this.moveNPCity = function(npc, city1, city2) {
		console.log("----Before movement----");
		console.log("city1:"+city1.population);
		console.log("city2:"+city2.population);
		// move npc type from city1 to city2
		city1.population--;
		city2.population++;
		switch (npc) {
		case 1:
			// move neutral
			console.log("npcType: neutral");
			city1.neutral--;
			city2.neutral++;
			break;
		case 2:
			// move police
			console.log("npcType: police");
			city1.police--;
			city2.police++;
			break;
		case 3:
			// move rival
			console.log("npcType: rival");
			city1.rivals--;
			city2.rivals++;
			break;
		case 4:
			// move allied
			console.log("npcType: allied");
			city1.allied--;
			city2.allied++;
			break;
		default:
			// do nothing
			console.log("npcType: no movement");
			city1.population++;
			city2.population--;
		}// end switch
		console.log("----After movement----");
		console.log("city1:"+city1.population);
		console.log("city2:"+city2.population);
	}// this.moveNPC*/

	/* NPC movement across the city */
	this.cityMovement = function() {
		// simulate movement in cities
	}// this.cityMovement*/

	/* NPC interaction within the city */
	this.npcInteract = function(city, vigil) {
		var npcGen = 3 + vigil;// determine police selection rate
		if (npcGen < 4) {
			npcGen = 4;
		} else if (npcGen > 7) {
			npcGen = 7;
		}
		/* choose 2 random NPC type */
		// 1- Neutral, 2- Police, 3- Rival, 4- Allied, 5-7- Police(vigilance
		// dependant)
		var npcType1 = Math.floor((Math.random() * npcGen) + 1);
		if (npcType1 > 4) {// make 5-7 become 2
			npcType1 = 2;// police
		}// end if(npcType1 > 4)
		var npcType2 = Math.floor((Math.random() * npcGen) + 1);
		if (npcType2 > 4) {// make 5-7 become 2
			npcType1 = 2;// police
		}// end if(npcType2 > 4)
		while (npcType1 == npcType2) { // if 2 similar npcs meet, then nothing
										// will happen, so avoid it
			npcType2 = Math.floor((Math.random() * npcGen) + 1);
			if (npcType2 > 4) {// make 5-7 become 2
				npcType1 = 2;// police
			}// end if(npcType2 > 4)
		}// end while
		/* Simulate interaction */
		if (npcType1 == 2 || npcType2 == 2) {// police vs.
			if (npcType1 == 3 || npcType2 == 3 || npcType1 == 4
					|| npcType2 == 4) {// allied or rival
				// simulate fight
				var fightOutcome = Math.floor((Math.random() * 2) + 1);
				if (fightOutcome == 1) {// success
				} else {// fail
				}// end if-else
			}// end if
		} else if (npcType1 == 1 || npcType2 == 1) {// neutral vs.
			if (npcType1 == 3 || npcType2 == 3 || npcType1 == 4
					|| npcType2 == 4) {// allied or rival
				// simulate fight
				var fightOutcome = Math.floor((Math.random() * 2) + 1);
				if (fightOutcome == 1) {// success
				} else {// fail
				}// end if-else
			}// end if
		} else if (npcType1 == 3 || npcType2 == 3) {// rival vs.
			if (npcType1 == 4 || npcType2 == 4) {// allied
				// simulate fight
				var fightOutcome = Math.floor((Math.random() * 2) + 1);
				if (fightOutcome == 1) {// success
				} else {// fail
				}// end if-else
			}// end if
		}
	}// this.npcInteract*/

	/* Variance function */
	this.variance = function() {
		var tempVariance = Math.random();
		variance = tempVariance.toFixed(3);
	}//this.variance*/
}