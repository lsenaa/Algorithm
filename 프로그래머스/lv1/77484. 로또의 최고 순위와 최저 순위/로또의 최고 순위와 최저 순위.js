function solution(lottos, win_nums) {
    let max = 0;
    let min = 0;
    
    lottos.map(lotto => {
        if (win_nums.includes(lotto)) {
            max++
            min++
        } else if (lotto === 0) {
            max++   
        }
    })

    let score = [max, min]

    return score.map(s => 7 - s <= 5 ? 7 - s : 6)
}