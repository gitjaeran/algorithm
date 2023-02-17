//하샤드 수

/**
 * 매개변수 = 정수 x
 *  x의 자릿수의 합으로 x가 나누어지면 true
 *  나누어지지 않으면 false
 */

//나의 풀이 : 통과 못 함
// function solution(x) {
//     var answer = true;
//     let arr = Array.from(String(x))
//     for(let i=1; i<arr.length; i++){
//         let num = Number(arr[i])
//         answer += num
//         x % answer === 0 ? answer = true : answer = false
        
//     }
//     return answer;
// }

//제출한 코드 : 다른 사람의 풀이
// function solution(x) {
//     var sum = 0;
//     var arr = String(x).split('');

//     for(var i=0; i<arr.length; i++) {
//         sum += Number(arr[i]);
//     }

//     return x % sum == 0
// }

//위의 코드를 보고 다시 정리한 코드
function solution(x) {
    var answer = 0;
    const arr = Array.from(String(x))
    for(let i=0; i<arr.length; i++){
        answer += Number(arr[i])
    }
    return x % answer === 0;
}

console.log(solution(10)) //true
console.log(solution(11)) //false
console.log(solution(12)) //true
console.log(solution(13)) //false

