function solution(record) {
    let set = new Set()
    let result = []
    
    record.forEach(r => {
        let status = r.split(" ")[0]
        let uid = r.split(" ")[1]
        let name = r.split(" ")[2]
        
        if (status === "Enter" || status === "Change") {
            set[uid] = name
        }
    })
    
    for (let i = 0; i < record.length; i++) {
       if (record[i].split(" ")[0] === "Enter") {
           result.push(`${set[record[i].split(" ")[1]]}님이 들어왔습니다.`)
       } else if (record[i].split(" ")[0] === "Leave") {
           result.push(`${set[record[i].split(" ")[1]]}님이 나갔습니다.`)
       } else continue            
    }
    
    return result
}