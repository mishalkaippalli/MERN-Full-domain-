// How would you find the middle element of a Singly Linked List in a single pass (O(N) time complexity)?

// Note: You don't need to write the full LinkedList class, just explain the algorithm or write the specific function logic.
// function findMiddleElement(){
//     let slowpointer = this.head;
//     let fastpointer = this.head;

//     while(fastpointer && fastpointer.next){
//         slowpointer = slowpointer.next;
//         fastpointer = fastpointer.next.next
//     }
//     return slowpointer
// }

// Write a function to find all leaf nodes in a Binary Search Tree (BST).
// A leaf node is a node that does not have any children (both left and right are null). 
// You can describe the logic or write the code for a function that traverses the 
// tree and prints/returns these nodes.

// function printLeafNodes(root) {
//     if (!root) return; // 1. Base case: if node is null, just return

//     // 2. Check if it's a leaf
//     if (root.left === null && root.right === null) {
//         console.log(root.value);
//         return;
//     }

//     // 3. Recurse
//     printLeafNodes(root.left);
//     printLeafNodes(root.right);
// }

// Write the logic or code to delete a node at a specific index from a Singly Linked List.

// You are given the index (e.g., index 2). How would you traverse the list and update
//  the pointers to "skip" that node? Remember to consider the case where the index is 0 (the head).

// removeNode(index) {
//     if (index < 0 || index >= this.size) {
//         return null;
//     }

//     let removedNode;
//     if (index === 0) {
//         removedNode = this.head;
//         this.head = this.head.next;
//     } else {
//         let prev = this.head;
//         for (let i = 0; i < index - 1; i++) {
//             prev = prev.next;
//         }
//         removedNode = prev.next;
//         prev.next = removedNode.next;
//     }
//     this.size--;
//     return removedNode.value;
// }

// You have the right strategy for the prev and next pointer reassignment! However, there are a few syntax and logic errors in your implementation that would cause it to fail:

// The Boundary Check: index < this.size || index > this.size is logicially incorrect. If size is 5, it says "if index is less than 5 OR greater than 5, return error." This means it only allows index 5 (which is actually out of bounds for a 0-indexed list of size 5). It should be if (index < 0 || index >= this.size).

// Return Statement: At the end, you are returning removeNode (the function itself) instead of removedNode (the variable).

// The Loop: Your loop to find prev works well for the general case.

// Here is the corrected version:

// JavaScript
// removeNode(index) {
//     if (index < 0 || index >= this.size) {
//         return null;
//     }

//     let removedNode;
//     if (index === 0) {
//         removedNode = this.head;
//         this.head = this.head.next;
//     } else {
//         let prev = this.head;
//         for (let i = 0; i < index - 1; i++) {
//             prev = prev.next;
//         }
//         removedNode = prev.next;
//         prev.next = removedNode.next;
//     }
//     this.size--;
//     return removedNode.value;
// }
// Question 6
// Explain or write the process of "Heapify" for a Binary Tree.

// The "Full Domain Pendings" list specifically mentions "Heapify complexity" and
// "Explain deletion in heap." To delete an element from a Max Heap, you usually swap 
// the root with the last element and then perform "Heapify Down."

// Can you describe how "Heapify Down" works to maintain the Max Heap property?

// heappop(){
//     // swap root with last node
//     const n = this.heap.length;
//     [this.heap[0], this.heap[n-1]] = [this.heap[n-1], this.heap[0]]
  
//     // remove the root i.e. the last item (because of swap)
//     const removedKey = this.heap.pop();
  
//     let curr = 0;
  
//     // keep going till atleast left child is possible for current node
//     while(2*curr + 1 < this.heap.length){
//       const leftIndex = 2*curr+1; 
//       const rightIndex = 2*curr+2;
//       const minChildIndex = (rightIndex < this.heap.length && this.heap[rightIndex] < this.heap[leftIndex] ) ? rightIndex :leftIndex;
//       if(this.heap[minChildIndex] < this.heap[curr]){
//        // quick swap, if smaller of two children is smaller than the parent (min-this.heap)
//         [this.heap[minChildIndex], this.heap[curr]] = [this.heap[curr], this.heap[minChildIndex]]
//         curr = minChildIndex
//       } else {
//         break
//       }
//     }
  
//     // finally return the removed key
//     return removedKey;
//   }

// How would you find the minimum value in a Binary Search Tree (BST) using recursion?

// Since it is a BST, there is a specific property regarding where the smaller values are located.
//  How do you use that property to find the minimum?

// function min(root) {
//     if (!root) return null; // Handle empty tree
    
//     if (root.left === null) {
//         return root.value;
//     } 
    
//     return min(root.left); // Added 'return' here to pass the value up
// }    

// Write the code for a simple "Binary Search" algorithm.

// The input is a sorted array of numbers and a target value.
//  The function should return the index of the target if found, or -1 
//  if it is not in the array.

// Note: Since the array is sorted, you should aim for O(log N) time complexity.

// const arr = [1,2,3,4,5,6,7,8,9];
// function binarySearch(arr, target){
//     let left = 0;
//     let right = arr.length - 1;

//     while(left <= right){
//         let mid = Math.floor((left + right)/2)
//         if(target === arr[mid]){
//             return mid
//         } else if(target < arr[mid]){
//                right = mid - 1;
//         } else{
//             left = mid + 1
//         }
//     }
//     return "not found"
// }

// console.log(binarySearch(arr, 5))
// time complexiy : O(logn)
// space complexiy : O(1)

// "Print even numbers from an array in reverse order."

// This is a practical array manipulation question from the file.
//  If you have an array [1, 4, 7, 8, 10, 13], the output should be 10, 8, 4.

// How would you implement this efficiently?

// const arr = [1, 4, 7, 8, 10, 13];
// function fn(arr){
//     let res = [];
//     for(let i = arr.length - 1; i >= 0; i--){
//         if(arr[i] % 2 === 0){
//             res.push(arr[i])
//         }
//     }
//     return res;
// }
// console.log(fn(arr))
// time complexity : O(n)
// space complexity: o(K)


// "Find the 2nd highest and 2nd lowest elements in a set of data using a BST approach."
// This is a specific question from your "Pending" list. In a Binary Search Tree:
// Where is the largest element?
// Where is the second largest element?
// How would you find them without converting the whole tree into an array?
// Describe the logic for finding the 2nd largest element.

// function findLargest(root){
//   // console.log(root)
//   if(!root) return;
//    if(root.right === null) return root.value;

//     return this.findLargest(root.right);
// }

// findSecondLargest(root) {
//     if (!root || (!root.left && !root.right)) return null; // Tree too small

//     let curr = root;
//     while (curr) {
//         // Case 1: Largest node has a left subtree
//         // We are at the largest node, and it has a left child.
//         // The 2nd largest is the max of that left subtree.
//         if (curr.left && !curr.right) {
//             return this.findLargest(curr.left);
//         }

//         // Case 2: We are at the parent of the largest node, 
//         // and the largest node is a leaf.
//         if (curr.right && !curr.right.left && !curr.right.right) {
//             return curr.value;
//         }

//         curr = curr.right;
//     }
// }

//quicksort
function quickSort(arr){
    if(arr.length <= 1){
        return arr
    }
    let pivot = arr.length - 1;
    let leftArr = [];
    let rightArr = [];
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] < arr[pivot]){
            leftArr.push(arr[i])
        } else {
            rightArr.push(arr[i])
        }
    }
    return [...quickSort(leftArr),arr[pivot], ...quickSort(rightArr)]
}
const arr = [7,5,3,9,10,1,2,4];
console.log(quickSort(arr))