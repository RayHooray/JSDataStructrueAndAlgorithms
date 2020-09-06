/**
 * 集合：由一组无序且唯一（不重复）的项组成。
 *      与数学概念中有限集合相同
 * 空集：不包含任何元素的集合
*/
function SetFunc() {
  let items = {}
  // 添加一个新的项
  this.add = function(value) {
    if(!this.has(value)) {
      items[value] = value
      return true
    }
    return false
  }
  // 删除一个指定的项
  this.remove = function(value) {
    if(this.has(value)) {
      delete items[value]
      return true
    }
    return false
  }
  // 判断是否有指定项
  this.has = function(value) {
    return items.hasOwnProperty(value)
  }
  // 清除集合
  this.clear = function() {
    items = {}
  }
  // 集合中的元素数量
  this.size = function() {
    return Object.keys(items).length
  }
  // 返回一个包含集合所有元素的数组
  this.values = function() {
    let values = []
    for(let i = 0, keys = Object.keys(items); i < keys.length; i++) {
      values.push(items[keys[i]])
    }
    return values
  }
}

module.exports = { SetFunc }