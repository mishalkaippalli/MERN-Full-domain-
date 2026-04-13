class Graph{
    constructor(){
        this.adjacencyList  = {}
    }

    addVertex(v){
         if (this.adjacencyList[v]) return;

         this.adjacencyList[v] = [];
    }

    addEdge(v1, v2){
        if(!this.adjacencyList[v1]){
            this.addVertex(v1)
        } 
        if(!this.adjacencyList[v2]){
            this.addVertex(v2)
        }
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1)
    }
    removeEdge(v1, v2){

    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return;

    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1)
    }

    removeVertex(v){
        while(this.adjacencyList[v].length){
            let curr = this.adjacencyList[v].pop();
            this.removeEdge(v, curr)
        }
        delete this.adjacencyList[v]
    }
    display(){
        for(let vertex in this.adjacencyList){
            console.log(`${vertex} --> ${this.adjacencyList[vertex]}`)
        }
    }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");
graph.display();

graph.removeEdge("A","B");
graph.display();

graph.removeVertex("A");
graph.display();