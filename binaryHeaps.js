class BinaryHeaps {
    constructor(){
        this.values = [];
    }

    insert(val){
        if(this.values.indexOf(val) === -1){
             this.values.push(val);
        }else{
            return new Error('Value already exists!');
        }
       
        if(this.values.length === 1) return this.values;
        const bubbleUp = (arr,val,index) => {
            if(index === 0 ) return arr;
            const parentIndex = Math.floor((index - 1) / 2);
            if(arr[parentIndex] > val) return arr;
            [arr[parentIndex],arr[index]]  = [arr[index],arr[parentIndex]];
            return bubbleUp (arr,arr[parentIndex],parentIndex);
        }

        const orderedArr = bubbleUp(this.values,val,this.values.length-1);
        return orderedArr;
    }

    extractMax(){
        if(this.values.length === 0) return null;
        if(this.values.length === 1) return this.values[0];
        const length = this.values.length;
        [this.values[0],this.values[length-1]] = [this.values[length-1],this.values[0]];
        const max = this.values.pop();

        const sinkDown = (arr,value,index) => {
            const lefChildIndex = 2*index+1;
            const rightChildIndex = 2*index+2;
            const leftChild = arr.length - 1 >= lefChildIndex ? arr[lefChildIndex] : null;
            const rightChild = arr.length - 1 >= rightChildIndex ?  arr[rightChildIndex] : null;
            if(!leftChild && !rightChild) return arr;
            let maxValue;
            let maxIndex;
            if(rightChild) {
                if(leftChild > rightChild){
                    maxValue = leftChild;
                    maxIndex = lefChildIndex;
                }else if(leftChild < rightChild){
                    maxValue = rightChild;
                    maxIndex = rightChildIndex;
                }
            }else{
                maxValue = leftChild;
                maxIndex = lefChildIndex;
            }
            

            if(value > maxValue) return arr;
            [arr[index],arr[maxIndex]] = [arr[maxIndex],arr[index]];
            sinkDown(arr,arr[maxIndex],maxIndex);
        } 

        sinkDown(this.values,this.values[0],0);
        return this.values;
    }
    
}

const heap = new BinaryHeaps();

heap.insert(100);
heap.insert(101);
heap.insert(90);
heap.insert(95);