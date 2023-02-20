//1번. 신대륙 발견

/*
항해 1일 차 날짜를 입력하면 98일 이후
항해를 수료하게 되는 날짜를 계산해주는 알고리즘을 만들어보자.

##제한 조건
- 1 ≤ month ≤ 12
- 1 ≤ day ≤ 31 (2월은 28일로 고정합니다, 즉 윤일은 고려하지 않습니다.)

##입출력 예
month=11 , day=27 => "3월 5일"
month=6 , day=22 => "9월 28일"

new Date()
setDate()
getDate() //일 반환 (day는 요일 반환)
getMonth()
*/

function solution(month, day){
	let result=""
    //매개변수 month, day를 오늘 날짜로 설정해주기
    const now = new Date(`${month}, ${day}`) //매개변수 날짜 = 시작일자
    //now의 Date를 set해준 new Date 생성
    const study = new Date(now.setDate(now.getDate() + 98))
    //0월 =1월이라서, 바로 +1하여 받아옴
	return result = study.getMonth() + 1 + '월 ' + study.getDate() + '일';
}

console.log(solution(1,18)) //4월 26일
console.log(solution(11,27)) //3월 5일
console.log(solution(6,22)) //9월 28일

