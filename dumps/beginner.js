// The Javascript Handbook
// The JavaScript Beginner's Handbook follows the 80/20 rule: learn in 20% of the time the 80% of a topic.

let a
a = 0

// Assignment
const a1 = 1, b = 2
let c = 1, d = 2

// Addition
const three = 1 + 2
const four = three + 1

// subtraction
const two = 4 - 2

// Division
const result1 = 20 / 5 //result === 4
const result2 = 20 / 7 //result === 2.857142857142857

1 / 0 //Infinity
    - 1 / 0 //-Infinity


// remainder
const result3 = 20 % 5 //result === 0
const result4 = 20 % 7 //result === 6

// A reminder by zero is always NaN , a special value that means "Not a Number":
1 % 0 //NaN
    - 1 % 0 //NaN

// exponentiation
1 ** 2 //1
2 ** 1 //2
2 ** 2 //4
2 ** 8 //256
8 ** 2 //64

// Precedence
let a = 1 * 2 + 5 / 2 % 2
let a = 2 + 5 / 2 % 2
let a = 2 + 2.5 % 2
let a = 2 + 0.5
let a = 2.5

// Arrays
// An array is a collection of elements.
// Arrays in JavaScript are not a type on their own.
// Arrays are objects.

// initialize
const a = [] // array literal syntax
const a = Array() //  Array built-in function.

// You can pre-fill the array using this syntax:
const a = [1, 2, 3]
const a = Array.of(1, 2, 3)

// multi-dimensional arrays

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

matrix[0][0] //1
matrix[2][0] //7

a[0] //1
a[1] //2
a[2] //3

// You can initialize a new array with a set of values using this syntax, which first
// initializes an array of 12 elements, and fills each element with the 0 number:

Array(12).fill(0)

const a = [1, 2, 3]
a.length //3

// add an item to an array
a.push(4)
a.unshift(0)
a.unshift(-2, -1)

// remove an item from an array
a.pop()
a.shift()

// join two or more arrays
//  join multiple arrays by using concat() :
const a = [1, 2]
const b = [3, 4]
const c = a.concat(b) //[1,2,3,4]
a //[1,2]
b //[3,4]

// use the spread operator ( ... ) in this way:
const a = [1, 2]
const b = [3, 4]
const c = [...a, ...b]
c //[1,2,3,4]


// find a specific item in the array
a.find((element, index, array) => {
    //return true or false
})

// Returns the first item that returns true.
a.find(x => x.id === my_id)
// Returns undefined if the element is not found

// findIndex() works similarly to find() , but returns the index of the first item
// that returns true, and if not found, it returns undefined :

a.findIndex((element, index, array) => {
    //return true or false
})

a.includes(value)
a.includes(value, i)

// Loops
// while
const list = ['a', 'b', 'c']
let i = 0
while (i < list.length) {
    console.log(list[i]) //value
    console.log(i) //index
    i = i + 1
}

// You can interrupt a while loop using the break keyword, like this:
while (true) {
    if (somethingIsTrue) break
}

// and if you decide that in the middle of a loop you want to skip the current
// iteration, you can jump to the next iteration using continue :
while (true) {
    if (somethingIsTrue) continue
    //do something else
}

const list = ['a', 'b', 'c']
let i = 0
do {
    console.log(list[i]) //value
    console.log(i) //index
    i = i + 1
} while (i < list.length)

const list = ['a', 'b', 'c']
for (let i = 0; i < list.length; i++) {
    console.log(list[i]) //value
    console.log(i) //index
}

const list = ['a', 'b', 'c']
for (const value of list) {
    console.log(value) //value
}

// A function is a block of code, self contained.
// Here's a function declaration:
function getData() {
    // do something
}

getData()

function getData() {
    //do something
}
function getData(color) {
    //do something
}
function getData(color, age) {
    //do something
}

function getData(color, age) {
    //do something
}
getData('green', 24)
getData('black')

function getData(color, age) {
    //do something
    if (typeof age !== 'undefined') {
        //...
    }
}

// You can have default values for parameters, in case they are not passed:
function getData(color = 'black', age = 25) {
    //do something
}

function getData() {
    // do something
    return 'hi!'
}

function getData() {
    // do something
    return 'hi!'
}
let result = getData()

// To return multiple values, you can return an object, or an array, like this:
function getData() {
    return ['Flavio', 37]
}
let [name, age] = getData()

// Functions can be defined inside other functions:
const getData = () => {
    const dosomething = () => { }
    dosomething()
    return 'test'
}

// Arrow Functions
// Arrow functions are a recent introduction to JavaScript.
function getData() {
    //...
}

to

    () => {
    //...
}

let getData = function getData() {
    //...
}

let getData = function () {
    //...
}

let getData = function () {
    //...
}
getData()

let getData = () => {
    //...
}
getData()

const getData = () => console.log('hi!')

// Parameters are passed in the parentheses:
const getData = (param1, param2) =>
    console.log(param1, param2)

// one parameter
const getData = param => console.log(param)

const getData = () => 'test'
getData() //'test'

// You can have default values for parameters, in case they are not passed:
const getData = (color = 'black',
    age = 2) => {
    //do something
}

// Objects
// Any value that's not of a primitive type (a string, a number, a boolean, a
// symbol, null, or undefined) is an object.
const car = {
}

const car = new Object()
const car = Object.create()

function Car(brand, model) {
    this.brand = brand
    this.model = model
}

const myCar = new Car('Ford', 'Fiesta')
myCar.brand //'Ford'
myCar.model //'Fiesta'

// Objects are always passed by reference.
let age = 36
let myAge = age
myAge = 37
age //36

const car = {
    color: 'blue'
}
const anotherCar = car
anotherCar.color = 'yellow'
car.color //'yellow'


// Object properties
// Objects have properties, which are composed by a label associated with a value.

const car = {
}

const car = {
    color: 'blue'
}

const car = {
    color: 'blue',
    'the color': 'blue'
}

// We can retrieve the value of a property using 2 different syntaxes.
// The first is dot notation:
car.color //'blue'

// The second(which is the only one we can use for properties with invalid
//     names), is to use square brackets:
car['the color'] //'blue'

const car = {
    brand: {
        name: 'Ford'
    },
    color: 'blue'
}

car.brand.name
car['brand']['name']

// update the value
const car = {
    color: 'blue'
}
car.color = 'yellow'
car['color'] = 'red'

// delete
delete car.brand

// Object methods
// Functions can be assigned to a function property, and in this case they are called methods.
const car = {
    brand: 'Ford',
    model: 'Fiesta',
    start: function () {
        console.log('Started')
    }
}
car.start()

const car = {
    brand: 'Ford',
    model: 'Fiesta',
    start: function () {
        console.log(`Started
    ${this.brand} ${this.model}`)
    }
}
car.start()

const car = {
    brand: 'Ford',
    model: 'Fiesta',
    start: () => {
        console.log(`Started
    ${this.brand} ${this.model}`) //not going to work
    }
}
car.start()

// This is because arrow functions are not bound to the object.

const car = {
    brand: 'Ford',
    model: 'Fiesta',
    goTo: function (destination) {
        console.log(`Going to ${destination}`)
    }
}
car.goTo('Rome')

// Classes
// Let's take a person object:
const person = {
    name: 'Flavio'
}

// We can create a class named Person(note the capital P, a convention
//     when using classes), that has a name property:

class Person {
    name
}

// Now from this class, we initialize a flavio object like this:
const flavio = new Person()

// flavio is called an instance of the Person class.
flavio.name = 'Flavio'

// Methods are defined in this way:
class Person {
    hello() {
        return 'Hello, I am Flavio'
    }
}

// and we can invoke methods on an instance of the class:
class Person {
    hello() {
        return 'Hello, I am Flavio'
    }
}
const flavio = new Person()
flavio.hello()

// There is a special method called called constructor() that we can use to
// initialize the class properties when we create a new object instance.
class Person {
    constructor(name) {
        this.name = name
    }
    hello() {
        return 'Hello, I am ' + this.name + '.'
    }
}

const flavio = new Person('flavio')
flavio.hello() //'Hello, I am flavio.'

// You can define a method as static to allow it to be executed on the class instead:
class Person {
    static genericHello() {
        return 'Hello'
    }
}
Person.genericHello() //Hello

// Inheritance
// A class can extend another class, and objects initialized using that class
//     inherit all the methods of both classes.

class Person {
    hello() {
        return 'Hello, I am a Person'
    }
}

// We can define a new class Programmer that extends Person:
class Programmer extends Person {
}

const flavio = new Programmer()
flavio.hello() //'Hello, I am a Person'

// Inside a child class, you can reference the parent class calling super() :
class Programmer extends Person {
    hello() {
        return super.hello() +
            '. I am also a programmer.'
    }
}
const flavio = new Programmer()
flavio.hello()

// The above program prints Hello, I am a Person. I am also a programmer

// Asynchonous Programming and Callbacks

// Promises

// Instead of doing:
doSomething(result => {
    console.log(result)
})

// We call a promise - based function in this way:
doSomething()
    .then(result => {
        console.log(result)
    })

doSomething()
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })


// Instead of declaring it as a normal function:
const doSomething = () => {
}

// We declare it as a promise object:
const doSomething = new Promise()

// and we pass a function in the Promise constructor:
const doSomething = new Promise(() => {
})

// This function receives 2 parameters.The first is a function we call to resolve
// the promise, the second a function we call to reject the promise.
const doSomething = new Promise(
    (resolve, reject) => {
    })


// Resolving a promise means complete it successfully(which results in calling
//     the then() method in who uses it).
//     Rejecting a promise means ending it with an error(which results in calling the
//     catch () method in who uses it).

const doSomething = new Promise(
    (resolve, reject) => {
        //some code
        const success = /* ... */
    if (success) {
            resolve('ok')
        } else {
            reject('this error occurred')
        }
    }
)

// Async and Await
// Async functions are a higher level abstraction over promises.
