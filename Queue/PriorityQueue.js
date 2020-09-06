let PriorityQueue = (function() {
  let _items = new WeakMap()
  class Queue {
    constructor(element, priority) {
      this.element = element
      this.priority = priority
    }
  }
  return class PriorityQueue extends Queue {
    constructor(element, priority) {
      super(element, priority)
      _items.set(this, [])
    }

    enqueue(element, priority) {
      let added = false
      let items = _items.get(this)
      this.element = element
      this.priority = priority
      for(let i = 0; i < items.length; i++) {
        if(this.priority < items[i].priority) {
          items.splice(i, 0, {element: this.element, priority: this.priority})
          added = true
          break
        }
      }
      if(!added) {
        items.push({ element: this.element, priority: this.priority })
      }
    }

    print() {
      let items = _items.get(this)
      for(let i = 0; i < items.length; i++) {
        console.log(`${items[i].element} - ${items[i].priority}`)
      }
    }
  }
})()

let priorityQueue = new PriorityQueue()

priorityQueue.enqueue('john', 2)

priorityQueue.enqueue('jack', 1)

priorityQueue.enqueue('camila', 1)

priorityQueue.print()