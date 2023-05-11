function solution(s) {
    let answer = true

    if (s.length === 4 || s.length === 6) {
        for (let i = 0; i < s.length; i++) {
            if (Number.isInteger(Number(s[i]))) {
                continue;
            } else {
                return false
            } 
        }
    } else {
        answer = false
    }
    return answer
}