/************************************************************************************
By Lionel

NPC Type reference:	1- Neutral, 2- Police, 3- Rival,
					4- Allied, 5-onwards- Other uses
Building Type reference: 	1- Hospital, 2- Police station,
							3-onwards- Building One onwards
************************************************************************************/
function Controller(level3, level2) {
	var timeSimulate = null;
	var variance = 0;
	var L3 = level3;
	var L2 = level2;

	/* NPC movement across the country */
	this.countryMovement = function() {
		/* simulate movement between cities */
		console.log("=======Start L3 Simulation=======");
		// get population data from level 3
		for ( var i = 0; i < 6; i++) {
			// choose 1 random NPC type
			// 5-6- No movement
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
		console.log("=======End L3 Simulation=======");
	}// this.countryMovement*/

	/* Move NPC from one city to another */
	this.moveNPCity = function(npc, city1, city2) {
		// move npc type from city1 to city2
		/*city1.population--;
		city2.population++;*/
		switch (npc) {
		case 1:
			// move neutral
			console.log("NPC moved: neutral");
			city1.neutral--;
			city2.neutral++;
			break;
		case 2:
			// move police
			console.log("NPC moved: police");
			city1.police--;
			city2.police++;
			break;
		case 3:
			// move rival
			console.log("NPC moved: rival");
			city1.rivals--;
			city2.rivals++;
			break;
		case 4:
			// move allied
			console.log("NPC moved: allied");
			city1.allied--;
			city2.allied++;
			break;
		default:
			// do nothing
			console.log("NPC moved: no movement");
			/*city1.population++;
			city2.population--;*/
		}// end switch
	}// this.moveNPC*/

	this.interactLevel3 = function(){
		console.log("~~~~~Start L3 Interaction Simulation~~~~~");
		var interactAmt = 0;
		do{
			interactAmt = Math.floor((Math.random()*12)+1);
		} while(interactAmt < 8);
		for (var i = 0; i < interactAmt; i++) {
			var npcType1 = Math.floor((Math.random() * 4) + 1);
			var npcType2 = 0;
			do{
				npcType2 = Math.floor((Math.random() * 4) + 1);
			}while(npcType1 == npcType2)
			var cityType = Math.floor((Math.random() * 3) + 1);
			this.variance();
			if(cityType == 1 && cityType != L3.playerCity){
					this.npcMatchUp1(npcType1, npcType2, L3.northCity);
			}
			if(cityType == 2 && cityType != L3.playerCity){
					this.npcMatchUp1(npcType1, npcType2, L3.eastCity);
			}
			if(cityType == 3 && cityType != L3.playerCity){
					this.npcMatchUp1(npcType1, npcType2, L3.westCity);
			}
		}//end for
		console.log("~~~~~End L3 Interaction Simulation~~~~~");
	}

	/* NPC movement across the city
	/* When determining which type, will add 1 more to simulate chance of no movement*/
	this.cityMovement = function() {
		console.log("=======Start L2 Movement Simulation=======");
		// move npc from hospital
		var npcType = Math.floor((Math.random() * 3) + 1);
		var building = Math.floor((Math.random() * (L2.totalLoc() - 2)) + 1);
		/*console.log("npcType: "+npcType);
		console.log("building: "+building);*/
		if(npcType == 1 && L2.hospital.neutral > 80){//neutral
			L2.hospital.neutral--;
			if(building == 1){
				L2.buildingOne.neutral++;
				console.log("Hospital: neutral move to buildingOne");
			} else if(building == 2){
				L2.buildingTwo.neutral++;
				console.log("Hospital: neutral move to buildingTwo");
			}//end if-else
		} else if(npcType == 2 && L2.hospital.police > 15){//police
			L2.hospital.police--;
			L2.policeStation.police++;
			console.log("Hospital: police move to policeStation");
		}
		// move npc from police station
		npcType = Math.floor((Math.random() * 3) + 1);//only 2 types of NPC at police station
		building = Math.floor((Math.random() * (L2.totalLoc() - 3)) + 1);
		/*console.log("npcType: "+npcType);
		console.log("building: "+building);*/
		if(npcType == 1 && L2.policeStation.neutral > 0){//neutral
			L2.policeStation.neutral--;
			if(building == 1){
				L2.buildingOne.neutral++;
				console.log("Police Station: neutral move to buildingOne");
			} else if(building == 2){
				L2.buildingTwo.neutral++;
				console.log("Police Station: neutral move to buildingTwo");
			}//end if-else
		} else if(npcType == 2 && L2.policeStation.police > 20){//police
			L2.policeStation.police--;
			if(building == 1){
				L2.buildingOne.police++;
				console.log("Police Station: police move to buildingOne");
			} else if(building == 2){
				L2.buildingTwo.police++;
				console.log("Police Station: police move to buildingTwo");
			} else if(building == 3){
				L2.hospital.police++;
				console.log("Police Station: police move to hospital");
			}//end if-else
		}
		// move npc from buildingOne
		npcType = Math.floor((Math.random() * 5) + 1);
		building = Math.floor((Math.random() * (L2.totalLoc() - 3)) + 1);
		/*console.log("npcType: "+npcType);
		console.log("building: "+building);*/
		if(npcType == 1 && L2.buildingOne.neutral > 0){//neutral
			L2.buildingOne.neutral--;
			if(building == 1){
				L2.buildingTwo.neutral++;
				console.log("buildingOne: neutral move to buildingTwo");
			} else if(building == 2){
				L2.policeStation.neutral++;
				console.log("buildingOne: neutral move to policeStation");
			} else if(building == 3){
				L2.hospital.neutral++;
				console.log("buildingOne: neutral move to hospital");
			}//end if-else
		} else if(npcType == 2 && L2.buildingOne.police > 15){//police
			L2.buildingOne.police--;
			if(building == 1){
				L2.buildingTwo.police++;
				console.log("buildingOne: police move to buildingTwo");
			} else if(building == 2){
				L2.policeStation.police++;
				console.log("buildingOne: police move to policeStation");
			}//end if-else
		} else if(npcType == 3 && L2.buildingOne.rivals > 0){//rivals
			L2.buildingOne.rivals--;
			if(building == 1 || building == 2 || building == 3){
				L2.buildingTwo.rivals++;
				console.log("buildingOne: rival move to buildingTwo");
			}//end if
		} else if(npcType == 4 && L2.buildingOne.allied > 0){//allied
			L2.buildingOne.allied--;
			if(building == 1 || building == 2 || building == 3){
				L2.buildingTwo.allied++;
				console.log("buildingOne: allied move to buildingTwo");
			}//end if
		}
		// move npc from buildingTwo
		npcType = Math.floor((Math.random() * 5) + 1);
		building = Math.floor((Math.random() * (L2.totalLoc() - 3)) + 1);
		/*console.log("npcType: "+npcType);
		console.log("building: "+building);*/
		if(npcType == 1 && L2.buildingTwo.neutral > 0){//neutral
			L2.buildingTwo.neutral--;
			if(building == 1){
				L2.buildingOne.neutral++;
				console.log("buildingTwo: neutral move to buildingOne");
			} else if(building == 2){
				L2.policeStation.neutral++;
				console.log("buildingTwo: neutral move to policeStation");
			} else if(building == 3){
				L2.hospital.neutral++;
				console.log("buildingTwo: neutral move to hospital");
			}//end if-else
		} else if(npcType == 2 && L2.buildingTwo.police > 15){//police
			L2.buildingTwo.police--;
			if(building == 1){
				L2.buildingOne.police++;
				console.log("buildingTwo: police move to buildingOne");
			} else if(building == 2){
				L2.policeStation.police++;
				console.log("buildingTwo: police move to policeStation");
			}//end if-else
		} else if(npcType == 3 && L2.buildingTwo.rivals > 0){//rivals
			L2.buildingTwo.rivals--;
			if(building == 1 || building == 2 || building == 3){
				L2.buildingOne.rivals++;
				console.log("buildingTwo: rival move to buildingOne");
			}//end if
		} else if(npcType == 4 && L2.buildingTwo.allied > 0){//allied
			L2.buildingTwo.allied--;
			if(building == 1 || building == 2 || building == 3){
				L2.buildingOne.allied++;
				console.log("buildingTwo: allied move to buildingOne");
			}//end if
		}
		console.log("=======End L2 Movement Simulation=======");
	}// this.cityMovement*/

	this.interactLevel2 = function(){
		console.log("~~~~~Start L2 Interaction Simulation~~~~~");
		var interactAmt = 0;
		do{
			interactAmt = Math.floor((Math.random()*12)+1);
		} while(interactAmt < 8);
		for (var i = 0; i < interactAmt; i++) {
			var npcType1 = Math.floor((Math.random() * 4) + 1);
			var npcType2 = 0;
			do{
				npcType2 = Math.floor((Math.random() * 4) + 1);
			}while(npcType1 == npcType2)
			var building = Math.floor((Math.random() * L2.totalLoc()-2) + 1);
			this.variance();
			if(building == 1 && building != L2.playerCity){
					this.npcMatchUp2(npcType1, npcType2, L3.northCity);
			}
			if(building == 2 && building != L2.playerCity){
					this.npcMatchUp2(npcType1, npcType2, L3.eastCity);
			}
		}//end for
		console.log("~~~~~End L2 Interaction Simulation~~~~~");
	}

	/* Variance function */
	this.variance = function() {
		var tempVariance;
		do{
			tempVariance = Math.random();
		}while(tempVariance > 0.3);
		variance = tempVariance.toFixed(2);
	}//this.variance*/

	this.npcMatchUp1 = function(npcType1, npcType2, city){
		// Simulate interaction
		var number;
		if (npcType1 == 2 || npcType2 == 2) {// police vs.
			if (npcType1 == 3 || npcType2 == 3 || npcType1 == 4
					|| npcType2 == 4) {// allied or rival
				// simulate fight
				var fightOutcome = Math.floor((Math.random() * 2) + 1);
				if (fightOutcome == 1) {// success
					if((npcType1 == 3 || npcType2 == 3) && city.rivals > 0){
						number = Math.ceil(city.rivals * variance);
						if(number <= city.rivals){
							city.rivals -= number;
							city.neutral += number;
							console.log("Police arrested "+ number +" rivals.");
						}
					} else if((npcType1 == 4|| npcType2 == 4) && city.allied > 0){
						number = Math.ceil(city.allied * variance);
						if(number <= city.allied){
							city.allied -= number;
							city.neutral += number;
							console.log("Police arrested "+ number +" allied.");
						}
					}
				} else {// fail
					console.log("Police lost.");
				}// end if-else
			}// end if
		} else if (npcType1 == 1 || npcType2 == 1) {// neutral vs.
			if (npcType1 == 3 || npcType2 == 3 || npcType1 == 4
					|| npcType2 == 4) {// allied or rival
				// simulate recruitment
				var recruitOutcome = Math.floor((Math.random() * 2) + 1);
				if (recruitOutcome == 1) {// success
					if((npcType1 == 3 || npcType2 == 3) && city.neutral > 0 && city.rivals > 0){
						number = Math.ceil(city.rivals * variance);
						if(number <= city.neutral){
							city.rivals += number;
							city.neutral -= number;
							console.log("Recruited "+ number +" rivals.");
						}
					} else if((npcType1 == 4|| npcType2 == 4) && city.neutral > 0 && city.allied > 0){
						number = Math.ceil(city.allied * variance);
						if(number <= city.neutral){
							city.allied += number;
							city.neutral -= number;
							console.log("Recruited "+ number +" allied.");
						}
					}
				} else {// fail
				}// end if-else
			}// end if
		} else if ((npcType1 == 3 || npcType2 == 3) && city.rivals > 0) {// rival vs.
			if ((npcType1 == 4 || npcType2 == 4) && city.allied > 0) {// allied
				// simulate fight
				var fightOutcome = Math.floor((Math.random() * 2) + 1);
				if (fightOutcome == 1) {// success
					if(city.rivals < city.allied){
						number = Math.ceil(city.rivals * variance);
					} else {
						number = Math.ceil(city.allied * variance);
					}
					city.allied -= number;
					city.neutral += number;
					console.log("Lost "+ number +" allied in gang fight.");
				} else {// fail
					if(city.rivals < city.allied){
						number = Math.ceil(city.rivals * variance);
					} else {
						number = Math.ceil(city.allied * variance);
					}
					city.rivals -= number;
					city.neutral += number;
					console.log("Beat "+ number +" rivals in gang fight.");
				}// end if-else
			}// end if
		}
	}

	this.npcMatchUp2 = function(npcType1, npcType2, building){
		// Simulate interaction
		if (npcType1 == 2 || npcType2 == 2) {// police vs.
			if (npcType1 == 3 || npcType2 == 3 || npcType1 == 4
					|| npcType2 == 4) {// allied or rival
				// simulate fight
				var fightOutcome = Math.floor((Math.random() * 2) + 1);
				if (fightOutcome == 1) {// success
					if((npcType1 == 3 || npcType2 == 3) && building.rivals > 0){
						building.rivals --;
						L2.policeStation.neutral++;
						console.log("Police arrested rival.");
					} else if((npcType1 == 4|| npcType2 == 4) && building.allied > 0){
						building.allied--;
						L2.policeStation.neutral++;
						console.log("Police arrested ally.");
					}
				} else {// fail
					building.police--;
					L2.hospital.police++;
					console.log("Police lost.");
				}// end if-else
			}// end if
		} else if (npcType1 == 1 || npcType2 == 1) {// neutral vs.
			if (npcType1 == 3 || npcType2 == 3 || npcType1 == 4
					|| npcType2 == 4) {// allied or rival
				// simulate recruitment
				var recruitOutcome = Math.floor((Math.random() * 2) + 1);
				if (recruitOutcome == 1) {// success
					if((npcType1 == 3 || npcType2 == 3) && building.neutral > 0 && building.rivals > 0){
						building.rivals++;
						building.neutral--;
						console.log("Rival recruited.");
					} else if((npcType1 == 4|| npcType2 == 4) && building.neutral > 0 && building.allied > 0){
						building.allied++;
						building.neutral--;
						console.log("Ally recruited");
					}
				} else {// fail
				}// end if-else
			}// end if
		} else if ((npcType1 == 3 || npcType2 == 3) && building.rivals > 0) {// rival vs.
			if ((npcType1 == 4 || npcType2 == 4) && building.allied > 0) {// allied
				// simulate fight
				var fightOutcome = Math.floor((Math.random() * 2) + 1);
				if (fightOutcome == 1) {// success
					building.allied--;
					L2.hospital.neutral++;
					console.log("Lost ally in fight.");
				} else {// fail
					building.rivals--;
					L2.hospital.neutral++;;
					console.log("Beat rival in fight.");
				}// end if-else
			}// end if
		}
	}
}