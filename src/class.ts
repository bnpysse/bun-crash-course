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
}
