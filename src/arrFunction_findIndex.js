const todos = [
  {
    id: 1,
    text: '가나다',
    done: true
  },
  {
    id: 2,
    text: 'ABC',
    done: true
  },
  {
    id: 3,
    text: '123',
    done: true
  },
  {
    id: 4,
    text: 'abc',
    done: false
  }
];

//findIndex
const idx = todos.findIndex(todo => todo.id === 3);
console.log(idx);

//find
const object = todos.find(object => object.id === 3);
console.log(object);
