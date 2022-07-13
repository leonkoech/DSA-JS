/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const row  = {}
    const column = {}
    const boxes = {} // key: [r//3, c//3] value:{}
    for (let r=0;r<9;r++){
        for(let c=0;c<9;c++){
            let val = board[r][c]
            
            if(val === "."){
                continue;
            }
            
            let boxKey = `${Math.floor(r/3)},${Math.floor(c/3)}`
            if(!row[r]){
                row[r]= new Set()
            }
            if(!column[c]){
                column[c] = new Set()
            }
            if(!boxes[boxKey]){
                boxes[boxKey] =new Set()
                
            }
            
            if(row[r].has(val) || column[c].has(val) || boxes[boxKey].has(val)){
                return false
                
            }
            row[r].add(val)
            column[c].add(val)
            boxes[boxKey].add(val)
            
        }
    }
    return true
    
};