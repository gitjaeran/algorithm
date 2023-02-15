//핸드폰 번호 가리기

//번호에서 -4 하여 아예 *로 변환되지 않도록 배제 : phone_number.length - 4
//끝~끝에서 4번째 찾기 : slice(음수)
//찾았으면 앞의 나머지 index 전부 *로 변환하는 코드 작성 : "*".repeat
//문자열 붙여서 반환하기

function solution(phone_number) {
    let num = phone_number.length - 4

    //'*'.repeat을 사용하여 앞자리 *로 바꾸기
    console.log("*".repeat(num)) //*******

    //끝~끝에서 4번째 
    console.log(phone_number.slice(-4)) //4444

    //뒤 4자리 제외 *로 변환
    return "*".repeat(num) + phone_number.slice(-4)
}

console.log(solution("01033334444"))
console.log(solution("027778888"))
