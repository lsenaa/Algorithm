function solution(number, limit, power) {
    let answer = 0;
    
    for (let i = 1; i <= number; i++) {
        let count = 0;
        
        for (let j = 1; j < Math.sqrt(i) + 1; j++) {
            if (i % j === 0 && j*j < i) {
                count += 2
            } else if (j*j === i){
                count++   
            }
        }

        if (count > limit) {
            answer += power
        } else {
            answer += count
        }
    }
    return answer
}