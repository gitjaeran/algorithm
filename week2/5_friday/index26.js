//제일 작은 수 제거하기

/**
 * 매개변수 = 정수를 저장한 배열, arr

 * 빈 배열일 때는 -1 리턴,
 * 아닐때는 제일 작은 요소를 제외한 배열 리턴
 * 제일 작은 수 구하기 = Math.min()
 * 제일 작은 수의 index값 구하기 = indexOf()
 * 배열의 요소 제외하기 = splice()
 */

//나의 풀이 1
// function solution(arr) {
//     var answer = [];
//     //arr.length = 1~4
//     if(arr.length-1 === 0) {
//         arr = [-1]
//         answer = arr
//     } else {
//         //arr의 가장 작은 값 찾기
//         let minNum = Math.min(...arr) //1
//         //가장 작은 값의 index 찾기
//         let minInd = arr.indexOf(minNum) //3
//         arr.splice(minInd)
//         answer = arr
//     }
//     return answer;
// }

/*************************************************** */
//나의 풀이 2
// function solution(arr) {
//     var answer = [];
//     // console.log(arr.length, 'splice 전') //4, 1
//     arr.splice(arr.indexOf(Math.min(...arr)))
//     //여기서 요소 하나인 배열은 요소가 없어져서 배열이 비게 된다.
//     // console.log(arr.length, 'splice 후') //3, 0
//     arr.length === 0 ? answer = [-1] : answer = arr
//     return answer;
// }

/*************************************************** */
//제출한 코드 : 다른 사람의 풀이
function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    arr.length <= 1 ? answer = [-1] : answer = arr
    return answer
}


console.log(solution([4,3,2,1])) //[4,3,2]
console.log(solution([10])) //[-1]

