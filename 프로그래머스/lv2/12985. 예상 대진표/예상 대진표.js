function solution(n,a,b) {
    let answer = 0;
    
    while (a !== b) {
        a % 2 === 0 ? a = a / 2 : a = (a + 1) / 2
        b % 2 === 0 ? b = b / 2 : b = (b + 1) / 2
        answer++    
    }
    return answer
}