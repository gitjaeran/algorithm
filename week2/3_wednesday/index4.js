// 두 정수 사이의 합
// 3과 5라면 3,4,5를 가져와야 함

// a와 b를 비교 -> 더 큰 숫자만큼 반복문을 돌려서 더한다.

function solution(a, b) {
    var answer = 0;
    if (a >= b) { //a가 b보다 크거나 같으면
        //5, 3 또는 3, 3
        //3, 3일때는 3밖에 없기때문에 answer + i = 3
        for(let i=b; i<=a; i++){ 
            console.log(i) //3, 4, 5 / 3
            answer += i //0+3=3, 3+4=7, 7+5=12
        }
    } else{ //b가 a보다 크면
        //3, 5
        for(let i=a; i<=b; i++){ 
            console.log(i) //3, 4, 5
            answer = answer + i //0+3=3, 3+4=7, 7+5=12
        }
    }
    return answer;
}
console.log(solution(5, 3))
console.log(solution(3, 5))
console.log(solution(3, 3))


//인서님 풀이
function solution(a, b) {
    let answer = 0;
    let sum = 0;
    if(a<=b){
        for (i=a;i<=b;i++){
        sum = sum + i
        answer = sum
    }}else{
        for(i=b;i<=a;i++){
        sum = sum + i
        answer = sum
        }   
    }
    
    
    return answer;
}

