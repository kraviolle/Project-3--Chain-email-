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
	/*Data to display*/
	this.northCity = {
		neutral : 830,
		police : 114,
		rivals : 56,
		allied : 0
	};
	this.westCity = {
		neutral : 912,
		police : 64,
		rivals : 24,
		allied : 0
	};
	this.eastCity = {
		neutral : 723,
		police : 179,
		rivals : 98,
		allied : 0
	};

	/*Get total population per city*/
	this.northCityPopulation = function(){
		return this.northCity.neutral+this.northCity.police+this.northCity.rivals+this.northCity+allied;
	}
	this.westCityPopulation = function(){
		return this.westCity.neutral+this.westCity.police+this.westCity.rivals+this.westCity+allied;
	}
	this.eastCityPopulation = function(){
		return this.eastCity.neutral+this.eastCity.police+this.eastCity.rivals+this.eastCity+allied;
	}
}

function levelTwo() {
	/*Data to display*/
	var totalLocations = 4;
	this.playerCity = 0;//0-North, 1-East, 2-West
	this.playerLocation = 2;//0-hospital, 1-policeStation, 2-buildingOne, 3-buildingTwo
	this.hospital = {
		neutral : 115,
		police : 57,
		rivals : 89,
		allied : 0
	};
	this.policeStation = {
		neutral : 225,
		police : 156
	};
	this.buildingOne = {
		neutral : 266,
		police : 20,
		rivals : 72,
		allied : 0
	};
	this.buildingTwo = {
		neutral : 266,
		police : 20,
		rivals : 72,
		allied : 0
	};
	/*Get total population per building*/
	this.hospitalPopulation = function(){
		return this.hospital.neutral+this.hospital.police+this.hospital.rivals+this.hospital+allied;
	}
	this.policeStationPopulation = function(){
		return this.policeStation.neutral+this.policeStation.police;
	}
	this.buildingOnePopulation = function(){
		return this.buildingOne.neutral+this.buildingOne.police+this.buildingOne.rivals+this.buildingOne+allied;
	}
	this.buildingTwoPopulation = function(){
		return this.buildingTwo.neutral+this.buildingTwo.police+this.buildingTwo.rivals+this.buildingTwo+allied;
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
			} else if(type == 4 && this.buildingOne.allied >= number){}
			break;
		case 3:
			if(type == 3 && this.buildingTwo.rivals >= number){
				this.buildingTwo.population -= number;
				this.buildingTwo.rivals  -= number;
				this.policeStation.population += number;
				this.policeStation.neutral += number;
			} else if(type == 4 && this.buildingTwo.allied >= number){}
			break;
		default:
			//do nothing
		}//end switch
	}//end moveToJail

	this.totalLoc = function(){
		return totalLocations;
	}
}