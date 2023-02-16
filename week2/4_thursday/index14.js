//나누어 떨어지는 숫자 배열

/*
for문으로 arr를 확인하였을 때
-> i=0; i<arr; i++
만약 arr[]에 divisor로 나누어서 나머지가 0이 되는 값이 있다면
오름차순으로 배열에 담아 리턴하여 배열에 저장

만약 하나도 없다면 -1 리턴, 있으면 오름차순 정렬하여 리턴
*/

function solution(arr, divisor) {
    var answer = [];
    for(let i=0; i<=arr.length; i++){
        console.log(arr[i]) //5,7,9,10
        if(arr[i] % divisor === 0) {
            answer.push(arr[i]) //[5, 10] , [2, 36, 1, 3]

            //오름차순 정렬
            answer.sort((a,b) => a-b) // [1, 2, 3, 36]
        }
    } //여기까지가 divisor로 나누어서 나머지가 0이 되는 값이 있는지 확인하는 코드
    
    
    if (answer.length === 0) { //answer에 아무 값도 없다면 -1 추가
        answer.push(-1)
    }

    return answer;
}

console.log(solution([5, 9, 7, 10], 5))
console.log(solution([2, 36, 1, 3], 1))
console.log(solution([3,2,6], 10))
