class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this._head = null;
        this._size = 0;
        this._tail = null;
    }

    get head() {
        return this._head;
    }

    get size() {
        return this._size;
    }

    get tail() {
        return this._tail;
    }

    prepend(value) {
        if (this._head === null) {
            this._head = new Node(value);
            this._tail = this._head; // Set tail to head if list was empty
        } else {
            this._head = new Node(value, this._head);
        }
        this._size++;
    }

    append(value) {
        if (this._head === null) {
            this._head = new Node(value);
            this._tail = this._head; // Set tail to the first node
        } else {
            this._tail.next = new Node(value);
            this._tail = this._tail.next; // Move the tail
        }
        this._size++;
    }

    toString() {
        return this.toStringRec(this._head) + "null";
    }

    toStringRec(head, res = "") {
        if (head === null) {
            return res;
        }
        return res + "( " + head.value + " ) " + "-> " + this.toStringRec(head.next);
    }
    at(index){
        if(this._head === null || index < 0 || index >= this.size){
            return undefined;
        }
        else{
            let count = 0;
            let temp = this.head;
            while(temp !== null){
                if(count === index){
                    return temp;
                }
                temp = temp.next;
                count++;
            }
        }
    }

    pop() {
        // Case 1: If the list is empty
        if (this._head === null) {
            return null; // Nothing to pop
        }
    
        // Case 2: If the list has only one element
        if (this._head.next === null) {
            let poppedValue = this._head.value;
            this._head = null;
            this._tail = null;
            this._size--;
            return poppedValue;
        }
    
        // Case 3: Traverse to the second-to-last node
        let current = this._head;
        while (current.next !== this._tail) {
            current = current.next;
        }
    
        // At this point, current is the second-to-last node
        let poppedValue = this._tail.value;
        current.next = null;
        this._tail = current;
        this._size--;
    
        return poppedValue; // Return the value of the popped node
    }

    contains(value){
        if(this._head === null){
            return false;
        }
        let res = false;
        let temp = this._head;
        while(temp !== null){
            if(temp.value === value){
                return true;
            }
            temp = temp.next;
        }
        return res;
    }

    find(value){
        if(this._head === null){
            return null;
        }
        let index = 0;
        let temp = this._head;
        while(temp !== null){
            if(temp.value === value){
                return index;
            }
            temp = temp.next;
            index++;
        }
        return null;
    }
    insertAt(value, index) {
        if (index < 0 || index > this._size) {
            throw new Error("Index out of bounds");
        }

        // Case 1: Insert at the beginning
        if (index === 0) {
            this.prepend(value);
            return;
        }

        // Case 2: Insert at the end
        if (index === this._size) {
            this.append(value);
            return;
        }

        // Case 3: Insert in the middle
        let newNode = new Node(value);
        let current = this._head;
        let previous = null;
        let currentIndex = 0;

        while (currentIndex < index) {
            previous = current;
            current = current.next;
            currentIndex++;
        }

        previous.next = newNode;
        newNode.next = current;
        this._size++;
    }

    // Remove a node at the specified index
    removeAt(index) {
        if (index < 0 || index >= this._size) {
            throw new Error("Index out of bounds");
        }

        // Case 1: Remove the head node
        if (index === 0) {
            let removedValue = this._head.value;
            this._head = this._head.next;
            if (this._head === null) {
                this._tail = null; // If list becomes empty
            }
            this._size--;
            return removedValue;
        }

        let current = this._head;
        let previous = null;
        let currentIndex = 0;

        // Traverse to the node just before the target node
        while (currentIndex < index) {
            previous = current;
            current = current.next;
            currentIndex++;
        }

        // Case 2: Remove from the middle or end
        let removedValue = current.value;
        previous.next = current.next;

        // If we are removing the last node, update the tail
        if (index === this._size - 1) {
            this._tail = previous;
        }

        this._size--;
        return removedValue;
    }
    
}

module.exports = LinkedList;



