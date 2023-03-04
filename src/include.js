// function isAnimal(name) {
//   const animals = ['고양이', '개', '거북이', '너구리'];
//   return animals.includes(name);
// }

const isAnimal = name => ['고양이', '개', '거북이', '너구리'].includes(name);

console.log(isAnimal('개'));
console.log(isAnimal('사과'));
