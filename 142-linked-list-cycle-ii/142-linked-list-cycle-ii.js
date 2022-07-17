/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    // floyd's cyclic detection algorithm
    // fast and slow pointers 
    // start another pointer when the two meet/ or reset start
    // as long as start is not equal to fast increment them the same
    // where they meet is where the cycle is
    
    if(!head || !head.next) return null
    
    let slow=head,
        fast=head;
    
    while(fast && fast.next){
        fast = fast.next.next
        slow = slow.next
        if(slow===fast) break;
    }
    
    if(slow!=fast) return null
    
    slow=head
    while(slow!=fast){
        slow =  slow.next
        fast = fast.next
    }
    
    return slow
};