function NPC_controller(room, outside, navigate, player_pos, B1_OUT, B2_OUT){

  this.NPC_array = []; // Stores the data of NPC at a location
  //this.idle = []; // Stores the idle locations on the map and signifies whether it is in the room or outside
  this.room = room;
  this.outside = outside;
  this.npc_movement = 0;
  this.last_count = 0; 
  this.last_count_2 = 0;
  this.key=0;
  this.flag=0;
  // Initialize all idle points.


  /*
  // Initialize NPCs. Location starts with 15 neutral NPCs.
  // Initializing NPC outside
  this.NPC_array.push(new NPC(10,3,3,123,false));
  this.outside.map[10][3].occupied = true;
  this.outside.map[10][3].npc = this.NPC_array.length - 1;
  
  this.NPC_array.push(new NPC(1,3,1,123,false));
  this.outside.map[1][3].occupied = true;
  this.outside.map[1][3].npc = this.NPC_array.length - 1;
  
  this.NPC_array.push(new NPC(2,3,0,123,false));
  this.outside.map[2][3].occupied = true;
  this.outside.map[2][3].npc = this.NPC_array.length - 1;
  
  this.NPC_array.push(new NPC(11,3,0,123,false));
  this.outside.map[11][3].occupied = true;
  this.outside.map[11][3].npc = this.NPC_array.length - 1;
  
  this.NPC_array.push(new NPC(14,3,1,123,false));
  this.outside.map[14][3].occupied = true;
  this.outside.map[14][3].npc = this.NPC_array.length - 1;
  
  this.NPC_array.push(new NPC(3,5,0,123,false));
  this.outside.map[3][5].occupied = true;
  this.outside.map[3][5].npc = this.NPC_array.length - 1;
  
  this.NPC_array.push(new NPC(9,7,2,123,false));
  this.outside.map[9][7].occupied = true;
  this.outside.map[9][7].npc = this.NPC_array.length - 1;
  
  this.NPC_array.push(new NPC(14,4,0,123,false));
  this.outside.map[14][4].occupied = true;
  this.outside.map[14][4].npc = this.NPC_array.length - 1;
  */

  /*
  // Initializing NPC in the room
  this.NPC_array.push(new NPC(6,7,0,123,true));
  this.room.map[6][7].occupied = true;
  this.room.map[6][7].npc = this.NPC_array.length - 1;

  this.NPC_array.push(new NPC(0,7,2,123,true));
  this.room.map[0][7].occupied = true;
  this.room.map[0][7].npc = this.NPC_array.length - 1;

  this.NPC_array.push(new NPC(5,4,0,123,true));
  this.room.map[5][4].occupied = true;
  this.room.map[5][4].npc = this.NPC_array.length - 1;

  this.NPC_array.push(new NPC(1,3,1,123,true));
  this.room.map[1][3].occupied = true;
  this.room.map[1][3].npc = this.NPC_array.length - 1;

  this.NPC_array.push(new NPC(2,1,0,123,true));
  this.room.map[2][1].occupied = true;
  this.room.map[2][1].npc = this.NPC_array.length - 1;

  this.NPC_array.push(new NPC(5,0,0,123,true));
  this.room.map[5][0].occupied = true;
  this.room.map[5][0].npc = this.NPC_array.length - 1;

  this.NPC_array.push(new NPC(7,1,2,123,true));
  this.room.map[7][1].occupied = true;
  this.room.map[7][1].npc = this.NPC_array.length - 1;
  */

  //Testing pathfinding
  /*
  this.NPC_array[0].destination.x = 0;
  this.NPC_array[0].destination.y = 0;
  this.NPC_array[0].destination_inside = true;
  this.NPC_array[0].intention = 1;
  
  this.NPC_array[1].destination.x = 0;
  this.NPC_array[1].destination.y = 7;
  this.NPC_array[1].destination_inside = false;
  this.NPC_array[1].intention = 1;

  this.NPC_array[2].destination.x = 15;
  this.NPC_array[2].destination.y = 3;
  this.NPC_array[2].destination_inside = false;
  this.NPC_array[2].intention = 1;

  this.NPC_array[3].destination.x = 15;
  this.NPC_array[3].destination.y = 7;
  this.NPC_array[3].destination_inside = false;
  this.NPC_array[3].intention = 1;
  */

  this.drawNPC = function(inside){
      // If inside == true, draw NPC for within the room, otherwise, draw NPC for outside the room
	  var npcimg= new Image();
	  
	  
      for(var i = 0; i < this.NPC_array.length; i++)
      {
        if(!inside)
        {
        if(!this.NPC_array[i].inside)
        {
          npcx =this.outside.map[this.NPC_array[i].x][this.NPC_array[i].y].point.x;
		  npcy = this.outside.map[this.NPC_array[i].x][this.NPC_array[i].y].point.y;
		  //ctx.beginPath();
          //ctx.arc(this.outside.map[this.NPC_array[i].x][this.NPC_array[i].y].point.x + this.outside.cellsize/2, this.outside.map[this.NPC_array[i].x][this.NPC_array[i].y].point.y + this.outside.cellsize/2, this.outside.cellsize/2 - 2, 0, 2*Math.PI, true);
      
          switch (this.NPC_array[i].faction)
          {
            case 0: // Neutral
            npcimg.src="images/neutral.png";
            break;
            case 1: // Your lackey
            //ctx.fillStyle = 'red';
			npcimg.src="images/friendly.png";
            break;
            case 2: // Rival
            npcimg.src="images/rival.png";
            break;
            case 3: // Policeman
            npcimg.src="images/police.png";
            break;
          }
          
		  switch (this.NPC_array[i].direction){
		  
		  case 1: //UP
				if(this.NPC_array[i].key==1){
					this.flag=!this.flag;
					this.NPC_array[i].key=0;
				}
				if(this.flag==0){srcx=40;}
				else{srcx=60;}
			ctx.drawImage(npcimg, srcx,0,20,26,npcx, npcy,30,30);
            break;
			
            case 2: // DOWN
				if(this.NPC_array[i].key==1){
					this.flag=!this.flag;
					this.NPC_array[i].key=0;
				}
				if(this.flag==0){srcx=0;}
				else{srcx=20;}
			ctx.drawImage(npcimg, srcx,0,20,26,npcx, npcy,30,30);
            break;
			
            case 3: // LEFT
				if(this.NPC_array[i].key==1){
					this.flag=!this.flag;
					this.NPC_array[i].key=0;
				}
				if(this.flag==0){srcx=140;}
				else{srcx=120;}
			ctx.drawImage(npcimg, srcx,0,20,26,npcx, npcy,30,30);
            break;
			
            case 4: // RIGHT
				if(this.NPC_array[i].key==1){
					this.flag=!this.flag;
					this.NPC_array[i].key=0;
				}
				if(this.flag==0){srcx=100;}
				else{srcx=80;}
			ctx.drawImage(npcimg, srcx,0,20,26,npcx, npcy,30,30);
            break;
		  }
          
		  
		  
          //ctx.fill();
          //ctx.lineWidth = 2;
          // line color
          //ctx.strokeStyle = 'black';
          //ctx.stroke();
        }
        }
        else
        {
          if(this.NPC_array[i].inside)
          {
          ctx.beginPath();
          ctx.arc(this.room.map[this.NPC_array[i].x][this.NPC_array[i].y].point.x + this.room.cellsize/2, this.room.map[this.NPC_array[i].x][this.NPC_array[i].y].point.y + this.room.cellsize/2, this.room.cellsize/2 - 2, 0, 2*Math.PI, true);
          switch (this.NPC_array[i].faction)
          {
            case 0: // Neutral
            ctx.fillStyle = 'white';
            break;
            case 1: // Your lackey
            ctx.fillStyle = 'red';
            break;
            case 2: // Rival
            ctx.fillStyle = 'blue';
            break;
            case 3: // Policeman
            ctx.fillStyle = 'green';
            break;
          }
          ctx.fill();
          ctx.lineWidth = 2;
          // line color
          ctx.strokeStyle = 'black';
          ctx.stroke();
        }
      }
      }
  }

  this.drawNPC_debug = function(inside){
    // Inside true means the NPC is indoors, inside false means NPC is outdoors
    for(var i = 0; i < this.NPC_array.length; i++)
      {
        if(!inside)
        {
        if(!this.NPC_array[i].inside)
        {
          ctx.font="10px Arial";
          ctx.fillStyle = 'black';
          ctx.fillText('Intent: ' + this.NPC_array[i].intention, outside.map[this.NPC_array[i].x][this.NPC_array[i].y].point.x,outside.map[this.NPC_array[i].x][this.NPC_array[i].y].point.y + (3*outside.cellsize/4)); // Intention of the NPC
        }
        }
        else
        {
          if(this.NPC_array[i].inside)
          {
          ctx.font="10px Arial";
          ctx.fillStyle = 'black';
          ctx.fillText('Intent: ' + this.NPC_array[i].intention, room.map[this.NPC_array[i].x][this.NPC_array[i].y].point.x,room.map[this.NPC_array[i].x][this.NPC_array[i].y].point.y + (3*room.cellsize/4)); // Intention of the NPC
          
        }
      }
      }


  }

  // NPC simulate will be called every cycle. It is what controls the movement and interactions of all NPCs!
  this.NPC_simulate = function(timeCounter){

    var luck;

    //Run through every NPC in the array
    for(var i = 0; i < this.NPC_array.length; i++)
    {
      //
      //  IF npc is not at is destination, move to its destination
      //
      if(this.NPC_array[i].destination.x >= 0) // Checks that it is a valid destination
      {
          // Pathfinding to destination of NPC
          if(this.NPC_array[i].x != this.NPC_array[i].destination.x || this.NPC_array[i].y != this.NPC_array[i].destination.y || this.NPC_array[i].inside != this.NPC_array[i].destination_inside)
          {
            if(this.npc_movement%15 == 0)
            {
            navigate.steering(this.NPC_array[i], this.NPC_array[i].destination, this.NPC_array[i].destination_inside, this.NPC_array[i].condition);
            }
            this.npc_movement++;
          }
          else// If destination is reached, change destination back to -1,-1
          {
            this.NPC_array[i].destination.x = -1;
            this.NPC_array[i].destination.y = -1;
            this.NPC_array[i].interaction_start++;
            if(this.NPC_array[i].intention == 1) // If original intention of NPC was to move, NPC will go back to idle after reaching new position
            {
              this.NPC_array[i].intention = 0; 
            }
            else if(this.NPC_array[i].intention ==2) // If the NPC wants to recruit a neutral NPC, the timer only starts when they are next to each other
            {
              this.NPC_array[i].interaction_start ++;
              this.NPC_array[this.NPC_array[i].recruiting].interaction_start ++;
            }
            else if(this.NPC_array[i].intention == 3) // This NPC is gonna fight another gang member
            {
              this.NPC_array[i].interaction_start ++;
              this.NPC_array[this.NPC_array[i].fighting].interaction_start ++;
            }
            else if(this.NPC_array[i].intention == 5)
            {
              this.NPC_array[i].interaction_start++;
              this.NPC_array[this.NPC_array[i].interrogate].interaction_start++;
            }
            else if(this.NPC_array[i].intention == 6)
            {
              var convert = 1;
              switch(this.NPC_array[i].faction)
              {
                case 0:
                convert = 1;
                break;
                case 1:
                convert = 3;
                break;
                case 2:
                convert = 4;
                break;
                case 3:
                convert = 2;
                break;
              }

              switch(player_pos)
              {
                case 2:
                B1_OUT.push(convert);
                break;
                case 3:
                B2_OUT.push(convert);
                break;
              }
              
              this.outside.map[15][3].occupied = false;
              this.NPC_array.splice(i, 1);
              // Add to leaving list the type of NPC
              break;
            }
          }
      }
      //
      //  End of moving to destination
      //
      if(this.NPC_array[i].destination.x == -1 && this.NPC_array[i].intention > 1 && this.NPC_array[i].interaction_start > 0)
      {
        if(this.npc_movement%15 == 0)
        {
        this.NPC_array[i].interaction_start++;
        }
        this.npc_movement++;
      }

      //
      //  If NPC is admist an interaction, check if its over, if so trigger action
      //
      if(this.NPC_array[i].intention > 1) // Any interaction with another NPC
      {
        console.log('Interaction start: ' + this.NPC_array[i].interaction_start);
        if(this.NPC_array[i].interaction_start > 7)// Check if time now - time start more than allocated duration
        {
          //console.log(i);
          // If so
          // For recruitment, recruiter back to idle, neutral 50% chance of becoming recruiters gang, back to idle
          if(this.NPC_array[i].intention == 2)
          {
            if(this.NPC_array[i].recruited == -1)// Check if recruiting or recruited
            {//REcruiter
              this.NPC_array[i].intention = 0; // Recruiter back to idle
              this.NPC_array[this.NPC_array[i].recruiting].intention = 0;
              this.NPC_array[i].interaction_start = 0;
              this.NPC_array[this.NPC_array[i].recruiting].interaction_start = 0;
              luck = Math.floor((Math.random()*10)+1);
              console.log(luck + ' First');
              if(luck < 4)
              {
              this.NPC_array[this.NPC_array[i].recruiting].faction = this.NPC_array[i].faction;
              }
              this.NPC_array[this.NPC_array[i].recruiting].recruited = -1;
              this.NPC_array[i].recruiting = -1;
            }
            /*
            else
            {//Recruitee
              this.NPC_array[i].intention = 0;
              this.NPC_array[this.NPC_array[i].recruited].intention = 0;
              this.NPC_array[i].interaction_start = 0;
              this.NPC_array[this.NPC_array[i].recruited].interaction_start = 0;
              luck = Math.floor((Math.random()*10)+1);
              console.log(luck + ' 2nd');
              if(luck <4)
              {
                this.NPC_array[i].faction = this.NPC_array[this.NPC_array[i].recruiting].faction;
              }
              this.NPC_array[this.NPC_array[i].recruited].recruiting = -1;
              this.NPC_array[i].recruited = 0;

            }
            */
            

          }
          // For fight, one npc will disappear, the other back to idle
          else if(this.NPC_array[i].intention == 3)
          {
            luck = Math.floor((Math.random()*10)+1);
            if(luck < 5) // This NPC disappears 
            {
              this.NPC_array[this.NPC_array[i].fighting].intention = 0;
              this.NPC_array[this.NPC_array[i].fighting].fighting = -1;
              this.NPC_array[this.NPC_array[i].fighting].interaction_start = 0;
              if(this.NPC_array[i].inside)
              {
                this.room.map[this.NPC_array[i].x][this.NPC_array[i].y].occupied = false
                this.room.map[this.NPC_array[i].x][this.NPC_array[i].y].npc = -1
              }
              else
              {
                this.outside.map[this.NPC_array[i].x][this.NPC_array[i].y].occupied = false
                this.outside.map[this.NPC_array[i].x][this.NPC_array[i].y].npc = -1
              }
              this.NPC_array.splice(i, 1);

            } 
            else // The NPC he is fighting with disappears
            {
              this.NPC_array[i].intention = 0;
              this.NPC_array[i].fighting = -1;
              this.NPC_array[i].interaction_start = 0;
              if(this.NPC_array[this.NPC_array[i].fighting].inside)
              {
                this.room.map[this.NPC_array[this.NPC_array[i].fighting].x][this.NPC_array[this.NPC_array[i].fighting].y].occupied = false
                this.room.map[this.NPC_array[this.NPC_array[i].fighting].x][this.NPC_array[this.NPC_array[i].fighting].y].npc = -1
              }
              else
              {
                this.outside.map[this.NPC_array[this.NPC_array[i].fighting].x][this.NPC_array[this.NPC_array[i].fighting].y].occupied = false
                this.outside.map[this.NPC_array[this.NPC_array[i].fighting].x][this.NPC_array[this.NPC_array[i].fighting].y].npc = -1
              }
              this.NPC_array.splice(this.NPC_array[i].fighting,1);
            }
          }
          // For interrogation, police stay, if NPC is gang member, dissapear
          else if(this.NPC_array[i].intention == 5)
          {
            if(this.NPC_array[i].faction == 3)
            {
              if(this.NPC_array[this.NPC_array[i].interrogate].faction == 1 || this.NPC_array[this.NPC_array[i].interrogate].faction == 2)
              {
                if(this.NPC_array[this.NPC_array[i].interrogate].inside)
                {
                  this.room.map[this.NPC_array[this.NPC_array[i].interrogate].x][this.NPC_array[this.NPC_array[i].interrogate].y].occupied = false
                  this.room.map[this.NPC_array[this.NPC_array[i].interrogate].x][this.NPC_array[this.NPC_array[i].interrogate].y].npc = -1
                }
                else
                {
                  this.outside.map[this.NPC_array[this.NPC_array[i].interrogate].x][this.NPC_array[this.NPC_array[i].interrogate].y].occupied = false
                  this.outside.map[this.NPC_array[this.NPC_array[i].interrogate].x][this.NPC_array[this.NPC_array[i].interrogate].y].npc = -1
                }
                this.NPC_array.splice(this.NPC_array[i].interrogate, 1);
              }
              else
              {
                this.NPC_array[this.NPC_array[i].interrogate].intention = 0;
                this.NPC_array[this.NPC_array[i].interrogate].interrogate = -1;
                this.NPC_array[this.NPC_array[i].interrogate].interaction_start = 0;
              }
              this.NPC_array[i].intention = 0;
              this.NPC_array[i].interrogate = -1;
              this.NPC_array[i].interaction_start = 0;
            }
          }
          // End for interrogate
        }
      }
      //
      // End of interaction action  
      //

      //
      //  Update the NPC index stored in the map 
      //
      if(this.NPC_array[i].inside)
      {
        room.map[this.NPC_array[i].x][this.NPC_array[i].y].npc = i;
      }
      else
      {
        outside.map[this.NPC_array[i].x][this.NPC_array[i].y].npc = i;
      }

      // Testing recruitment
      if(timeCounter < 2)
      {
        //this.fighting(1, 6);
        //this.recruitment(1, 5);
        //this.interrogate(0, 6);

      }


    }

  }
  this.interaction_simulate = function(timeCounter){
    //Randomly creating an interaction every 10 seconds
      if(timeCounter - this.last_count_2 > 7)
      {
        //var action = Math.floor((Math.random()*5)+1);
        var NPC_1 = -1;
        var NPC_2 = -1;
        var random_index;
        var random_index2;

        do{
          random_index = Math.floor((Math.random()*this.NPC_array.length));
          //console.log('Random index: ' + random_index);
          //console.log('Random faction is ' + this.NPC_array[random_index].faction);
          var npc_intent = this.NPC_array[random_index].intention;
          var npc_faction = this.NPC_array[random_index].faction;
          if((this.NPC_array[random_index].intention == 0) && (this.NPC_array[random_index].faction != 0)) // NPC must be idling
          {
            NPC_1 = random_index;
          }
          //console.log('Randomly picked NPC is ' + NPC_1);
        }
        while(NPC_1 == -1);
        
        console.log('Randomly picked NPC is ' + NPC_1);
        
        
        //Base on which NPC is selected, decide which actions are legal.
        switch(this.NPC_array[NPC_1].faction){
          case 0: // Neutral - Legal actions - Nothing for now
          break;
          case 1: // Your gang - Legal actions - Fight, recruit
          // Find either a gang member or neutral NPC
          do{
            random_index2 = Math.floor((Math.random()*this.NPC_array.length));
          if(this.NPC_array[random_index2].intention == 0 && random_index != random_index2 && (this.NPC_array[random_index2].faction == 0 || this.NPC_array[random_index2].faction == 2)) // NPC must be idling
          {
            NPC_2 = random_index2;
          }
          }
          while(NPC_2 == -1);

          console.log('Randomly picked NPC2 is ' + NPC_2);

          if(this.NPC_array[random_index2].faction == 0)
          {
            this.recruitment(NPC_1, NPC_2);
            console.log('Recruitment - L1');
          }
          else if(this.NPC_array[random_index2].faction == 2)
          {
            this.fighting(NPC_1, NPC_2);
            console.log('Fighting - L1');
          }
          break;
          case 2: // Rival gang - Legal actions - Fight, recruit
          // Find either a gang member or neutral NPC
          while(NPC_2 == -1){
          random_index2 = Math.floor((Math.random()*this.NPC_array.length));
          if(this.NPC_array[random_index2].intention == 0 && random_index != random_index2 && (this.NPC_array[random_index2].faction == 0 || this.NPC_array[random_index2].faction == 1)) // NPC must be idling
          {
            NPC_2 = random_index2;
          }
          console.log('Randomly picked NPC3 is ' + NPC_2);
          }
          if(this.NPC_array[random_index2].faction == 0)
          {
            this.recruitment(NPC_1, NPC_2);
            console.log('Recruitment - L1');
          }
          else if(this.NPC_array[random_index2].faction == 1)
          {
            this.fighting(NPC_1, NPC_2);
            console.log('Fighting - L1');
          }
  
          break;
          case 3: // Police - Legal actions - Interrogate
          // Find any random NPC
          while(NPC_2 == -1){
          random_index2 = Math.floor((Math.random()*this.NPC_array.length));
          if(this.NPC_array[random_index2].intention == 0 && random_index != random_index2) // NPC must be idling
          {
            NPC_2 = random_index2;
          }
          console.log('Randomly picked NPC2 is ' + NPC_2);
          }
          this.interrogate(NPC_1, NPC_2);
          console.log('Interrogate - L1');
          break;
        }
        
        this.last_count_2 = timeCounter;
      }
  }

  this.recruitment = function(gang, neutral){
    // gang, neutral are the ID of the two NPC
    this.NPC_array[gang].recruiting = neutral;
    this.NPC_array[gang].intention = 2;
    this.NPC_array[neutral].recruited = gang;
    this.NPC_array[neutral].intention = 2;

    // Find an adjacent location ard neutral npc for the gang member to go to
    if(this.NPC_array[neutral].inside) // NPC is indoors
    {
      if(this.NPC_array[neutral].x != 0 && !room.map[this.NPC_array[neutral].x - 1][this.NPC_array[neutral].y].occupied) // Left side is available
      {
        this.NPC_array[gang].destination = new Point(this.NPC_array[neutral].x - 1, this.NPC_array[neutral].y);
        this.NPC_array[gang].destination_inside = true;
      }
      else if(this.NPC_array[neutral].x != room.column -1 && !room.map[this.NPC_array[neutral].x + 1][this.NPC_array[neutral].y].occupied) // Right side is free
      {
        this.NPC_array[gang].destination = new Point(this.NPC_array[neutral].x + 1, this.NPC_array[neutral].y);
        this.NPC_array[gang].destination_inside = true;
      }
      else if(this.NPC_array[neutral].y != 0 && !room.map[this.NPC_array[neutral].x][this.NPC_array[neutral].y - 1].occupied) // Top is free
      {
        this.NPC_array[gang].destination = new Point(this.NPC_array[neutral].x, this.NPC_array[neutral].y - 1);
        this.NPC_array[gang].destination_inside = true;
      }
      else if(this.NPC_array[neutral].y != room.row - 1 && !room.map[this.NPC_array[neutral].x][this.NPC_array[neutral].y + 1].occupied) // Bottom is free
      {
        this.NPC_array[gang].destination = new Point(this.NPC_array[neutral].x, this.NPC_array[neutral].y + 1);
        this.NPC_array[gang].destination_inside = true;
      }
    }
    else // NPC is outdoors
    {
      if(this.NPC_array[neutral].x != 0 && !outside.map[this.NPC_array[neutral].x - 1][this.NPC_array[neutral].y].occupied) // Left side is available
      {
        this.NPC_array[gang].destination = new Point(this.NPC_array[neutral].x - 1, this.NPC_array[neutral].y);
        this.NPC_array[gang].destination_inside = false;
      }
      else if(this.NPC_array[neutral].x != outside.column -1 && !outside.map[this.NPC_array[neutral].x + 1][this.NPC_array[neutral].y].occupied) // Right side is free
      {
        this.NPC_array[gang].destination = new Point(this.NPC_array[neutral].x + 1, this.NPC_array[neutral].y);
        this.NPC_array[gang].destination_inside = false;
      }
      else if(this.NPC_array[neutral].y != 0 && !outside.map[this.NPC_array[neutral].x][this.NPC_array[neutral].y - 1].occupied) // Top is free
      {
        this.NPC_array[gang].destination = new Point(this.NPC_array[neutral].x, this.NPC_array[neutral].y - 1);
        this.NPC_array[gang].destination_inside = false;
      }
      else if(this.NPC_array[neutral].y != outside.row - 1 && !outside.map[this.NPC_array[neutral].x][this.NPC_array[neutral].y + 1].occupied) // Bottom is free
      {
        this.NPC_array[gang].destination = new Point(this.NPC_array[neutral].x, this.NPC_array[neutral].y + 1);
        this.NPC_array[gang].destination_inside = false;
      }
    } 
  }

  this.fighting = function(gang, gang2){

    this.NPC_array[gang].fighting = gang2;
    this.NPC_array[gang].intention = 3;
    this.NPC_array[gang2].fighting = gang;
    this.NPC_array[gang2].intention = 3;

    // Find an adjacent location ard e 2nd gang member for the 1sst gang member to go to
    if(this.NPC_array[gang2].inside) // NPC is indoors
    {
      if(this.NPC_array[gang2].x != 0 && !room.map[this.NPC_array[gang2].x - 1][this.NPC_array[gang2].y].occupied) // Left side is available
      {
        this.NPC_array[gang].destination = new Point(this.NPC_array[gang2].x - 1, this.NPC_array[gang2].y);
        this.NPC_array[gang].destination_inside = true;
      }
      else if(this.NPC_array[gang2].x != room.column -1 && !room.map[this.NPC_array[gang2].x + 1][this.NPC_array[gang2].y].occupied) // Right side is free
      {
        this.NPC_array[gang].destination = new Point(this.NPC_array[gang2].x + 1, this.NPC_array[gang2].y);
        this.NPC_array[gang].destination_inside = true;
      }
      else if(this.NPC_array[gang2].y != 0 && !room.map[this.NPC_array[gang2].x][this.NPC_array[gang2].y - 1].occupied) // Top is free
      {
        this.NPC_array[gang].destination = new Point(this.NPC_array[gang2].x, this.NPC_array[gang2].y - 1);
        this.NPC_array[gang].destination_inside = true;
      }
      else if(this.NPC_array[gang2].y != room.row - 1 && !room.map[this.NPC_array[gang2].x][this.NPC_array[gang2].y + 1].occupied) // Bottom is free
      {
        this.NPC_array[gang].destination = new Point(this.NPC_array[gang2].x, this.NPC_array[gang2].y + 1);
        this.NPC_array[gang].destination_inside = true;
      }
    }
    else // NPC is outdoors
    {
      if(this.NPC_array[gang2].x != 0 && !outside.map[this.NPC_array[gang2].x - 1][this.NPC_array[gang2].y].occupied) // Left side is available
      {
        this.NPC_array[gang].destination = new Point(this.NPC_array[gang2].x - 1, this.NPC_array[gang2].y);
        this.NPC_array[gang].destination_inside = false;
      }
      else if(this.NPC_array[gang2].x != outside.column -1 && !outside.map[this.NPC_array[gang2].x + 1][this.NPC_array[gang2].y].occupied) // Right side is free
      {
        this.NPC_array[gang].destination = new Point(this.NPC_array[gang2].x + 1, this.NPC_array[gang2].y);
        this.NPC_array[gang].destination_inside = false;
      }
      else if(this.NPC_array[gang2].y != 0 && !outside.map[this.NPC_array[gang2].x][this.NPC_array[gang2].y - 1].occupied) // Top is free
      {
        this.NPC_array[gang].destination = new Point(this.NPC_array[gang2].x, this.NPC_array[gang2].y - 1);
        this.NPC_array[gang].destination_inside = false;
      }
      else if(this.NPC_array[gang2].y != outside.row - 1 && !outside.map[this.NPC_array[gang2].x][this.NPC_array[gang2].y + 1].occupied) // Bottom is free
      {
        this.NPC_array[gang].destination = new Point(this.NPC_array[gang2].x, this.NPC_array[gang2].y + 1);
        this.NPC_array[gang].destination_inside = false;
      }
    } 
  }

  this.interrogate = function(gang, gang2){
    // Gang in this function refers to the police
    this.NPC_array[gang].interrogate = gang2;
    this.NPC_array[gang].intention = 5;
    this.NPC_array[gang2].interrogate = gang;
    this.NPC_array[gang2].intention = 5;

    // Find an adjacent location ard e gang member for the police to go to
    if(this.NPC_array[gang2].inside) // NPC is indoors
    {
      if(this.NPC_array[gang2].x != 0 && !room.map[this.NPC_array[gang2].x - 1][this.NPC_array[gang2].y].occupied) // Left side is available
      {
        this.NPC_array[gang].destination = new Point(this.NPC_array[gang2].x - 1, this.NPC_array[gang2].y);
        this.NPC_array[gang].destination_inside = true;
      }
      else if(this.NPC_array[gang2].x != room.column -1 && !room.map[this.NPC_array[gang2].x + 1][this.NPC_array[gang2].y].occupied) // Right side is free
      {
        this.NPC_array[gang].destination = new Point(this.NPC_array[gang2].x + 1, this.NPC_array[gang2].y);
        this.NPC_array[gang].destination_inside = true;
      }
      else if(this.NPC_array[gang2].y != 0 && !room.map[this.NPC_array[gang2].x][this.NPC_array[gang2].y - 1].occupied) // Top is free
      {
        this.NPC_array[gang].destination = new Point(this.NPC_array[gang2].x, this.NPC_array[gang2].y - 1);
        this.NPC_array[gang].destination_inside = true;
      }
      else if(this.NPC_array[gang2].y != room.row - 1 && !room.map[this.NPC_array[gang2].x][this.NPC_array[gang2].y + 1].occupied) // Bottom is free
      {
        this.NPC_array[gang].destination = new Point(this.NPC_array[gang2].x, this.NPC_array[gang2].y + 1);
        this.NPC_array[gang].destination_inside = true;
      }
    }
    else // NPC is outdoors
    {
      if(this.NPC_array[gang2].x != 0 && !outside.map[this.NPC_array[gang2].x - 1][this.NPC_array[gang2].y].occupied) // Left side is available
      {
        this.NPC_array[gang].destination = new Point(this.NPC_array[gang2].x - 1, this.NPC_array[gang2].y);
        this.NPC_array[gang].destination_inside = false;
      }
      else if(this.NPC_array[gang2].x != outside.column -1 && !outside.map[this.NPC_array[gang2].x + 1][this.NPC_array[gang2].y].occupied) // Right side is free
      {
        this.NPC_array[gang].destination = new Point(this.NPC_array[gang2].x + 1, this.NPC_array[gang2].y);
        this.NPC_array[gang].destination_inside = false;
      }
      else if(this.NPC_array[gang2].y != 0 && !outside.map[this.NPC_array[gang2].x][this.NPC_array[gang2].y - 1].occupied) // Top is free
      {
        this.NPC_array[gang].destination = new Point(this.NPC_array[gang2].x, this.NPC_array[gang2].y - 1);
        this.NPC_array[gang].destination_inside = false;
      }
      else if(this.NPC_array[gang2].y != outside.row - 1 && !outside.map[this.NPC_array[gang2].x][this.NPC_array[gang2].y + 1].occupied) // Bottom is free
      {
        this.NPC_array[gang].destination = new Point(this.NPC_array[gang2].x, this.NPC_array[gang2].y + 1);
        this.NPC_array[gang].destination_inside = false;
      }
    } 
  }

  this.leave = function(NPC){ // This NPC will leave this area
    this.NPC_array[NPC].intention = 6;
    this.NPC_array[NPC].destination = new Point(15 , 3);
    this.NPC_array[NPC].destination_inside = false;
  }

  this.NPC_enter = function(player_location, building1, building2){ //This creates NPC that are entering this area from another area

    //Testing the leaving function
    if(this.NPC_array.length > 0)
    {
      this.leave(Math.floor((Math.random()*this.NPC_array.length)));
      console.log('leave');
    }


    var npc_type = 0;

    //Feed in the queue for the building where the player is
    //Unload the queue every '10's
    //If the entering position is unoccupied, initialize the npc to that position and give it a random idle position that is not occupied 
    if(player_location == 2) // Building 1
    {
      //make sure that the queue contain somebody
      if(building1.length > 0)
      {
      
      //use building 1
      if(!outside.map[15][3].occupied)
      {
        npc_type = building1.shift();
        //initialize NPC here
        console.log('SHIFT: ' + npc_type);
        switch(npc_type){
          case 1:
          this.NPC_array.push(new NPC(15,3,0,123,false));
          this.outside.map[15][3].occupied = true;
          this.outside.map[15][3].npc = this.NPC_array.length - 1;
          // Find list of idle positions
          for(var i = 0; i < this.outside.list.length; i++)
          {
            //Update and clear the flags of locations that have been occupied
            if(outside.map[this.outside.list[i].x][this.outside.list[i].y].occupied && outside.list_flag[i] == 1)
            {
              outside.list_flag[i] = 0;
            }

            if(!outside.map[this.outside.list[i].x][this.outside.list[i].y].occupied && !outside.list_flag[i])
          {
            this.NPC_array[this.NPC_array.length - 1].destination = new Point(this.outside.list[i].x, this.outside.list[i].y);
            this.NPC_array[this.NPC_array.length - 1].destination_inside = false;
            this.NPC_array[this.NPC_array.length - 1].intention = 1;
            outside.list_flag[i] = 1;
            break;
          }
          }
          break;
          case 2:
          this.NPC_array.push(new NPC(15,3,3,123,false));
          this.outside.map[15][3].occupied = true;
          this.outside.map[15][3].npc = this.NPC_array.length - 1;
          // Find list of idle positions
          for(var i = 0; i < this.outside.list.length; i++)
          {
            //Update and clear the flags of locations that have been occupied
            if(outside.map[this.outside.list[i].x][this.outside.list[i].y].occupied && outside.list_flag[i] == 1)
            {
              outside.list_flag[i] = 0;
            }

            if(!outside.map[this.outside.list[i].x][this.outside.list[i].y].occupied && !outside.list_flag[i])
          {
            this.NPC_array[this.NPC_array.length - 1].destination = new Point(this.outside.list[i].x, this.outside.list[i].y);
            this.NPC_array[this.NPC_array.length - 1].destination_inside = false;
            this.NPC_array[this.NPC_array.length - 1].intention = 1;
            outside.list_flag[i] = 1;
            break;
          }
          }
          break;          
          case 3:
          this.NPC_array.push(new NPC(15,3,1,123,false));
          this.outside.map[15][3].occupied = true;
          this.outside.map[15][3].npc = this.NPC_array.length - 1;
          // Find list of idle positions
          for(var i = 0; i < this.outside.list.length; i++)
          {
            //Update and clear the flags of locations that have been occupied
            if(outside.map[this.outside.list[i].x][this.outside.list[i].y].occupied && outside.list_flag[i] == 1)
            {
              outside.list_flag[i] = 0;
            }

            if(!outside.map[this.outside.list[i].x][this.outside.list[i].y].occupied && !outside.list_flag[i])
          {
            this.NPC_array[this.NPC_array.length - 1].destination = new Point(this.outside.list[i].x, this.outside.list[i].y);
            this.NPC_array[this.NPC_array.length - 1].destination_inside = false;
            this.NPC_array[this.NPC_array.length - 1].intention = 1;
            outside.list_flag[i] = 1;
            break;
          }
          }
          break;
          case 4:
          this.NPC_array.push(new NPC(15,3,2,123,false));
          this.outside.map[15][3].occupied = true;
          this.outside.map[15][3].npc = this.NPC_array.length - 1;
          // Find list of idle positions
          for(var i = 0; i < this.outside.list.length; i++)
          {
            //Update and clear the flags of locations that have been occupied
            if(outside.map[this.outside.list[i].x][this.outside.list[i].y].occupied && outside.list_flag[i] == 1)
            {
              outside.list_flag[i] = 0;
            }

            if(!outside.map[this.outside.list[i].x][this.outside.list[i].y].occupied && !outside.list_flag[i])
          {
            this.NPC_array[this.NPC_array.length - 1].destination = new Point(this.outside.list[i].x, this.outside.list[i].y);
            this.NPC_array[this.NPC_array.length - 1].destination_inside = false;
            this.NPC_array[this.NPC_array.length - 1].intention = 1;
            outside.list_flag[i] = 1;
            break;
          }
          }
          break;
        }
        
        /*
        this.NPC_array.push(new NPC(15,3,**************************,123,false));
        this.outside.map[15][3].occupied = true;
        this.outside.map[15][3].npc = this.NPC_array.length - 1;
        // Find list of idle positions
        for(var i = 0; i < this.outside.idle_location.array.length; i++)
        {
          if(!outside.map[this.outside.idle_location.array[i].x][this.outside.idle_location.array[i].y].occupied)
          {
            this.NPC_array[this.NPC_array[length - 1]].destination = new Point(this.outside.idle_location.array[i].x, this.outside.idle_location.array[i].y);
            this.NPC_array[this.NPC_array[length - 1]].intention = 1;
            break;
          }
        }
        */

      }

      }
    }
    else if(player_location == 3)
    {
      //use building 2

    }
  }

  this.decompress = function(){
    // Get no. the different number of each type of NPC
    // Initialize them into positions of the outside list
    var neutral_npc = 10;

    for(var i = 0; i < neutral_npc; i++)
    {
      if(!outside.map[this.outside.list[i].x][this.outside.list[i].y].occupied)
      {
        this.NPC_array.push(new NPC(this.outside.list[i].x,this.outside.list[i].y,0,123,false));
        this.outside.map[this.outside.list[i].x][this.outside.list[i].y].occupied = true;
        this.outside.map[this.outside.list[i].x][this.outside.list[i].y].npc = this.NPC_array.length - 1;
        this.NPC_array[this.NPC_array.length - 1].direction = Math.floor((Math.random()*4 + 1));
      }
    }

  }
}