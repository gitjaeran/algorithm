/*
500
100
50
10
개수가 가장 적게 잔돈을 줌

1000을 냈을때 받을 잔돈의 개수

*/
function solution(num){
	let answer= 0;
    let money = [500, 100, 50, 10];
    let coin = 1000-num //잔돈

    money.forEach((money) => {
        answer = answer + Math.floor(coin / money)
        coin = coin % money
    })


	return answer;
}


console.log(solution(160)) //8
console.log(solution(900)) //1
console.log(solution(550)) //5
console.log(solution(320)) //6
