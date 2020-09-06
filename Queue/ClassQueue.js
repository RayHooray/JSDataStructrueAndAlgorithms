let Queue = (function() {
  let _items = new WeakMap()
  return class Queue {
    constructor() {
      _items.set(this, [])
    }
    // 插入
    enqueue(value) {
      let items = _items.get(this)
      items.push(value)
    }
    // 先进先出
    dequeue() {
      let items = _items.get(this)
      let val = items.shift()
      return val
    }
    // 查看头部元素
    fornt() {
      let items = _items.get(this)
      return items[0]
    }
    // 是否为空
    isEmpty() {
      let items = _items.get(this)
      return items.length === 0
    }
    // 查看元素个数
    size() {
      let items = _items.get(this)
      return items.length
    }
    // 打印队列
    print() {
      let items = _items.get(this)
      console.log(items.toString())
    }
  }
})()

// 击鼓传花

function hotPotato(nameList, num) {
  let queue = new Queue()

  for(let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i])
  }

  let eliminated = ''

  while(queue.size() > 1) {
    for(let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    eliminated = queue.dequeue()

    console.log(`${eliminated}在击鼓传花中被淘汰`)
  }
  return queue.dequeue()
}

let names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']

let winner = hotPotato(names, Math.floor(Math.random() * 100))

console.log(`胜利者是：${winner}`)