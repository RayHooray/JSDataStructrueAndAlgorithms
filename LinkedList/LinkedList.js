function LinkedList() {
  let Node = function(element) {
    this.element = element
    this.next = null
  }

  let length = 0
  let head = null

  // 尾部添加一个新项
  this.append = function(element) {
    // 创建一个 node 节点
    let node = new Node(element),
    // 指向变量
    current
    if(head === null) {
      head = node 
    } else {
      current = head
      while(current.next) {
        // console.log(current)
        current = current.next
      }
      // 找到最后一项的 current 赋值为 node， 建立连接
      current.next = node
    }
    length++
  }
  // 在特定位置插入一项
  this.insert = function(position, element) {
    // 检查越界值
    if(position >= 0 && position <= length) {
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
  this.removeAt = function(position) {
    // 检查是否越界
    if(position > -1 && position < length) {
      let current = head,
      previous,
      index = 0
      // 移除第一项
      if(position === 0) {
        head = current.next
      } else {
        while(index++ < position) {
          previous = current
          current = current.next
        }
        // 将 previous 与 current 的下一项拼接起来，跳过 current 从而移除它
        // 此时 current 被丢弃在内存中，会被垃圾回收机制进行回收
        previous.next = current.next
      }
      length--
      // 返回移除的节点
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

  this.includes = function(element) {
    let current = head,
    index = 0
    while(current) {
      if(element === current.element) {
        return (index, true)
      }
      index++
      current = current.next
    }
    return false
  }

  this.print = function() {
    return head
  }
}

let linked_list = new LinkedList()

linked_list.append(15)
linked_list.append(10)
linked_list.append(9)
linked_list.append(8)

console.log(linked_list.toString())
console.log(linked_list.print())