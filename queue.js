class _Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
    }

    enqueue (data) {
        const node = new _Node(data);
    
        if (this.first === null) {
            this.first = node;
        }
    
        if (this.last) {
            this.last.next = node;
        }
        //make the new node the last item on the queue
        this.last = node;
    }
    
    dequeue() {
        //if the queue is empty, there is nothing to return
       if (this.first === null) {
           return;
       }
       const node = this.first;
       this.first = this.first.next;
        //if this is the last item in the queue
       if (node === this.last) {
           this.last = null;
       }
       return node.value;
    }
}

const peek = q => {
    if (q.first === null) {
        console.log('no queue')
        return null
    } else {
        console.log(q.first.value)
        return q.first.value
    }
}

const isEmpty = q => {
    if (!q.first) {
        console.log(true)
        return true
    } else {
        console.log(false)
        return false
    }
}

const display = q => {
    if (q.first === null) {
        console.log('no queue')
        return null
    } while (q.first.next) {
        console.log(q.first.value)
        q.first = q.first.next
    } console.log(q.first.value)
}

function main() {
    let starTrek = new Queue()

    starTrek.enqueue('Kirk')
    starTrek.enqueue('Sulu')
    starTrek.enqueue('Spock')
    starTrek.enqueue('Uhura')
    starTrek.enqueue('Checkov')
    display(starTrek)
}

main()