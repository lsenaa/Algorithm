function solution(board, moves) {
    let basket = [];
    let answer = 0;
    
    moves.forEach(move => {
        for (let i = 0; i < board.length; i++) {
                let temp = board[i][move-1]
      
                if (temp !== 0) {
                    board[i][move-1] = 0
                    
                    if (temp === basket.at(-1)) {
                        basket.pop()
                        answer += 2
                    } else {
                        basket.push(temp)
                    }
                    break
                }
        }
    })
    return answer
}