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
console.log(arr2.reduce((acc,item) => acc += item, 0)); // [3, 3, 3, 3, 3]
console.log(arr2); // ['123', '123', '123']

let arr3 = getArray2<number>(1, 3);
arr3.push('4');
console.log(arr3);

let getProps = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key];
}

let obj = {name: 'John', age: 30, city: 'New York', job:'Developer'};
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
let container: Container<number> = { value: 123 };
console.log(container.value,`, The container type is: ${typeof container}`); // 123

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
console.log(item,` and the type of "item" is ${typeof item}`); // 2


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

const person = { name: 'John', age: 30 };
Object.entries(person).forEach((value, key) => {
    console.log(key, value);
});
for (let key in person) {
    console.log(key, person[key as keyof Person]);
}
