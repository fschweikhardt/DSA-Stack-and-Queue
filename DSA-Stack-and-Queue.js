'DSA-Stack-and-Queue'

class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }
    push(data) {
        /* If the stack is empty, then the node will be the
           top of the stack */
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        /* If the stack already has something, 
           then create a new node,
           add data to the new node, and
           have the pointer point to the top */
        const node = new _Node(data, this.top);
        this.top = node;
    }
    pop() {
        /* In order to remove the top of the stack, you have to point
           the pointer to the next item and that next item becomes the
           top of the stack */
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}

function isEmpty (stack) {
    return (stack.top === null);
}

function peek (stack) {
    if (!stack.top) return null;
    return stack.top.data;
}

function display (stack) {
    let currNode = stack.top;
    if (currNode === null) console.log('empty stack');
    while (currNode.next !== null) {
      console.log(currNode.data);
      currNode = currNode.next;
    }
    console.log(currNode.data);
}


function main() {
    const starTrek = new Stack()

    console.log(isEmpty(starTrek))
    console.log(peek(starTrek))

    starTrek.push('Kirk')
    starTrek.push('Spock')
    starTrek.push('McCoy')
    starTrek.push('Scotty')

    display(starTrek)
    console.log(peek(starTrek))

}
 
main()
