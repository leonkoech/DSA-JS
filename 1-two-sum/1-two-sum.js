/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var mHash = []
    var finalArr=[]
    
    for(let i=0;i<nums.length;i++){
        var compliment = target - nums[i]
        if(mHash.includes(compliment)){
            finalArr.push(nums.indexOf(compliment), i )
        }
        else{
            mHash.push(nums[i])
        }
    }
    return finalArr;
    
    
};