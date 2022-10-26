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
 * @return {boolean}
 */
function iterate(root,low,high){
    if(!root){
        return true
    }
    if(low!=null && root.val <= low || high!=null && root.val >=high){
        return false
    }
    return iterate(root.left, low, root.val )&& iterate(root.right, root.val, high)
}
var isValidBST = function(root) {
    // recursive
    // iterative
   return iterate(root,null,null)
    
};