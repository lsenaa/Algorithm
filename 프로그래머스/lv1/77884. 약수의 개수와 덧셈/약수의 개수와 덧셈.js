function solution(left, right) {
    let num = 0;
    let sum = 0;
    
    for (let i = left; i < right + 1; i ++) {
        for (let j = 1; j < i + 1; j++) {
            if (i % j === 0) {
                num++
            }
        }    
        num % 2 === 0 ? sum += i : sum -= i
        num = 0
    }
    return sum
}