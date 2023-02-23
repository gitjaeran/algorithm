// 콜라츠 추측

/*
1-1. 입력된 수가 짝수라면 2로 나눕니다. 
1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다. 
2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
주어진 수가 1이 될때까지 위의 작업을 반복하면 모든 수를 1로 만들 수 있다는 추측

위 작업을 몇 번이나 반복해야 하는지 반환
단, 주어진 수가 1이면 0, 500번 반복할 때까지 1이 나오지 않으면 -1

입력된 수, num은 1 이상 8,000,000 미만인 정수입니다.
*/

//나의 풀이
function solution(num) {
    var answer = 0;
    //500번 반복할 때까지 1이 나오지 않으면
    //어차피 -1을 리턴해야 하기 때문에 아예 500까지만 반복
    for(let i = 0; i < 500; i++){
        //num이 1이 아님을 확인
        if(num != 1){
            num = num % 2 == 0 ? num/2 : num*3+1
            console.log(num)
        } else {
            return answer = i
        }
    }
    //500번 실행했지만 return값이 없다면 -1 리턴
    return answer = -1;
}

//더 직관적인 다른 사람의 풀이 1
function solution(num) {
    for(var answer=0; answer<500; answer++){
        if(num%2==0){
            num=num/2
        }
        else if(num==1){
            return answer
        }
        else if(num%2==1){
            num=(num*3)+1
        }
    }
    return -1
}

//더 직관적인 다른 사람의 풀이 2
function solution(num){
    let answer=0;
    while(num!=1 && answer!=500){
        num%2==0? num=num/2 : num=num*3+1
        answer++
    }
    return num==1 ? answer : -1
}

console.log(solution(6)) //8
console.log(solution(16)) //4
console.log(solution(626331)) //-1
