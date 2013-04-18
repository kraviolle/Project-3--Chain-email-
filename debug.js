function debugWriter(levelTwo, levelThree){
	this.printLvl2 = function(){
	var lvl2string  = "Hospital - Total: " + levelTwo.hospitalPopulation() + "<br/>"
					+ "--Neutral--: " + levelTwo.hospital.neutral + "<br/>"
					+ "--Police--: " + levelTwo.hospital.police + "<br/>"
					+ "Police Station - Total: " + levelTwo.policeStationPopulation() + "<br/>"
					+ "--Neutral--: " + levelTwo.policeStation.neutral + "<br/>"
					+ "--Police--: " + levelTwo.policeStation.police + "<br/>"
					+ "Building One - Total: " + levelTwo.buildingOnePopulation() + "<br/>"
					+ "--Neutral--: " + levelTwo.buildingOne.neutral + "<br/>"
					+ "--Police--: " + levelTwo.buildingOne.police + "<br/>"
					+ "--Rivals--: " + levelTwo.buildingOne.rivals + "<br/>"
					+ "--Allied--: " + levelTwo.buildingOne.allied + "<br/>"
					+ "Building Two - Total: " + levelTwo.buildingTwoPopulation()  + "<br/>"
					+ "--Neutral--: " + levelTwo.buildingTwo.neutral + "<br/>"
					+ "--Polics--: " + levelTwo.buildingTwo.police + "<br/>"
					+ "--Rivals--: " + levelTwo.buildingTwo.rivals + "<br/>"
					+ "--Allied--: " + levelTwo.buildingTwo.allied + "<br/>";
					
			document.getElementById("lvl2Data").innerHTML = lvl2string;
	 }
	 
	this.printLvl3 = function(){
	var lvl3string  = "North City - Total: " + levelThree.northCityPopulation() + "<br/>"
					+ "--Neutral--: " + levelThree.northCity.neutral + "<br/>"
					+ "--Police--: " + levelThree.northCity.police + "<br/>"
					+ "--Rivals--: " + levelThree.northCity.rivals + "<br/>"
					+ "--Allied--: " + levelThree.northCity.allied + "<br/>"
					+ "East City - Total: " + levelThree.eastCityPopulation() + "<br/>"
					+ "--Neutral--: " + levelThree.eastCity.neutral + "<br/>"
					+ "--Police--: " + levelThree.eastCity.police + "<br/>"
					+ "--Rivals--: " + levelThree.eastCity.rivals + "<br/>"
					+ "--Allied--: " + levelThree.eastCity.allied + "<br/>"
					+ "West City - Total: " + levelThree.westCityPopulation() + "<br/>"
					+ "--Neutral--: " + levelThree.westCity.neutral + "<br/>"
					+ "--Police--: " + levelThree.westCity.police + "<br/>"
					+ "--Rivals--: " + levelThree.westCity.rivals + "<br/>"
					+ "--Allied--: " + levelThree.westCity.allied + "<br/>";
									
			document.getElementById("lvl3Data").innerHTML = lvl3string;
	 }
}