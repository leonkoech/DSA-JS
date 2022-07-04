/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // one pass solution
    var maxProfit = 0,
        minVal = Infinity
    for (var i=0; i<prices.length; i++){
        if(prices[i]<minVal){
            minVal = prices[i]
        }
        else if(prices[i]-minVal>maxProfit){
            maxProfit = prices[i]-minVal
        }
    }
    return maxProfit
};