/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let totalSum = nums.reduce((a,b)=>a+b,0)
    let leftSum = 0
    for (let [index,value] of nums.entries()){
        if (leftSum== totalSum-leftSum-value){
            return index
        }
        else{
            leftSum += value
        }
    }
    return -1
};