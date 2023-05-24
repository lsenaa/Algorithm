const score = {"1": 3, "2": 2, "3": 1, "4": 0, "5": 1, "6": 2, "7": 3}
const types = [["R", "T"], ["C", "F"], ["J", "M"], ["A", "N"]]

function solution(survey, choices) {
    let obj = new Map()
    let answer = "";
    
    survey.forEach((type, i) => {
        if (choices[i] < 4) {
           if (obj.has(type[0])) {
                obj.set(type[0], obj.get(type[0]) + score[choices[i]])
            } else {
                obj.set(type[0], score[choices[i]])
            }
        } else if (choices[i] > 4) {
            if (obj.has(type[1])) {
                obj.set(type[1], obj.get(type[1]) + score[choices[i]])
            } else {
                obj.set(type[1], score[choices[i]])
            }
        }
    })
    
    for (type of types) {
        for(alp of type) {
            if (!obj.has(alp)) obj.set(alp, 0)
        }
        obj.get(type[0]) >= obj.get(type[1]) ? answer += type[0] : answer += type[1]
    }

    return answer
}