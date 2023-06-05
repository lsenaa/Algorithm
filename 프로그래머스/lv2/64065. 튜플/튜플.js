function solution(s) {
    let answer = []
    
    s = s.slice(2, s.length-2).split("},{")
    s = s.map(str => str.split(","))
    s.sort((a, b) => a.length - b.length)
    
    for (ss of s) {
        for (sss of ss) {
            if (answer.includes(sss)) continue;
            answer.push(sss)
        }
    }

    return answer.map(a => Number(a))
}