
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

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
                checkValue(val, node[position],'right');
            }else if(val < node[position].value){
                checkValue(val, node[position],'left');
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

  
    BFS(){
        const queue = [];
        const visited = [];
        if(!this.root) return visited;
        queue.push(this.root);
       
            while(queue.length > 0){
                const node = queue.shift();
                visited.push(node.value);
                if(node.left) queue.push(node.left);
                if(node.right)queue.push(node.right);
            }

        return visited;
        
    }

   DFS_PreOrder(){
        const visited =[];
        if(!this.root) return visited;
        const traverse = (node) =>{
            visited.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right)traverse(node.right);
        };
        traverse(this.root);
        return visited;
    }

     DFS_PostOrder(){
        const visited=[];
        
        if(!this.root) return visited;
        const traverse = (node) => {
            if(node.left) traverse(node.left);
            if(node.right)traverse(node.right);
            visited.push(node.value);

        };

        traverse(this.root);
        return visited;
    }

    DFS_InOrder(){
        const visited = [];
        if(!this.root) return visited;
        const traverse = (node) => {
            if(node.left) traverse(node.left);
            visited.push(node.value);
            if(node.right) traverse(node.right);
        };
        traverse(this.root);
        return visited;
    }
}




const tree = new BinarySearchTree();
tree.root = new Node(10);
//tree.root.right = new Node(15);
//tree.root.left = new Node(8);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
