// Write your solution here!
const cats =["Milo", "Otis", "Garfield"]
 
 const destructivelyAppendCat = cat => cats.push(cat);
 const destructivelyPrependCat = cat => cats.unshift(cat)
 const destructivelyRemoveLastCat = cat => cats.pop (cat)
 const destructivelyRemoveFirstCat = cat => cats.shift(cat)
 const appendCat = name => [...cats,name];
 const prependCat = name => [name, ...cats];
 const removeLastCat = () => cats.slice(0, -1);
const removeFirstCat = () => cats.slice(1, cats.length)