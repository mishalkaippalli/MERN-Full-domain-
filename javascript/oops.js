//emncapsulation.

const { extname } = require("node:path");

class BankAccount{
    constructor(owner, balance){
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount){
        this.balance+=amount;
        console.log(`deposited amount of ${amount}`);
    }
    withdraw(amount){
        if(amount > this.balance){
            console.log(`withdrawn ${amount}`)
        }
        this.balance-=amount;
        console.log(`withdrawn ${amount}`);
    }
}
const account = new BankAccount("Mishal", 1000);
account.deposit(500);
account.withdraw(200);
console.log(account.balance);

//using # for private variables
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();

acc.deposit(1000);

console.log(acc.getBalance());

// ERROR
// // console.log(acc.#balance)

// Abstraction
//hiding internal implementation details and shoiwing only necessary features.

class coffeeMachine{
    startMachine(){
        console.log("Machine started");
    }
    boilWater(){
        console.log('boiling water..')
    }

    makeCoffee(){
        this.startMachine();
        this.boilWater();

        console.log("coffee ready")
    }
}
const machine = new coffeeMachine();
machine.makeCoffee();

//inheritance
//one class can acquire properties and methods from another class.
class Animal{
    eat(){
        console.log('eating..')
    }
}
class Dog extends Animal{
    bark(){
        console.log("barking...")
    }
}
const dog = new Dog();
dog.eat();
dog.bark();

// super keyword
class Animal{
    constructor(name){
        this.name = name
    }
}
class Dog extends Animal{
    constructor(name, breed){
        super(name);
        this.breed = breed;
    }
}
const dog = new Dog("rocky", "labrador");

//polymorphism

class Animal{
    sound(){
        console.log("animal makes sound")
    }
}

class dog extends Animal{
    sound(){
        console.log("dog barks..")
    }
}

class Cat extends Animal{
    sound(){
        console.log("cate meows...")
    }
}
const dog = new Dog();
const cat = new Cat();

dog.sound();
cat.sound();

//class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

const person1 = new Person("Mishal", 29);

person1.greet();


Constructor Function (Before ES6)

Before classes, JavaScript used constructor functions.

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
};

const p1 = new Person("Mishal", 29);

p1.greet();

Prototype in JavaScript

JavaScript uses prototype-based inheritance.

Every object has access to a prototype object.

Example
function User(name) {
  this.name = name;
}

User.prototype.sayHello = function () {
  console.log(`Hello ${this.name}`);
};

const user1 = new User("Mishal");

user1.sayHello();

//static method
class User {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 3) {
      console.log("Name too short");
      return;
    }

    this._name = value;
  }
}

const user = new User("Mishal");

console.log(user.name);

user.name = "Mi";