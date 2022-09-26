/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // handle 999
    // handle 129
    // handle 123
    // if all 9s
    // if 9 in the inpus is less than length
    // if no 9 present
    
    let end = digits.length-1
    while(end>-1){
        if(digits[end]==9){
            digits[end] = 0
        }
        else{
            digits[end]+=1
            return digits
        }
        end--
    }
    return [1,...digits]
};