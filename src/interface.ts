// interface
enum Sex {
    Male = 'Male',
    Female = 'Female',
}
interface IPerson {
    age: number;
    gender: Sex;
    name: string;

    sayHello(msg?: string): void;
}

class Person implements IPerson {
    age: number;
    name: string;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    gender = Sex.Male;

    sayHello(msg?: string) {
        console.log(`Hello, ${msg}, and my name is ${this.name}, my sex is ${this.gender}`);
    }
}

const person = new Person('John', 25);
person.sayHello('world'); // output: Hello, world
