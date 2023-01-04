
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let sum = 0;
    let head = new ListNode(0);
    let now = head;
    let a = l1;
    let b = l2;
    while (a !== null || b !== null) {
        sum = (a ? a.val : 0) + (b ? b.val : 0) + carry;
        carry = Math.floor(sum / 10);
        now.next = new ListNode(sum % 10);
        now = now.next;
        a = a ? a.next : null;
        b = b ? b.next : null;
    }
    if (carry) now.next = new ListNode(carry);
    return head.next;
};

console.log(addTwoNumbers([2,4,3], [5,6,4]))
console.log(addTwoNumbers([0],[0]))
console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]))