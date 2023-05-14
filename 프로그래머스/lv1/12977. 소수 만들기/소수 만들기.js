function solution(nums) {
    let answer = 0;
    
    function isPrime(num) {
      if(num === 2) {
        return true;
      }

      for (let i = 2; i < Math.sqrt(num) + 1; i++){
        if(num % i === 0){
          return false; 
        }
      }
      return true; 
    }
    
    for (let i = 0; i < nums.length; i++) {
        let sum = 0
        for (let j = i+1; j < nums.length; j++) {
            for (let k = j+1; k < nums.length; k++) {
                sum = nums[i] + nums[j] + nums[k]
                if (isPrime(sum)) answer++
            }
        }
    }
    
    return answer;
}