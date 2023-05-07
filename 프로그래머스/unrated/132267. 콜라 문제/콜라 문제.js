function solution(a, b, n) {    
    let answer = 0;
    
    while ( n >= a) {
        answer += parseInt(n/a) * b
        n = n - (a * parseInt(n/a)) + (parseInt(n/a) * b)
    }
    return answer
}