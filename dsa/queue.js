class queue{
    constructor(){
        this.items = []
    }
    enqueue(value){
      this.items.push(value)
    }
    dequeue(){
        this.items.shift();
    }
    peek(){
        return this.items[0]
    }
}
class QueueUsingStack{
    constructor(){
        this.stack1 = []
        this.stack2 = []
    }
    enqueue(value){
        this.stack1.push(value);
    }
    dequeue(){
        if(this.stack1.length === 0 && this.stack2.length === 0) return "stack empty";
        
        if(this.stack2.length === 0){
          while(this.stack1.length > 0){
            this.stack2.push(this.stack1.pop())
           }
        }
        
        return this.stack2.pop()
    }
}

const qus = new QueueUsingStack();
qus.enqueue(10)
qus.enqueue(20)
qus.enqueue(30)
qus.dequeue();
console.log(qus)

// const q = new queue();
// q.push(7)
// q.push(8)
// q.push(9)
// q.pop()
// console.log(q)