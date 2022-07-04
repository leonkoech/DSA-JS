/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    for (var i=m+n-1;i>=m;i--){
        nums1[i]=nums2.pop()
    }
    nums1.sort((a,b)=>a-b)
    
};