//음양 더하기
//숫자의 sign이 true면 양수
//숫자의 sign이 false면 음수
//sign에 따른 총 합 반환

function solution(absolutes, signs) {
    var answer = 0;
    for(let i=0; i<absolutes.length; i++) { //숫자의 배열만큼 반복
        if(signs[i] == true) {  //signs 안의 내용 확인 후 true일 경우
            answer = answer + absolutes[i] //0 + 4 + 12
        } else{ //signs 안의 내용 확인 후 false일 경우
            answer = answer - absolutes[i] //12 -7
        }
    }
    return answer;
}
console.log(solution([4,7,12], [true,false,true]))