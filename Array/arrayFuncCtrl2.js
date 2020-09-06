// 迭代器函数
/**
 * 迭代器返回的值一般为 {value, done}
 * value 返回的是迭代器当前返回的值
 * 如果迭代器可继续迭代，那么 value 有值，且此时的 done 为 false， 表示可以继续迭代
 * 如果 value 为 undefined 则可能无法迭代（因为无法排除数组中是否在某一个索引下的值就为 undefined，keys 除外）
 * 所以判断是否可以继续迭代的依据应为 done 是否为 false， 当 done 为 true 则表面不可迭代
*/


/**
 * @param start 开始数
 * @param end 结尾数（不等于结尾）
*/
function Range(start, end) {
  return [...Array(end - start).keys()].map(v => start + v)
}

let numbers = new Array(...Range(1, 20))

// for(let n of numbers) {
//   console.log(n)
// }

let interator = numbers[Symbol.iterator]()

// numbers.forEach(console.log(interator.next()))
// entries 返回值包含未知和值信息
let entriesList = numbers.entries()
// console.log(entriesList)
numbers.forEach(() => {
  console.log('entries', entriesList.next())
})
// keys 方法返回的是索引值
let keysVal = numbers.keys() 
numbers.forEach(() => {
  console.log('keys', keysVal.next())
})
// values 方法返回的 value 是真实的 value
let valuesList = numbers.values()
numbers.forEach(() => {
  console.log('values', valuesList.next())
})