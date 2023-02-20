//서울에서 김서방 찾기

/*
String형 배열 seoul의 element중 "Kim"의 위치 x를 찾고
"김서방은 x에 있다"는 String을 반환

seoul은 길이 1 이상, 1000 이하인 배열
seoul의 원소는 길이 1 이상, 20 이하인 문자열
"Kim"은 반드시 seoul 안에 포함
*/

//사용해야할듯한 메서드: find() or findIndex(), 템플릿 리터럴

function solution(seoul) {
    let findKim = seoul.findIndex(a => a == "Kim")
    console.log(findKim)
    return `김서방은 ${findKim}에 있다`
}

console.log(solution(["Jane", "Kim"])) //"김서방은 1에 있다"