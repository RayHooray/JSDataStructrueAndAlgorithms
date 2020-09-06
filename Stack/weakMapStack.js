/**
 * 自调匿名函数的作用是 1、通过创建一个闭包来实现对 items 变量的私有保护，仅能从这个自调函数的作用域中去访问这个变量
 *                    2、此时的 WeakMap 已经成为了 Stack 类的私有属性，但如果不包装成自调函数，全局都可以访问到并对其做出修改
 * 此方法仅能保证类的属性私有，对扩展类无法实现私有继承。
*/

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
      return item.pop()
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
      console.log(item)
    }
  }
})()

// export default Stack

let stack = new Stack()

class Stack2 extends Stack {
  constructor() {
    super()
  }
  // hello() {
  //   let item = items.set(this, 111111)
  //   console.log(item)
  // }
}

stack.push(5)
stack.push(8)
console.log(stack.size())
// stack.clear()
console.log(stack.size())
stack.print()

let stack2 = new Stack2()

stack2.push(5)
stack2.push(8)
console.log(stack2.size())
stack2.clear()
console.log(stack2.size())
stack2.print()
// stack2.hello()