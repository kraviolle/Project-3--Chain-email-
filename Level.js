var max_cities = 3;
var max_buildings = 10;

function building()
{
	var name;
	var total_people;
	var ratio_blue;
	var ratio_red;
	var ratio_neutral
}

function level(){

	this.mousepos_x = 0;
	this.mousepos_y = 0;
	this.abst_level = 0; // The current abstraction level that the screen is at. 3 = Country, 2 = City, 1 = Room
	this.city = [];

	for(var i =0; i < max_cities; i++)
	{
		this.city[i] = [];
		for(var j = 0; j < max_buildings; j++)
		{
			this.city[i][j] = new building();
		}
	}


	//
	//	Updates the game base one what buttons have been clicked
	//
	this.Mouseclick = function(){
		if(this.mousepos_x <= 890 && this.mousepos_x >= 810)
		{
			if(this.mousepos_y <= 50 && this.mousepos_y >= 10)
			{
				this.abst_level = 3;
			}
			if(this.mousepos_y <= 100 && this.mousepos_y >= 60)
			{
				this.abst_level = 2;
			}
			if(this.mousepos_y <= 150 && this.mousepos_y >= 110)
			{
				this.abst_level = 1;
			}
		}

	}
	//
	//
	//
}

function levelThree(){
	/*Data to display*/
	var northCity = {
		population	: 1000,
		neutral		: 830,
		police		: 114,
		rivals		: 56,
		allied		: 0
	};
	var westCity = {
		population	: 1000,
		neutral		: 912,
		police		: 64,
		rivals		: 24,
		allied		: 0
	};
	var eastCity = {
		population	: 1000,
		neutral		: 723,
		police		: 179,
		rivals		: 98,
		allied		: 0
	};
}

function levelTwo(){
	/*Data to display*/
	var hospital = {
		population	: 261,
		neutral		: 115,
		police		: 57,
		rivals		: 89,
		allied		: 0
	};
	var policeStation = {
		population	: 381,
		neutral		: 225,
		police		: 156,
		rivals		: 0,
		allied		: 0
	};
	var buildingOne = {
		population	: 358,
		neutral		: 266,
		police		: 20,
		rivals		: 72,
		allied		: 0
	};
}