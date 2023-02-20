//콜라츠 추측

/**
1-1. 입력된 수가 짝수라면 2로 나눕니다. 
-> num%2===0 -> num/2
1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다. 
-> num%2===1 -> num*3+1
2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.

 * 입력된 수, num은 1 이상 8,000,000 미만인 정수입니다.

 * 단, 주어진 수가 1인 경우에는 0
 * 작업을 500번 반복할 때까지 1이 되지 않는다면 –1을 반환
 */

//제출한 풀이: 다른 사람의 풀이
function solution(num) {
    var answer = 0;
    while(num !=1 && answer !=500) {
        num%2===0 ? num=num/2 : num=num*3+1
        answer++
    }
    return num ==1 ? answer : -1;
}

//
// function solution(num) {
//     var answer = 0;
//     for(let i=0; i<500; i++) {
//         if (num === 1) {
//             answer = 0
//         } else {
//            num%2===0 ? num=num/2 : num=num*3+1
//         }
//         answer++
//     }
//     return answer;
// }

console.log(solution(6)) //8
console.log(solution(16)) //4
console.log(solution(626331)) //-1
