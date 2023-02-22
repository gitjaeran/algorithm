//나머지가 1이 되는 수 찾기

/**
매개변수: 자연수 n
문제: n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x 리턴
제한사항: 3 ≤ n ≤ 1,000,000

1. n % i === 1인 i 찾기
2. 그중 제일 작은 i 리턴하기
-> 제일 작은 i는 for문에서 1부터 올라가니,
    제일 첫 번째로 나오는 i만 얻으면 됨

 */

function solution(n) {
    var answer = 0;
    //제한 조건에 따라 3부터 시작하기 위해 i를 2로 설정
    for(let i = 2; i < n; i++){
        //만약 n과 i를 나눴을 때 나머지가 1이면
        if(n % i === 1) {
            answer = i
            //answer를 i로 할당하고 첫 i값만 얻은 다음 break
            break
        }
    }
    return answer;
}
console.log(solution(10)) //3
console.log(solution(12)) //11