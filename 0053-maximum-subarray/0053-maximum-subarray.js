/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
     let max = nums[0]
     let current_max = 0
     for (let i of nums){
       
         current_max = Math.max(i, current_max+i)
        max = Math.max(current_max,max)
     }
    return max
};