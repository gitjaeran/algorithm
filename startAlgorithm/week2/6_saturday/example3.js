// 소수와 개수와 덧셈

/**
1. 소수가 맞는 수 확인
1-1. 소수가 맞으면 그중에 최대값 얻기
2. 소수가 아닌 수 확인
2-1. 소수가 아니면 그중에 최소값 얻기
3. 최소값, 최대값 리턴
 */

// function solution(s){
// 	let answer="";
//     s = s.split(' ')
//     let arr1 = []
//     let arr2 = []
//     let min = 0
//     let max = 0
//     console.log(arr1,'arr1 be')
//     console.log(arr2,'arr2 be')
    
//     for(let i=0; i<s.length; i++){
//         // console.log(typeof(Number(s[i]))) //Number
//         // console.log(typeof(s[i])) //String
//         // console.log(s[i] <= 1)
//         // if(Number(s[i]) === 0)
//         // console.log(typeof s[i]) -> string
//         // console.log(typeof i) -> number
//         // string과 number값이 나눠지는 신기한 언어 자바스크립트.
// /**
// - 만약 s[i]가 0이거나 1이면 소수가 아님 = 0,1은 제외
// if(s[i] <= 1)
//  */
// // console.log(s[i] , i)
//         if(s[i] >= 1) {
//             for(j=2; j<s.length; j++) {
//                 // console.log(s[i], j)
//                 if(s[i] % j === 0){
//                     // console.log(j,'j')
//             //    arr1.push(Number(s[i]))
//                // min = Math.min(...arr1)
//                } else {
//                 // console.log(j,'j2')
//                 //    arr2.push(Number(s[i]))
//                    // max = Math.max(...arr2)
//                }
//             }
//         }
//     }
//     // console.log(arr1,'arr1')
//     // console.log(arr2,'arr2')
//     min = Math.min(...arr1)
//     max = Math.max(...arr2)
// 	return answer = min + ' ' + max;
// }



function solution(s){
	let answer="";
    let arr1 = [] //소수
    let arr2 = [] //소수X
    let min = 0
    let max = 0
    s = s.split(' ')
    // console.log(s)
    for(let i=0; i<s.length; i++) {

            // for(let j=2; j<s.length; j++){
                if(s[i] == 2) {
                    arr1.push(Number(s[i]))
                    // console.log(arr1)
                }

                // console.log(s[i])
                for(let j=0; j<s.length; j++){
                console.log(typeof j)

                    if(Number(s[i]) % j === 0){
                        arr2.push(Number(s[i])) //소수가 아님
                        console.log(arr1)
                    } else {
                        // console.log(arr2)
                        arr1.push(Number(s[i])) //소수가 맞음
                    }
                }
                
            // }

    }
        
min = Math.min(...arr2) //소수 중에 최소
max = Math.max(...arr1) //소수 중에 최대
return answer = min + ' ' + max;
}



/*
리턴값: 소수가 아닌 수 중 최소값, 소수가 맞는 수 중 최대값

단, 0과 1은 소수가 아님
단, 2는 무조건 소수임

1. 소수가 맞다면
그 중에 최대값을 저장

2. 소수가 아니라면
그 중에 최소값을 저장
*/
// console.log(solution("97 75 88 99 95 92 73")) //75 97
// console.log(solution("2 3 4 5")) //4 5
console.log(solution("15 3 10 9 7 8")) //8 7


/********************************************************* */
//찬우님 풀이
function solution(n){
	let arr = Array(n+1).fill(true).fill(false,0,2);
	
	for(let i =2; i * i < n; i++){
			if(arr[i]){
				for(let j=i*i; j <= n; j+=i){
						arr[j] = false; 
 				}
			 }
	}
		return arr;
}

let isPrimes = solution(100);

//소수 개수 구하기
isPrimes.filter(e => e).length; // 25개

//소수 반환하기
isPrimes.map((v,i) => (v) ? i : 0).filter(e=>e); 
