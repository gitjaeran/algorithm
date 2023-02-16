//수박수박수박수박수박수?

/*
길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴

0=수 / 1=박 / 2=수 / 3=박   => 0,짝수:수, 홀수:박
만약 % 2 == 0이면 '수', % 2 == 1이면 '박'
*/

//사용해야할듯한 메서드: for문, if문, 연산자


function solution(n) {
    let result = ''

    for(let i=0; i<n; i++){
        // console.log(i) //0, 1, 2
        //result = result + i % 2 == 0 ? '수' : '박'
        result += i % 2 === 0 ? '수' : '박'
    }
    return result
}

console.log(solution(3)) //"수박수"