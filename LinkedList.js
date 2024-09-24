// Node class representing a single node in the linked list
class Node {
    constructor(value = null, next = null) {
        this.value = value; // Value stored in the node
        this.next = next;   // Pointer to the next node
    }
}

// LinkedList class representing the entire linked list
class LinkedList {
    constructor() {
        this._head = null;  // Head of the list
        this._size = 0;     // Number of elements in the list
        this._tail = null;  // Tail of the list
    }

    // Getter for the head of the list
    get head() {
        return this._head;
    }

    // Getter for the size of the list
    get size() {
        return this._size;
    }

    // Getter for the tail of the list
    get tail() {
        return this._tail;
    }

    // Prepend a new node with the given value to the start of the list
    prepend(value) {
        if (this._head === null) {
            this._head = new Node(value); // Create a new head if the list is empty
            this._tail = this._head; // Set tail to head if list was empty
        } else {
            this._head = new Node(value, this._head); // Create a new node and point to the old head
        }
        this._size++; // Increase the size of the list
    }

    // Append a new node with the given value to the end of the list
    append(value) {
        if (this._head === null) {
            this._head = new Node(value); // Create a new head if the list is empty
            this._tail = this._head; // Set tail to the first node
        } else {
            this._tail.next = new Node(value); // Link new node to the end
            this._tail = this._tail.next; // Move the tail pointer to the new node
        }
        this._size++; // Increase the size of the list
    }

    // Convert the linked list to a string representation
    toString() {
        return this.toStringRec(this._head) + "null"; // Call recursive helper and append null
    }

    // Helper method for toString to recursively traverse the list
    toStringRec(head, res = "") {
        if (head === null) {
            return res; // Return the accumulated string if end of the list is reached
        }
        return res + "( " + head.value + " ) " + "-> " + this.toStringRec(head.next); // Concatenate value and recurse
    }

    // Get the node at a specific index
    at(index) {
        if (this._head === null || index < 0 || index >= this.size) {
            return undefined; // Return undefined for out-of-bounds index
        } else {
            let count = 0;
            let temp = this.head; // Start at the head
            while (temp !== null) { // Traverse until the end
                if (count === index) {
                    return temp; // Return the node at the given index
                }
                temp = temp.next; // Move to the next node
                count++;
            }
        }
    }

    // Remove and return the last node of the list
    pop() {
        // Case 1: If the list is empty
        if (this._head === null) {
            return null; // Nothing to pop
        }

        // Case 2: If the list has only one element
        if (this._head.next === null) {
            let poppedValue = this._head.value; // Store the value to return
            this._head = null; // Clear the head
            this._tail = null; // Clear the tail
            this._size--; // Decrease the size
            return poppedValue; // Return the value of the popped node
        }

        // Case 3: Traverse to the second-to-last node
        let current = this._head;
        while (current.next !== this._tail) {
            current = current.next; // Move to the second-to-last node
        }

        // At this point, current is the second-to-last node
        let poppedValue = this._tail.value; // Store the value of the tail
        current.next = null; // Remove the last node
        this._tail = current; // Update the tail to the current node
        this._size--; // Decrease the size

        return poppedValue; // Return the value of the popped node
    }

    // Check if the list contains a node with the given value
    contains(value) {
        if (this._head === null) {
            return false; // Return false if the list is empty
        }
        let res = false;
        let temp = this._head; // Start at the head
        while (temp !== null) { // Traverse until the end
            if (temp.value === value) {
                return true; // Return true if the value is found
            }
            temp = temp.next; // Move to the next node
        }
        return res; // Return false if the value is not found
    }

    // Find the index of the first node with the given value
    find(value) {
        if (this._head === null) {
            return null; // Return null if the list is empty
        }
        let index = 0;
        let temp = this._head; // Start at the head
        while (temp !== null) { // Traverse until the end
            if (temp.value === value) {
                return index; // Return the index if the value is found
            }
            temp = temp.next; // Move to the next node
            index++;
        }
        return null; // Return null if the value is not found
    }

    // Insert a new node with the given value at the specified index
    insertAt(value, index) {
        if (index < 0 || index > this._size) {
            throw new Error("Index out of bounds"); // Throw error for invalid index
        }

        // Case 1: Insert at the beginning
        if (index === 0) {
            this.prepend(value); // Use prepend method
            return;
        }

        // Case 2: Insert at the end
        if (index === this._size) {
            this.append(value); // Use append method
            return;
        }

        // Case 3: Insert in the middle
        let newNode = new Node(value); // Create a new node
        let current = this._head; // Start at the head
        let previous = null; // Previous node
        let currentIndex = 0;

        while (currentIndex < index) { // Traverse to the desired index
            previous = current; // Store the previous node
            current = current.next; // Move to the current node
            currentIndex++;
        }

        previous.next = newNode; // Link the new node
        newNode.next = current; // Link the current node
        this._size++; // Increase the size of the list
    }

    // Remove a node at the specified index
    removeAt(index) {
        if (index < 0 || index >= this._size) {
            throw new Error("Index out of bounds"); // Throw error for invalid index
        }

        // Case 1: Remove the head node
        if (index === 0) {
            let removedValue = this._head.value; // Store the value to return
            this._head = this._head.next; // Move head to the next node
            if (this._head === null) {
                this._tail = null; // If list becomes empty
            }
            this._size--; // Decrease the size
            return removedValue; // Return the value of the removed node
        }

        let current = this._head; // Start at the head
        let previous = null; // Previous node
        let currentIndex = 0;

        // Traverse to the node just before the target node
        while (currentIndex < index) {
            previous = current; // Store the previous node
            current = current.next; // Move to the current node
            currentIndex++;
        }

        // Case 2: Remove from the middle or end
        let removedValue = current.value; // Store the value of the node to be removed
        previous.next = current.next; // Link previous node to the next node

        // If we are removing the last node, update the tail
        if (index === this._size - 1) {
            this._tail = previous; // Update tail to the previous node
        }

        this._size--; // Decrease the size
        return removedValue; // Return the value of the removed node
    }
}

// Export the LinkedList class for external use
module.exports = LinkedList;
