function solution(s) {
    s = s.split(" ").map(num => Number(num))
    return Math.min(...s) + " " + Math.max(...s)
}