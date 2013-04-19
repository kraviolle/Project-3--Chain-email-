function debugWriter(levelTwo, levelThree){
	this.printLvl2 = function(){
	var lvl2string  = "Hospital - Total: " + Math.floor(levelTwo.hospitalPopulation()) + "<br/>"
					+ "--Neutral--: " + Math.floor(levelTwo.hospital.neutral) + "<br/>"
					+ "--Police--: " + Math.floor(levelTwo.hospital.police) + "<br/>"
					+ "Police Station - Total: " + Math.floor(levelTwo.policeStationPopulation()) + "<br/>"
					+ "--Neutral--: " + Math.floor(levelTwo.policeStation.neutral) + "<br/>"
					+ "--Police--: " + Math.floor(levelTwo.policeStation.police) + "<br/>"
					+ "Building One - Total: " + Math.floor(levelTwo.buildingOnePopulation()) + "<br/>"
					+ "--Neutral--: " + Math.floor(levelTwo.buildingOne.neutral) + "<br/>"
					+ "--Police--: " + Math.floor(levelTwo.buildingOne.police) + "<br/>"
					+ "--Rivals--: " + Math.floor(levelTwo.buildingOne.rivals) + "<br/>"
					+ "--Allied--: " + Math.floor(levelTwo.buildingOne.allied) + "<br/>"
					+ "Building Two - Total: " + Math.floor(levelTwo.buildingTwoPopulation() ) + "<br/>"
					+ "--Neutral--: " + Math.floor(levelTwo.buildingTwo.neutral) + "<br/>"
					+ "--Polics--: " + Math.floor(levelTwo.buildingTwo.police) + "<br/>"
					+ "--Rivals--: " + Math.floor(levelTwo.buildingTwo.rivals) + "<br/>"
					+ "--Allied--: " + Math.floor(levelTwo.buildingTwo.allied) + "<br/>";
					
			document.getElementById("lvl2Data").innerHTML = lvl2string;
	 }
	 
	this.printLvl3 = function(){
	var lvl3string  = "North City - Total: " + Math.floor(levelThree.northCityPopulation()) + "<br/>"
					+ "--Neutral--: " + Math.floor(levelThree.northCity.neutral) + "<br/>"
					+ "--Police--: " + Math.floor(levelThree.northCity.police) + "<br/>"
					+ "--Rivals--: " + Math.floor(levelThree.northCity.rivals) + "<br/>"
					+ "--Allied--: " + Math.floor(levelThree.northCity.allied) + "<br/>"
					+ "East City - Total: " + Math.floor(levelThree.eastCityPopulation()) + "<br/>"
					+ "--Neutral--: " + Math.floor(levelThree.eastCity.neutral) + "<br/>"
					+ "--Police--: " + Math.floor(levelThree.eastCity.police) + "<br/>"
					+ "--Rivals--: " + Math.floor(levelThree.eastCity.rivals) + "<br/>"
					+ "--Allied--: " + Math.floor(levelThree.eastCity.allied) + "<br/>"
					+ "West City - Total: " + Math.floor(levelThree.westCityPopulation()) + "<br/>"
					+ "--Neutral--: " + Math.floor(levelThree.westCity.neutral) + "<br/>"
					+ "--Police--: " + Math.floor(levelThree.westCity.police) + "<br/>"
					+ "--Rivals--: " + Math.floor(levelThree.westCity.rivals) + "<br/>"
					+ "--Allied--: " + Math.floor(levelThree.westCity.allied) + "<br/>";
									
			document.getElementById("lvl3Data").innerHTML = lvl3string;
	 }
}