function solution(n) {
    let one = n.toString(2).split("").filter(one => one != 0).length

    for (let i = n+1; i <= 1000000; i++) {
        if (one === i.toString(2).split("").filter(one => one != 0).length) return i
    }
}