function solution(X, Y) {
    let answer = ""
    
    let x = X.split('').reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1
        return acc
    }, {})
    let y = Y.split('').reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1
        return acc
    }, {})
 
    for (let i in x) {
        if (y[i]) {
            let nums = Math.min(x[i], y[i])
            for (let j = 0; j < nums; j++) {
                answer += i
            }
        }
    }

    if (answer === "") {
        return "-1"
    } else {
        answer = answer.split("").sort((a,b) => b-a)
        return answer[0] === "0" ? "0" : answer.join("")
    }
    
}



