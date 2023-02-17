//이상한 문자 만들기
/*
-매개변수
문자열 s는 한 개 이상의 단어,
하나 이상의 공백문자로 구분

-짝수번째 알파벳은 대문자로,
홀수번째 알파벳은 소문자로 바꾼 문자열 리턴

-문자열 전체의 짝/홀수 인덱스가 아니라,
단어(공백을 기준)별로 짝/홀수 인덱스를 판단
-첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리

s를 for문의 길이만큼 돌려보자.
공백도 포함되는지 확인하자. -> 공백도 찍힌다!!!
공백을 기준으로 문자열을 나누는 메서드를 찾아서 단어별로 쪼개자.
각 단어의 첫 글자를 포함한 짝수 index 글자를 대문자로 바꾸자.
= 짝홀 판별하는 연산을 조건문에 넣기.
*/

/*사용해야할듯한 메서드
for, if, 문자열을 공백을 기준으로 나눌수 있는 메서드, 대/소문자 변형, 연산자
*/

function solution(s) {
    var answer = '';
    const split = s.split(' ')
    // console.log(split) //['try', 'hello', 'world']
    for(let i=0; i<split.length; i++){
        // console.log(split[i].length) //3, 5x2
        // console.log(split[0][0]) //t
        // console.log(split[0][1]) //r
        // console.log(split[0][2]) //y
        for(let j=0; j<split[i].length; j++){
        // console.log(split[i][j])
            if(j % 2 === 0) { //짝수
                answer += split[i][j].toUpperCase()
            } else { //홀수
                answer += split[i][j].toLowerCase()
            }
        } //여기까지 돌리면 공백없이 나옴. TrYHeLlOWoRlD

        // console.log(i) //0 1 2
        // console.log(split.length) //3
        if (i < split.length-1) {
            answer += ' ';
        }
    }
    return answer;
}

console.log(solution("try hello world")) //"TrY HeLlO WoRlD"