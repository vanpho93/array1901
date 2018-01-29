class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() { console.log('Xin chao toi la ' + this.name); }
}

const teo = new Person('Teo Nguyen', 10);
const ti = new Person('Ti Nguyen', 10);

teo.sayHello();
ti.sayHello();

Person.prototype.sayHi = function() { console.log('Hi, I am ' + this.name); };
teo.sayHi();
ti.sayHi();
