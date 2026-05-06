class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class bst{
  constructor(){
    this.root = null;
  }
  isEmpty(){
    return this.root === null
  }

  insert(value){
    const newNode = new Node(value)
    if(this.isEmpty()){
      this.root = newNode
    } else {
        this.insertNode(this.root, newNode)
    }
  }
  insertNode(root, newNode){
    if(newNode.value < root.value){
        if(root.left === null){
            root.left =  newNode
        } else {
            this.insertNode(root.left, newNode)
        }
    } else {
        if(root.right === null){
            root.right = newNode
        } else {
            this.insertNode(root.right, newNode)
        }
    }
  }
  search(root, value){
    if(!root){
        return false
    } else if(root.value === value){
        return true
    } else if(value < root.value){
         return this.search(root.left, value)
    } else if(value > root.value){
        return this.search(root.right, value)
    }
  }

  inOrder(root){
    if(!root) return
    this.inOrder(root.left)
    console.log(root.value)
    this.inOrder(root.right)
  }
  preOrder(root){
    if(!root) return;
    console.log(root.value)
    this.preOrder(root.left)
    this.preOrder(root.right)
  }
  postOrder(root){
    if(!root) return;
    this.postOrder(root.left);
    this.postOrder(root.right);
    console.log(root.value)
  }

  levelOrder(){
    let queue = [];
    queue.push(this.root)
    while(queue.length){
      let curr = queue.shift();
      console.log(curr.value);
      if(curr.left){
        queue.push(curr.left)
      } 
      if(curr.right){
        queue.push(curr.right)
      }
    }
  }

  min(root){
    if(!root.left){
        return root.value
    } else {
        return this.min(root.left)
    }
  }
  max(root){
    if(!root.right){
        return root.value
    } else {
        return this.max(root.right)
    }
  }

  printleafNode(root){
    if(!root) return;
    if(root.left === null && root.right === null){
        console.log(root.value);
        return;
    } 
    this.printleafNode(root.left);
    this.printleafNode(root.right)
}

findLargest(root){
  // console.log(root)
  if(!root) return;
   if(root.right === null) return root.value;

    return this.findLargest(root.right);
}

findSecondLargest(root) {
    if (!root || (!root.left && !root.right)) return null; // Tree too small

    let curr = root;
    while (curr) {
        // Case 1: Largest node has a left subtree
        // We are at the largest node, and it has a left child.
        // The 2nd largest is the max of that left subtree.
        if (curr.left && !curr.right) {
            return this.findLargest(curr.left);
        }

        // Case 2: We are at the parent of the largest node, 
        // and the largest node is a leaf.
        if (curr.right && !curr.right.left && !curr.right.right) {
            return curr.value;
        }

        curr = curr.right;
    }
}
}


const bst1 = new bst();
bst1.insert(10)
bst1.insert(15)
bst1.insert(20)
bst1.insert(5)
bst1.insert(13)
bst1.insert(7)
bst1.insert(1)
// bst1.inOrder(bst1.root)
// bst1.preOrder(bst1.root)
// bst1.levelOrder();

// bst1.printleafNode(bst1.root)
console.log(bst1.findLargest(bst1.root))
bst1.inOrder(bst1.root)

console.log(bst1.secondlargest(bst1.root))