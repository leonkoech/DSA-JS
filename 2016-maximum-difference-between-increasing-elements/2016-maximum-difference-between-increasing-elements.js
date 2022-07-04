/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    //pointer
    var maxDiff=-1,
        p1=0,
        p2=1
    while(p2<nums.length){
        if(nums[p2]<nums[p1]){
            p1=p2
        }
        else {
            const diff = nums[p2]-nums[p1]
            if(diff>0 && diff>maxDiff){
                    maxDiff=diff
            }
        }
        p2++
    }
    return maxDiff
};