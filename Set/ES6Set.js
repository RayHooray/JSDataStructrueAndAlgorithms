const ClassSet = (function() {
  let _items = new WeakMap()
  return class ClassSet {
    constructor() {
      _items.set(this, new Set)
    }
    // 添加
    add(value) {
    }
    // 删除
    remove(value) {
    }
    // 判断元素是否存在
    has(value) {
    }
    // 清空集合
    clear() {
    }
    // 输出集合内有多少个元素
    size() {
    }
    // 将元素输出成一个数组
    values() {
    }
    /**
     * 集合的交集
    */
    union(otherSet) {
    }
    /**
      * 交集
    */
    intersection(otherSet) {
    }
    /**
     * 差集： 存在于 A 集合，但并不存在于 B 集合中
     * */ 
    difference(otherSet) {
    }
    /**
     * 子集
    */
    subSet(otherSet) {
      
    }
  }
})()