
interface Person {
    name: string
}

interface Lifespan {
    birth: Date
    death?: Date
}

type PersonSpan = Person & Lifespan;

const ps: PersonSpan = {
    name: 'Alan Turing',
    birth: new Date('1912-06-23'),
    death: new Date('1954-06-07')
}

type K = keyof (Person & Lifespan)

interface SumInterface {
    (a: number, b: number): number
    kind: 'Sum' | 'Sub' | 'Mul' | 'Div'
}

let sum = ((a,b) => a + b) as SumInterface;
sum.kind = 'Sum';

console.log(`The sum is ${sum(1, 2)} and the kind is ${sum.kind}`)
console.log(`The sum(1,2) is "${typeof sum(1,2)}" and the kind is "${typeof sum.kind}"`)

const demo = function() {
    demo.count ++;
    console.log(`The count is ${demo.count}`);
}
demo.count = 0;
demo();
demo();
demo();

interface CounterInterface {
    (): void
    count: number
}
let counter: CounterInterface = (function() {
    let fn = () => {
        counter.count ++;
        console.log(`The count is ${counter.count}`);
    }
    fn.count = 0;
    return fn;
})();
counter();
counter();
counter();
counter();

function add(x: number, y: number, z?:number): number {
    return x + y + (z || 0);
}
console.log(add(1, 2));
console.log(add(1, 2, 3));

function add1(x: number, ...args: number[]): number {
    let result = x;
    // args.forEach(arg => result += arg);
    args.map(arg => result += arg);
    // for (let i = 0; i < args.length; i++) {
    //     result += args[i];
    // }
    return result;
}
console.log(add1(1, 2, 3, 4, 5, 6)); // 15


interface MathInterface {
    add: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
    multiply: (a: number, b: number) => number;
    divide: (a: number, b: number) => number;
    kind: 'Add' | 'Subtract' | 'Multiply' | 'Divide';
}

let mathOperations: MathInterface = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => {
        if (b === 0) {
            throw new Error('Division by zero is not allowed');
        }
        return a / b;
    },
    kind: 'Add'
};

function mathOperationsFunction(a: number, b: number, kind: 'Add' | 'Subtract' | 'Multiply' | 'Divide'): number {
    try {
        switch (kind) {
            case 'Add':
                return mathOperations.add(a, b);
            case 'Subtract':
                return mathOperations.subtract(a, b);
            case 'Multiply':
                return mathOperations.multiply(a, b);
            case 'Divide':
                return mathOperations.divide(a, b);
            default:
                throw new Error('Invalid operation kind');
        }
    } catch (error) {
        console.error(error.message);
        return NaN; // 或者你可以选择抛出错误，取决于你的需求
    }
}

console.log(mathOperationsFunction(1, 2, 'Add'));  // Outputs: 3
console.log(mathOperationsFunction(1, 2, 'Subtract'));  // Outputs: -1
console.log(mathOperationsFunction(1, 2, 'Multiply'));  // Outputs: 2
console.log(mathOperationsFunction(1, 0, 'Divide'));  // Outputs: Error message and NaN
