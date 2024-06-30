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