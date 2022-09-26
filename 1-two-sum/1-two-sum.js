/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var finalArr = new Map()
    
    for(let i=0;i<nums.length;i++){
        var compliment = target - nums[i]
        if(finalArr.has(compliment)){
            return [finalArr.get(compliment), i]
        }
        else{
            finalArr.set(nums[i],i)
        }
    }
    return finalArr;
    
    
};