//같은 숫자는 싫어
/*
배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return

배열 arr의 크기 : 1,000,000 이하의 자연수
배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수
*/

//좋은 풀이 1
function solution(arr) {
    //끝자리 1 누락 -> filter의 index를 잘 활용하자.
    return arr.filter((element, index) => element !== arr[index + 1]);
}

// 좋은 풀이 2
// function solution(arr) {
//     var answer = [arr[0]];
//     for (let i=1; i<arr.length; i++) {
//         // console.log(answer[answer.length - 1]) // 1 3 0 1
//         // console.log(arr[i]) // 1 3 0 1
//         if (answer[answer.length - 1] !== arr[i]) {
//             answer.push(arr[i]);
//         }
//     }

//     return answer;
// }

console.log(solution([1,1,3,3,0,1,1])) //[1,3,0,1]
console.log(solution([4,4,4,3,3])) //	[4,3]