

var countLetters = function(string){
  var object = {};
  var temp = string.split(" ").join("").split("")
  for(var i = 0; i < temp.length; i++){
    var position = "";
    for(var n = 0; n < temp.length; n++){
      if(temp[i] == temp[n]){
        position = n + ", " + position;
      }object[temp[i]] = position;
    }
  }return object;
}

console.log(countLetters("lighthouse in the house"))