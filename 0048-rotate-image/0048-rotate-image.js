/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    //we have rows and columns 
    let n = matrix.length
    let r1=0,
        r2=n-1,
        c1=0,
        c2=n-1
    
    while(r1<Math.floor(n/2)){
        for (let i=0;i+c1<c2;i++){
            let temp = matrix[r1][c1+i]
            matrix[r1][c1+i] = matrix[r2-i][c1]
             matrix[r2-i][c1] = matrix[r2][c2-i]
            matrix[r2][c2-i]  = matrix[r1+i][c2]
             matrix[r1+i][c2] = temp
            
        }
        r1++
        r2--
        c1++
        c2--
    }
};