//정수 제곱근 판별

/*
매개변수 = 임의의 양의 정수 n

n이 어떤 양의 정수 x의 제곱인지 아닌지 판단,
n이 양의 정수 x의 제곱이 아니라면 -1을 리턴

if
- n이 양의 정수 x의 제곱인지 판단
- x+1의 제곱을 리턴
else
- -1 리턴
*/

//제출한 코드 : 다른 사람의 풀이
function solution(n) {
    var answer = 0;
    let x = 0;

    for(let i=0; i<=n; i++){
      // console.log(n)
      if(n / i === i){
        x = i + 1
        return x*x
      } else
        answer = -1;
    }
    return answer;
}

// console.log(solution(121)) //144
console.log(solution(3)) //-4

