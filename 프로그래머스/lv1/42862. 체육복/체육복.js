function solution(n, lost, reserve) {
    let answer = 0;
    let student = Array(n).fill(1)
    
    student.forEach((el, i) => {
        if (lost.includes(i+1)) student[i]--
    })
    student.forEach((el, i) => {
        if (reserve.includes(i+1)) student[i]++
    })
    
    for (let i = 0; i < student.length; i++) {
        if (student[i] === 2 && student[i-1] === 0) {
            student[i]--
            student[i-1]++
        } else if (student[i] === 2 && student[i+1] === 0){
            student[i]--
            student[i+1]++
        }
    }

    return student.filter((el) => el >= 1).length
}
