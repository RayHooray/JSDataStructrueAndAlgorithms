class Person{
  constructor(name) {
    this.__name = name
  }

  get name() {
    console.log('get')
    return this.__name
  }

  set name(name) {
    console.log('set')
    return this.__name = name
  }
}

let people = new Person('helloworld')

console.log(people.name)