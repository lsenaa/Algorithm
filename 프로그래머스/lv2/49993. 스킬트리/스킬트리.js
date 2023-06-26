function solution(skill, skill_trees) {
    let answer = 0;
    let skillArr = skill.split("");
    
    skill_trees.forEach(trees => {
        let temp = [];
        let treeArr = trees.split("").filter(tree => skillArr.includes(tree));
        let count = 0;
        
        treeArr.forEach((t, i) => {
            if (t === skillArr[i]) count++
        })
        
        if (count === treeArr.length) answer++
    })

    return answer
}