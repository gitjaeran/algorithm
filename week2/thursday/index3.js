// 가운데 글자 가져오기
// 문자열이 짝수라면 중간의 2개 글자 반환
// -> 짝수 확인 방법: % 2 == 0
// 문자열이 홀수라면 중간의 글자 1개만 반환
// -> 홀수 확인 방법: % 2 == 1

function solution(s) {
    var answer = '';
    //문자열이 짝수일때
    if(s.length % 2 == 0) { 
        //qwer - s.length=4 - index[0][1][2][3]
        //s.length 4 / 2 = 2
        //s.length = index[2] = e
        //앞의 글자도 함께 가져와야 하기때문에 -1 추가 = index[1] = w
        answer = s[s.length / 2 - 1] + s[s.length / 2]

    //문자열이 홀수일때
    } else { 
        //abcde - s.length=5 - index[0][1][2][3][4]
        //중간값을 가져오려면 1을 빼고 2로 나눠줘야 한다.
        //(s.length 5 - 1) / 2 = 2
        //s.length 2 = index[2] = c
        answer = s[(s.length -1) / 2]
    }
    return answer;
}
console.log(solution('abcde'))
console.log(solution('qwer'))


// //다른 사람의 풀이
// function solution(s) {
//     return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
// }