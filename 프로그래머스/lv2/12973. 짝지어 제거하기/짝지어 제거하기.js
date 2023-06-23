function solution(s) {
    let arr = [];
    
    for (let i = 0; i < s.length; i++) {
        if (arr.at(-1) === s[i]) {
            arr.pop();
            continue;
        }
        else arr.push(s[i])
    }
    
    return arr.length === 0 ? 1 : 0
}