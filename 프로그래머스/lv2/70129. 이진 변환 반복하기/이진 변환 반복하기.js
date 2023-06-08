function solution(s) {
    let [count, remove] = [0, 0]

    while (s.length > 0) {
        if (s.length !== 1) {
            count++
            s = s.split("").filter(one => {
                if (one === "0") remove++
                return one != 0
            }).length.toString(2)
        } else return [count, remove]
    }
}