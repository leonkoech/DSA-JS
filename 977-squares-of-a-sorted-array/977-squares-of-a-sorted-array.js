/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    // brute force
    // find squares sort
    
    // for (let i=0;i<nums.length;i++){
    //     nums[i] = nums[i]*nums[i]
    // }
    // nums.sort((a,b)=>a-b)
    // return nums
    
    // two pointer
    // physcial: indexes
    // init: 0,nums.length
    // function: comparison
    // movement: left ++ when abs(left) is > abs(right) store value in i
    //           right --    '''
    
    let arr = new Array(nums.length),
        left = 0,
        right = nums.length-1;
    
    for ( let i=arr.length-1;i>=0;i--){
        if(Math.abs(nums[left])>Math.abs(nums[right])){
            arr[i] = nums[left]*nums[left]
            left++
        }
        else{
            arr[i] = nums[right]*nums[right]
            right --
        }
    }
    return arr
};