let getArray = (value: any, repeat: number): any[] => {
    return new Array(repeat).fill(value);
};

let arr = getArray('123', 5);

let res = arr.map(item => item.length);
console.log(res);
console.log(arr); // [1, 1, 1, 1, 1]

let getArray2 = <T>(value: T, repeat: number = 5): T[] => {
    return new Array(repeat).fill(value);
}

let arr2 = getArray2(3);
console.log(arr2.reduce((acc, item) => acc += item, 0)); // [3, 3, 3, 3, 3]
console.log(arr2); // ['123', '123', '123']

let arr3 = getArray2<number>(1, 3);
arr3.push('4');
console.log(arr3);

let getProps = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key];
}

let obj = {name: 'John', age: 30, city: 'New York', job: 'Developer'};
console.log(getProps(obj, 'name')); // John
console.log(getProps(obj, 'age')); // 30
console.log(getProps(obj, 'city')); // New York
console.log(getProps(obj, 'job')); // undefined

// 泛型函数允许在函数定义中使用类型参数，以便在函数调用时动态指定类型。
// 泛型函数的类型参数可以是任意标识符，但通常使用单个大写字母来表示类型参数。
// 泛型函数的类型参数可以有默认值，这样在调用函数时可以省略类型参数。
// 泛型函数的类型参数可以有约束，以便限制类型参数的取值范围。
function identity<T>(arg: T): T {
    return arg;
}

let result = identity<string>('Hello');
console.log(result, `\tThe type of result is : ${typeof result}`); // Hello

// 泛型接口
interface Container<T> {
    value: T;
}

let container: Container<number> = {value: 123};
console.log(container.value, `, The container type is: ${typeof container}`); // 123

// 泛型类
class Stack<T> {
    private elements: T[] = [];

    push(element: T) {
        this.elements.push(element);
    }

    pop(): T | undefined {
        return this.elements.pop();
    }
}

let stack = new Stack<number>();
stack.push(1);
stack.push(2);
let item = stack.pop();
console.log(item, ` and the type of "item" is ${typeof item}`); // 2


// Type Gymnastics
type Check<T> = T extends string ? 'string' : 'number';
type Result = Check<string>; // 'string'

const checkType = <T>(value: T) => {
    return (typeof value === 'string') ? 'string' : 'number';
}
// 这个与上面的 Check 类型别名是等价的，实际上不使用extends,我觉得这是个更好的方式
let result2 = checkType<string>('Hello');
console.log(result2, `\tThe type of result2 is : ${result2}`); // string

const checkType2 = <T>(value: T) => (typeof value === 'string') ? 'string' : 'number';
let result3 = checkType2<number>(123);
console.log(result3, `\tThe type of result3 is : ${result3}`); // number

interface Person {
    name: string;
    age: number;
}

type PersonKeys = keyof Person;

const getProp = <T, K extends keyof T>(obj: T, key: K) => {
    return obj[key];
}
// 下面为什么报错？
// 我想访问Person的所有属性
// 使用Map或者是forEach都不行
// 但是使用for in可以访问到所有属性
// 这是为什么？

const person = {name: 'John', age: 30};
Object.entries(person).forEach((value, key) => {
    console.log(key, value);
});
for (let key in person) {
    console.log(key, person[key as keyof Person]);
}
// extends 有不同的用途
// 1.接口继承
interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

let dog: Dog = {name: 'Tommy', breed: 'Poodle'};
// 上面的 dog 继承了 Animal 接口，所以它必须包含 Animal 接口中的所有属性。

// 2.类继承
class Animal2 {
    move(from: string): string {
        return `roaming the ${from}...`;
    }
}

class Dog2 extends Animal2 {
    bark(level: number = 1) {
        return `Woof! I'm ${level}!`;
    }
}

let dog2 = new Dog2();
console.log(dog2.move('park'));
console.log(dog2.bark(12));

// 3.泛型约束
// extends 关键字用于约束类型参数的取值范围，可以是基本类型、对象类型、接口、类、泛型等。
// extends 关键字可以约束多个类型参数，使用 & 连接多个约束条件。
// extends 关键字还可以约束类型参数为某个类的子类。
// extends 关键字还可以约束类型参数为某个类的实例。
// extends 关键字还可以约束类型参数为某个接口的实现。
// extends 关键字还可以约束类型参数为某个对象的键。
// extends 关键字还可以约束类型参数为某个对象的值。
// extends 关键字还可以约束类型参数为某个对象的键和值。
function printProperty<T extends { name: string }, K extends keyof T>(obj: T, key: K) {
    console.log(key, obj[key]);
}

// 该函数的第一个类型参数 T 必须包含 name 属性，第二个类型参数 K 必须是 T 的键。
printProperty({name: 'John', age: 30}, 'name'); // name John
printProperty({name: 'John', age: 30}, 'age'); // age 30

// 4.条件类型
type IsString<T> = T extends string ? true : false;
type X = IsString<string>; // true
type Y = IsString<number>; // false
type Z = IsString<string | number>; // true
type A = IsString<string | number | boolean>; // true
type B = IsString<string | number | boolean | object>; // true
const x: X = false;
console.log(x);

// 5.类型约束
interface Lengthwise {
    length: number;
}

function logLength<T extends Lengthwise>(arg: T) {
    console.log(arg.length);
    return arg;
}

let obj2 = logLength({length: 10});
console.log(obj2);

// 6.类型别名
type Length = 3;
type Three = 3;
type Name = 'John';
type Person2 = { name: string, age: number };
type Person3 = Person;
type Person4 = { name: string, age: number, job: string };
type Person5 = Person4;
type Person6 = { name: string, age: number, job: string, address: string };
const person6: Person6 = {name: 'John', age: 30, job: 'Developer', address: 'New York'};
console.log(person6);

// extends 在 TypeScript 中非常强大和灵活，可以用于类型继承、约束和条件类型等多种场景，是 TypeScript 类型系统中的一种核心概念。

// 6.内置的泛型函数
interface Person {
    name: string;
    age: number;
    address: string;
}

type PartialPerson = Partial<Person>;
// Partial<T> 类型用于将类型 T 的所有属性设置为可选属性。age 是可选的
const partialPerson: PartialPerson = {name: 'John'};
console.log(partialPerson);

type RequiredPerson = Required<Person>;
const requiredPerson: RequiredPerson = {name: 'John', age: 30} as RequiredPerson;
// 可以加上断言，因为 age 是必须的
console.log(requiredPerson);

// Pick<T, K> 类型用于从类型 T 中选择部分属性 K 并返回一个新的类型。k
type PickPerson = Pick<Person, 'name' | 'address'>;
const person7: PickPerson = {name: 'John', address: 'New York'};
console.log(person7);

function pickProperties<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
    const result = {} as Pick<T, K>;
    keys.forEach(key => {
        result[key] = obj[key];
    });
    return result;
}

const nameAndAge = pickProperties({name: 'John', age: 30, address: 'New York'}, ['name', 'address']);
console.log(nameAndAge);
// pickProperties 函数接受一个泛型参数 T 和一个属性数组 keys。通过使用 Pick<T, K>，我们将从给定对象 obj 中选择指定的属性 keys，并创建一个新的对象。

// 7.Exclude<T, U>
// 从类型 T 中排除类型 U，返回一个新类型，该新类型包含在 T 中存在但不在 U 中存在的成员类型。
type T1 = Exclude<'a' | 'b' | 'c', 'a'>; // 'b' | 'c'

// 8.Omit<T, K>
// 从类型 T 中排除属性 K，返回一个新类型，该新类型包含 T 中除了 K 之外的所有属性。
type PersonWithoutAge = Omit<Person, 'age'>

// 9.Readonly<T>
// 将类型 T 的所有属性设置为只读属性，返回一个新类型。
type ReadonlyPerson = Readonly<Person>
const readonlyPerson: ReadonlyPerson = {name: 'John', age: 30, address: 'New York'} as ReadonlyPerson;
console.log(readonlyPerson);

// 泛型为类型体操是 TypeScript 中强大的类型系统的关键组成部分。
// 通过使用泛型，可以创建可重用、灵活和类型安全的代码。
