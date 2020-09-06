function Queue() {
  let items = [];
  // 插入
  this.enqueue = function(value) {
    items.push(value)
  }
  // 先进先出
  this.dequeue = function() {
    return items.shift()
  }
  // 查看头部元素
  this.fornt = function() {
    return items[0]
  }
  // 是否为空
  this.isEmpty = function() {
    return items.length === 0
  }
  // 查看元素个数
  this.size = function() {
    return items.length
  }
  // 打印队列
  this.print = function() {
    console.log(items.toString())
  }
}