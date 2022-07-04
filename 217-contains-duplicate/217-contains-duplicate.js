/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
//     var mySet = new Set()
//     for (var i=0; i<nums.length; i++){
//         if(mySet.has(nums[i])){
//             return true
//         }

//         mySet.add(nums[i])
        
//     }
//     return false
    
    
    var mySet = new Set(nums)
    if(mySet.size===nums.length) return false
    return true
};