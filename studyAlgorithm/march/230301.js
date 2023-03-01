//같은 숫자는 싫어
/*
배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return

배열 arr의 크기 : 1,000,000 이하의 자연수
배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수
*/

function solution(arr) {    
    return answer = Array.from(new Set(arr));
    //[1,3,0,1]이 아니라 [1,3,0]만 나와서 문제임!
}

console.log(solution([1,1,3,3,0,1,1])) //[1,3,0,1]
console.log(solution([4,4,4,3,3])) //	[4,3]
