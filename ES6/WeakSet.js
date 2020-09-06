/**
 * WeakSet 的成员只能是对象，不能是其他类型
 * WeakSet 中的对象是弱饮用，垃圾回收机制不考虑 WeakSet 对该对象的应用
 * 也就是说，如果不再应用该对象，垃圾回收机制会自动回收该对象所占内存，不考虑是否存在于 WeakSet 中
 * 不可遍历
 * WeakSet 的成员是不适合引用的，因为它会随时消失。另外，由于 WeakSet 内部有多少个成员，取决于垃圾回收机制有没有运行， 运行前后很可能成员个数是不一样的，而垃圾回收机制何时运行是不可预测的，因此 ES6 规定 WeakSet 不可遍历。
 * @add : WeakSet
 * @delete : Boolean
 * @has : Boolean
*/

const ws = new WeakSet();
const obj = {};
const foo = {};
ws.add(globalThis);
ws.add(obj);
ws.add(foo)
console.log(ws.has(globalThis)); // true
console.log(ws.has(obj));
console.log(ws.has(foo)); // false
console.log(ws.delete(globalThis));
ws.has(globalThis); // false