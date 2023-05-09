function solution(numbers) {
    let sum = 0;
    let answer = [];
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i+1; j < numbers.length; j++) {
            sum = numbers[i] + numbers[j]
            answer.push(sum)
        }
    }
    
    return Array.from(new Set(answer.sort((a, b) => a - b)))
}