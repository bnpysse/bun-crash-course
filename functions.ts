
const higherOrder = (fn: (a: number, b: number) => number): (x: number, y: number) => number => (x, y) => {
  console.log(`Comparing ${x} and ${y}`);
  return fn(x, y);
};

const compareNumbers = (a: number, b: number): number => a - b;
const loggedCompare = higherOrder(compareNumbers);

const result = loggedCompare(10, 5);
console.log(result)

interface Person {
  name: string;
  age: number;
  hobbies: string[]
}

const people: Person[] =[
  {name: 'Alice', age:25, hobbies:['reading', 'painting']},
  {name: 'Bob', age:30, hobbies:['gaming', 'cooking']},
  {name: 'Charlie', age: 35, hobbies:['sport', 'traveling']}
];

for( let i=0; i<people.length; i++){
  console.log(`Name: ${people[i].name}`);
  console.log(`Age: ${people[i].age}`);
  console.log(`Hobbies: ${people[i].hobbies.join(', ')}`);
  console.log('---')
}

for (const person of people) {
  console.log(`Name: ${person.name}`);
  console.log(`Age: ${person.age}`);
  console.log(`Hobbies: ${person.hobbies.join(', ')}`);
  console.log('----');
}
interface Dictionary{
  [key:string]:string | number;
}

function countProperties(arr: Dictionary[]): number {
    return arr.reduce((count, item) => count + Object.keys(item).length, 0);
}

// 使用示例
const dictArray: Dictionary[] = [
    { a: 1, b: 1, c:32 },
    { c: 3, d: 4, e: 5 }
];

const totalProperties = countProperties(dictArray);
console.log(`总属性数: ${totalProperties}`);


function traverseDictionaryArray(arr: Dictionary[]): void {
    for (const index in arr) {
        const item = arr[index];
        for (const key in item) {
            if (item.hasOwnProperty(key)) {
                console.log(`索引: ${index}, 键: ${key}, 值: ${item[key]}`);
            }
        }
    }
}

// 使用示例
const dictArray1: Dictionary[] = [
    { name: "老张", age: 50 },
    { name: "老李", position: "经理" }
];

traverseDictionaryArray(dictArray1);

console.log('-----------------')

for (let index in dictArray1) {
  let item = dictArray1[index];
  console.log(`索引: ${index}: `)
  for (let key in item){
    if (item.hasOwnProperty(key)) {
      console.log(`键: ${key}, 值: ${item[key]}`)
    }
  }
}
console.log('----Map----');
const result1 = 
dictArray1.map(item=>
    Object.keys(item)
        .map(key=>`${key}: ${item[key]}`)
        .join(' '))
    .join('\n');
//     Object.entries(item)
//         .map(([key,value]) => `${key}: ${value}`)
//         .join(';')
// );
// 以上两种方式都可以正确地访问到数组的值
console.log(result1);

//---------------------------------------- 
//测试一下，我弄不太明白const与let的区别
//---------------------------------------- 
const a = "Frontend Masters"
let b = "Frontend Masters"

const c = { learnAt: "Frontend Masters" }
let d = { learnAt: "Frontend Masters" }

const e = Object.freeze({ learnAt: "Frontend Masters" })

const str = 'Hello'
console.log(`The a is ${a}, the b is ${b}`);

let val = [...str].map((value,index) => {
  return `index: ${index} value: ${value}`
}).join('\n');
console.log(val);
type MyTuple = [
    ...[number, number],
    ...[string, string, string]
]
const x: MyTuple = [1, 2, "a", "b", "c"];
const [_ignore,_ignore1,...rest] = x;
console.log(rest);

type YesCompile1 = [...[number, number], ...string[]]
type NoCompile1 = [...number[], ...string[]]
const x1: YesCompile1 = [[1, 2], ["a", "b", "c"]];
const x2: NoCompile1 = [1, 2, "a", "b", "c"];
const [_ignore2, ...rest2] = x1;
console.log(rest2);
console.log(typeof rest2);

const vector: [number, number, number] = [1, 2, 3];
vector.push(4);
console.log(vector, `Typeof vector is ${typeof vector}`);
let age: number = 38;
age = Number.Nan;
console.log(age);


const factorial = n => n === 0 ? 1 : n * factorial(n - 1);
console.log(factorial(5));

export class Person{
    name: string = '';
}
interface Person {
    age?: number;
}

let say1 = (name:string) => {
    console.log(`Hello, ${name}`);
}

say1('Donglida')


let str1 = 'not a number';
let num: number = str1 as any;
console.log(num);

let v = {str: 'hello', num: 42};
console.log(v);

console.log('four score'.split(' '));

function foo(x: string | string[]) {
    if (Array.isArray(x)) {
        return x;
    } else {
        return x;
    }
}

console.log(foo('123'), `Type of ${typeof foo(['123', 'abc'])}`);

const greet = (name: string) => `Hello, ${name}`;
// 你好，世界
console.log(greet('你好，世界！'));
const states =[
    // 产生国家名称与首都名称10个
    {name: 'Alabama', abbrev: 'AL'},
    {name: 'Alaska', abbrev: 'AK'},
    {name: 'Arizona', abbrev: 'AZ'},
    {name: 'Arkansas', abbrev: 'AR'},
    {name: 'California', abbrev: 'CA'},
];

// for (const state of states){
//     console.log(`Name: ${state.name}, Abbrev: ${state.abbrev}`);
// }
// states.forEach(state => {
//     console.log(`Name: ${state.name}, Abbrev: ${state.abbrev}`);
// });

states.map(state => {
    console.log(`Name: ${state.name}, Abbrev: ${state.abbrev}`);
});

interface State1 {
    name: string;
    capital: string;
}
const states1: State1[] = [
    {name:'Alabama', capital:'Montgomery'},
    {name:'China', capital:'Beijing'},
    {name:'America', capital:'Washington'}
];

states1.forEach(state => {
    console.log(`Name: ${state.name}, Capital: ${state.capital}`);
});

const names = ['Alice', 'Bob'];
const greetings = names.map(name => `Hello, ${name.toUpperCase()}`);
console.log(greetings);
console.log(greetings.join('\n'));

interface Car {
    make: string
    model: string
    year: number
}

function printCar(car: Car){
    console.log(`Car: ${car.year} ${car.make} ${car.model}`);
}
printCar( {make: 'Toyota', model: 'Corolla', year: 2021});
