// 定义接口类型 Person
interface Person {
    name: string;
    age: number;
}

// 使用数组类型表示法声明 Person 对象的数组
const persons1: Person[] = [
    { name: "张三", age: 30 } as Person,
    { name: "李四", age: 25 } as Person,
];

// 使用泛型表示法声明 Person 对象的数组
// 该数组元素类型为 { name: string; age: number }
//
// 注意: 泛型表示法的使用方式与接口表示法的使用方式是完全一样的
let persons3: (Person)[];
persons3 = [
    {name: "张三", age: 30} as Person,
    {name: "李四", age: 25} as Person
];

// 使用元组表示法声明 Person 对象的数组
const persons4: [Person, Person] = [
    ({name: "张三", age: 30}) as Person,
    ({name: "李四", age: 25}) as Person
];

// 使用对象字面量表示法声明 Person 对象的数组
const persons5: Person[] = [
    {name: "张三", age: 30} as Person,
    {name: "李四", age: 25} as Person
];
const persons2: ({ name: string; age: number })[] = [
    { name: "王五", age: 35 },
    { name: "赵六", age: 28 }
];

// 输出数组内容
console.log(persons1);
console.log(persons2);