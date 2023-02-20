//정수 내림차순으로 배치하기

/*
매개변수 = 정수 n

n의 숫자를 내림차순으로 리턴
*/

function solution(n) {
    var answer = 0;
    // console.log(typeof(n)) //number

    let arr = Array.from(String(n))
    let sort = arr.sort((a,b) => b-a)
    let num = sort.join('')
    answer = Number(num)

    return answer;
}

console.log(solution(118372)) //873211