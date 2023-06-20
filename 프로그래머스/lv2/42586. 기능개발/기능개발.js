function solution(progresses, speeds) {
    let answer = [];
    let left = progresses.map((progresse, i) => Math.ceil((100 - progresse) / speeds[i]));
    let count = 1;
    let first = left[0];
    
    for (let i = 1 ; i < progresses.length; i++){
        if (first >= left[i]) {
            count++
        } else {
            answer.push(count) 
            count = 1
            first = left[i]
        }
    }
    answer.push(count)
    return answer
}