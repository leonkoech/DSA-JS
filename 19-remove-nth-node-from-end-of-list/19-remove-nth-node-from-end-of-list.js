/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // remove a node 
    
    let prev = head;
    let next  = head;
    for (let i=0;i<n;i++){
        next = next.next
    }
    if(!next) return head.next
    
    while(next.next){
        
        prev = prev.next
        next = next.next
    }
    
    prev.next = prev.next.next
    return head
    
    
}
    