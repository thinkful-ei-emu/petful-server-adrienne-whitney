
// had thought that could have people have criteria for type of pet looking for and then if they do not match up with the animal in line they go to the back of the queue?
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



const peopleQueue = new Queue();
peopleQueue.enqueue('Adrienne');
peopleQueue.enqueue('Whitney');
peopleQueue.enqueue('Tara');
peopleQueue.enqueue('Zane');
peopleQueue.enqueue('Chris');
peopleQueue.enqueue('Casey');
peopleQueue.enqueue('Nicholas');
peopleQueue.enqueue('Andrew');
peopleQueue.enqueue('Arpan');
peopleQueue.enqueue('Martha');
peopleQueue.enqueue('Ashley');
peopleQueue.enqueue('Mantong');
peopleQueue.enqueue('Blake');
peopleQueue.enqueue('Paul');
peopleQueue.enqueue('Christopher');
peopleQueue.enqueue('Jordon');
peopleQueue.enqueue('Colleen');
peopleQueue.enqueue('David');
peopleQueue.enqueue('Corey');
peopleQueue.enqueue('Tauhida');


module.exports = peopleQueue;