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

    table[position] = value
  }

  this.remove = function(key) {
    table[loseloseHashCode(key)] = undefined
  }

  this.get = function(key) {
    return table[loseloseHashCode(key)]
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