class Stack {
  constructor() {
    this.items = []
  }
  // 添加一个新的元素（尾部）
  push(value) {
    this.items.push(value)
  }
  // 移除顶部元素（尾部）
  pop() {
    return this.items.pop()
  }
  // 返回栈顶元素（最后一个元素）
  peek() {
    return this.items[this.items.length - 1]
  }
  isEmpty() {
    return this.items.length === 0
  }
  clear() {
    this.items = []
  }
  size() {
    return this.items.length
  }
  print() {
    console.log(this.items.size)
  }
}
/**
 * 所有的构造函数都是基于原型的面向对象开发
 * 不同于函数式构造对象，类构造对象更节省内存
 * constructor 构造器中申明的变量是公共的，适合创建多个实例，不能申明私有属性和方法
*/