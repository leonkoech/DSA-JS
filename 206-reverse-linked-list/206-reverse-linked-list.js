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
    // change next to prev
    // change head to the last node 
    // use a dummy head?
    // const node = head
    let prev = null
    while(head){
        let next = head.next
        head.next = prev
        prev = head
        head = next
    }
    return prev 
};