const finger = {L: [1, 4, 7], R: [3, 6, 9]}
const location = [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2], [3, 0], [3 ,1], [3, 2]]

function solution(numbers, hand) {
    let left = 10
    let right = 12
    let answer = "";

    numbers.forEach((number, idx) => {
        if (finger.L.includes(number)) {
            answer += "L"
            left = number

        } else if (finger.R.includes(number)) {
            answer += "R"
            right = number
        } else {
            if (number === 0) number = 11

            if (distance(location[number-1], location[left-1]) > distance(location[number-1], location[right-1])) {
                answer += "R"
                right = number
            } else if (distance(location[number-1], location[left-1]) < distance(location[number-1], location[right-1])) {
                answer += "L"
                left = number
            } else {
                if (hand === "right") {
                    answer += "R"
                    right = number
                } else {
                    answer +="L"
                    left = number
                }
            }
        }
    })
    
    function distance(x1, x2) {
        let distance = 0;
        
        for (let i = 0; i < x1.length; i++) {
            distance += Math.abs(x1[i] - x2[i])    
        }
        return distance
    }
    return answer
}