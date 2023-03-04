//3진법 뒤집기

/*
매개변수: 자연수 n
n은 1 이상 100,000,000 이하인 자연수

n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return
*/

function solution(n) {
  //toString(n) = n진법 변환
  //split() = 구분자로 나누어 배열로 반환
  //reverse() = 배열 역순 반환
  //join() = 구분자로 나뉜 배열 합침
  let answer = n.toString(3).split("").reverse().join("");

  return parseInt();
}

console.log(solution(45)); //7
console.log(solution(125)); //229;
