function solution(n, words) {
    let arr = [words[0]];
    
    for (let i = 1; i < words.length; i++) {
        let prev = "";
        let cur = "";
        
        prev = words[i-1]
        cur = words[i]
        
        if(words[i].length === 1) return [(i%n) + 1, Math.trunc(i/n) + 1]
        
        if (prev.at(-1) === cur[0]) {
            if (arr.includes(cur)) return [(i%n) + 1, Math.trunc(i/n) + 1]
            else arr.push(cur)
        } else return [(i%n) + 1, Math.trunc(i/n) + 1]
    }
    
    if (arr.length === words.length) return [0, 0]
}