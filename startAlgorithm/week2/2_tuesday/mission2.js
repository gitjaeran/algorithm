// 1. 각 배열에서 n번째 인덱스 값을 찾는다.
// 2. 해당 n번째 인덱스 값을 오름차순 정렬한다
// 3. 해당 인덱스가 정렬된 순서대로? 인덱스가 정렬된 순서대로 원래의 단어를 불러온다
// 4. 만약 인덱스값이 동일한 값이라면 사전순으로 정렬한다

function solution(strings, n) {
    strings.sort((a,b) => {
        // 첫 번째 값이 두 번째 값보다 큰 경우
        if(a[n] > b[n]) { 
            return 1
        } else if(a[n] == b[n]) { // 두 값이 같은 경우 -> 조건 추가
            if(a > b) { //첫 번째 값이 두 번째 값보다 크면 = 1
                return 1
            } else{
                return -1
            }
        } else {  //  첫 번째 값이 두 번째 값보다 작은 경우
            return -1
        }
    })

    return strings;
}

console.log(solution(["sun", "bed", "car"], 1));
console.log(solution(["abce", "abcd", "cdx"], 2));

