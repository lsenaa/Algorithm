function solution(k, m, score) {
    let answer = 0;
    
    score.sort((a, b) => b - a)   
    
    if (m > score.length) return 0

    for (let i = 0; i < score.length; i += m) {
        let box = score.slice(i, i+m)
        if (box.length === m) answer += Math.min(...box) * m
    }   
    return answer
}