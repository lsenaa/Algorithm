const filter = 'abcdefghijklmnopqrstuvwxyz1234567890-_.';

function solution(new_id) {
    // 1, 2단계
    new_id = new_id.toLowerCase().split("").filter(id => filter.includes(id))
    // 3단계
    new_id = new_id.filter((id, i) => id === "." && new_id[i+1] !== "." || id !== ".")
    // 4단계
    if (new_id[0] === ".") new_id.shift()
    if (new_id[-1] === ".") new_id.pop()
    // 5단계
    if (new_id.length === 0) new_id.push("a")
    // 6단계
    if (new_id.length >= 16) {
        new_id = new_id.slice(0, 15)
        if (new_id.at(-1) === ".") new_id.pop()
    } else {
        if (new_id.at(-1) === ".") new_id.pop()        
    }
    // 7단계
    if (new_id.length <= 2) {
        while (new_id.length < 3) {
            new_id.push(new_id.at(-1))
        }    
    }
    return new_id.join("")
}