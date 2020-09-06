/**
 * @param start 开始数
 * @param end 结尾数（不等于结尾）
*/
function Range(start, end) {
  return [...Array(end - start).keys()].map(v => start + v)
}

// from 根据已有数组创建一个新的数组
/**
 * @param arr 复制数组
 * @param callback 逻辑处理回调函数
*/
// of 根据已有数据创建一个新的数组，与 from 不同的是，接收的是多个数值，而不是数组

let numbers = new Array(...Range(1, 20))

let numbers2 = Array.from(numbers, v => (v % 2 == 0))

let numbers3 = Array.of(...numbers)

numbers2.push(1000)

// fill 用静态值填充数组

/** 
  * @param value 要替换的值
  * @param start 开始位置
  * @param end 结束位置（不包括end）
  * start 和 end 不填则替换全部
  * 只填 start 则替换 start 之后所有的元素
*/

console.log(numbers3.fill(1, 4, 10))

// copyWithin 复制当前数组中指定起始位置的元素到当前数组的指定位置
/**
 * @param target 起始的替换位置， 从 @target 位置开始替换
 * @param start 复制元素的其实位置， 从 @start 位置开始，复制元素
 * @param end 复制元素的结束位置（包含 end）， 在 @end 位置结束复制
*/

let numbers4 = Array.from(numbers)

console.log(numbers4.copyWithin(1, 4, 10))