/**
 * 更好的 哈希函数
 * 良好的哈希函数包含几个方面
 *  1、插入和检索的速度更快（性能优良）
 *  2、较低的冲突可能性
 * 
 * 比较之前的两个实现方式，每一种方法都实现来解决冲突的方式，但缺点可能就出在性能方面，分离链接要实现一个 @LinkedList 实例的 @HashMap 创建一个实例的开销还是比较大的
 * 线性探查，虽不需要借助 @LinkedList 来避免冲突，但是要不停的进行遍历查询判断位置是否有值
 * 
 * djb2 实现只是在插入层面上避免了冲突出现的概率，而并非解决了冲突
 *  1、hash 初始化是赋予一个质数作为值， 一般情况下我为 5381
 *  2、hash 与一个数想成，当作一个魔力数
 *  3、而后和 “lose lose” 一样，将字母的 ASCII 码相加
 *  4、最后，将使用相加的 hash 的和与一个质数相除（质数的大小一般和期望的散列表的长度有关系，基本上是在等长情况下寻找大于长度的一个质数）
*/

function HashTable() {
  let table = []

  let djb2HashCode = function(key) {
    let hash = 5381
    
    for(let i = 0; i < key.length; i++) {
      hash = hash * 33 + key.charCodeAt(i)
    }

    return hash % 1013
  }

  this.put = function(key, value) {
    let position = djb2HashCode(key)

    console.log(`${position} - ${key}`)

    table[position] = value
  }

  this.remove = function(key) {
    table[djb2HashCode(key)] = undefined
  }

  this.get = function(key) {
    return table[djb2HashCode(key)]
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