function NPC_controller(room, outside, navigate){

  this.NPC_array = []; // Stores the data of NPC at a location
  //this.idle = []; // Stores the idle locations on the map and signifies whether it is in the room or outside
  this.room = room;
  this.outside = outside;
  this.npc_movement = 0;
  // Initialize all idle points.


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
  
  this.NPC_array.push(new NPC(14,3,0,123,false));
  this.outside.map[14][3].occupied = true;
  this.outside.map[14][3].npc = this.NPC_array.length - 1;


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
      for(var i = 0; i < this.NPC_array.length; i++)
      {
        if(!inside)
        {
        if(!this.NPC_array[i].inside)
        {
          ctx.beginPath();
          ctx.arc(this.outside.map[this.NPC_array[i].x][this.NPC_array[i].y].point.x + this.outside.cellsize/2, this.outside.map[this.NPC_array[i].x][this.NPC_array[i].y].point.y + this.outside.cellsize/2, this.outside.cellsize/2 - 2, 0, 2*Math.PI, true);
      
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
            if(this.NPC_array[i].intention == 1) // If original intention of NPC was to move, NPC will go back to idle after reaching new position
            {
              this.NPC_array[i].intention = 0; 
            }
            else if(this.NPC_array[i].intention ==2) // If the NPC wants to recruit a neutral NPC, the timer only starts when they are next to each other
            {
              this.NPC_array[i].interaction_start = timeCounter;
              this.NPC_array[this.NPC_array[i].recruiting].interaction_start = timeCounter;
            }
          }
      }
      //
      //  End of moving to destination
      //

      //
      //  If NPC is admist an interaction, check if its over, if so trigger action
      //
      if(this.NPC_array[i].intention > 1) // Any interaction with another NPC
      {
        if(timeCounter - this.NPC_array[i].interaction_start > 5)// Check if time now - time start more than allocated duration
        {
          console.log(i);
          // If so
          // For recruitment, recruiter back to idle, neutral 50% chance of becoming recruiters gang, back to idle
          if(this.NPC_array[i].intention == 2)
          {
            if(this.NPC_array[i].recruited == -1)// Check if recruiting or recruited
            {//REcruiter
              this.NPC_array[i].intention = 0; // Recruiter back to idle
              this.NPC_array[this.NPC_array[i].recruiting].intention = 0;
              luck = Math.floor((Math.random()*10)+1);
              console.log(luck + ' First');
              if(luck < 4)
              {
              this.NPC_array[this.NPC_array[i].recruiting].faction = this.NPC_array[i].faction;
              }
              this.NPC_array[this.NPC_array[i].recruiting].recruited = -1;
              this.NPC_array[i].recruiting = -1;
            }
            else
            {//Recruitee
              this.NPC_array[i].intention = 0;
              this.NPC_array[this.NPC_array[i].recruited].intention = 0;
              luck = Math.floor((Math.random()*10)+1);
              console.log(luck + ' 2nd');
              if(luck <4)
              {
                this.NPC_array[i].faction = this.NPC_array[this.NPC_array[i].recruiting].faction;
              }
              this.NPC_array[this.NPC_array[i].recruited].recruiting = -1;
              this.NPC_array[i].recruited = 0;

            }
            

          }
          // For fight, one npc will disappear, the other back to idle
          // For interrogation, police stay, if NPC is gang member, dissapear
        }
      }
      //
      // End of interaction action  
      //

      // Testing recruitment
      if(timeCounter < 5)
      {
        this.recruitment(6, 13);

      }

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

}