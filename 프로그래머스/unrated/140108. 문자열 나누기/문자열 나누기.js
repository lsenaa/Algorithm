function solution(s) {
    let countA = 1;
    let countB = 0;
    let start = s[0];
    let answer = 0;
    
    
    if (s.length === 1) return 1;
    
    for (let i = 1; i < s.length + 1; i++) {
        if (start === s[i]) {
            countA++
        } else {
            countB++   
            
            if (countA === countB) {
                answer++ 
                countA = 0
                countB = 0
                start = s[i+1]
            } 
            if (countA !== countB && s[i] === s[-1]) answer++
        }
    }
    return answer
}