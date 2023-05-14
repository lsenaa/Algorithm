function solution(n, arr1, arr2) {
    let map1 = arr1.map((el) => el.toString(2).padStart(n, "0"))
    let map2 = arr2.map((el) => el.toString(2).padStart(n, "0"))
    let answer = [];
    
    for (let i = 0; i < map1.length; i++) {
        let str = ""
        
        for (let j = 0; j < n; j++) {
            if (map1[i][j] === "1" || map2[i][j] === "1") {
                str += "#"
            } else {
                str += " "
            }
        }
        answer.push(str)
    }
    return answer
}