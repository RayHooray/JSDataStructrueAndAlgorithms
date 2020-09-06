// 合并
let zero = 0,
positiveNumber = [1, 2, 3],
nagativeNumber = [-1, -2, -3]
let numbers = nagativeNumber.concat(zero, positiveNumber)

// 迭代器函数
/**
 * @param start 开始数
 * @param end 结尾数（不等于结尾）
*/
function Range(start, end) {
  return [...Array(end - start).keys()].map(v => start + v)
}


let numbers1 = new Array(...Range(1, 15))


function isEvent(num) {
  return (num % 2 === 0)
}

// every 有一个返回 false 停止执行
console.log(numbers1.every(isEvent))

// some 有一个返回 true 停止执行
console.log(numbers1.some(isEvent))

// forEach 类似于 for 循环
numbers1.forEach(v => {
  console.log( v % 2 === 0)
})

// map 和 filter 均返回一个数组， map 返回所有，filter 返回条件为 ture 的元素
console.log(numbers1.map(isEvent))
console.log(numbers1.filter(isEvent))

// reduce()
/**
 * reduce params
 * @param callback function 逻辑处理函数
 * @param init callback 第一个参数的初始值
*/
/**
 * callback function params
 * @param previousValue
 * @param currentValue
 * @param index
 * @param array
*/
console.log(numbers1.reduce((previous, current) => {
  return previous + current
}))