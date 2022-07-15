/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var slow=head,fast=head
    if(!head) return false
    while(fast && fast.next){
        
        fast = fast.next.next
        slow=slow.next
        if(fast===slow){
            return true
        }
    }
    return false
};