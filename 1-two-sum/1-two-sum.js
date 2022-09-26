/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let records = {}
    
   for (let i=0;i<nums.length;i++){
       if(records[nums[i]] !== undefined){
           return [i,records[nums[i]]]
       }
       records[target - nums[i]]=i
   }
    
};