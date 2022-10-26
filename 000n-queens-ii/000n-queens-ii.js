/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    // check if row has reached n base case
    // initialize solutions to 0
    // iterate columns
    // find column, diagonal and antidiagonal
    // if queen is not in the three places place it and add it to the respective sets
    // move to the next row adding the solutions as you move 
    // remove from cols
    // remove from diagonal 
    // remove from antidiagonal 
    // after iterating column return solutions 
    
    // record the places the queen cannot go to 
    // check if it is placeable
    // place it and count
    // remove it 

    // time complexity  = O(N!)

    let columns = new Set(),
        diagonals = new Set(),
        anti_diagonals = new Set()
    
    const is_placeable = (row,col) => {
        let diagonal = row-col
        let anti_diagonal = row+col
        return !(columns.has(col) || diagonals.has(diagonal) || anti_diagonals.has(anti_diagonal))
    }

    const place = (row,col)=>{
        let diagonal = row-col
        let anti_diagonal = row+col
        diagonals.add(diagonal)
        columns.add(col)
        anti_diagonals.add(anti_diagonal)
    }
    const remove = (row,col)=>{
        let diagonal = row-col
        let anti_diagonal = row+col
        diagonals.delete(diagonal)
        columns.delete(col)
        anti_diagonals.delete(anti_diagonal)
    }

    const backtrack=(row,count)=>{
        if(row===n){
            // add count when you reach the position where row is n
            return ++count
        }
        
        for(let col=0;col<n;col++){
            // skip box if not iterable
            if(!is_placeable(row,col)){
                continue
            }
            // place in box
            place(row,col)
            // recurse next row of current row
            count = backtrack(row+1,count)
            remove(row,col)
        }
        return count
    }
    return backtrack(0,0)
};