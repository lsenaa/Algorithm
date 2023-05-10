function solution(d, budget) {
    let answer = d.sort((a, b) => a - b).filter((el) => {
        budget -= el
        return budget >= 0
    })

    return answer.length
}