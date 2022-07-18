/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // compare with max length if condition is met
    // has no duplicate item
    // create a set of items we have passed with the number
    // whil this numeber is more than one move start
    // compare max length    
    
    let map=new Set(),
        max = 0;
    
    for (let end=0,start=0;end<s.length;end++){
        while(map.has(s[end])){
            map.delete(s[start])
            start++
        }
        
        map.add(s[end])
        max= Math.max(max,end-start+1)
        
    }
    return max
    
};