/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // [rob1, rob2, n , n+1 ...]
    let rob1 = 0, rob2 = 0
    for (let n of nums){
        let temp = Math.max(rob1+n,rob2)
        rob1=rob2
        rob2=temp
    }
    return rob2
}; 