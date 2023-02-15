//직사각형 별찍기
//입력: 5 3

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let width = "*".repeat(a);
    let height = "*".repeat(b);
    for(let i = 0; i < height.length; i++) {
    console.log(width);        
    }
});

// function solution(a, b){
    
//     for(let i = 0; i<a.length; i++){
//         answer = '*'.repeat(a);
        
//         for(let i=0; i<b.length; i++){
//             answer = '*'.repeat(b);
//         }
//     }
// };

// console.log([5, 3])