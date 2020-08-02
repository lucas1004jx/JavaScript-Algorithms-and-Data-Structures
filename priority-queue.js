class Node {
    constructor(val,priority){
        this.value = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor(){
        this.values = [];
    }

    enqueue(val, priority){
        const newNode = new Node(val, priority);
        this.values.push(newNode);
        if(this.values.length === 1) return this.values;
        
        const bubbleUp= (node,idx) =>{
            if(idx === 0) return this.values;
            const parentIdx = Math.floor((idx - 1)/2);
            const parentNode = this.values[parentIdx];
            const parentPriority = this.values[parentIdx].priority;
            if(parentPriority< node.priority) return this.values;
            [this.values[parentIdx], this.values[idx]] = [node,parentNode];
            return bubbleUp(node,parentIdx);
        }
        const length = this.values.length;
        bubbleUp(this.values[length - 1],length-1);

        return this.values;
    }
}

const queue = new PriorityQueue();
