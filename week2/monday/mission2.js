//프로그래머스 - 최소 직사각형
function solution(sizes) {
    let max = []
    let min = []

    for(let i=0; i<sizes.length; i++){
        if(sizes[i][0] > sizes[i][1]){
            max.push(sizes[i][0])
            min.push(sizes[i][1])
        } else{
            max.push(sizes[i][1])
            min.push(sizes[i][0])
        }
    }
    
    //...은 Math 사용시 필요함
    return Math.max(...max) * Math.max(...min)
}

console.log(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]))
//큰 숫자들 중에서 가장 큰것= 19
/**
 * 1. 주어진 각각의 배열에서 큰 숫자를 뽑기
 * 2. 뽑은 숫자들을 비교해서 제일 큰 숫자를 뽑기
 * 
 * 해야되는건
 * 각각의 배열에서 숫자를 비교하는거
 * 비교 후에 큰 숫자 뽑기
 * 5개의 뽑힌 값들을 서로 비교
 * 최종적으로 가장 큰 값 뽑기
 */
//작은 숫자들 중에서 가장 큰 것 =7

// 좋은 풀이
// function solution(sizes) {
//     const maxWidth = Math.max(...sizes.map(card => Math.min(...card)));
//     const maxHeight = Math.max(...sizes.map(card => Math.max(...card)));
//     return maxWidth * maxHeight;
// }


    // console.log(sizes,'size 값') //Array
    // sizes.map(card => console.log(card, 'size를 map돌린 값'))
    // //[14, 4]
    // //[19, 6]
    // //[6, 16]
    // //[18, 7]
    // //[7, 11]

    // sizes.map(card => console.log(Math.min(...card), '작은 값을 숫자로만 찍기'))
    // // 4, 6, 6, 7, 7

    // console.log(sizes.map(card => Math.min(...card)), '[작은 값들]')
    // // [4, 6, 6, 7, 7]

    // const a = Math.max(...sizes.map(card => Math.min(...card)))
    // //Math.max([4, 6, 6, 7, 7])

