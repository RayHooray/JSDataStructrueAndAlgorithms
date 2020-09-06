/**
 * Set 数据结构，类似于数组，但是成员的值是唯一的，不会重复
 * Set 是一个构造类
 * Set 内加入元素不会改变数据类型，但 NaN 在 Set 内是等于自身的
 * Set 对于对象的是无法识别是否相等的，Set 认为对象总是不相等的
 * Set 的方法有 
 * @add : Set
 * @delete : Boolean 
 * @has : Boolean
 * @clear : void
 * Set 只能对简单的数组进行去重
 * 遍历方法
 * @keys ：返回键名
 * @value ：返回键值
 * @entries ：返回键值对
 * @forEach ：返回每个成员
 * 支持扩展运算符
*/

const set = new Set()

let arr = [2, 3, 5, 4, 5, 2, 2]

arr.forEach(v => set.add(v))

// for(let v of arr) {
//   console.log(v)
// }

// for(let v of set) {
//   console.log(v)
// }

console.log(set.keys())
console.log(set.values())
console.log(set.entries())
set.forEach(v => {
  console.log(v)
})