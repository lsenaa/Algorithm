function solution(numbers) {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let answer = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (!numbers.includes(arr[i])) {
            answer += arr[i]
        }
    }
    return answer
    
}