/**
 * 分离链接
 * 通过在每个索引下创建链表来实现解决冲突
 * 优点：简单快捷
 * 缺点：在实现 @HashTable 实例之外还需要额外的存储空间 @LinkedList
*/
/**
 * @ValuePair 辅助类，将要加入的 @LinkedList 实例元素
*/

class ValuePair {
  constructor(key, value) {
    this.key = key
    this.value = value
  }

  toString() {
    return `[${this.key} - ${this.value}]`
  }
}
// 链表类
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

function HashTable() {
  let table = []

  let loseloseHashCode = function(key) {
    let hash = 0
    
    for(let i = 0; i < key.length; i++) {
      hash +=key.charCodeAt(i)
    }

    return hash % 37
  }

  this.put = function(key, value) {
    let position = loseloseHashCode(key)

    console.log(`${position} - ${key}`)
    if(table[position] === undefined) {
      table[position] = new LinkedList()
    }

    table[position].append(new ValuePair(key, value))
  }

  this.remove = function(key) {
    let position = loseloseHashCode(key)
    if(table[position] !== undefined) {
      let current = table[position].getHead()

      while(current.next) {
        if(current.element === key) {
          table[position].remove(current.element)
          if(table[position].isEmpty()) {
            table[position] = undefined
          }
          return true
        }
        current = current.next
      }
      //
      if(current.element.key === key) {
        table[position].remove(current.element)
        if(table[position].isEmpty()) {
          table[position] === undefined
        }
        return true
      }
    }
    return false
  }

  this.get = function(key) {
    let position = loseloseHashCode(key)
    if(table[position] !== undefined) {
      let current = table[position].getHead()

      while(current.next) {
        if(current.element.key === key) {
          return current.element.value
        }
        current = current.next
      }
      if(current.element.key === key) {
        return current.element.value
      }
    }
    return undefined
  }

  this.print = function() {
    table.forEach((v, i) => {
      if(v !== undefined) {
        console.log(`${i}: ${v}`)
      }
    })
  }
}

let hash = new HashTable()

hash.put('Grandalf', 'gandalf@email.com')
hash.put('John', 'john@email.com')
hash.put('Tyrion', 'tyrion@email.com')
hash.put('Aaron', 'aaron@email.com')
hash.put('Donnie', 'doonie@email.com')
hash.put('Ana', 'ana@email.com')
hash.put('Jonathan', 'jonathan@email.com')
hash.put('Jamie', 'jamie@email.com')
hash.put('Sue', 'sue@email.com')
hash.put('Mindy', 'mindy@email.com')
hash.put('Paul', 'paul@email.com')
hash.put('Nathan', 'nathan@email.com')

console.log(hash.get('Sue'))

hash.print()