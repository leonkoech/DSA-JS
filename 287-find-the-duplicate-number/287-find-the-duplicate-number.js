/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    var mSet = new Set()
    for (let i=0;i<nums.length;i++){
        if(mSet.has(nums[i])){
            return nums[i]
        }
        mSet.add(nums[i])
    }
    return 0
};