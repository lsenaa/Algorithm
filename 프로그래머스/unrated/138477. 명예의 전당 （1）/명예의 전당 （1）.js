function solution(k, score) {
    let queue = [];
    let result = [];
    
    for (let i = 0; i < score.length; i++) {
        if (queue.length < k) {
            queue.push(score[i])
            result.push(Math.min(...queue))
        } else if (score[i] >= queue[0]) {
            queue.shift()
            queue.push(score[i])
            result.push(Math.min(...queue))
        } else result.push(Math.min(...queue))
        
        queue.sort((a, b) => a - b)
    }
    return result
}