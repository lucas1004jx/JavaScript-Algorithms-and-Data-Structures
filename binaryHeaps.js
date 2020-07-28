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
            const parentIndex = Math.floor((index - 1) / 2);
            if(arr[parentIndex] > val) return arr;
            [arr[parentIndex],arr[index]]  = [arr[index],arr[parentIndex]];
            return bubbleUp(arr,arr[parentIndex],parentIndex);
        }

        const orderedArr = bubbleUp(this.values,val,this.values.length-1);
        return orderedArr;
    }
}

const heap = new BinaryHeaps();

heap.insert(100);
heap.insert(90);
heap.insert(95);