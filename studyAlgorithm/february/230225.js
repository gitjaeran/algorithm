//약수의 개수와 덧셈

/**
매개변수 = 정수 a, b

1 ≤ left ≤ right ≤ 1,000

a부터 b까지 수들 중에서
약수의 개수가 짝수인 수는 더하고,
약수의 개수가 홀수인 수는 뺀 수 리턴
 */

function solution(left, right) {
    var answer = 0;
    let count = 0;
    for(let i = left; i<=right; i++) {
        for(let j=2; j<i; j++){
            
        }
    }
    return answer;
}

console.log(solution(13, 17)) //43

/**
1. 약수 구하기 -> i % 2 === 0이면 약수
2. 약수의 개수 구하기 -> 중간 숫자의 약수 전체 개수 구해야함
3. 개수가 짝수인지 홀수인지 판단
4. 짝수면 더하고 홀수면 빼는 로직
 */