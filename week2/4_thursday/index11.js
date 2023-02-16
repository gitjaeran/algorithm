//x만큼 간격이 있는 n개의 숫자

//매개변수: 정수 x와 자연수 n
//x부터 x씩 증가하는 숫자를 n개 가지는 리스트 리턴
//x는 -10000000 이상, 10000000 이하인 정수
//n은 1000 이하인 자연수

//x부터 x씩 증가하는 숫자를 n개를 반환하려면 for문 사용
//값을 배열에 담으려면 answer에 담기.

function solution(x, n) {
    var answer = [];
    for (let i = 1; i <= n; i++){ //n만큼 돌면서 x의 배수 반환. i는 1이어야 0이 나오지 않음!
        answer.push(i*x)
        
    }
    return answer;
}

console.log(solution(2, 5)) //answer [2,4,6,8,10] x=2부터 시작해 x씩 증가=2,4,6,8,10하는 숫자 n개=5개
console.log(solution(4, 3)) //answer [4,8,12]
console.log(solution(-4, 2)) //answer [-4,-8]


//오답: 첫 번째 풀이 - 0도 함께 나옴
// function solution(x, n) {
//     var answer = [];
//     for (let i = 0; i <= n; i++){ //n만큼 돌면서 x의 배수 반환?
//         console.log(i*x)
        
//     }
//     return answer;
// }