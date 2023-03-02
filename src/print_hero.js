const ironman = {
  name: "토니 스타크",
  actor: "로다주",
  alias: "아이언맨"
};

const captinamerica = {
  name: "스티븐 로저스",
  actor: "크리스 에반스",
  alias: "캡틴 아메리카"
};

function print(hero) {
  const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.`;

  console.log(text);
}

print(ironman);
print(captinamerica);
