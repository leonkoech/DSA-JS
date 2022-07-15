/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var cur = 0,
        max = nums[0];
        
    for (let i=0;i<nums.length;i++){
        if(cur<0){
            cur = 0
        }
        cur =  cur+nums[i]
        max = Math.max(cur, max)
    }
    return max
};