function solution(dartResult) {
    const bonus = ["S", "D", "T"];
    let score = 0;
    let dart = [];

    for (let i = 0; i < dartResult.length; i++) {
        if (!isNaN(dartResult[i])) {
           score += dartResult[i]
        } else if (bonus.includes(dartResult[i])) {
            score **= bonus.indexOf(dartResult[i]) + 1
            dart.push(score)
            score = 0
        } else {
            if (dartResult[i] === "*"){
                if (dart.length === 1) {
                    dart.push(dart.pop() * 2)
                } else if (dart.length > 1){
                    let cur = dart.pop()
                    let prev = dart.pop()
                    dart.push(prev * 2)
                    dart.push(cur * 2)
                }
            } else if (dartResult[i] === "#") {
                dart.push(dart.pop() * -1)
            }
        }
        
    }
    return dart.reduce((acc, cur) => acc + cur, 0)
}