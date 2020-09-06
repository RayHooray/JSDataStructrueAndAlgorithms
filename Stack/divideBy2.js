// 十进制转二进制
let Stack = (function() {
  const items = new WeakMap()

  return class Stack {
    constructor() {
      items.set(this, [])
    }

    // 添加一个新的元素（尾部）
    push(value) {
      let item = items.get(this)
      item.push(value)
    }
    // 移除顶部元素（尾部）
    pop() {
      let item = items.get(this)
      let s = item.pop()
      return s
    }
    // 返回栈顶元素（最后一个元素）
    peek() {
      let item = items.get(this)
      return item[item.length - 1]
    }
    isEmpty() {
      let item = items.get(this)
      return item.length === 0
    }
    clear() {
      items.set(this, [])
    }
    size() {
      let item = items.get(this)
      return item.length
    }
    print() {
      let item = items.get(this)
      console.log(item.toString())
    }
  }
})()

function diviedBy2(decNumber) {
  let remStack = new Stack(),
  rem,
  binaryString = ''

  while (decNumber > 0) {
    rem = Math.floor(decNumber % 2)
    remStack.push(rem)
    decNumber = Math.floor(decNumber / 2)
  }
  // console.log(remStack.isEmpty)
  while(!remStack.isEmpty()) {
    // console.log(222222222222222, remStack.pop())
    binaryString += remStack.pop().toString()
  }
  return binaryString
}

function diviedByAnyNumber(decNumber, divideNumber) {
  let remStack = new Stack(),
  rem,
  binaryString = ''

  while (decNumber > 0) {
    rem = Math.floor(decNumber % divideNumber)
    remStack.push(rem)
    decNumber = Math.floor(decNumber / divideNumber)
  }
  // console.log(remStack.isEmpty)
  while(!remStack.isEmpty()) {
    binaryString += remStack.pop().toString()
  }
  return binaryString
}

console.log(11111, diviedBy2(50))

console.log(22222, diviedByAnyNumber(50, 32))