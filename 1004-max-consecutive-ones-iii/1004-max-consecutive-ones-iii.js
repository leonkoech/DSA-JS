/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    // slicing window
    // if end is 0 sub resereve
    // while reserve is less than zero move start
    // determine max
    
    
    let max = 0
    for (let start=0,end=0;end<nums.length;end++){
        if(nums[end]===0){
            k--
        }
        while(k<0){
            if(nums[start]===0){
                 k++
            }
            start++
           
        }
        max = Math.max(max, end-start+1)
    }
    return max
};