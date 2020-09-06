const MapDictionary = (function() {
  let _items = new WeakMap()

  return class MapDictionary {
    constructor() {
      _items.set(this, new Map())
    }
    set(key, value) {
      let items = _items.get(this)
      items.set(key, value)
    }
    delete(key) {
      if(this.has(key)) {
        let items = _items.get(this)
        items.delete(key)
        return true
      }
      return false
    }
    has(key) {
      let items = _items.get(this)
      if(items.has(key)) return true
      return false
    }
    get(key) {
      let items = _items.get(this)
      return items.get(key)
    }
    clear() {
      let items = _items.get(this)
      items.clear()
    }
    size() {
      let items = _items.get(this)
      return items.size()
    }
    keys() {
      let items = _items.get(this)
      return items.keys()
    }
    values() {
      let items = _items.get(this)
      return items.values()
    }
    getItems() {
      let items = _items.get(this)
      return items
    }
  }
})()

let dict = new MapDictionary()

dict.set(2222, 'hhhhh')

console.log(dict.get(2222))