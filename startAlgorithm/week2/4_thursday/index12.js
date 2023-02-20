//부족한 금액 계산하기

/*
놀이기구의 원래 이용료는 price원
N번 째 이용시 원래 이용료의 N배
처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상
놀이기구를 count번(n) 타게 되면
자신이 가지고 있는 금액에서 얼마가 모자라는지를 return

price=3, money=20, count=4,	result=10
3원 -> 6원 -> 9원 -> 12원 = 3*1, 3*2, 3*3, 3*4
3+6+9+12 = 30
현재 돈은 20원 -> 10원 부족함
*/

//n번째 이용시 원래 이용료의 n배를 더한 값 반환= for문 사용
//-> let i = 1; i <= count; i++
//반환값 - 현재 돈 = 반환값 - money

function solution(price, money, count) {
    var answer = 0;
    for (let i=1; i<=count; i++){
        console.log(price)
        answer += price * i;
        // console.log(answer)
    }

    return answer > money ? answer-money : 0;
}

console.log(solution(3, 20, 4))