function solution(chicken) {
  let coupon = chicken;
  let freeChicken = 0;

  while (coupon >= 10) {
    freeChicken += Math.trunc(coupon / 10); //서비스 치킨 수
    coupon = (coupon % 10) + Math.trunc(coupon / 10); //남는 쿠폰수 + 서비스로 주문한 치킨 쿠폰수
  }
  return freeChicken;
}

console.log(solution(100)); //11
console.log(solution(1081)); //120

// coupon freeChicken
// 1081      108
// 1 + 108   10
// 9 + 10    1
// 9 + 1     1
