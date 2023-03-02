const numbers = {
  a: 1,
  b: 2,
  get sum() {
    console.log('sum 함수 실행');
    return this.a + this.b;
  }
};

console.log(numbers.sum);
numbers.b = 5;
console.log(numbers.sum);
