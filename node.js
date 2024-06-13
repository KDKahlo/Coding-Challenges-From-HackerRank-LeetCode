class Node {
    constructor(someData) {
      this.data = someData;
      this.next = null;
    }
    setNextNode(nextNode) {
        this.next = nextNode;
    }
    }
    let firstNode = new Node("first")
    
    console.log(firstNode.data)
    console.log(firstNode.next);
    module.exports = Node;
    