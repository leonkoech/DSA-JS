/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    // sliding window
    // expand and reduce window based on conditions
    // if contents of window meet criteria, record answer
    // if they dont 
                // > criteria? reduce
    //          .
    // [2,3,1,2,4,3]  t=7
    //      .
    
    // iterate i to the end of the list
    // record currrent sum while iterating
    //  current += current item
    //  while(current >= target){
    //       check answe
    //       current -= first item
    //       first_item ++
    // }
    //  min = Math.min( min, current_index - firstitem+1)
    
    
    let min=Infinity,
        start = 0,
        current_sum = 0;
    
    for (let end=0;end<nums.length;end++){
        current_sum += nums[end]
        while(current_sum>=target){
            min = Math.min(min, end-start+1 )
            current_sum -= nums[start]
            start ++
        }
    }
    return min<Infinity?min:0
};