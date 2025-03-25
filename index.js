class LinkedList{
    constructor(head,cur,tail){
        this.head = null;
        this.cur = null;
        this.tail = null;
    }
    append(string){
        if(this.head == null){
            this.head = new Node(string,null);
            this.tail = this.head;
        }
        else{
            let temp = new Node(string,null);
            this.cur = this.head;
            while(this.cur.nextNode != null)
                this.cur = this.cur.nextNode;
            this.cur.nextNode = temp;
            this.tail = temp;
        }
    }
    toString(){
        this.cur = this.head;
        while(this.cur!=null){
            console.log(this.cur.value  + " ->");
            this.cur = this.cur.nextNode;
        }
        console.log("null")
    }
    prepend(string){
        let temp = new Node(string,null)
        temp.nextNode = this.head;
        this.head = temp;
    }
    size(){
        let cnt=0;
        this.cur = this.head;
        while(this.cur!=null){
            cnt++;
            this.cur = this.cur.nextNode;
        }
        return cnt;
    }
    head(){
        return this.head;
    }
    tail(){
        return this.tail;
    }
    contains(value){
        this.cur = this.head;
        while(this.cur!=null){
            if(this.cur.value == value)
                return true
            this.cur = this.cur.nextNode;
        }
        return false
    }
    find(value){
        let index=0;
        this.cur = this.head;
        while(this.cur!=null){
            if(this.cur.value==value)
                return index;
            index++;
            this.cur = this.cur.nextNode;
        }
        return index;
    }
    insertAt(value,index){
        let ind=0;
        this.cur = this.head;
        while(this.cur!=null){
            if(ind == index)
                break;
            ind++;
            this.cur = this.cur.nextNode;
        }
        let temp = new Node(value,null);
        temp.nextNode = this.cur.nextNode;
        this.cur.nextNode = temp;
    }
    removeAt(index){
        let ind=0;
        this.cur = this.head;
        while(this.cur!=null){
            if(ind == index-1)
                break;
            ind++;
            this.cur = this.cur.nextNode;
        } 
        this.cur.nextNode = this.cur.nextNode.nextNode;
        
    }
}
class Node {
    constructor(value = null ,nextNode = null){
        this.value = value;
        this.nextNode = nextNode;
    }
}

const list = new LinkedList();

list.append("a");
list.append("b");
list.insertAt("c",1);
list.toString();

list.removeAt(1);
list.toString();