function solution(clothes) {
    let answer = 1;
    
    let clothe = clothes.reduce((acc, cur) => {
        acc[cur[1]] = (acc[cur[1]] || 0) + 1
        return acc
    }, {})
    
    for (let c of Object.values(clothe)) {
        answer *= 1 + c
    }

    return answer - 1
}