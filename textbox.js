function textBox(){
	
	this.tLastChange = 0;
	this.tElapsed = 0;
	this.timeframe = 5;
	this.boxID = document.getElementById('texthere');
	
	this.defaultTxt = "............";
	
	this.writeonly = function(txt){
		boxID.innerHTML = txt;
	}
	
	this.writeonly(defaultTxt);
	
	this.write = function(time, txt){
		this.tLastChange = time;
		this.tElapsed = 0;
		
		this.writeonly(txt);
	}
	
	this.update = function(time){
		this.tElapsed = time - this.tLastChange;
		if(this.tElapsed > timeframe)
			writeonly(defaultTxt);
	}
}
