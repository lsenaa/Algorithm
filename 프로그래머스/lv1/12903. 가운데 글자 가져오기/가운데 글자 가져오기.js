function solution(s) {
    let length = s.length
    
    for (let i = 0; i < length; i++) {
        if (length % 2 === 0) {
            return s[length / 2 - 1] + s[length / 2]
        } else {
            return s[(length - 1) / 2]
        }
    }
}