//평균 구하기
//평균값 구하는 공식 = (배열 + 배열 + 배열 ...) / 배열의 길이
function solution(arr) {
    var answer = 0;
    for(let i=0; i<arr.length; i++){ //arr의 숫자 길이만큼 돌며 숫자 순회
        answer = answer + arr[i] / arr.length //arr의 숫자 전부 더하고 길이만큼 나눠주기
    }
    return answer;
}
console.log(solution([1,2,3,4]))
console.log(solution([5,5]))
