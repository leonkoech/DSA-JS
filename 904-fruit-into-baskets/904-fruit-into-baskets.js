/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
  // [apple, mangoes, oranges apples, apples]
    // [1,1,1,1,1,]
    // [mangoes]
    // maximum
    
    // if different trees are equal or less than two compare le with max
    // if different trees are more than two reduce window until the trees are equal to two
    
    
    // max=-Infninity, 
    //  set{} tree: place last encountered
    // 
    // for fruit in tree:
    //     if fruit is not equal to start:
     //         diff--
    //     while (diff<0)
    //             start++
    //     max = max(max,end-start+1)
    // return max
    // 
    //     [1,2,1]
// [0]
// [0,1,2,2]
// [1,2,3,2,2]
    //   
    
    
    let max = -Infinity,
        mSet = {}; // {1:,2:1,3:1}
        // -1
    
    for (let start=0,end=0;end<fruits.length;end++){
        
         if(mSet[fruits[end]] != undefined){
            mSet[fruits[end]]++
        }
        else{
            mSet[fruits[end]] = 0
        }
         while(Object.keys(mSet).length>2){
              mSet[fruits[start]]===0?
                  delete mSet[fruits[start]]:
                  mSet[fruits[start]] --
           
              start++
        }
           
        
        max = Math.max(max, end-start+1)
        
    }
    return max!=-Infinity?max:0
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}; 
