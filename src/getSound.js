// function getSound(animal) {
//   switch (animal) {
//     case '개': return '멍멍';
//     case '고양이': return '야옹';
//     default: return '???';
//   }
// }
function getSound(animal) {
  const sounds = {
    개: '멍멍',
    고양이: '야옹'
  };
  return sounds[animal] || '???';
}

console.log(getSound('개'));
console.log(getSound('여우'));
