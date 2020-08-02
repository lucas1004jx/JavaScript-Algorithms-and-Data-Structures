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

     dequeue(){
        if(this.values.length <= 1 ) return this.values;
        let extractValue;
        if(this.values.length === 1) {
            extractValue = this.values.pop();
            return [];
        }
       
        const firstNode = this.values[0];
        const lastNode = this.values[this.values.length-1];
        [this.values[0],this.values[this.values.length-1]] = [lastNode,firstNode];
        extractValue = this.values.pop();
        const length = this.values.length;
        
        const sinkDown = (node,idx) =>{
            const leftChildIdx = idx*2 + 1;
            const rightChildIdx = idx*2 + 2;
            
            const leftChild = leftChildIdx <= length - 1  ? this.values[leftChildIdx] : null;
            const rightChild = rightChildIdx <= length - 1 ? this.values[rightChildIdx] : null;
            
            if(!leftChild) return this.values;
            let minNode;
            let minIdx;
            if(rightChild){
                minNode = leftChild.priority <= rightChild.priority ? leftChild : rightChild;
                minIdx = leftChild.priority <= rightChild.priority ? leftChildIdx : rightChildIdx;
            }else{
                minNode = leftChild;
                minIdx=leftChildIdx;
            }

            if(node.priority < this.values[minIdx].priority) return this.values;
           [this.values[idx], this.values[minIdx]] = [minNode,node];
            sinkDown(node,minIdx);

        }

        sinkDown(this.values[0],0);
        return this.values;
    }

}

const queue = new PriorityQueue();
queue.enqueue('c',3);
queue.enqueue('b',2);
queue.enqueue('d',4);
queue.enqueue('a',1);