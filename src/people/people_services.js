const peopleServices = {
  prepareData(queue) {
    
    if (queue.first === null) {
      return null;
    }
  
    let results = [];
    let currNode = queue.first;
  
    while (currNode) {
      results.push(currNode.value);
      currNode = currNode.next;
    }
    return results;
  }
};

module.exports = peopleServices;