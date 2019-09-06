// Queue
// should I have all of this in the constructor or in a serialize item function?
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
  return string; // because needs to actually show up on client side right?
}