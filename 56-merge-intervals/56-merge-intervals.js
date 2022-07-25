/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // sort the array if not sorted
    // results for reference 
    // check if overlapping 
    // merge all overlapping intervals
    // merge by replacing the previous item
    
    // no overlapping 
    // [1  3]
    //       [4   6]
    
    // partly overlapping 
    // [1    3]
    //    [2       6]
    
    // fully overlappiing 
    // [0            6]
    //     [1      4]
    
    intervals.sort((a,b)=>a[0]-b[0])
    const res =  [intervals[0]]
    
    for (let i=1;i<intervals.length;i++) {
        // check if overlap
        let cur = intervals[i]
        let prev = res[res.length-1]
        if(isOverlap(cur,prev)) {
            let start = Math.min(cur[0],prev[0])
            let end = Math.max(cur[1],prev[1])
            res[res.length-1] = [start,end]
        }
        else{
            res.push(intervals[i])
        }
    }
    return res
};
function isOverlap(arr1,arr2){
    // 4 - 3 = 1
    let val = Math.max(arr1[0],arr2[0])-Math.min(arr2[1],arr1[1])
    return (val<=0)
}