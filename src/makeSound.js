function makeSound(animal) {
  const tasks = {
    개() {
      console.log('멍멍');
    },
    고양이() {
      console.log('야옹');
    }
  };
  if (!tasks[animal]) {
    console.log('??');
    return;
  }
  tasks[animal]();
}

makeSound('개');
makeSound('여우');
