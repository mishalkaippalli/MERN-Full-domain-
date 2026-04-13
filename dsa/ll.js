class Node {
  constructor(value){
    this.value = value
    this.next = null
  }
}

class linkedList {
  constructor(){
    this.head = null
    this.size = null
  }

  isEmpty(){
    return this.size === 0
  }
  
  getSize(){
    return this.size
  }
//O(1)
  prepend(value) {
    const node = new Node(value)
    if(this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head
      this.head = node
    }
    this.size++
  }
//O(n)
  append(value) {
    const node = new Node(value)
    if(this.isEmpty()){
      this.head = node
    } else {

      let prev = this.head
      while(prev.next){
        prev = prev.next
      }
      prev.next = node
    }
    this.size++
  }

  insert(value, index) {
    if(index < 0 || index > this.size){
      return
    }
    if(index === 0){
      this.prepend(value)
    } else {
      const node = new Node(value)
      let prev = this.head
      for(let i = 0; i < index-1; i++){
        prev = prev.next
      }
      node.next = prev.next   
      prev.next = node
      this.size++
    }
  }

  removeFrom(index) {
    if(index < 0 || index >=this.size){
      return null
    }
    let removedNode
    if(index === 0){
      removedNode = this.head
      this.head = this.head.next
    } else {
      let prev = this.head
      for(let i = 0; i < index - 1; i++) {
        prev = prev.next
      }
      removedNode = prev.next
      prev.next = removedNode.next
    }
    this.size--
    return removedNode.value
  }

  removeValue(value) {
    if(this.isEmpty()){
      return null
    }
    if(this.head.value === value) {
      this.head = this.head.next
      this.size--
      return value
    } else {
      let prev = this.head
      while(prev.next && prev.next.value !== value) {
        prev = prev.next
      }
      if(prev.next) {
        const removeNode = prev.next
        prev.next = removeNode.next
        this.size--
        return value
      }
      return null
    }
  }

  


  print() {
    if(this.isEmpty()) {
      console.log('list is empty')
    } else {
      let curr = this.head;
      let listValues = '';

      while(curr) {
        listValues += `${curr.value}-->`
        curr = curr.next
      }
      console.log(listValues)
    }
  }
  removeFromEnd(n){
    const dummy = new Node(0);
    dummy.next = this.head
    let slow = dummy;
    let fast = dummy;
    console.log("fast",fast, "slow", slow);

    for(let i = 0; i <= n; i++){
        fast = fast.next;
    }
    console.log("fast after first for loop",fast)
    while(fast !== null){
        fast = fast.next;
        slow = slow.next;
    }

    let removedNode = slow.next;
    slow.next = slow.next.next

    console.log("fast",fast, "slow", slow);
    console.log("dummy", dummy)
    this.head = dummy.next;
    this.size--;

    return removedNode.value
  }
}

const list = new linkedList()
console.log('list is empty ?', list.isEmpty())
console.log('list is empty ?', list.getSize())

list.print()

list.prepend(10)
list.print()
console.log('list is empty ?', list.getSize())

list.prepend(20)
list.append(30)
list.append(60)
list.prepend(100)
list.print()

list.insert(50,2)
list.print()

list.insert(40,0)
list.print()


console.log(list.removeValue(40))
list.print()

list.removeFromEnd(5)
list.print()