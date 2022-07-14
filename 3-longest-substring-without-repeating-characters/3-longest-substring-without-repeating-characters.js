/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //set+sliding window
    var mSet = new Set(),
        l = 0,
        ret = 0;
    for (let i=0;i<s.length;i++){
        
        while(mSet.has(s[i])){
            mSet.delete(s[l])
            l++
        }
       
            
        mSet.add(s[i])
        ret = Math.max(ret,i-l+1)
        
    }
    return ret
    
};