// let daysOfWeek = new Array()

// let daysOfWeeks = new Array(7) // 指定了数组的长度

// let weeks = new Array('sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'staturday')

// console.log(daysOfWeek, daysOfWeeks, weeks)


// 斐波那契数列

let fibonacci = [1, 1, 2]

console.log(fibonacci.slice(1, 2))
for(let i = 3; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
}


fibonacci.push(11, 12, 13)

// find 相当于 filter，一个返回元素，一个返回数组
console.log(11111111, fibonacci.find(v => {
  return v === 1
}))

console.log(fibonacci)


// 斐波那契数列函数
function FibonacciFunc(num) {
  if(num === 1 || num === 2) {
    return 1
  }
  if(num < 1) console.error("参数无效")
  return FibonacciFunc(num - 1) + FibonacciFunc(num - 2)
}
