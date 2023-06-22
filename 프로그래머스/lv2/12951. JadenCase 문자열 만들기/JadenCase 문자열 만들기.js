function solution(s) {
    let lowerWord = s.toLowerCase().split(" ");
    
    return lowerWord.map(w => {
        if (w === "") w = ""
        else w = w[0].toUpperCase() + w.substring(1)
        return w
    }).join(" ")
}