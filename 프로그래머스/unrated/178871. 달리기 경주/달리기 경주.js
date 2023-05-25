// function solution(players, callings) {
//     let obj = {}
//     let obj2 = {}
    
//     players.forEach((player, i) => {
//         obj[player] = i
//         obj2[i] = player
//     })
    
//     callings.forEach(calling => {
//         let temp = ""
        
//         obj[calling] -= 1
//         temp = obj2[obj[calling]]
//         obj[temp] += 1
        
//         obj2[obj[calling]] = calling
//         obj2[obj[calling] + 1] = temp
//     })
//     return Object.values(obj2)
// }

function solution(players, callings) {
    let obj = {};
  
    players.forEach((v, idx) => obj[v] = idx);
  
    for(let i = 0; i < callings.length; i++){
        let idx = obj[callings[i]];
        let player = players[idx-1];
        players[idx-1] = callings[i];
        players[idx] = player;
        obj[callings[i]]--;
        obj[player]++;
    }
    
    return players
}