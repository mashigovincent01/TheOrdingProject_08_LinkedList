# LinkedList Implementation

This project implements a simple **Linked List** data structure in JavaScript. The `LinkedList` class provides methods for common operations such as appending, prepending, finding, removing, and accessing nodes by index.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Methods](#methods)
  - [prepend(value)](#prependvalue)
  - [append(value)](#appendvalue)
  - [toString()](#tostring)
  - [at(index)](#atindex)
  - [pop()](#pop)
  - [contains(value)](#containsvalue)
  - [find(value)](#findvalue)
  - [insertAt(value, index)](#insertatvalue-index)
  - [removeAt(index)](#removeatindex)
- [Example](#example)


## Installation

1. Clone the repository or download the source code.
2. Ensure you have **Node.js** installed on your machine.
3. Run the following command in your terminal to initialize the project:

```bash
   npm install
```

## Usage

Import the LinkedList class into your project:
```Javascript
const LinkedList = require('./LinkedList');
```

Create and interact with the LinkedList:

```javascript
const list = new LinkedList(); list.append(10);
 list.prepend(5); 
 console.log(list.toString()); // ( 5 ) -> ( 10 ) -> null
```
## Methods
### prepend(value)
Adds a new node with the specified value to the beginning of the list.
If the list is empty, the new node becomes both the head and the tail.
```javascript
list.prepend(5);
```

### append(value)
Adds a new node with the specified value to the end of the list.
If the list is empty, the new node becomes both the head and the tail.
```javascript
list.append(10);
```

### toString()
Returns a string representation of the list, showing all nodes and their values in order.
```javascript
console.log(list.toString()); // ( 5 ) -> ( 10 ) -> null
```

### at(index)
Returns the node at the specified index, or undefined if the index is out of bounds.
```javascript
console.log(list.at(1)); // Node with value 10
```

### pop()
Removes and returns the last node in the list.
If the list is empty, it returns null.
```javascript
console.log(list.pop()); // 10
```
### contains(value)
Returns true if the list contains a node with the specified value, otherwise returns false.
```javascript
console.log(list.contains(5)); // true
```

### find(value)
Returns the index of the node containing the specified value, or null if the value is not found.
```javascript
console.log(list.find(10)); // 1
```

### insertAt(value, index)
Inserts a new node with the specified value at the given index.
Throws an error if the index is out of bounds.
```javascript
list.insertAt(7, 1); // Inserts value 7 at index 1
```

### removeAt(index)
Removes the node at the specified index and returns its value.
Throws an error if the index is out of bounds.
```javascript
list.removeAt(0); // Removes the head node
```

## Example
```javascript
const list = new LinkedList(); 
list.append(10); 
list.prepend(5); 
list.insertAt(7, 1); 
console.log(list.toString()); // ( 5 ) -> ( 7 ) -> ( 10 ) -> null

console.log(list.contains(7)); // true console.log(list.find(10)); // 2

list.pop(); 
console.log(list.toString()); // ( 5 ) -> ( 7 ) -> null

list.removeAt(1);
console.log(list.toString()); // ( 5 ) -> null
```