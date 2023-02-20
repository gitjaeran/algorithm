// 짝수와 홀수

//만약 num이 짝수라면 return 'Even'
// -> 짝수는 num %(나머지값 반환) 2 = 0
// -> 홀수는 num %(나머지값 반환) 2 = 1
//그렇지 않다면 "Odd"를 반환하는 함수 solution()완성
function solution(num) {
    var answer = '';
    if(num % 2 === 0) { //짝수
        return answer = 'Even'
    } else { //홀수
        return answer = 'Odd'
    }
    return answer;
}
