function DoubleLinkedList() {
  class Node {
    constructor(element) {
      this.element = element
      this.next = null
      this.prev = null
    }
  }

  let length = 0
  let head = null
  // 用于保存队列中的最后一项
  let tail = null

  // 尾部添加一个新项
  this.append = function(element) {
    let node = new Node(element),
    current
    // console.log(`${length}bbb`, (tail ? tail.prev : null))
    if(head === null) {
      head = node 
    } else {
      current = head
      // console.log(length, current)
      while(current.next) {
        // console.log(`${length}aa`, current.next)
        tail = current
        current = current.next
        // current.prev
      }
      // 找到最后一项的 current 赋值为 node， 建立连接
      current.next = node
      node.prev = current
      // 插入项为最后一项
      tail = node
    }
    length++
  }

  // 在特定位置插入一项
  this.insert = function(position, element) {
    if(position >= 0 && position <= length) {
      let node = new Node(element),
      current = head,
      previous,
      index = 0
      if(position === 0) {
        // console.log(`${length}`, current)
        if(!head) {
          head = node
          tail = node
        } else {
          node.next = current
          current.prev = node
        }
      } else if(position === length) {
        current = tail
        current.next = node
        node.prev = current
        tail = node
      } else {
        while(index++ < position) {
          previous = current
          current = current.next
        }
        node.next = current
        previous.next = node
        current.prev = node
        node.prev = previous
      }
      length++
    } else {
      return false
    }
  }

  // 从表中特定位置移除一项
  this.removeAt = function(position) {
    // 检查是否越界
    if(position > -1 && position < length) {
      
      let current = head,
      previous,
      index = 0

      // 移除第一项
      if(position === 0) {
        head = current.next
        // 是否只有一项
        if(length === 1) {
          tail = null
        } else {
          head.prev = null
        }
      }
      // 移除最后一项
      else if(position === length - 1) {
        current = tail
        tail = current.prev
        tail.next = null
      }
      else {
        while(index++ < position) {
          previous = current.next
          current = current.next
        }
        // 此处的目的是错位空出，跳过一个元素，跳过元素因不在被调用而被垃圾回收机制回收
        previous.next = current.next
        current.next.prev = previous
      }

      length--

      return current.element

    } else {
      return null
    }
  }

  // 从表中移除一项
  this.remove = function(element) {
    let index = this.indexOf(element)
    return this.removeAt(index)
  }

  // 返回元素所在列表中的索引，没有则返回 -1
  this.indexOf = function(element) {
    let current = head,
    index = 0
    while(current) {
      if(element === current.element) {
        return index
      }
      index++
      current = current.next
    }

    return -1
  }

  // 链表中是否包含有元素，有返回 true，没有返回 false
  this.isEmpty = function() {
    return length === 0
  }

  // 返回链表中元素的个数
  this.size = function() {
    return length
  }

  // 
  this.getHead = function () {
    return head
  }

  // 由于使用的 Node 类，需要继承重写 toString 方法，只输出元素的值
  this.toString = function() {
    let current = head,
    string = ''
    while(current) {
      string += current.element + (current.next ? ',' : '')
      current = current.next
    }
    return string
  }

  this.print = function() {

  }
}

let linked_list = new DoubleLinkedList()

linked_list.append(15) // 0

linked_list.append(10) // 1

linked_list.append(9) //  2
linked_list.append(8)

console.log(linked_list.toString())