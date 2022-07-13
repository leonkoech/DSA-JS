/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    // [1,2,3,4    100    200]
    // create set 
    // check if current-1 is in set
    // true: continue
    // if false: 
    //       i=1
    //       next = current+i
    //       run a loop checking for next until theres no next
    //       i++
    
    const numbers = new Set(nums);
    let longest = 0;
    for(let i=0;i<nums.length;i++){
        var num = nums[i]
        if(numbers.has(num-1)){
            continue;
        }
        let longer  = 1;
        while(numbers.has(num+longer))longer++;
        if(longer>longest){
            longest = longer;
        }      
    }
    return longest
    
};