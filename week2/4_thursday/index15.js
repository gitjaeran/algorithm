//내적

/*
매개변수 = 길이가 같은 두 1차원 정수 배열 a, b
a와 b의 내적을 return
내적 예시
-> a[1,2,3,4], b[-3,-1,0,2]
= a[0]*b[0] +  a[1]*b[1] +  a[2]*b[2] +  a[3]*b[3]
*/

/*
for문으로 배열을 돌며 배열의 같은 index끼리 곱하게 하고,
그 반환값을 더하면 되지 않을까?
*/

function solution(a, b) {
    var answer = 0;
    for(let i=0; i<a.length; i++){
        //console.log(a[i]) //1,2,3,4
        //console.log(b[i]) //-3,-1,0,2

        // answer = answer + a[i] * b[i]
        answer +=a[i]*b[i]
    }
    return answer;
}

console.log(solution([1,2,3,4],[-3,-1,0,2]))
console.log(solution([-1,0,1],[1,0,-1]))
