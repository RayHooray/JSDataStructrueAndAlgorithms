/**
 * WeakMap 只接受对象作为键名（ null 除外），不接受其他类型的值作为键名
 * WeakMap 的键名所指向的对象，不计入垃圾回收机制
 * WeakMap 的设计目的在于，有时我们想在某个对象上面存放一些数据，但是这会形成对于这个对象的引用。
*/