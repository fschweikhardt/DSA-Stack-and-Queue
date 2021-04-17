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
    if (stack.top === null) {
        console.log(true)
        return true
    } else {
        console.log(false)
        return false
    }
}

function peek (stack) {
    if (!stack.top) return console.log('empty peek stack')
    console.log(stack.top.data)
    return stack.top.data
}

function display (stack) {
    if (!stack.top) {
        return console.log('empty display stack')
    }
    while (stack.top.next !== null) {
      console.log(stack.top.data, stack.top.data.length)
      stack.top = stack.top.next
    }
    console.log(stack.top.data, stack.top.data.length)
}

function main() {
    let starTrek = new Stack()

    //isEmpty(starTrek)
    starTrek.push('Kirk')
    starTrek.push('Jim')
    // starTrek.pop()
    starTrek.push('McCoy')
    // starTrek.push('Scotty')

    //isEmpty(starTrek)
    display(starTrek)
    //display(starTrek)
     
}
 
main()


'3. Check for palindromes using a stack'
let testString1 = 'Noon  '
let testString2 = 'wilukuliW'

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    console.log(s)
    let firstHalf = ''
    let secondHalf = ''
    firstHalf = Math.floor(s.length/2)
    console.log(firstHalf)
}

//is_palindrome(testString2)

'5. Sort stack'

// function sortedStack (stack) {
//     let newStack = new Stack()
//     while (!isEmpty(stack)) {
//         let variable = stack.pop()
//         if (variable.length > peek(newStack)) {
//             stack.push(newStack.pop())
//             console.log(variable)
//         } 
//     }
// }

// sortedStack(list)

'4. Matching parentheses in an expression'

'5. Sort stack'