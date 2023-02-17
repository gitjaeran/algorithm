//자릿수 더하기

/*
매개변수 N의 총 합 리턴

1. N을 한자리 숫자로 나눈 뒤,
-> 자연수인 매개변수를 문자열로 만들고,
-> 문자열이 된 매개변수를 배열에 담는다.

2. for문으로 돌려서 반복될때마다 더해주면 됨.
-> 배열의 길이만큼 반복하되
-> 배열은 문자이기 때문에 0012를 띄우지 않으려면
-> Number()로 배열[i]를 변환해주어 계산한다.
*/

//사용해야할듯한 메서드: for, 연산자

function solution(n){
    var answer = 0;
    let str = String(n)
    // console.log(str) //123
    const newNum = Array.from(str)
    // console.log(newNum) //['1', '2', '3']
    for (let i=0; i<newNum.length; i++){
        // console.log(Number(newNum[i]))
        answer += Number(newNum[i])
    }

    return answer;
}

console.log(solution(123)) //6
console.log(solution(987)) //24
