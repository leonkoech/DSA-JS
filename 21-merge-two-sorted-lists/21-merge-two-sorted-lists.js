/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let nullN = {val:0 , next:null}
    var head = nullN 
    while(list1 && list2){
        if(list1.val>=list2.val){
            head.next = list2
            list2 = list2.next
        }
        else{
            head.next = list1
            list1=list1.next
        }
        head = head.next            
    }
    if(list1){
        // if the loop stopped before all data was out 
        head.next = list1
    }
    if(list2){
        // if the loop stopped before all data was out
        head.next = list2   
    }
    return nullN.next
};