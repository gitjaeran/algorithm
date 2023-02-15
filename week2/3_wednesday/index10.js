//행렬의 덧셈

/*
arr1[0] + arr2[0]
arr1[1] + arr2[1]
answer 빈 배열에 추가
*/

function solution(arr1, arr2) {
    var answer = [[]];
    for(let i=0; i<arr1.length; i++) {
        answer[i] = []
        for(let a=0; a<arr1[i].length; a++){
            answer[i].push(arr1[i][a] + arr2[i][a])
        }
    }
    return answer;
}

console.log(solution([[1,2],[2,3]], [[3,4],[5,6]]))