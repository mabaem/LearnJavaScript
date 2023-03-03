// function isAnimal(name) {
//   const animals = ['dog','cat','tutle','racoon'];
//   return animals.includes(name);
// }

const isAnimal = name => ['dog','cat','tutle','racoon'].includes(name);

console.log(isAnimal('dog'));
console.log(isAnimal('apple'));
