let LinkedList = (function() {
  const _element = new WeakMap()
  const _next = new WeakMap()
  class Node {
    constructor(element) {
      _element.set(this, element)
      _next.set(this, null)
    }
  }

  const _length = new WeakMap()
  const _head = new WeakMap()

  return class LinkedList {
    constructor() {
      _length.set(this, 0)
      _head.set(this, null)
    }
    // 尾部添加一个新项
    append(element) {
      let node = new Node(element),
      current,
      head = _head.get(this),
      length = _length.get(this)
      if(head === null) {
        head = node 
      } else {
        current = head
        while(current.next) {
          console.log(current)
          current = current.next
        }
        // 找到最后一项的 current 赋值为 node， 建立连接
        current.next = node
      }
      length++
      console.log(length)
    }
    // 在特定位置插入一项
    insert(position, element) {
      // 检查越界值
      if(position >= 0 && position <= length) {
        head = _head.get(this),
        length = _length.get(this)
        let node = new Node(element),
        current = head,
        previous,
        index = 0

        if(position === 0) {
          node.next = current
          head = node
        }else {
          while(index++ < position) {
            previous = current
            current = current.next
          }
          node.next = current
          previous.next = node
        }
        length++
        return true
      } else {
        return false
      }
    }
    // 从表中特定位置移除一项
    removeAt(position) {
      // 检查是否越界
      if(position > -1 && position < length) {
        let current = head,
        previous,
        index = 0,
        head = _head.get(this),
        length = _length.get(this)
        // 移除第一项
        if(position === 0) {
          head = current.next
        } else {
          while(index++ < position) {
            previous = current
            current = current.next
          }
          // 将 previous 与 current 的下一项拼接起来，跳过 current 从而移除它
          previous.next = current.next
        }
        length--
        // console.log(length)
        return current.element
      } else {
        return null
      }
    }
    // 从表中移除一项
    remove(element) {
  
    }
    // 返回元素所在列表中的索引，没有则返回 -1 
    indexOf(element) {
  
    }
    // 链表中是否包含有元素，有返回 true，没有返回 false
    isEmpty() {
  
    }
    // 返回链表中元素的个数
    size() {
      let length = _length.get(this)
      console.log(length)
    }
  
    getHead() {
  
    }
  
    toString() {
  
    }
  
    print() {
      
    }
  }
})()

let linked_list = new LinkedList()

linked_list.append(15)
linked_list.append(10)

linked_list.size()