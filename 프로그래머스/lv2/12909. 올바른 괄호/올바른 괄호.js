function solution(s){
    let arr = [];

    if (s[0] === ")" || s[s.length-1] === "(") return false
    
    for (let i = 0; i < s.length; i++) {
        if (arr.at(-1) === "(" && s[i] === ")") arr.pop()
        else arr.push(s[i])
    }
    return arr.length === 0 ? true : false
}

