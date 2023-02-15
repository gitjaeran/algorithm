// 문자열을 정수로 바꾸기
//문자열 '1234'를 숫자 1234로 변환하여 반환
//형변환 string->number : parseInt() 사용

function solution(s) {
    var answer = 0;
    answer = parseInt(s)
    return answer;
}
console.log(solution('1234'))