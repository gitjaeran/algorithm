//2016년

/*
2016년 1월 1일은 금요일
2016년 a월 b일은 무슨 요일?
매개변수는 a(month), b(day)
요일 이름은 SUN,MON,TUE,WED,THU,FRI,SAT
2016년은 윤년 = 여분의 하루인 2월 29일을 추가하여 1년 동안 날짜의 수가 366일
*/

//생각나는 메서드 : Date()

function solution(a, b) {
    var answer = '';
    //일단 day 배열을 생성한다.
    let day = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    //date에 Date(달, 날짜, 년도).getDay()를 사용하여 요일 index값을 얻는다.
    let date = new Date(`${a}, ${b}, 2016`).getDay()
    //console.log(date) //2 = 세 번째 요일 'TUE'
    //getDay()가 요일을 index값으로 반환해줌
    
    return answer = day[date];
}

console.log(solution(5, 24))


//
//찬우님 풀이

//유년 : 2월 29일까지 있는 년도 
//달(a)가 홀수 짝수 일 때 일(b)가 달라진다. 
//일주일은 7이다. 한달에는 일주일이 총4번 28이 있고 나머지 값이 있다.
//각 달마다 생기는 남머지 값들을 구한다.
//나머지 값을 7로 나눈 나머지 값을 구해서
//미리 생성해둔 weeks 배열에 index 값으로 넣는다. 
//단, 7로 나눴을때 값이 '0'이 나오면 7로 리턴한다. 

// a=5 b= 24

// function solution(a, b) {
    
//   let days = 0; 
//   let day = 0;
//   let Months = [3,1,3,2,3,2,3,3,2,3,2,3]; 
//   let weeks = ['FRI','SAT','SUN','MON',"TUE","WED","THU"];     
//   days = Months.reduce((acc,val,index) => (index < a -1) ? acc+= val : acc,0); //4월까지 
//   days += b; //5월까지 
//   day =(days % 7) != 0? days % 7 : 7; // 나머지가 0 == 없다. 마지막 요일이다. 
//   return weeks[day -1];
// }