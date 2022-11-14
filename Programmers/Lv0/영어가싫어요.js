function solution(numbers) {
  const obj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  for (const [key, value] of Object.entries(obj)) {
    if (numbers.includes(key)) {
      numbers = numbers.replaceAll(key, value); //replace말고 replaceAll을 해줘야지 모든 해당 key가 치환됨
    }
  }
  return Number(numbers);
}

console.log(solution("onefourzerosixseven")); //14067
console.log(solution("oneonefour")); //114
