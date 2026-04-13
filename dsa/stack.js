class Stack{
    constructor(){
        this.items = [];
    }

    push(value){
        this.items.push(value)
    }

    pop(){
        this.items.pop();
    }
    peek(){
        return this.items[this.items.length - 1]
    }
}

class stackUsingQueue{
   constructor(){
    this.queue = [];
   }

   push(value){
    let size = this.queue.length;

    this.queue.push(value);
    
    for(let i = 0; i < size; i++){
        let rotated = this.items.shift();
        this.queue.push(rotated)
    }

   }
   pop(){
    if(this.queue.length === 0) return "stack empty"
    else return this.queue.shift();
   }
}


const s = new Stack;
s.push(10)
s.push(20)
s.push(30)
s.pop()
console.log(s)

const suq = new Stack;
suq.push(1)
suq.push(3)
suq.push(5)