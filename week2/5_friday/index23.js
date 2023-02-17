//자연수 뒤집어 배열로 만들기

//사용하면 될듯한 메서드: sort() 내림차순

//new Array는 문자열을 하나의 원소로 한 배열을 만들어주고,
//Array.from은 문자열 하나하나를 원소로 한 배열을 만들어준다.

//첫 번째 풀이 : 통과 못 함
// function solution(n) {
//     var answer = [];
//     let str = String(n) 
//     console.log(str) //12345
//     let arr = Array.from(str)
//     console.log(arr) // ['1', '2', '3', '4', '5']
//     let sort = arr.sort((a,b) => b-a) //['5', '4', '3', '2', '1']

//     for(let i=0; i<sort.length; i++){
//         answer.push(Number(sort[i])) //[5, 4, 3, 2, 1]
//     }

//     return answer;
// }

//두 번째 풀이 : 통과 못 함
// function solution(n) {
//     var answer = [];
//     let arr = String(n).split("").sort((a,b) => (b-a))
//     console.log(arr) //['5', '4', '3', '2', '1']
//         for(let i=0; i<arr.length; i++){
//         answer.push(Number(arr[i])) //[5, 4, 3, 2, 1]
//     }
//     return answer;
// }

//제출한 코드 : 다른 사람의 코드
function solution(n) {
    var answer = [];
    let arr = String(n).split("")
        for(let i=arr.length-1 ; i>=0; i--){
            answer.push(Number(arr[i])) //[5, 4, 3, 2, 1]
        }
    return answer;
}

console.log(solution(12345)) //[5,4,3,2,1]