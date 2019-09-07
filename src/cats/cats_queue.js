const cats = require('../pets/cats.json');

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


const catQueue = new Queue();
catQueue.enqueue(cats[1]);
catQueue.enqueue(cats[2]);
catQueue.enqueue(cats[3]);
catQueue.enqueue(cats[4]);
catQueue.enqueue(cats[5]);
// console.log(JSON.stringify(dogQueue));

module.exports = catQueue;