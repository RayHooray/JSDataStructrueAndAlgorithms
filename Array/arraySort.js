/**
 * @param start 开始数
 * @param end 结尾数（不等于结尾）
*/
function Range(start, end) {
  return [...Array(end - start).keys()].map(v => start + v)
}

let numbers = new Array(...Range(1, 20))
// reverse 反转
// numbers.reverse()
// sort 排序
/**
 * @param compareFn 排序逻辑方法
*/
function compare(a, b) {
  if(a < b) {
    return -1
  }
  if(a > b) {
    return 1
  }
  return 0
}

// console.log(numbers.sort(compare))

// 搜索

/**
 * indexOf: 返回与参数匹配的第一个元素的索引，没有，返回 -1
 * lastIndexOf: 返回与参数匹配的最后一个元素的索引，没有则返回 -1
*/

console.log(numbers.lastIndexOf(100))

// includes 查询数组中是否存在某一个元素，返回 Boolean 值
/**
 * @param searchElement 要查询的元素
 * @param fromIndex 其实查询位置，默认为 0
*/
console.log(numbers.includes(10, 11))

console.log(numbers.toString())