function solution(food) {
    let head = '';
    let tail = '';
    let temp = ''
    
    for (let i = 0; i < food.length; i++) {
        if (food[i] === 1) continue;
        head += temp.padStart(parseInt(food[i] / 2), i)
    }
    tail = head.split("").reverse().join("");

    return head + '0' + tail
}