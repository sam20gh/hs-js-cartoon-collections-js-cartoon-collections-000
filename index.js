function dwarfRollCall(dwarves) {
  var name = []
  for (var i= 0 ; i <dwarves.length; i++){
    name += (i + 1) + ". " + dwarves[i] + " ";
  }
  return name;
}

function summonCaptainPlanet(planeteerCalls){
   var newName = []	;	
	for (var i = 0; i < planeteerCalls.length; i++) {	
		var name = planeteerCalls[i].toUpperCase() + "!";	
		newName.push(name);	
	}
	return newName;
}

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++) {	
    if (words[i].length > 4){
      return true
    }else
    {
      return false
    }
  }
  
}

function findTheCheese (foods) {
  var value = ["cheddar", "gouda", "camembert"];		
	for (var i = 0; i < foods.length; i++) {	
		for (var x = 0; x < value.length; x++) {	
			if ( value[x]=== foods[i] ) {	
				return foods[i];	
			}	
		}	
	}	
	return "no cheese!";
}
