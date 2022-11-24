//Queues

function createQueue() {
  const queue = [];
  return {
    //add or enqueue
    enqueue(item) {
      queue.unshift(item);
    },
    //remove or dequeue
    dequeue() {
      return queue.pop();
    },
    //peek
    peek(item) {
      return queue[queue.length - 1];
    },
    //length
    get length() {
      return queue.length;
    },
    //List
    get totalList() {
      const list = [];
      queue.forEach((item) => list.push(item));
      //console.log(list);
      return list;
    },
    //isEmpty
    isEmpty() {
      return queue.length === 0;
    },
  };
}

const q = createQueue();
q.enqueue("Make a course");
console.log(q.isEmpty());
q.enqueue("Help others");
q.enqueue("Be happy");
console.log(q.peek());
q.dequeue();
console.log(q.totalList);
q.dequeue();
q.dequeue();
console.log(q.isEmpty());
