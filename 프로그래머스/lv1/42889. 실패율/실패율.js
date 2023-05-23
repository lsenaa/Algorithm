function solution(N, stages) {
    let obj = {};
    let answer = [];
    
    for (let i = 0; i < N; i++) {
        let clear = 0;
        let notClear = 0;

        stages.forEach(stage => {
            if (stage >= i+1) clear++
            if (stage === i+1) notClear++    
            obj[i+1] = notClear/clear
        })
    }
    
    for (let o in obj) {
        answer.push([o, obj[o]])
    }
    
    return answer.sort((a, b) => b[1] - a[1]).map((el) => Number(el[0]))   
}