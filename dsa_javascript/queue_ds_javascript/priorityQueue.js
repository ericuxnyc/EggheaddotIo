const { createQueue } = require("./index.js");
//Queue example: Priority Queue

function createPriorityQueue() {
  const lowPriorityQueue = createQueue();
  const highPriorityQueue = createQueue();

  return {
    enqueue(item, isHighPriority = false) {
      isHighPriority
        ? highPriorityQueue.enqueue(item)
        : lowPriorityQueue.enqueue(item);
    },
    dequeue() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.dequeue();
      }
      return lowPriorityQueue.dequeue();
    },
    peek() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.peek();
      }
      return lowPriorityQueue.peek();
    },
     /* get totalList() {
       const list = queue;
       list.forEach((item) => list.push(item));
     console.log(list);
       return list;
     }get, */
    get length() {
      return highPriorityQueue.length + lowPriorityQueue.length;
    },
    isEmpty() {
      return highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty();
    },
  };
}
const pq = createPriorityQueue();
pq.enqueue("A fix here");
pq.enqueue("A bug there");
pq.enqueue("A new feature");
console.log(pq.length);
console.log(pq.peek());
console.log(pq.length);
console.log(pq.isEmpty());
console.log(pq.totalList);

