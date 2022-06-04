// Write your solution here!
const cats =["Milo", "Otis", "Garfield"]
 
 const destructivelyAppendCat = cat => cats.push(cat);
 const destructivelyPrependCat = cat => cats.unshift(cat)
 const destructivelyRemoveLastCat = cat => cats.pop (cat)
 const destructivelyRemoveFirstCat = cat => cats.shift(cat)