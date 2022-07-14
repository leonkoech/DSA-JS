/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // area is max = max((min(h[a],h[b]) * b-a),max)
    // [1,1]
    var maxA = 0,
       p1 = 0,
       p2 = height.length-1; //1
    
    while(p1<p2){
        let min = Math.min(height[p1], height[p2]),
         cur = min*(p2-p1)
        maxA = Math.max(cur,maxA)
        
        if(min===height[p1]){
            p1++
        }
        else{
            p2--
        }
    }
    return maxA
};