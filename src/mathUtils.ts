// 好像还是尽量不使用命名空间，因为命名空间的定义是全局的，不好管理
// 使用命名空间主要还是为了兼容旧代码，比如之前的函数名叫做add，现在改成了Geometry.add
// export function add(a: number, b: number): number {
//     return a + b;
// }
namespace Geometry {
    export function area(width: number, height: number): number {
        return width * height;
    }

    export function perimeter(width: number, height: number): number {
        return 2 * (width + height);
    }
}

class Shape {
    color: string;

    constructor(color: string) {
        this.color = color;
    }

    getColor(): string {
        return this.color;
    }
}

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(color: string, width: number, height: number) {
        super(color);
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }
}

console.log(new Rectangle("red", 10, 20).getColor());
console.log(new Rectangle("blue", 5, 10).getArea());

// Encapsulation
class BankAccount {
    private balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if (amount > this.balance) {
            throw new Error('Insufficient funds');
        } else {
            this.balance -= amount;
        }
    }
    getBalance(): number {
        return this.balance;
    }
}
const myAccount = new BankAccount(1000);
myAccount.deposit(500);
myAccount.withdraw(200);
console.log(myAccount.getBalance());

// Polymorphism
class Animal {
    makeSound(): void {
        console.log('The animal makes a sound');
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log('The dog barks');
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log('The cat meows');
    }
}
function makeAnimalSound(animal: Animal): void {
    animal.makeSound();
}

const dog = new Dog();
const cat = new Cat();
makeAnimalSound(dog);
makeAnimalSound(cat);

// Interfaces
interface Printable{
    print(): void;
}
class Document implements Printable{
    content: string;
    constructor(content: string) {
        this.content = content;
    }
    print(): void {
        console.log(`The content is \'${ this.content }\'`);
    }
}

class Invoice implements Printable{
    amount: number;
    constructor(amount: number) {
        this.amount = amount;
    }
    print(): void {
        console.log(`The amount is ${this.amount}`);
    }
}

const docment = new Document('This is a document');
const invoice = new Invoice(100);
docment.print();
invoice.print();