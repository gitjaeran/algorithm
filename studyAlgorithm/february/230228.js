//최대공약수와 최소공배수

/*
두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환
배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환

두 수는 1이상 1000000이하의 자연수
*/

function solution(n, m) {
    var answer = [];
    let g = 0; //최대공약수
    let l = 0; //최소공배수

    //두 자연수 중 큰 수와 작은수 찾기
    let num = n > m ? n : m;

    //최대공약수 구하기
    for(let i = 1; i < num; i++){
        if(n % i == 0 && m % i == 0){
            g = i;
        }
    }
    //최소공배수 구하기
    l = n * m / g
    return answer=[g, l];
}

console.log(solution(3, 12))//[3, 12]
console.log(solution(2, 5))//[1, 10]
