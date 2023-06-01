function solution(keymap, targets) {
    let keymaps = {};
    let answer = [];
   
    for (key of keymap) {
        for (let i = 0; i < key.length; i++) {
            if (keymaps[key[i]]) {
                keymaps[key[i]] = Math.min(keymaps[key[i]], i+1)
            }
            else keymaps[key[i]] = i+1
        }
    }   
    
    for (target of targets) {
        let count = 0;
        for (let j = 0; j < target.length; j++) {
            count += keymaps[target[j]]
        }
        answer.push(count)
    }
    
    return answer.map(a => {
        return isNaN(a) ? -1 : a
    })
}