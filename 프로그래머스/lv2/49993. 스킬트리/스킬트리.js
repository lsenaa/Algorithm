function solution(skill, skill_trees) {
    let answer = 0;
    let skillArr = skill.split("");
    
    skill_trees.forEach(trees => {
        let treeArr = trees.split("").filter(tree => skillArr.includes(tree));        
        let count = treeArr.filter((t, i) => t === skillArr[i]).length;
        if (count === treeArr.length) answer++;
    })

    return answer;
}