const Dict = (function() {
  let _items = new WeakMap()

  return class Dict {
    constructor() {
      _items.set(this, {})
    }

    set(key, value) {
      let items = _items.get(this)
      items[key] = value
    }

    delete(key) {
      let items = _items.get(this)
    }

    has(key) {
      let items = _items.get(this)
      return items.hasOwnProperty(key)
    }

    get(key) {
      let items = _items.get(this)
    }

    clear() {
      _items.set(this, {})
    }

    size() {
      let items = _items.get(this)
      return Object.keys(items).length
    }

    keys() {
      let items = _items.get(this)
      return Object.keys
    }

    values() {
      let values = []
      let items = _items.get(this)
      for(let key in items) {
        if(this.has(key)) {
          values.push(items[key])
        }
      }
  
      return values
    }

    getItems() {
      let items = _items.get(this)
      return items
    }
  }
})()