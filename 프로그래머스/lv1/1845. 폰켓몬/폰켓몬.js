function solution(nums) {
    let len = nums.length / 2
    let arr = [...new Set(nums)]

    return len >= arr.length ? arr.length : len
}