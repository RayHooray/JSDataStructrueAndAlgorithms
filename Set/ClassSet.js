const ClassSet = (function() {
  let _items = new WeakMap()
  return class ClassSet {
    constructor() {
      _items.set(this, {})
    }
    // 添加
    add(value) {
      let items = _items.get(this)
      if(!this.has(value)) {
        items[value] = value
        // console.log(items)
        return true
      }
      return false
    }
    // 删除
    remove(value) {
      let items = _items.get(this)
      if(this.has(value)) {
        delete items[value]
        return true
      }
      return false
    }
    // 判断元素是否存在
    has(value) {
      let items = _items.get(this)
      return items.hasOwnProperty(value)
    }
    // 清空集合
    clear() {
      _items.set(this, {})
    }
    // 输出集合内有多少个元素
    size() {
      let items = _items.get(this)
      return Object.keys(items)
    }
    // 将元素输出成一个数组
    values() {
      let values = []
      let items = _items.get(this)
      for(let key in items) {
        if(items.hasOwnProperty(key)) {
          values.push(items[key])
        }
      }
      return values
    }
    /**
     * 集合的交集
    */
    union(otherSet) {
      let unionSet = new ClassSet()

      let values = this.values()

      values.forEach(v => {
        unionSet.add(v)
      })
      values = otherSet.values()

      values.forEach(v => {
        unionSet.add(v)
      })

      return unionSet
    }
    /**
      * 交集
    */
    intersection(otherSet) {
      let intersectionnSet = new ClassSet()

      let values = this.values()

      values.forEach(v => {
        if(otherSet.has(v)) {
          intersectionnSet.add(v)
        }
      })

      return intersectionnSet
    }
    /**
     * 差集： 存在于 A 集合，但并不存在于 B 集合中
     * */ 
    difference(otherSet) {
      let differenceSet = new ClassSet()
      let values = this.values()
      values.forEach(v => {
        if(!otherSet.has(v)) {
          differenceSet.add(v)
        }
      })
      return differenceSet
    }
    /**
     * 子集
    */
    subSet(otherSet) {
      if(this.size() > otherSet.size()) {
        return false
      } else {
        let values = this.values()

        values.forEach(v => {
          if(!otherSet.has(v)) {
            return false
          }
        })

        return true
      }
    }
  }
})()

let setA = new ClassSet()

setA.add(1)
setA.add(2)
setA.add(3)
setA.add(4)


let setB = new ClassSet()

setB.add(3)
setB.add(4)
setB.add(5)
setB.add(6)

let unionSet = setA.union(setB)

let intersectionSet = setB.intersection(setA)

let differenceSetA = setA.difference(setB)

let differenceSetB = setB.difference(setA)

console.log(unionSet.values())

console.log(intersectionSet.values())

console.log(differenceSetA.values())

console.log(differenceSetB.values())

console.log(setA.subSet(unionSet))
