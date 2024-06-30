class Person {
    name: string;
    age: number;

    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }
    say(msg: string='Hello,'):string {
        return `${msg} ${this.name}! I am ${this.age} years old.`;
    }
    static food: string = 'Pizza';
    static eat() {
        console.log(`I like ${Person.food}`);
    }
}
let p: Person = new Person('John', 25);
console.log(p.say())
Person.eat();

class Student extends Person {
    grade: number;
    constructor(name:string, age:number, grade:number) {
        super(name, age);
        this.grade = grade;
    }
    say():string {
        return `${super.say()} I am in grade ${this.grade}.`;
    }
}
let s: Student = new Student('Jane', 30, 9);
console.log(s.say())

type Sex = 'Male' | 'Female'
// 参数属性
class Animal {
    private _male: Sex
    constructor(public name: string, public age: number) {}
    set sex(val: Sex){
        if (val !== 'Male' && val !== 'Female'){
            throw new Error('人的性别只能是“Male”、“Female”')
        }
        this._male = val
    }
    get sex(): Sex {
        return this._male
    }
}
let a: Animal = new Animal('Lion', 2);
console.log(a.name); // Lion
let b: Animal = new Animal('Tiger', 3);
b.sex = 'Male'; // 正确
console.log(b.name,' and ', b.sex); // Tiger
a.sex = 'Female'; // 正确
console.log(a.name,' and ', a.sex); // Tiger

// abstract class
abstract class People {
    abstract name: string;
    abstract say(msg: string): string;
    protected constructor(name: string) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} is eating.`);
    }
}

class Employee extends People {
    constructor(name: string) {
        super(name);
        // 得对Employee中的name重新赋值，否则会被认为是People中的name
        this.name = name;
    }
    say(msg: string): string {
        return `${msg} ${this.name}`;
    }

    name: string;
}

let john = new Employee('John');
console.log(john.say('Hello, '));
john.eat();  // 抽象类中的方法可以被继承，但是不能被实例化
