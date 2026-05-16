class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
}
class linkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    
    isEmpty(){
        return this.size === 0;
    }

    prepend(value){
        const newNode = new Node(value);
        if(this.isEmpty()){
            this.head = newNode
        } else {
            newNode.next = this.head;
            this.head = newNode
        }
        this.size++
    }

    append(value){
        const newNode = new Node(value);
        if(this.isEmpty()){
            this.head = newNode
        } else {
            let curr = this.head;
            while(curr.next){
                curr = curr.next
            }
            curr.next = newNode
        }
        this.size++;
    }

    insert(value, index) {
    if (index < 0 || index > this.size) return "invalid";

    if (index === 0) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
        return;
    }
    
    // Now the loop is safe because index is at least 1
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
    }
    // ... rest of your code
}

    removeFrom(index){
        let removedNode
      if(index < 0 || index > this.size){
        return "index not found"
      } else if(index === 0) {
        removedNode = this.head
        this.head = this.head.next
      } else {
        let prev = this.head;
        for(let i = 0; i < index - 1; i++){
            prev = prev.next
        }
        removedNode = prev.next;
        prev.next = removedNode.next;
      }
      this.size--
      return removedNode

    }

    removeValue(value){
        if(this.isEmpty()){
            return null
        } else if(this.head.value === value){
            this.head = this.head.next;
            this.size--
            return value
        } else {
            let prev = this.head
            while(prev.next && prev.next.value !== value){
               prev = prev.next
            }
            let removedNode = prev.next;
            prev.next = removedNode.next;
            this.size--;
        }
    }

    print(){
        let curr = this.head;
        let str = ''
        while(curr){
            str += `${curr.value} -->`
            curr = curr.next;
        }
        console.log(str)
    }

removeSecondLast() {
    // 1. Safety Check: If size is less than 2, there is no second-to-last node
    if (this.size < 2) {
        return "List too short";
    }

    let removedNode;

    // 2. Case: Exactly 2 elements (Second-last is the Head)
    if (this.size === 2) {
        removedNode = this.head;
        this.head = this.head.next; 
        
        // If the list is now empty (though size 2 -> 1), 
        // the head and tail would both point to the remaining node.
        if (this.size === 1) {
            this.tail = this.head; 
        }
    } 
    // 3. Case: 3 or more elements
    else {
        let prev = this.head;
        
        // We need to stop at index (size - 3)
        // Example: Size 4 [A, B, C, D]. Second-last is C (idx 2). 
        // To remove C, we must stop at B (idx 1). 
        // Loop i < (4-3) = i < 1. Runs once for i=0, stops at index 1.
        for (let i = 0; i < this.size - 3; i++) {
            prev = prev.next;
        }

        removedNode = prev.next;      // This is the second-to-last node
        prev.next = removedNode.next; // Point 'prev' to the last node
    }

    this.size--;
    return removedNode.value;
}

 removeMiddleElement() {

        // empty list
        if (!this.head) {
            return null;
        }

        // single node
        if (!this.head.next) {
            let removed = this.head.value;
            this.head = null;
            return removed;
        }

        let fast = this.head;
        let slow = this.head;
        let prev = null;

        while (fast.next && fast.next.next) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }

        let removedNode;

        // ODD LENGTH
        if (fast.next === null) {

            removedNode = slow;

            prev.next = slow.next;
        }

        // EVEN LENGTH
        else {

            // two middle nodes:
            // slow and slow.next

            if (slow.value < slow.next.value) {

                // remove first middle
                removedNode = slow;

                prev.next = slow.next;

            } else {

                // remove second middle
                removedNode = slow.next;

                slow.next = slow.next.next;
            }
        }

        return removedNode.value;
    }

    reverseLL(){
        let curr = this.head;
        let prev = null;
        let next = null;
        while(curr){
          next = curr.next;
          curr.next = prev;
          prev = curr;
          curr = next;
        }
        this.head = prev
        
    }
}

const ls = new linkedList;
ls.append(3);
ls.append(4);
ls.prepend(5);
ls.prepend(1);
ls.print()
ls.prepend(10)
ls.print()
ls.append(20)
ls.print()
console.log(ls.removeFrom(3))
ls.print()
console.log("sl",ls.removeSecondLast());
ls.prepend(5);
ls.print()
console.log("middleelem",ls.removeMiddleElement());
ls.print();
ls.reverseLL();
ls.print();