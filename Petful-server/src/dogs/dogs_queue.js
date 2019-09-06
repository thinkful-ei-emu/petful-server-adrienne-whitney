const dogs = require('../pets/dogs.json');

// Queue
class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);
    if(this.first == null) {
      this.first = node;
    }
    if(this.last) {
      this.last.next = node;
    }
    this.last = node;
  }

  dequeue() {
    if(this.first == null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    if(node === this.last) {
      this.last == null;
    }
    return node.value;
  }
}


// need to export queue

const dogQueue = new Queue();
dogQueue.enqueue(dogs[1]);
dogQueue.enqueue(dogs[2]);
dogQueue.enqueue(dogs[3]);
dogQueue.enqueue(dogs[4]);
dogQueue.enqueue(dogs[5]);
// console.log(JSON.stringify(dogQueue));

module.exports = dogQueue;