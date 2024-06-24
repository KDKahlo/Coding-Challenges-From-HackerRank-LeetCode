//remember that this file is requires the node.js file you are practicing nodes with.
const Node = require('./node');

class LinkedList {
     //inside the linked list, define the constructor
     //it should have no parameter
  constructor() {
 //it should set the list's head to null
 this.head = null;
}
//define addToHead method that takes the parameter called data
addToHead(data){
    //inside the method, create a Node const variable named newHead. Pass data as the argument
    const newHead = new Node(data);
    //create a const variable named currentHead and set it equal to list head
    const currentHead = this.head;
    //change the list's head to equal newHead
    this.head = newHead;

    //check if there is a currentHead in the list.
    if (currentHead) {
        //if there is a currentHead, set the newHead's nextNode to equal currentHead
        newHead.setNextNode(currentHead);
    }

}
}
module.exports = LinkedList;