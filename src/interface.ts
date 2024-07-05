// 常量枚举与普通枚举的区别
// 普通枚举会生成真实存在的对象，而常量枚举不会生成真实存在的对象，而是编译时会直接替换成对应的常量值。

// 自动类型推断
// 1.根据初始会自动推断
// 2.根据上下文类型自动推断
// 3.最佳通用类型推断
// 4.上下文归类推断

enum Color {
    Red,
    Green,
    Blue
}
let colorName: string = Color[2];

function getColorName(color: Color):string {
    return Color[color]
}

function getColorName1(color: Color): keyof typeof Color {
    return Color[color] as keyof typeof Color;
}
// 我想获得Green的名字，但是我不知道Green的值是多少，所以我只能通过上下文类型来获得Green的值，然后通过toString()方法转换成字符串
// 但是得到的却是"2"，这是因为Green是个数字，编译器自动推断出Green的值是2，而不是Green的名字，如何获得Green的名字呢？
// 这时候就需要用到常量枚举了，通过上下文类型来获得Green的值，然后通过toString()方法转换成字符串

let result = getColorName(Color.Green);
// console.log(result, 'and type is', typeof result);
// console.log(getColorName1(Color.Green), 'and type is', typeof getColorName1(Color.Green));

// console.log(`typeof is ${typeof Color.Green}, the value of Green is ${Color.Green}`)
Object.entries(Color).forEach((([key, value]) => {
    if (isNaN(Number(key))) {
        console.log(`${key}: ${value}`)
    }
}))

Object.keys(Color)
    .filter(key => isNaN(Number(key)))
    .forEach(key => {
        console.log(`Key: ${key}, Value: ${Color[key as keyof typeof Color]}`);
    });

// 联合类型
let mergeFn = <T, U>(arg1:T, arg2:U): T & U => {
    return {...arg1,...arg2} as T & U;
}
let res = mergeFn({a: 1}, {b: 2});
console.log(res);
let res1 = mergeFn({name: 'Alice', age: 25}, {gender: 'Female'});
console.log(res1);

let obj1 = {name: 'Alice', age: 25};
let obj2 = {gender: 'Female'};
let res2 = mergeFn(obj1, obj2);
console.log(...Object.keys(obj1));
console.log(...Object.values(obj1));
Object.entries(obj1).forEach(([key, value]) => {
    console.log(`Key: ${key}, Value: ${value}`);
});

for (const [key, value] of Object.entries(obj1)) {
    console.log(`Key: ${key}, Value: ${value}`);
}

let getRandomValue = (): (string |number) => {
    let num = Math.random();
    if (num > 0.5) {
        return 'hello';
    } else {
        return 123;
    }
}
let value = getRandomValue();
console.log(value);

let sym1 = Symbol();
let sym2 = Symbol();
console.log(Object.entries(sym1), sym2, sym1 === sym2);

// 只读数组
const arr: readonly number[] = [1, 2, 3, 4] as const;
const arr1: readonly number[] = [1, 2, 3, 4];

arr1[0] = 5;
console.log(arr1);

const s: [string, string, boolean] = ["a", "b", true];
console.log(s[0], s[1], s[2]);
Object.entries(s).forEach((key, value) => {
    console.log(`Key: ${key}, Value: ${value}`);
});
console.log(Object.entries(s).map((key, value) => {
    return `Key: ${key}, Value: ${value}, key is ${typeof key} value is ${typeof value}`;
}));


// interface继承type
// 对于类型Country来说，通过接口CountryWithPopulation继承类型Country，可以添加新的属性population
// 但是CountryWithPopulation的capital属性是readonly，不能修改
type Country = {
    name: string;
    capital: string;
}
interface CountryWithPopulation extends Country {
    population: number;
}
let country: CountryWithPopulation = {
    name: 'China',
    capital: 'Beijing',
    population: 1373000000
};
console.log(country);
let countries: CountryWithPopulation[] = [
    {'name': 'China', 'capital': 'Beijing', 'population': 1373000000},
    {'name': 'USA', 'capital': 'Washington', 'population': 330000000},
    {'name': 'India', 'capital': 'New Delhi', 'population': 1373000000}
];
console.log(countries);