//몇시간 했더라?

/**
answer += checkout[i] - checkin[i]

 * 29부터는 21로 간주함.
-> arr2에서 29이상부터는 21로 변경.
-> arr2의 29와 30은 21임
배열 요소 수정 = splice?
for
if arr2[i] >= 29
arr2.splice()
 */

function solution(arr1, arr2){
	let answer=0;
    for(let i=0; i<arr2.length; i++) {
        // console.log(arr2[i])
        if(arr2[i] >= 29) {
            // console.log(arr2.indexOf(arr2[i])) //2, 4
            let getIndex = arr2.indexOf(arr2[i])
            arr2.splice(getIndex, 1, 21)
        }
        answer += arr2[i] - arr1[i]
    }


	return answer;
}

// let arr1=[9, 9, 9, 9, 7, 9, 8];
// let arr2=[23, 23, 30, 28, 29, 23, 23];

let arr1=[9,9,8,8,7,8,9]
let arr2=[21,25,30,29,22,23,30]

console.log(solution(arr1, arr2))

