class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(val){
        const newNode = new Node(val);
        if(!this.root) {
            this.root = newNode;
            return this;
        }
        const checkValue = (val, node,position) => {
            if(!node[position]) return node[position] = new Node(val);
            if(val > node[position].value){
                checkValue(val, node[position],'right');
            }else if(val < node[position].value){
               checkValue(val, node[position],'left');
            }else{
                throw new Error('Can not insert a value that already exits! ');
            }
        }
    
        if(val > this.root.value){
               checkValue(val,this.root,'right'); 
        }else if(val < this.root.value){
          checkValue(val,this.root,'left'); 
        }


        return this;
    }

    find(val){
        if(!this.root) return false;

        const checkValue = (val, node,position) => {
            if(!node[position]) return false;
            
            if(val > node[position].value){
                return checkValue(val, node[position],'right');
            }else if(val < node[position].value){
                return checkValue(val, node[position],'left');
            }else{
                return true;
            }
        }

        if(val > this.root.value){
           return  checkValue(val,this.root,'right'); 
        }else if(val < this.root.value){
            return checkValue(val,this.root,'left'); 
        }else{
            return true;
        }
    }
}

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


const tree = new BinarySearchTree();
tree.root = new Node(10);
//tree.root.right = new Node(15);
//tree.root.left = new Node(8);
tree.insert(21);
tree.insert(51);
tree.insert(14);
tree.insert(11);