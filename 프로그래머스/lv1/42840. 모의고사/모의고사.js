const first = [1, 2, 3, 4, 5]
const second = [2, 1, 2, 3, 2, 4, 2, 5]
const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

function solution(answers) {
    let a = 0;
    let b = 0;
    let c = 0;
    let answer = []
    
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === first[i % 5]) a++
        if (answers[i] === second[i % 8]) b++    
        if (answers[i] === third[i % 10]) c++
    }
    let result = [a, b, c]

    for (let i = 0; i < result.length; i++) {
      if (result[i] === Math.max(...result)) {
        answer.push(i+1)  
      }
    }
    return answer
}