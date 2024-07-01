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