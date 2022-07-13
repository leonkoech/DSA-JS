/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // one pass solution
    // var maxProfit = 0,
    //     minVal = Infinity
    // for (var i=0; i<prices.length; i++){
    //     if(prices[i]<minVal){
    //         minVal = prices[i]
    //     }
    //     else if(prices[i]-minVal>maxProfit){
    //         maxProfit = prices[i]-minVal
    //     }
    // }
    // return maxProfit
    
    //two pointer solution
    var maxP=0,
        p1=0,
        p2=1
    while (p2<prices.length){
        if(prices[p2]<prices[p1]){
            p1=p2
        }
        else{
            let diff = prices[p2]-prices[p1]
            if(diff>maxP){
                maxP = diff
            }
        }
        p2++
    }
    return maxP
};