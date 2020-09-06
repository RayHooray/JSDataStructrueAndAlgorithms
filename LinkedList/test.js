function LinkedList() {
  class Node {
    constructor(element) {
      this.element = element
      this.next = null
    }
  }

  let length = 0
  let head = null
  // 尾部插入元素
  this.append = function(element) {
    let node = new Node(element),
    current
    // 往第一个位置上插入元素
    if(!head) {
      head = node
    } else {
      current = head
      while(current.next) {
        current = current.next
      }
      current.next = node
    }
    length++
  }
  /**
   * @param position 表示操作的位置
  */
  this.removeAt = function(position) {
    // 限制操作范围
    if(position > -1 && position < length) {
      // 中间变量， 当前元素
      let current = head,
      // 中间变量，前一个变量
      previous,
      // 中间变量索引
      index = 0
      // 移除头部元素
      if(position === 0) {
        // 此时 current 为首个元素，current 为下一个元素
        header = current.next
      } else {
        while(index++ < position) {
          // 此处操作类似于递归，不停的在改变 previous 和 current 来实现一个递归的轮询操作
          // console.log('current', current)
          previous = current
          // console.log('previous', previous)
          current = current.next
        }
        // console.log('previousoutside1', previous)
        previous.next = current.next
        // console.log('previousoutside2', previous)
      }
      length--
      return current.element
    } else {
      // 超范围，返回 false
      return false
    }
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
}

let linkedList = new LinkedList()

linkedList.append(15)
linkedList.append(10)
linkedList.append(8)
linkedList.removeAt(2)

console.log(linkedList.toString())