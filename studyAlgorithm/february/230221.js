//약수의 합

/*
매개변수 n의 약수를 모두 더한 값 리턴
*/

/*
1. n의 약수를 구한다.
2. 약수를 전부 더한다.

약수를 어떻게 구하지?
for문에서 n과 i를 나누어서 나머지가 0인 숫자를 찾는다.
*/

function solution(n) {
    var answer = 0;
    for(let i=0; i<=n; i++){
        if(n % i === 0) {answer += i}
            //매개변수가 12라면,
            //n_12 % i_1 true
            //12 % 2 true
            //12 % 3 true
            //12 % 4 true
            //12 % 5 false
            //12 % 6 true
            //12 % 7 false
            //12 % 8 false
            //12 % 9 false
            //12 % 10 false
            //12 % 11 false
            //12 % 12 true
            // => 1 + 2 + 3 + 4 + 6 + 12
    }
    return answer;
}

console.log(solution(12)) //28
console.log(solution(5)) //6