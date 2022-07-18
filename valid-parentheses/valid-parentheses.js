/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // hashmap key = } val ={
    // stack
    // ()
    if(s.length<2){
        return false
    }
    const stack = [],
          hashmap = {"}": "{", "]":"[" , ")":"("}
    
    for (let i=0;i<s.length;i++){
        if(s[i]==="{" || s[i]==="("  || s[i]==="[" ){
            stack.push(s[i])
        }
        else{
            let res=stack.pop()
            if(hashmap[s[i]] != res){
                return false
            }
        }
    }
    if(stack.length>=1){
        return false
    }
    return true

};