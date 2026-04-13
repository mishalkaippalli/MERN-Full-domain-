class MinHeap{
    constructor(){
        this.heap = [];
    }
    heappush(value){
        this.heap.push(value);
        let curr = this.heap.length - 1

        while(curr > 0){
            let parent = Math.floor((curr-1)/2);
            if(this.heap[curr] < this.heap[parent]){
                [this.heap[curr], this.heap[parent]] = [this.heap[parent], this.heap[curr]];
                curr = parent
            } else {
                break
            }
        }
    }
    heappop(){
      if (this.heap.length === 0) return null;

       const lastIndex = this.heap.length - 1;

          // swap root with last element
       [this.heap[0], this.heap[lastIndex]] = [this.heap[lastIndex], this.heap[0]];

        const removedKey = this.heap.pop();

        let curr = 0;

      while (2 * curr + 1 < this.heap.length) {
         const leftIndex = 2 * curr + 1;
         const rightIndex = 2 * curr + 2;

        let minChildIndex = leftIndex;

       if (
         rightIndex < this.heap.length &&
         this.heap[rightIndex] < this.heap[leftIndex]
       ) {
          minChildIndex = rightIndex;
       }

    if (this.heap[minChildIndex] < this.heap[curr]) {
      [this.heap[curr], this.heap[minChildIndex]] =
        [this.heap[minChildIndex], this.heap[curr]];
      curr = minChildIndex;
    } else {
      break;
    }
  }

  return removedKey;
}
}
const heap = new MinHeap()
heap.heappush(10);
heap.heappush(5);
heap.heappush(20);
heap.heappush(1);

console.log(heap)

console.log(heap.heappop())
console.log(heap)