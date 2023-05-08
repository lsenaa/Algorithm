function solution(sizes) {
    let w = []
    let h = []
    
    for (let i = 0; i < sizes.length; i++){
       if (sizes[i][0] < sizes[i][1]) {
           sizes[i].sort((a, b) => b - a)
       }
        w.push(sizes[i][0])
        h.push(sizes[i][1])
    }

    return Math.max(...w) * Math.max(...h)
}