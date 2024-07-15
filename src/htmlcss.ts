// 看到一本新书，HTML CSS Coding MADE SIMPLE，一时兴起，写了这个文件
// 2017/07/28
let age: number = 25;
const name: string = "John";
let isStudent: boolean = true;

// Arrays
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["apple", "banana", "orange"];

// Tuples
let person: [string, number] = ["John", 25];

// Enums
enum Color {
    Red,
    Green,
    Blue
}

let favoriteColor: Color = Color.Blue;

// Any
let dynamicValue: any = 5;
dynamicValue = "hello";
dynamicValue = true;

//Void
function sayHello(): void {
    console.log("Hello!");
}

// Null and Undefined
let nullValue: null = null;
let undefinedValue: undefined = undefined;

// Never
function error(message: string): never {
    throw new Error(message);
}

// Object
let user: object = {
    name: "John",
    age: 25
};

let num1: number = 10;
let num2: number = 5;
let isGreaterThan: boolean = num1 > num2;
let isLessThan: boolean = num1 < num2;
let isEqual: boolean = num1 === num2;

// 类型断言
let someValue: any = "hello";
let strLength: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;

let temperature: number = 30;
if (temperature > 30) {
    console.log("It's warm outside!");
} else if (temperature < 30) {
    console.log("It's cold outside!");
} else {
    console.log("It's just right outside!");
}

let fruit: string = "apple";
switch (fruit) {
    case "apple":
        console.log("It's an apple!");
        break;
    case "banana":
        console.log("It's a banana!");
        break;
    default:
        console.log("It's neither an apple nor a banana!");
}

numbers.forEach(number => console.log(number));
const sumOfNumbers = numbers.reduce((acc, number) => acc + number, 0);
console.log(`The sum of ${JSON.stringify(numbers)} is ${numbers.reduce((acc, number) => acc + number, 0)}`);

// Functions
function addNumbers(num1: number, num2: number): number {
    return num1 + num2
}

let result: number = addNumbers(5, 10);
console.log(result);

// Interfaces
interface Person {
    name: string;
    age: number;
    sayHello:() => void;
}
const person1: {name: string; age: number;sayHello: () => void } = {
    name: "John",
    age: 25,
    sayHello: () => {
        console.log("Hello!");
    }
}

console.log(person1);
// Object.keys(person1).forEach((value,key) => {
//     console.log(key, value, person1[value]);
// });
//

// 这里一定注意，与Python不同，它是Value在前，Key在后。
Object.entries(person1).forEach((value,key) => {
    console.log(key, value );
});

class Car{
    brand: string;
    color: string;
    model: string;
    constructor(brand: string, color: string, model: string) {
        this.brand = brand;
        this.color = color;
        this.model = model;
    }
    startEngine() {
        console.log(`${this.brand} car started!`);
    }
}
let myCar = new Car("BMW", "blue", "X5");
myCar.startEngine();