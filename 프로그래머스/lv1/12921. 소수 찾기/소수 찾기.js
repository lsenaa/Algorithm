function solution(n) {
    let arr = Array(n+1).fill(true).fill(false, 0, 2);
    const sqrt = Math.sqrt(n);
  
    for (let i = 2; i < sqrt; i++){
        if (arr[i]) {
            for (let j = i+i; j <= n; j+=i){
                arr[j] = false
            }
        }
    }

    return arr.filter((el) => el).length
}