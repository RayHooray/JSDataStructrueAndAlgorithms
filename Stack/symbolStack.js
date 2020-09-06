/**
 * Symbol 提供了一个申明私有方法或属性的途径
 * Symbol 的目的是位了提供一个独一无二的方法或属性的名称，避免冲突和覆盖情况出现
 * Symbol 接收一个 description 用于描述，仅仅是相当于注释的作用，表明这个 Symbol 变量是什么
 * Symbol 独一无二的特性导致，即使是看起来描述一直的两个不同的变量，其值也不是相等的
 * 另外，Symbol 值也可以转为布尔值，但是不能转为数值
 * 读取描述时要转成字符串, 为了方便 ES2019 提供了一个 description 方法直接返回描述
 * 但本质上，使用 Symbol 并没有解决私有属性的问题，通过 Object.getOwnPropertySymbols 属性获取到 Symbol 属性之后，仍然可以做一系列对应数据类型的操作。
 * 注意，Symbol 值作为对象属性名时，不能用点运算符。
*/

let _items = Symbol(123)
let _items2 = Symbol(123)

// console.log(_items == _items2)

class Stack {
  constructor() {
    this[_items] = []
    this[_items2] = []
    this._items = []
  }

  // 添加一个新的元素（尾部）
  push(value) {
    this[_items].push(value)
  }
  // 移除顶部元素（尾部）
  pop() {
    return this[_items].pop()
  }
  // 返回栈顶元素（最后一个元素）
  peek() {
    return this[_items][this.items.length - 1]
  }
  isEmpty() {
    return this[_items].length === 0
  }
  clear() {
    this[_items] = []
  }
  size() {
    return this[_items].length
  }
  print() {
    console.log(this[_items].toString())
  }
}

let stack = new Stack

let objSymbol = Object.getOwnPropertySymbols(stack)

// const COLOR_RED    = Symbol();
// const COLOR_GREEN  = Symbol();

// function getComplement(color) {
//   switch (color) {
//     case COLOR_RED:
//       console.log('red', COLOR_RED)
//       return COLOR_GREEN;
//     case COLOR_GREEN:
//       console.log('green', COLOR_GREEN)
//       return COLOR_RED;
//     default:
//       throw new Error('Undefined color');
//     }
// }

// getComplement(COLOR_GREEN)
