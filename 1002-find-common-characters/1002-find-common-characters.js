/**
 * @param {string[]} words
 * @return {string[]}
 */

var commonChars = function(words) {
    // loop through the words with two arrays 
    // one array records every character 
    // array two has the most common characters \
    
    
//     create array 
//     loop through array in every iteration 
//     if a single character of the array is not in the word remove it 
    
    let main = words[0].split("")
    for (let word of words){
        let seen=[]
        // let word = word.split("")
        for (let i=0;i<word.length;i++){
            // check character count as well
            let char = word[i]
            if (main.includes(char)){
                seen.push(char)
                const index = main.indexOf(char)
                main.splice(index,1)
                
            } 
            
        }
        main=seen
    }
    return main
    
    
};