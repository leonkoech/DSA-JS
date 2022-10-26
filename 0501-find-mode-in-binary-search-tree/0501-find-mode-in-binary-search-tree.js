/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var findMode = function(root) {
   let res = [],
       currentNodeVal = NaN,
       maxCount = -Infinity,
       currentCount = 0
   
   function trav(root){
        if(!root){
         return 
        }
        trav(root.left)
        currentCount = (root.val === currentNodeVal?currentCount:0)+1
        currentNodeVal = root.val
        if(currentCount>maxCount){
            res = [root.val]
            maxCount = currentCount
        }
       else if(currentCount === maxCount){
           res.push(root.val)
       }
       trav(root.right)
    }
     trav(root)
    return res
};