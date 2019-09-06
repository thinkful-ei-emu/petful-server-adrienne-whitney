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

function peek(queue) {
  if(queue.last == null) {
    return 'No more pets available for adoption';
  }
  return queue.last.value;
}

function isEmpty(queue) {
  if(queue.first == null) {
    return 'No more pets available for adoption';
  }
}

function display(queue) {
  let string = '';
  let tempNode = queue.first;
  while (tempNode !== null) {
    string = string + tempNode.value + ' ';
    tempNode = tempNode.next;
  }
  console.log(string);
  return string;
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