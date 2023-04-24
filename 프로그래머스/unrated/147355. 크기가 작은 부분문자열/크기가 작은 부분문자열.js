function solution(t, p) {
    let answer = 0;
    let length = p.length;
    
    
    for (let i = 0; i < t.length - length + 1; i++) {
        let str = ""
        str = t.substring(i, i+length)
        if (Number(str) <= Number(p)) answer++
    }
    return answer
}