function solution(cards1, cards2, goal) {
    const length = goal.length
    
    for (let i = 0; i < length; i++) {        
        if (goal[0] === cards1[0]){
            goal.shift();
            cards1.shift();
        } 

        if (goal[0] === cards2[0]) {
            goal.shift();
            cards2.shift();
        } 
    }
    return goal[0] ? "No" : "Yes"
}
