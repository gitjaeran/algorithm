//완주하지 못한 선수

/*
매개변수 = participant(참여자명단), completion(완주자명단)
return = 미완료1명

1. for문에서 participant만큼 반복하며
2. completion과 일치하지 않는 값 반환
*/

//사용해야할듯한 메서드: for, if

function solution(participant, completion) {
    let part = participant.sort()
    let comp = completion.sort()
    // console.log(part)
    // console.log(comp)

    for (let i=0; i<participant.length; i++) {
        //만약 part[i]와 comp[i]가 같지 않다면
        if(part[i] !== comp[i]) {
            // console.log(part[i] !== comp[i]) //true
            
            //여기서 왜 없는 값이 자동출력될까?
            return part[i]
        }
    }
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])) //"leo"
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"])) //"vinko"
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])) //"mislav"
