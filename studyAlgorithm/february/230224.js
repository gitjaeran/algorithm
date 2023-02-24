//문자열 내림차순으로 배치하기

/**
매개변수 s의 문자를 큰 것부터 작은 순으로 정렬해 새로운 문자열 리턴
s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주함

str은 길이 1 이상인 문자열
 */

function solution(s) {
    let arr = Array.from(s)
    return arr.sort().reverse().join('');
}

console.log(solution("Zbcdefg")) //"gfedcbZ"

/**
배열 - sort()

1. 문자열을 배열로 바꾸기
2. 배열을 sort로 받기 -> ['Z', 'b', 'c', 'd', 'e', 'f', 'g']
->뒤집어주려면 reverse 메서드 사용
3. 배열을 문자열로 바꾸기 -> Z,b,c,d,e,f,g
 */

//다른 사람의 좋은 풀이
/**
function solution(s) {
    return s
    .split("")
    .sort()
    .reverse()
    .join("");
}
 */