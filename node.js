class Node {
    constructor(someData) {
      this.data = someData;
      this.next = null;
    }
    setNextNode(nextNode) {
        if (nextNode instanceof Node || nextNode === null) {
             this.next = nextNode;
        } else {
            throw new Error("This is not a node");
        }
    }
    getNextNode(){
       return this.next; 
    }
    }
    let firstNode = new Node("first")
    let secondNode = new Node ("I am second")

    firstNode.setNextNode(secondNode);
    
    console.log(firstNode.data)
    console.log(firstNode.next);
    console.log(firstNode.getNextNode());
    module.exports = Node;
    