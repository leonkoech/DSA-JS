/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const checkAnagrams=(word1, word2)=>{
    // create array[256] fill with zero
    // all encounters in first word are added
    // all encountered in second are subtracted
    // array hould not contain anything greater than 0
    
    
    var arr = new Array(26).fill(0)
    
    for(let i=0;i<word1.length;i++){
        arr[word1[i].charCodeAt(0)-"a".charCodeAt(0)] ++
        arr[word2[i].charCodeAt(0)-"a".charCodeAt(0)] --
    }
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            return false
        }
    }
    return true
}

var findAnagrams = function(s, p) {
    // brute force 
    // loop a window of sie p checking if that string is an anagram of p
    // if so add o arr
    
    var fArr = [],
        start=0,
        end = p.length-1;
    
    while(end<s.length){
        if(p.indexOf(s[end]>-1 && p.indexOf(s[start]>-1))){
            if(checkAnagrams(s.slice(start,end+1),p)){
                     fArr.push(start)
             }
        }
      
        end++
        start++
    }
    return fArr
};