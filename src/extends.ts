interface Person {
    name: string;
    age: number;
    email?: string;
    greet(): void;
}
interface Employee extends Person {
    employeeId: number;
    department: string;
    clockIn(): void;
}
let p1: Person = <Person>{
    name: "John",
    age: 30,
    greet() {
        console.log("Hello, my name is " + this.name);
    }
}

p1.greet();

const emp1: Employee = <Employee>{
    name: "Smith",
    age: 30,
    employeeId: 1234,
    department: "IT",
    clockIn() {
        console.log("Clocking in...");
    },
    greet() {
        console.log("Hello, in Employee my name is " + this.name);
    },
}
emp1.greet();
emp1.clockIn();

class Car {
    brand: string;
    model: string;
    year: number;
    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}
const myCar: Car = new Car("Toyota", "Corolla", 2010);
console.log(myCar);
Object.entries(myCar).forEach(([key, value]) => {
    console.log(`${key}(${typeof key}): ${value}(${typeof value})`);
});

class Vehicle {
    speed: number;
    constructor(speed: number) {
        this.speed = speed;
    }
    move() {
        console.log("Moving at " + this.speed + " km/h");
    }
}

class CarWithSpeed extends Vehicle {
    wheels: number;
    constructor(speed: number, wheels: number) {
        super(speed);
        this.wheels = wheels;
    }
    move() {
        super.move();
        console.log("The Car Moving with " + this.wheels + " wheels");
    }
    honk() {
        console.log("HONK");
    }
}

const myCarWithSpeed: CarWithSpeed = new CarWithSpeed(60, 4);
myCarWithSpeed.move();
myCarWithSpeed.honk();

type Shape1 =
    | { kind: 'circle'; radius: number }
    | { kind: 'rectangle'; width: number; height: number };
function area(shape: Shape1): number {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'rectangle':
            return shape.width * shape.height;
    }
}
type Shape2 = Circle | Rectangle;
interface Circle {
    radius: number;
}
interface Rectangle {
    width: number;
    height: number;
}
function calculateArea(shape: Shape2) {
    if ("radius" in shape && shape.radius) {
        // inside this block, TypeScript knows shape is a Circle
        return Math.PI * shape.radius ** 2;
    } else {
        // here, TypeScript knows shape is a Rectangle
        return "width" in shape ? shape.width * shape.height : 0;
    }
}
const circle: Shape2 = { radius: 5 };
const rectangle: Shape2 = { width: 10, height: 20 };

console.log(`The circle\'s area is: ${calculateArea(circle)}`);
console.log(`The rectangle\'s area is: ${calculateArea(rectangle)}`);

interface HasLength {
    length: number;
}
function getLength<T extends HasLength>(item: T): number {
    return item.length;
}
console.log(`The { length: 10 } \'s length is : ${getLength({ length: 20 })}`);
console.log(`The "Hello, World!"\'s length is : ${getLength("Hello, World!")}`)
console.log(`The [1, 2, 3]\'s length is : ${getLength([1, 2, 3])}`)
const value = 12313;
console.log(`The ${value}\'s length is : ${getLength(String(value))}`);

// Map
const numbers = [1,2,3,4,5];
const doubledNumbers = numbers.map(n => n * 2);
console.log(doubledNumbers);
numbers.push(-1);
doubledNumbers.push(-1);
console.log(`${JSON.stringify(numbers)}`)
console.log(doubledNumbers);
Object.entries(doubledNumbers).forEach(([key, value]) => {
    console.log(`${JSON.stringify(key)}(${typeof key}): ${value}(${typeof value})`);
});
const numbersAlter = numbers.map(n => n * 3);
console.log(`${JSON.stringify(numbersAlter)}`)