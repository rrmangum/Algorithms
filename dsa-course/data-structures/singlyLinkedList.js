// no indexes
// a connected list of nodes
// each node holds data and points to the next node, final node points to null
// head, tail, and length properties

// It is not possible to return the 5th item by going straight there.
// You have to start at 1 and use the pointers to get to the 5th item.

// Singly means the pointers are one directional.
// They only point towards the next node.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //   pop() {
  //     if (!this.head) return;
  //     let current = this.head;
  //     let removedNode = null;

  //     while (current) {
  //       if (current.next === this.tail) {
  //         removedNode = this.tail;
  //         current = null;
  //         this.tail = current;
  //       } else {
  //         current = current.next;
  //       }
  //     }
  //     this.length--;
  //     return removedNode;
  //   }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
  }
}

let list = new SinglyLinkedList();
list.push("Hi");
list.push("You");
list.push(99);
console.log(list);
