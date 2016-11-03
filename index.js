function theBeatlesPlay(arrayM, arrayI){
  var array = []

  for (var i = 0; i < arrayM.length; i++) {
  array.push(`${arrayM[i]} plays ${arrayI[i]}`);
}

  return array

}

function johnLennonFacts(facts){
  var newFacts = []
  var i = facts.length - 1
  while (i > -1){
   newFacts.unshift(`${facts[i]}!!!`)
   i -= 1
  }
  return newFacts
}

function iLoveTheBeatles(n){
  var array = []
  var i = n
  do {
  array.unshift("I love the Beatles!")
  i += 1;
} while (i < 15);
return array

}
