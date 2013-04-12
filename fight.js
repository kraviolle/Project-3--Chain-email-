
function fight(targettype){// passes in target type , 1- Neutral, 2- Police, 3- Rival,
	
	
	this.type=targettype;
	
	switch (this.type) {
			case 1:	
				// neutral target
				npc_maxhealth= 50;
				npc_currenthealth= 50;
				npc_atk= 10;
				npc_def= 10;
				var npcimg=document.getElementById("Neutral");		
				break;
			case 2:
				// Police
				npc_maxhealth= 100;
				npc_currenthealth= 100;
				npc_atk= 25;
				npc_def= 25;
				var npcimg=document.getElementById("Police");		
				break;
			case 3:
				// Rival gang
				npc_maxhealth= 80;
				npc_currenthealth= 80;
				npc_atk= 20;
				npc_def= 20;
				var npcimg=document.getElementById("Rival");		
				break;
			
			}// end switch
	
	
	this.draw= function(){
		context.clearRect(0, 0, canvas.width, canvas.height);   //clears canvas

		ctx.fillStyle="red";						//Draws NPC HP
		ctx.fillRect(650,10,200,20);		
		ctx.fillStyle="green";
		ctx.fillRect(650,10,(npc_maxhealth/npc_currenthealth)*200,20);	//Reduce amount of green as % of total health
	

		
		ctx.drawImage(npcimg,650,20);					//Draws NPC image at location
	
		
		ctx.fillStyle="red";						//Draws Player
		ctx.fillRect(10,100,200,20);		
		ctx.fillStyle="green";
		ctx.fillRect(10,100,(player.maxhealth/player.currenthealth)*200,20);	//Reduce amount of green as % of total health

		
		var img=document.getElementById("Player");		//Draws Player image at location
		ctx.drawImage(img,10,110);

		
		context.beginPath();					//Draw FIGHT button
      		context.rect(150,400, 200, 40);
      		context.fillStyle = 'yellow';
     		context.fill();
      		context.lineWidth = 5;
      		context.strokeStyle = 'black';
      		context.stroke();
		ctx.font="12px Arial";
		ctx.strokeText("FIGHT",160,420);


									//Draw RECRUIT button
      		context.rect(150,450, 200, 40);
      		context.fillStyle = 'yellow';
     		context.fill();
      		context.lineWidth = 5;
      		context.strokeStyle = 'black';
      		context.stroke();
		ctx.font="12px Arial";
		ctx.strokeText("RECRUIT",160,470);


									//Draw BRIBE button
      		context.rect(600,400, 200, 40);
      		context.fillStyle = 'yellow';
     		context.fill();
      		context.lineWidth = 5;
      		context.strokeStyle = 'black';
      		context.stroke();
		ctx.font="12px Arial";
		ctx.strokeText("BRIBE",610,420);


									//Draw FLEE button
      		context.rect(600,450, 200, 40);
      		context.fillStyle = 'yellow';
     		context.fill();
      		context.lineWidth = 5;
      		context.strokeStyle = 'black';
      		context.stroke();
		ctx.font="12px Arial";
		ctx.strokeText("FLEE",610,470);
		
		
	}

	
		// Are we still doing mouse events?
	
	if(click fight){
				//Fight
		
		this.points = Math.floor(Math.random()*5+5);
					// Draws a  SMACCCCCK or hit at NPC		
		ctx.save();

		ctx.beginPath();
			
		ctx.translate(700, 120);
			
		ctx.moveTo(0,0-50);
			
			
		for (var i = 0; i < this.points; i++){
				
			ctx.rotate(Math.PI / this.points);
				
			ctx.lineTo(0, 0 - (50*0.5));
				
			ctx.rotate(Math.PI / this.points);
				
			ctx.lineTo(0, 0 - 50);
			
			}
			
		ctx.fillStyle = 'orange';
			
		ctx.fill();
			
		ctx.lineWidth = 6;
			
		ctx.strokeStyle = 'red';
			
		ctx.stroke();
			
		ctx.restore();
		
		npc_currenthealth= npc_currenthealth - ((player.att*Math.random()+player.att)- npc_def);
		
		
		

		this.points = Math.floor(Math.random()*5+5);
					// Draws a  SMACCCCCK or hit at player		
		ctx.save();

		ctx.beginPath();
			
		ctx.translate(60, 220);
			
		ctx.moveTo(0,0-50);
			
			
		for (var i = 0; i < this.points; i++){
				
			ctx.rotate(Math.PI / this.points);
				
			ctx.lineTo(0, 0 - (50*0.5));
				
			ctx.rotate(Math.PI / this.points);
				
			ctx.lineTo(0, 0 - 50);
			
			}
			
		ctx.fillStyle = 'orange';
			
		ctx.fill();
			
		ctx.lineWidth = 6;
			
		ctx.strokeStyle = 'red';
			
		ctx.stroke();
			
		ctx.restore();
	
		player.currenthealth= player.currenthealth - ((npc_att*Math.random()+npc_att)- player.def);


	}

	else if(click recruit && this.type ==1){
		// change type to 4 ?
		player.money = player.money - 200;
	
	}


	else if(click bribe && this.type ==2){
		
		player.money = player.money - 100;
		// + whatever bribes does.
	
	}

	else if(click flee){
		//exits ?

	}
	
	
	
	


	

}
