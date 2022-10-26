/**
 * @param {number[]} nums
 * @return {number[]}
 */
function divide(n){
    return Math.floor(n/2)
}
function conquer(nums){
    if(nums.length <= 1){
        return nums
    }

    let pivot = divide(nums.length)
    let left_side = conquer(nums.slice(0,pivot))
    let right_side = conquer(nums.slice(pivot))

    let combined = combine(
        left_side,right_side
    )
    return combined
}

function combine(left,right){
    let result = [],
        left_pointer = 0,
        right_pointer = 0
        
    while(left_pointer<left.length && right_pointer<right.length){
        if(left[left_pointer]<right[right_pointer]){
            result.push(left[left_pointer])
            left_pointer++
        }
        else{
            result.push(right[right_pointer])
            right_pointer++
        }
    }
    
    return result.concat(left.slice(left_pointer)).concat(right.slice(right_pointer))
    
}
var sortArray = function(nums) {
    return conquer(nums)
};