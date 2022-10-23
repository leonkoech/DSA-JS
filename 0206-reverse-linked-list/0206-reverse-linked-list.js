/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
//    1->2->3->4
//    1<-2
//    current, prev, next
//    prev= null
//    current = head
// loop while current
//    next = current.next
//    current.next = prev
//    prev = current
//    current = next

// return prev
    
    
    let prev  = null,
        current  = head;
    while(current){
        let next =  current.next
        current.next = prev
        prev = current
        current  = next
    }
    return prev

};