//함수에 n 개의 숫자들이 파라미터로 주어졌을 때, 그 중 가장 큰 값을 알아내세요.

function max(...number) {
  return Math.max(...number);
}

const result = max(1,2,3,4,10,5,6,31,100,7);
console.log(result);
