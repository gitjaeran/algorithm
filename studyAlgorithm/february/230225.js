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
    //left부터 right까지 반복
    for(let i = left; i<=right; i++) {
        // j가 2부터 left-1까지 반복
        for(let j=2; j<i; j++){
            //left % 2가 0이면 약수
            if(i % j === 0) {
                //약수의 개수 만큼 count가 쌓임
                //count = count + 1
                count += 1
            }
        //left의 약수를 찾고 count된 숫자가 아래 조건문으로 내려감
        }

        //count는 약수의 개수
        //약수의 개수 % 2가 0이면 짝수이므로 더하기
        if(count % 2 === 0) {
            answer += i
        //약수의 개수 % 2가 0이 아니면 홀수이므로 빼기
        } else {
            answer -= i
        }
        //count를 0으로 초기화 해주어야 다음 left값의 count가 0부터 시작됨
        count = 0
    }
    return answer;
}

console.log(solution(13, 17)) //43
console.log(solution(24, 27)) //52

/**
1. 약수 구하기 -> i % 2 === 0이면 약수
2. 약수의 개수 구하기 -> 중간 숫자의 약수 전체 개수 구해야함
3. 개수가 짝수인지 홀수인지 판단
4. 짝수면 더하고 홀수면 빼는 로직
 */