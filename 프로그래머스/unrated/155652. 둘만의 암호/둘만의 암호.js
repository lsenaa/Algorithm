
function solution(s, skip, index) {
    const str = "abcdefghijklmnopqrstuvwxyz"
    let strArr = str.split("").filter(s => !skip.includes(s))
    let answer = "";
    
    for (let i = 0; i < s.length; i++) {
        let idx = strArr.indexOf(s[i])
        answer += strArr[(idx + index) % strArr.length]
    }
    return answer
}