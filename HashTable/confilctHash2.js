/**
 * @线性探查
 * 进行遍历筛查，如果发现在某个 @index 位置上已被元素占据，则加1，如果还被占据就加2，一次类推
 * 此方法存在一定的局限性，在不固定数组的空间大小时可以使用，但如果限制了空间大小（例如在分页显示，此时数组长度是固定的，不能改变数组长度，这时就不可以使用该方法）
 * 相对于 @分离链接 ，此方法的好处在于，不需要额外的空间来辅助创建一个 @HashMap
*/

class ValuePair {
  constructor(key, value) {
    this.key = key
    this.value = value
  }

  toString() {
    return `[${this.key} - ${this.value}]`
  }
}

function HashTable() {
  let table = []

  let loseloseHashCode = function(key) {
    let hash = 0
    
    for(let i = 0; i < key.length; i++) {
      hash +=key.charCodeAt(i)
    }

    return hash % 37
  }

  this.put = function(key, value) {
    let position = loseloseHashCode(key)

    console.log(`${position} - ${key}`)

    if(table[position] === undefined) {
      table[position] = new ValuePair(key, value)
    } else {
      let index = ++position
      while(table[index] !== undefined) {
        index++
      }
      table[index] = new ValuePair(key, value)
    }
  }

  this.remove = function(key) {
    let position = loseloseHashCode(key)
    if(table[position] !== undefined) {
      if(table[position].key === key) {
        table[position] = undefined
      } else {
        let index = ++position
        while(table[index] !== undefined) {
          index++
        }
        if(table[index],key === key) {
          table[index] = undefined
        }
      }
    }
    return undefined
  }

  this.get = function(key) {
    let position = loseloseHashCode(key)
    if(table[position] !== undefined) {
      if(table[position].key === key) {
        return table[position].value
      } else {
        let index = ++position
        while(table[index] !== undefined) {
          index++
        }
        if(table[index],key === key) {
          return table[index].value
        }
      }
    }
    return undefined
  }

  this.print = function() {
    table.forEach((v, i) => {
      if(v !== undefined) {
        console.log(`${i}: ${v}`)
      }
    })
  }
}

let hash = new HashTable()

hash.put('Grandalf', 'gandalf@email.com')
hash.put('John', 'john@email.com')
hash.put('Tyrion', 'tyrion@email.com')
hash.put('Aaron', 'aaron@email.com')
hash.put('Donnie', 'doonie@email.com')
hash.put('Ana', 'ana@email.com')
hash.put('Jonathan', 'jonathan@email.com')
hash.put('Jamie', 'jamie@email.com')
hash.put('Sue', 'sue@email.com')
hash.put('Mindy', 'mindy@email.com')
hash.put('Paul', 'paul@email.com')
hash.put('Nathan', 'nathan@email.com')

hash.print()