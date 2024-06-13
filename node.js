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
    let strawberryNode = new Node ('Berry Tasty')
    let vanillaNode = new Node ('Vanilla')
    let coconutNode = new Node ('Coconuts for Coconuts')

    vanillaNode.setNextNode(strawberryNode)
    strawberryNode.setNextNode(coconutNode)
    console.log (coconutNode)

    let currentNode = vanillaNode
    //console.log(currentNode)
    while (currentNode) {
        console.log(currentNode.data)
        currentNode = currentNode.getNextNode();
        
    }

    console.log(vanillaNode.next)
    
    
    module.exports = Node;
    