function Renderer() {

	var country_image = new Image();
	country_image.src = 'images/Country.png';
	var city_image = new Image();
	city_image.src = 'images/city.png';
	var building_image = new Image();
	building_image.src = 'images/building.jpg';

	//
	//	Draw onto canvas based on what level the user is at
	//	Hong Shing
	this.Draw_level = function(level) {
		//If level 3
		if (level == 3) {
			this.Draw_country();
		}
		//If level 2
		if (level == 2) {
			this.Draw_city();
		}
		//If level 1
		if (level == 1) {
			this.Draw_building();
		}
	}
	//
	//	End
	//

	this.Draw_country = function() {
		ctx.drawImage(country_image, 0, 0);
	}

	this.Draw_city = function() {
		ctx.drawImage(city_image, 0, 0);
	}

	this.Draw_building = function() {
		ctx.drawImage(building_image, 0, 0);
	}

	this.mark_HUD = function() {
		ctx.beginPath();
		ctx.moveTo(800, 0);
		ctx.lineTo(800, 400);
		ctx.moveTo(800, 400);
		ctx.lineTo(0, 400);
		ctx.stroke();

		ctx.rect(810, 10, 80, 40);
		ctx.font = 'normal 10pt Calibri';
		ctx.fillText('Country', 820, 30);
		ctx.rect(810, 60, 80, 40);
		ctx.font = 'normal 10pt Calibri';
		ctx.fillText('City', 820, 80);
		ctx.rect(810, 110, 80, 40);
		ctx.font = 'normal 10pt Calibri';
		ctx.fillText('Building', 820, 130);
		ctx.lineWidth = 2;
		ctx.strokeStyle = 'black';
		ctx.stroke();
	}

}