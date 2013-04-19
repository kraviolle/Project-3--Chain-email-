var max_cities = 3;
var max_buildings = 10;

function building() {
	var name;
	var total_people;
	var ratio_blue;
	var ratio_red;
	var ratio_neutral
}

function level() {

	this.mousepos_x = 0;
	this.mousepos_y = 0;
	this.abst_level = 0; // The current abstraction level that the screen is at. 3 = Country, 2 = City, 1 = Room
	this.city = [];

	for ( var i = 0; i < max_cities; i++) {
		this.city[i] = [];
		for ( var j = 0; j < max_buildings; j++) {
			this.city[i][j] = new building();
		}
	}

	//
	//	Updates the game base one what buttons have been clicked
	//
	this.Mouseclick = function() {
		if (this.mousepos_x <= 890 && this.mousepos_x >= 810) {
			if (this.mousepos_y <= 50 && this.mousepos_y >= 10) {
				this.abst_level = 3;
			}
			if (this.mousepos_y <= 100 && this.mousepos_y >= 60) {
				this.abst_level = 2;
			}
			if (this.mousepos_y <= 150 && this.mousepos_y >= 110) {
				this.abst_level = 1;
			}
		}

	}
	//
	//
	//
}

function levelThree() {
	/*Queues for movement of NPCs*/
	this.in_N = [];
	this.out_N = [];
	this.in_E = [];
	this.out_E = [];
	this.in_W = [];
	this.out_W = [];
	/*Data to display*/
	this.playerCity = 1;//1-North, 2-East, 3-West
	this.northCity = {
		neutral : 35,
		police : 18,
		rivals : 9,
		allied : 0
	};
	this.eastCity = {
		neutral : 31,
		police : 10,
		rivals : 9,
		allied : 2
	};
	this.westCity = {
		neutral : 21,
		police : 13,
		rivals : 11,
		allied : 5
	};

	/*Get total population per city*/
	this.northCityPopulation = function(){
		return this.northCity.neutral+this.northCity.police+this.northCity.rivals+this.northCity.allied;
	}
	this.eastCityPopulation = function(){
		return this.eastCity.neutral+this.eastCity.police+this.eastCity.rivals+this.eastCity.allied;
	}
	this.westCityPopulation = function(){
		return this.westCity.neutral+this.westCity.police+this.westCity.rivals+this.westCity.allied;
	}
}

function levelTwo() {
	var totalLocations = 6;
	/*Queues for movement of NPCs*/
	this.in_H = [];
	this.out_H = [];
	this.in_PS = [];
	this.out_PS = [];
	this.in_B1 = [];
	this.out_B1 = [];
	this.in_B2 = [];
	this.out_B2 = [];
	this.in_B3 = [];
	this.out_B3 = [];
	this.in_B4 = [];
	this.out_B4 = [];
	/*Data to display*/
	this.playerLocation = 2;//0-hospital, 1-policeStation, 2-buildingOne, 3-buildingTwo, 4-buildingThree, 5-buildingFour
	this.hospital = {
		neutral : 1,
		police : 1,
		//src : "images/hospital.png"
		};
	this.policeStation = {
		neutral : 1,
		police : 1
	};
	this.buildingOne = {
		neutral : 1,
		police : 1,
		rivals : 1,
		allied : 1
	};
	this.buildingTwo = {
		neutral : 1,
		police : 1,
		rivals : 1,
		allied : 1
	};
	this.buildingThree = {
		neutral : 1,
		police : 1,
		rivals : 1,
		allied : 1
	};
	this.buildingFour = {
		neutral : 1,
		police : 1,
		rivals : 1,
		allied : 1
	};
	/*Get total population per building*/
	this.hospitalPopulation = function(){
		return this.hospital.neutral+this.hospital.police;
	}
	this.policeStationPopulation = function(){
		return this.policeStation.neutral+this.policeStation.police;
	}
	this.buildingOnePopulation = function(){
		return this.buildingOne.neutral+this.buildingOne.police+this.buildingOne.rivals+this.buildingOne.allied;
	}
	this.buildingTwoPopulation = function(){
		return this.buildingTwo.neutral+this.buildingTwo.police+this.buildingTwo.rivals+this.buildingTwo.allied;
	}
	this.buildingThreePopulation = function(){
		return this.buildingThree.neutral+this.buildingThree.police+this.buildingThree.rivals+this.buildingThree.allied;
	}
	this.buildingFourPopulation = function(){
		return this.buildingFour.neutral+this.buildingFour.police+this.buildingFour.rivals+this.buildingFour.allied;
	}

	/*Use this function for moving to jail only*/
	this.moveToJail= function(location, number, type){
		switch(location){
		case 2:
			if(type == 3 && this.buildingOne.rivals >= number){
				this.buildingOne.population -= number;
				this.buildingOne.rivals  -= number;
				this.policeStation.population += number;
				this.policeStation.neutral += number;
			} else if(type == 4 && this.buildingOne.allied >= number){
				this.buildingOne.population -= number;
				this.buildingOne.allied  -= number;
				this.policeStation.population += number;
				this.policeStation.neutral += number;
			}
			break;
		case 3:
			if(type == 3 && this.buildingTwo.rivals >= number){
				this.buildingTwo.population -= number;
				this.buildingTwo.rivals  -= number;
				this.policeStation.population += number;
				this.policeStation.neutral += number;
			} else if(type == 4 && this.buildingTwo.allied >= number){
				this.buildingTwo.population -= number;
				this.buildingTwo.allied  -= number;
				this.policeStation.population += number;
				this.policeStation.neutral += number;
			}
			break;
		case 4:
			if(type == 3 && this.buildingThreePopulation.rivals >= number){
				this.buildingThreePopulation.population -= number;
				this.buildingThreePopulation.rivals  -= number;
				this.policeStation.population += number;
				this.policeStation.neutral += number;
			} else if(type == 4 && this.buildingThreePopulation.allied >= number){
				this.buildingThreePopulation.population -= number;
				this.buildingThreePopulation.allied  -= number;
				this.policeStation.population += number;
				this.policeStation.neutral += number;
			}
			break;
		case 5:
			if(type == 3 && this.buildingFour.rivals >= number){
				this.buildingFour.population -= number;
				this.buildingFour.rivals  -= number;
				this.policeStation.population += number;
				this.policeStation.neutral += number;
			} else if(type == 4 && this.buildingFour.allied >= number){
				this.buildingFour.population -= number;
				this.buildingFour.allied  -= number;
				this.policeStation.population += number;
				this.policeStation.neutral += number;
			}
			break;
		default:
			//do nothing
		}//end switch
	}//end moveToJail

	this.totalLoc = function(){
		return totalLocations;
	}//end totalLoc

	/* Get data from Level 3 and decompress it */
	this.decompressDataL3 = function(level3){
		var tempPop, tempNeutral, tempPolice, tempRivals, tempAllied, tempVariance;
		switch(level3.playerCity){
		case 1:
			tempNeutral = level3.northCity.neutral;
			tempPolice = level3.northCity.police;
			tempRivals = level3.northCity.rivals;
			tempAllied = level3.northCity.allied;
			break;
		case 2:
			tempNeutral = level3.eastCity.neutral;
			tempPolice = level3.eastCity.police;
			tempRivals = level3.eastCity.rivals;
			tempAllied = level3.eastCity.allied;
			break;
		case 3:
			tempNeutral = level3.westCity.neutral;
			tempPolice = level3.westCity.police;
			tempRivals = level3.westCity.rivals;
			tempAllied = level3.westCity.allied;
			break;
		default:
			//do nothing
		}
		//fill hospital
		do{
			tempVariance = Math.random();
		}while(tempVariance > 0.4 || tempVariance < 0.3);
		console.log("hos var:"+tempVariance);
		this.hospital.neutral = Math.ceil(tempVariance * tempNeutral);
		this.hospital.police = Math.ceil(tempVariance * tempPolice);
		tempNeutral -= this.hospital.neutral;
		tempPolice -= this.hospital.police;
		//fill police station
		do{
			tempVariance = Math.random();
		}while(tempVariance > 0.4 || tempVariance < 0.3);
		console.log("ps var:"+tempVariance);
		this.policeStation.neutral = Math.ceil(tempVariance * tempNeutral);
		this.policeStation.police = Math.ceil(tempVariance * tempPolice);
		tempNeutral -= this.policeStation.neutral;
		tempPolice -= this.policeStation.police;
		//fill buildingOne
		do{
			tempVariance = Math.random();
		}while(tempVariance > 0.4 || tempVariance < 0.15);
		console.log("b1 var:"+tempVariance);
		this.buildingOne.neutral = Math.ceil(tempVariance * tempNeutral);
		this.buildingOne.police = Math.ceil(tempVariance * tempPolice);
		this.buildingOne.rivals = Math.ceil(tempVariance * tempRivals);
		this.buildingOne.allied = Math.ceil(tempVariance * tempAllied);
		tempNeutral -= this.buildingOne.neutral;
		tempPolice -= this.buildingOne.police;
		tempRivals -= this.buildingOne.rivals;
		tempAllied -= this.buildingOne.allied;
		//fill buildingTwo
		do{
			tempVariance = Math.random();
		}while(tempVariance > 0.4 || tempVariance < 0.15);
		console.log("b2 var:"+tempVariance);
		this.buildingTwo.neutral = Math.ceil(tempVariance * tempNeutral);
		this.buildingTwo.police = Math.ceil(tempVariance * tempPolice);
		this.buildingTwo.rivals = Math.ceil(tempVariance * tempRivals);
		this.buildingTwo.allied = Math.ceil(tempVariance * tempAllied);
		tempNeutral -= this.buildingTwo.neutral;
		tempPolice -= this.buildingTwo.police;
		tempRivals -= this.buildingTwo.rivals;
		tempAllied -= this.buildingTwo.allied;
		//fill buildingThree
		do{
			tempVariance = Math.random();
		}while(tempVariance > 0.4 || tempVariance < 0.15);
		console.log("b3 var:"+tempVariance);
		this.buildingThree.neutral = Math.ceil(tempVariance * tempNeutral);
		this.buildingThree.police = Math.ceil(tempVariance * tempPolice);
		this.buildingThree.rivals = Math.ceil(tempVariance * tempRivals);
		this.buildingThree.allied = Math.ceil(tempVariance * tempAllied);
		tempNeutral -= this.buildingThree.neutral;
		tempPolice -= this.buildingThree.police;
		tempRivals -= this.buildingThree.rivals;
		tempAllied -= this.buildingThree.allied;
		//fill buildingFour
		this.buildingFour.neutral = tempNeutral;
		this.buildingFour.police = tempPolice;
		this.buildingFour.rivals = tempRivals;
		this.buildingFour.allied = tempAllied;
		tempNeutral -= this.buildingFour.neutral;
		tempPolice -= this.buildingFour.police;
		tempRivals -= this.buildingFour.rivals;
		tempAllied -= this.buildingFour.allied;
	}//end decompressDataL3

	/* Compress data in Level 2 to send to Level 3 */
	this.compressDataL3 = function(level3){
		var tempNeutral, tempPolice, tempRivals, tempAllied;
		tempNeutral = this.hospital.neutral + this.policeStation.neutral + 
					  this.buildingOne.neutral + this.buildingTwo.neutral+ 
					  this.buildingThree.neutral + this.buildingFour.neutral;
		tempPolice = this.hospital.police + this.policeStation.police + 
					 this.buildingOne.police + this.buildingTwo.police+ 
					 this.buildingThree.police + this.buildingFour.police;
		tempRivals = this.buildingOne.rivals + this.buildingTwo.rivals+ 
					 this.buildingThree.rivals + this.buildingFour.rivals;
		tempAllied = this.buildingOne.allied + this.buildingTwo.allied+ 
					 this.buildingThree.allied + this.buildingFour.allied;
		switch(level3.playerCity){
		case 1:
			level3.northCity.neutral = tempNeutral;
			level3.northCity.police = tempPolice;
			level3.northCity.rivals = tempRivals;
			level3.northCity.allied = tempAllied;
			break;
		case 2:
			level3.eastCity.neutral = tempNeutral;
			level3.eastCity.police = tempPolice;
			level3.eastCity.rivals = tempRivals;
			level3.eastCity.allied = tempAllied;
			break;
		case 3:
			level3.westCity.neutral = tempNeutral;
			level3.westCity.police = tempPolice;
			level3.westCity.rivals = tempRivals;
			level3.westCity.allied = tempAllied;
			break;
		default:
			//do nothing
		}
	}//end compressDataL3

	/* Clear the queues for buildings */
	this.clearArrays = function(){
		var i = 0;
		/*hospital queues*/
		for (i = 0; i < this.in_H.length; i++) {
			this.in_H.pop();
		}
		for (i = 0; i < this.out_H.length; i++) {
			this.out_H.pop();
		}
		/*police station queues*/
		for (i = 0; i < this.in_PS.length; i++) {
			this.in_PS.pop();
		}
		for (i = 0; i < this.out_PS.length; i++) {
			this.out_PS.pop();
		}
		/*building one queues*/
		for (i = 0; i < this.in_B1.length; i++) {
			this.in_B1.pop();
		}
		for (i = 0; i < this.out_B1.length; i++) {
			this.out_B1.pop();
		}
		/*building two queues*/
		for (i = 0; i < this.in_B2.length; i++) {
			this.in_B2.pop();
		}
		for (i = 0; i < this.out_B2.length; i++) {
			this.out_B2.pop();
		}
		/*building three queues*/
		for (i = 0; i < this.in_B3.length; i++) {
			this.in_B3.pop();
		}
		for (i = 0; i < this.out_B3.length; i++) {
			this.out_B3.pop();
		}
		/*building four queues*/
		for (i = 0; i < this.in_B4.length; i++) {
			this.in_B4.pop();
		}
		for (i = 0; i < this.out_B4.length; i++) {
			this.out_B4.pop();
		}
	}//end clearArray
}