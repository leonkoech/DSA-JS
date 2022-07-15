/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var left = 0,
        end = nums.length-1;
    
    while(left<=end){
        let mid = Math.floor(left+((end-left)/2))
        if( nums[mid]>target){
            end = mid -1
        }
       if (nums[mid]<target){
           left = mid + 1
       } 
       if (nums[mid] === target){
           return mid
       }
    
    }
    return -1
};