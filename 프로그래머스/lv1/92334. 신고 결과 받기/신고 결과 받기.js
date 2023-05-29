function solution(id_list, report, k) {
    let reportNums = {};
    let set = new Set();
    let arr = [];
    let result = {};
    
    // 신고 횟수 초기화
    id_list.forEach(name => result[name] = 0)

    // 신고 당한 횟수 초기화
    id_list.forEach(name => reportNums[name] = 0)
    
    // 중복 제거
    report.forEach(rep => set.add(rep))

    // 신고 당한 횟수 저장
    for (let s of set) {
        reportNums[s.split(" ")[1]] += 1 
    }
    
    // 정지된 ID
    for (let i = 0; i < Object.values(reportNums).length; i++) {
        if (Object.values(reportNums)[i] >= k) {
            arr.push(Object.keys(reportNums)[i])
        }
    }
    
    // 처리 결과 메일 받은 횟수
    for (let s of set) {
        if (arr.includes(s.split(" ")[1])) {
            result[s.split(" ")[0]] += 1
        } 
    }
    
    return Object.values(result)
}