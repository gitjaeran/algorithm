//문자열 다루기 기본

/**
s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수

제한사항
s는 길이 1 이상, 길이 8 이하인 문자열
s는 길이 1 이상, 길이 8 이하인 문자열
*/

// 첫 번째 풀이 : 통과 안 됨
function solution(s) {
    if(s.length === 4 || s.length === 6) {
        console.log(s)
        
        for(let i=0; i<s.length; i++){
            return Number(s) ? true : false
        }
    } else {
        return false
    }
}


//
//제출한 코드 : 참고한 코드
function solution(s) {
    //만약 s길이가 4 또는 6이 아닐경우 false
    if(s.length != 4 && s.length != 6) return false;

    for(var i = 0; i < s.length; i++) {
        //Number(s[i]) = 만약 s의 문자를 숫자로 변환했을 때
        //NaN = Not-A-Number(숫자가 아님) //a,b...
        //isNaN() = 어떤 값이 NaN인지 판별하는 함수
        //=> 숫자로 변환해보고, 숫자가 아니면 return false
        //= 숫자를 제외한 나머지 false
        //=> isNaN() / parseInt() -> 중간에 number가 아닌 문자열이 있을 경우
        //뒷 문자열은 확인하지 않고 끝난다.
        //따라서 "1e22" "2p12" 처럼 중간에 number외의 타입이 들어오면 안됨.
        if(isNaN(Number(s[i]))) return false;
    }
    return true;
}

console.log(solution("a234")) //false
console.log(solution("1234")) //true

//
//내가 원래 작성하려던 의도와 합친 코드
// function solution(s) {
//     if(s.length === 4 || s.length === 6) {
//         for(let i=0; i<s.length; i++){
//             if(isNaN(Number(s[i]))) return false;
//         }
//         return true
//     } else {
//         return false
//     }
// }


