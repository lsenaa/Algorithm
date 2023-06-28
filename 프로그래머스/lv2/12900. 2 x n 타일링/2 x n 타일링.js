function solution(n) {
    let a = 1;
    let b = 2;
    let temp;
    
    if (n < 3) return n;
    for(let i = 3; i <= n; i++) {
        temp = b; 
        b = (a + b) % 1000000007; 
        a = temp;
    }

    return b
}