function solution(ingredient) {
    let hamburger = [];
    let answer = 0;
  
    for (let i = 0; i < ingredient.length; i++) {
        hamburger.push(ingredient[i])
        
        if (hamburger.at(-1) === 1 && hamburger.at(-2) === 3 && 
            hamburger.at(-3) === 2 && hamburger.at(-4) === 1) {
            hamburger.pop()
            hamburger.pop()
            hamburger.pop()
            hamburger.pop()
            answer++
        }
    }
     return answer === 0 ? 0 : answer
}