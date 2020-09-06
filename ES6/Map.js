/**
 * Map 类型类似于对象，也是键值对的集合
 * 键的范围不限于字符串，各种类型的值都可以作为键
 * 键值对结构，Map 比 Object 更合适
 * Map 接受数组作为参数，分别代表键和值
 * 任何的 interator 都可以作为 Map 的参数
 * Map 只有对同一个对象的饮用，蔡将其视为同一个键
 * Map 的 key 值其实与内存地址有关
 * 实例属性
 * @size ：number，返回 Map 中元素的个数
 * @set ：@param key 键 @param value 值，返回 Map 本身，可以进行链式调用
 * @get ：@param key 返回 key 对应下的 value
 * @has ：@param key 返回 boolean 便是这个 key 存在
 * @delete ： @params key 返回 boolean，表示对应的 key 是存在的（true）否则表示不存在（false）
 * @clear ： 清楚所有元素，没有返回值
 * 
 * 原生结构提供三个迭代器和一个遍历方法 keys(), values(), entries(), 遍历方法 forEach()
 * 
 * forEach() 方法的第二个参数，可以用来绑定 this
 * 
 * 转为数组结构，使用扩展运算符 ...
*/

const set = new Set([
  ['foo', 1],
  ['bar', 2]
])

// console.log(set.values())
set.forEach((v,k) => console.log(v, k))

const map = new Map(set)

console.log(map.entries())

const map2 = new Map()

// 由于是不同的两个引用，内存地址不一样，Map 类型无法找到确切的地址，顾返回 undefiend
map2.set(['a'], 1)
console.log(map2.get(['a']))

// 当使用同一个引用变量时，则会正常显示，这是因为引用的地址是确定的

const k = ['a']

map2.set(k, 2222)

console.log(map2)

console.log(map2.get(k))


const reporter = {
  report(key, value) {
    console.log(111, "Key: %s, Value: %s", key, value)
  } 
}

// const map = new Map()
map.forEach(function(value, key) { this.report(key, value) }, reporter);
