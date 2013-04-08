function level(){

	this.mousepos_x = 0;
	this.mousepos_y = 0;
	this.abst_level = 0; // The current abstraction level that the screen is at. 3 = Country, 2 = City, 1 = Room
	this.city = 0; // Current or previous city that was entered. 1 = West Coast, 2 = East Coast, 3 = Northern Territory


	//
	//	Updates the game base one what buttons have been clicked
	//
	this.Mouseclick = function(){
		console.log(this.mousepos_x + this.mousepos_y);
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