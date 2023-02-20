//문자열 내 p와 y의 개수

/*
매개변수 = 대문자와 소문자가 섞여있는 문자열 s "pPoooyY"
만약 s에 'p' 개수와 'y' 개수가 같거나 && 'p', 'y' 모두 하나도 없는 경우 True, 다르면 False 리턴
->'p'와 'y'를 어떻게 찾을까? : split()
*/

//첫 번째 풀이: 실행은 되지만 통과는 안 됨
// function solution(s){

//     for(let i=0; i<s.length; i++) {
//         if(s[i].split('p').length == s[i].split('y').length) {
//             answer = true
//         } else if(s[i].split('p').length == 0 || s[i].split('y').length == 0){
//             answer = true
//         } else {
//             answer = false
//         }
//     }
//     return answer;
// }


//제출한 풀이: 참고한 풀이
function solution(s){
    //기본적으로 if문은 true와 false를 반환한다.
    //따라서 일치연산자 '===' 결과에 따라서 맞으면 true, false를 반환한다.
    //s를 toUpperCase()로 대문자 변환 + split()으로 특정 문자찾기 + 개수 length
    //대문자로 변환하여 특정 문자의 개수를 비교했을 때 같으면 true, 다르면 false
    //하나도 없는 경우는 양쪽 다 갯수가 0이기 때문에 같다고 생각하면 된다.
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}

console.log(solution("pPoooyY"))
console.log(solution("Pyy"))