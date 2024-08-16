// 定义接口类型 Person
interface Person {
    name: string;
    age: number;
    location?: string;
}

// 使用数组类型表示法声明 Person 对象的数组
const persons1: Person[] = [
    {name: "张三", age: 30} as Person,
    {name: "李四", age: 25} as Person,
];

// 使用泛型表示法声明 Person 对象的数组
// 该数组元素类型为 { name: string; age: number }
//
// 注意: 泛型表示法的使用方式与接口表示法的使用方式是完全一样的
let persons3: (Person)[];
persons3 = [
    {name: "张三", age: 30},
    {name: "李四", age: 25}
];

// 使用元组表示法声明 Person 对象的数组
const persons4: [Person, Person] = [
    {name: "张三", age: 30},
    {name: "李四", age: 25}
];

// 使用对象字面量表示法声明 Person 对象的数组
const persons5: Person[] = [
    {name: "张三", age: 30},
    {name: "李四", age: 25}
];
const persons2: ({ name: string; age: number })[] = [
    {name: "王五", age: 35},
    {name: "赵六", age: 28}
];

// 输出数组内容
console.log(persons1);
console.log(persons2);


// Map的使用方式和Set的使用方式是完全一样的
const map1 = new Map<string, number>();
map1.set("张三", 30);
map1.set("李四", 25);
map1.set("王五", 35);
console.log(map1,`\nThe length of map1 is ${map1.size}`);
const map2 = new Map([
    ["a", 30], ["b", 25], ["c", 35]
]);
console.log(`The length of map2 is ${map2.size},and the map2 is:${JSON.stringify(Object.fromEntries(map2))}`);
console.log(Object.fromEntries(map2));
console.log('The map2 from array.from(map) is:', Array.from(map2).map(x => x[0] + ":" + x[1]));
console.log('通过map之console.log(item)来访问map:');
Array.from(map2).map(item => console.log(item));
Array.from(map2).forEach(item => console.log(item));
console.log('不使用Array.from，而直接使用[...map2]，其实也是将map2转为数组，然后再遍历数组');
[...map2].forEach(item => console.log(item));
console.log('使用 for 循环遍历 map2');
for (const [key, value] of map2) {
    console.log(`${key}: ${value}`);
}
console.log(Object.entries([...map2]).map(item => item[1][0] + ":" + item[1][1]));
console.log(Object.fromEntries(map2),typeof(Object.fromEntries(map2)));
const arr2: string[] = ['a','b','c','d'];
console.log(Object.entries(arr2).map(item => item[0] + ":" + item[1]))

const params = new URLSearchParams('name=张三&age=30');
const paramsObj = Object.fromEntries(params);
console.log(paramsObj,typeof params, typeof paramsObj);
const obj = { a:1, b:2, c:3, d:4, e:5 };
const map3=new Map(Object.entries(obj));
console.log(map3,map3.size,typeof map3);
console.log(Object.entries(obj).map(([k, v]) => [k, v * 2]));
const filterOfMap3 = Object.entries(obj).filter(item => item[1] > 2);
console.log(`The filter of map3 is: ${JSON.stringify(filterOfMap3)}, type of filterOfMap3 is ${typeof filterOfMap3}`);
console.log(`Type of obj is ${typeof obj}, type of map3 is ${typeof map3}`);
console.log(obj)
console.log(Object.entries(obj)
    .filter(([key,value])=> value >= 3)
    .map(([k, v]) => [k, v * 2])
);

type PersonInfo = {
    name: string;
    age: number;
}
const p: PersonInfo = {name: "张三", age: 30};
console.log(p);
const p2 = {name: "张三", age: 30} as Person;
console.log(p2);

interface User {
    id: number;
    name: string;
    email: string;
}

type Partial<T> = {
    [P in keyof User]: User[P] ;
}

type PartialUser = Partial<User>;
const users: PartialUser[] = [
    {id: 1, name: "张三", email: "123@qq.com"},
    {id: 2, name: "李四", email: "234@qq.com"},
    {id: 3, name: "王五", email: "345@qq.com"},
    {id: 4, name: "赵六", email: "456@qq.com"},
    {id: 5, name: "田七", email: "567@qq.com"},
    {id: 6, name: "钱八", email: "678@qq.com"},
    {id: 7, name: "孙九", email: "789@qq.com"},
    {id: 8, name: "周十", email: "890@qq.com"},
    {id: 9, name: "吴十一", email: "901@qq.com"},
];
users.forEach(item => item.email.includes("4") && item.email.includes("5") ? console.log(JSON.stringify(item)): null);
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}
const person: Person = {name: "张三", age: 30} as Person;
console.log(`Get the name is: ${getProperty(person, "name")}`);
console.log(`Get the age is: ${getProperty(person, "age")}`);

function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] {
    return items.map(item => item[key]);
}
const peoples: Person[] = [
    {name: "张三", age: 30, location: "New York"} as Person,
    {name: "李四", age: 25, location: "London"} as Person,
    {name: "王五", age: 35, location: "Toyota"} as Person
];

const names = pluck(peoples, "name");
const ages = pluck(peoples, "age");
const locations = pluck(peoples, "location");
console.log(names, ages, locations);

const Colors = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
}
type ColorKeys = typeof Colors;
type ColorValues = keyof ColorKeys;
const colorKey: ColorKeys = Colors.blue as ColorKeys;
console.log(colorKey);
const colorValue: ColorValues = "green" as ColorValues;
console.log(colorValue);
Object.entries(Colors).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});

type NameTypeOfPerson = Person["name"];
type AgeTypeOfPerson = Person["age"];
const name: NameTypeOfPerson = "张三";
const age: AgeTypeOfPerson = 30;
console.log(typeof name,typeof age);

type PartialPerson = { [K in keyof Person]?: Person[K] };
const partialPerson: PartialPerson = {name: "张三"};
console.log(partialPerson);

type PersonValues = Person[keyof Person];
const personValues: PersonValues = {name: "张三", age: 30, location: "New York"} as PersonValues;
console.log(personValues);
console.log('---');
Object.entries(personValues).map(item => console.log(item));

type Flip<T extends Record<string,string>> = {
    [K in keyof T as T[K]]: K
};

type ColorCodes = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
}

type ColorNames = Flip<ColorCodes>;
const colorNames: ColorNames = {
    "#FF0000": "red",
    "#00FF00": "green",
    "#0000FF": "blue"
};
console.log('---其实是相当于将ColorCodes的key和value进行了反转---');
Object.entries(colorNames).map(item => console.log(item));

type PickName = Pick<Person, "name">;
const pickName: PickName = {name: "张三"};
console.log(pickName, typeof pickName);
Object.entries(pickName).map(item => console.log(item));

type ColorType = typeof Colors;
const ct: ColorType = Colors;
console.log(ct);
type ColorKeysOfTypes = keyof typeof Colors;
const ckot: ColorKeysOfTypes = "blue";
console.log(ckot);


type NameAndAge = {name: string} & {age: number};
const nameAndAge: NameAndAge = {name: "张三", age: 30};
console.log(nameAndAge);

console.log('-----');
type PartialPerson2 = Partial<Person>;
const partialPerson2: PartialPerson2 = {name:'John'};
console.log(partialPerson2);
