class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LL{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0
    }

    append(value){
      const newNode = new Node(value);
      if(this.isEmpty()){
        this.head = newNode
      } else {
        let curr = this.head;
        while(curr.next !== null){
            curr = curr.next;
        }
        curr.next = newNode
      }
      this.size++
    }

    prepend(value){
        const newNode = new Node(value);
        if(this.isEmpty()){
            this.head = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.size++
    }
    insert(value, index){
        if(index < 0 || index > this.size){
            return("index invalid")
        }
        const newNode = new Node(value);
        let curr = this.head;
        for(let i = 0; i < index - 1; i++){
               curr = curr.next;
        }
        newNode.next = curr.next;
        curr.next = newNode
        this.size++
    }


    display(){
        let curr = this.head;
        let ll = ""
        while(curr){
            ll +=`${curr.value} --> `
            curr = curr.next
        }
        console.log(ll)
    }
 remove(index) {
    if (index < 0 || index >= this.size) {
        return null;
    }

    let removedNode;

    // Case 1: remove head
    if (index === 0) {
        removedNode = this.head;
        this.head = this.head.next;
    } else {
        let curr = this.head;

        for (let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }

        removedNode = curr.next;
        curr.next = removedNode.next;
    }

    this.size--;
    return removedNode.value;
}

removeValue(value){
    let prev = this.head;
    let removedNode;
    while(prev.next === value){
        prev = prev.next;
    }
    removedNode = prev.next;
    prev.next = removedNode.next;
    this.size--
}

removeOddValues(){

   while(this.head && this.head.value % 2 === 1){
      this.head = this.head.next;
      this.size--;
   }

   while(curr.value && curr.next.value){
      if(curr.next.value % 2 === 1){
        curr.next = curr.next.next;

      }
   }
}

}
const ll1 = new LL();
const ppp = new LL()

ppp.append(1)
ppp.append(2)
ppp.append(3)
ppp.append(5)

ll1.append(1)
ll1.append(2)
ll1.append(4)
ll1.append(7)

// ll1.display()
// ll1.prepend(100)
// ll1.display()
// ll1.insert(200, 2)
// ll1.display()
// ll1.remove(3);
// ll1.display()
// ll1.removeValue(3);
// ll1.display()
// ll1.removeMiddleelement()
// ll1.display()
// ll1.append(3)
// ll1.append(6)
// ll1.append(1)
// ll1.display()
// ll1.removeOddValues()
// ll1.display()