// function dwarfRollCall(dwarves) {
//   var name = []
//   for (var i= 0 ; i <dwarves.length; i++){
//     name += (i + 1) + ". " + dwarves[i] + " ";
//   }
//   return name;
// }

// function summonCaptainPlanet(planeteerCalls){
// //<<<<<<< HEAD
//   var newName = []	;	
// 	for (var i = 0; i < planeteerCalls.length; i++) {	
// 		var name = planeteerCalls[i].toUpperCase() + "!";	
// 		newName.push(name);	
// 	}
// 	return newName;
// //=======
//   //for (let i = 0; i < arr.length; i++) {
//   //return ( planeteerCalls[i] );
// //}
// //>>>>>>> 620d7ec5a521161796aad926d5d9f3426e674bae
// }

// function longPlaneteerCalls(words) {
//   for (var i = 0; i < words.length; i++) {	
//     if (words[i].length > 4){
//       return true
//     }else
//     {
//       return false
//     }
//   }
  
// }

// function findTheCheese (foods) {
//   var value = ["cheddar", "gouda", "camembert"];		
// 	for (var i = 0; i < foods.length; i++) {	
// 		for (var x = 0; x < value.length; x++) {	
// 			if ( value[x]=== foods[i] ) {	
// 				return foods[i];	
// 			}	
// 		}	
// 	}	
// 	return "no cheese!";
// }

function dwarfRollCall(dwarves) {
  var name = []
  for (var i = 0 ; i < dwarves.length; i++){
    name.push((i + 1) + ". " + dwarves[i] + " ");
  }
  return name;
  
}
function summonCaptainPlanet(planeteerCalls){
  var newName =[]
  for (var i = 0; i < planeteerCalls.length; i++){
    var name = planeteerCalls[i].toUpperCase() + "!";
    newName.push(name);
  }
  return newName;
}

function longPlaneteerCalls(words){
  for (var i = 0; i < words.length; i++){
    if (words[i].length > 4){
      return true
    }else
    return false;
  }
}

function findTheCheese(foods){
  var cheese = ["CHeDDAR", "gouda", "blue cheese"];
  for( var i = 0; i < foods.length; i++){
    for( var c = 0; c < cheese.length; c++){
      if ( foods[i].toLowerCase() === cheese[c].toLowerCase()) {
        return foods[i];
      }
    }
  }
   return "no cheese!";
}