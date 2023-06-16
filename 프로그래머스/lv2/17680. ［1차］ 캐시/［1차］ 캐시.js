function solution(cacheSize, cities) {
    let cache = [];
    let answer = 0;
    
    cities = cities.map(city => city.toLowerCase())
    
    for (let i = 0; i < cities.length; i++) {
        if (!cache.includes(cities[i])) {
            answer += 5
        } 
        else {
            answer += 1
             cache.splice(cache.indexOf(cities[i]), 1)
        } 
        
        cache.push(cities[i])
        
        if (cache.length > cacheSize) cache.shift()
    }
    
    return answer 
}
