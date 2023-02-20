//

function solution(str){
	let answer= 0;
    //배열을 x 기준으로 잘라보자. 그리고 빈 배열 제거.
    let arr = str.split('X').filter(a => a.length !== 0)

    for(let i=0; i<arr.length; i++){
        // console.log(arr[i].length, 'length')
        let temp = 0;
            // console.log(arr[i])
        for(let j=1; j<=arr[i].length; j++) {
            // console.log(j,'j')
            // console.log(temp+= j,'')
            //temp = temp + j
            temp+= j
        }
        answer+= temp
    }
	return answer;
}
// let str="OXOOOXXXOXOOXOOOOOXO"; //27
let str="OOXXOXXOOO" //10
console.log(solution(str))

/**
OO = 1+2
O = 1
O가 1개인지 2개인지 어떻게 알수있을까?
O의 길이를 구하면 알수있지않을까?

arr[i]가 OOO, O, OO, OOOOOO 이렇게 나오는데
1+2+3 연속된 수의 합을 어떻게 구하지?
=> 1+2+3 구글링 => 가우스의법칙, 1~n까지의 합을 구하는 원리
=> 등차수열의 합
각각의 length를 가지고 연속된 숫자의 합을 구해야하는데
그러면 for문을 한번 더 사용해야하지않을까?
 */
