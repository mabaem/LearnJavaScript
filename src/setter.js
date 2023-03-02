const numbers = {
  _a: 1,
  _b: 2,
  sum: 3,
  calc() {
    console.log('calc 실행');
    this.sum = this._a + this._b;
  },
  get a() {
    return this._a;
  },
  get b() {
    return this._b;
  },
  set a(value) {
    console.log('a Changed');
    this._a = value;
    this.calc();
  },
  set b(value) {
    console.log('b Changed');
    this._b = value;
    this.calc();
  }
};

console.log(numbers.sum);
numbers.a = 5;
numbers.b = 7;
numbers.a = 9;
console.log(numbers.sum);
console.log(numbers.sum);
console.log(numbers.sum);
