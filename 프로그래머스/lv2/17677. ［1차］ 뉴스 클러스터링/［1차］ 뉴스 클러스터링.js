function solution(str1, str2) {
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    
    if (str1 === str2) return 65536
    
    let obj1 = {}
    let obj2 = {}

    for (let i = 0; i < str1.length - 1; i++) {
        let code = str1[i].charCodeAt()
        let nextCode = str1[i+1].charCodeAt()
        
        if (code >= 97 && code <= 122 && nextCode >= 97 && nextCode <= 122) {
            obj1[str1[i]+str1[i+1]] = (obj1[str1[i]+str1[i+1]] || 0) + 1
        }
    }
    
    for (let i = 0; i < str2.length - 1; i++) {
        let code = str2[i].charCodeAt()
        let nextCode = str2[i+1].charCodeAt()
        
        if (code >= 97 && code <= 122 && nextCode >= 97 && nextCode <= 122) {
            obj2[str2[i]+str2[i+1]] = (obj2[str2[i]+str2[i+1]] || 0) + 1
        }
    }
    
    // 교집합, 합집합
    let intersection = 0;
    let union = 0;
    
    for (let o in obj1) {
        if (obj2[o]) intersection += Math.min(obj1[o], obj2[o])
        union += obj1[o]
    }

    for (let b in obj2) {
        union += obj2[b]
    }
    
    union -= intersection
  
    return Math.trunc((intersection / union) * 65536)
    
}