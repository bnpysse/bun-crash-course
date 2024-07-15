// Union Type
let pet: string | number;
pet = 'dog';
pet = 42;
// pet = true;

// Intersection Types
interface Order {
    id: number;
    amount: number;
}
interface Customer {
    name: string;
    age: number;
}

type OrderWithCustomer = Order & Customer;
let order: OrderWithCustomer = { id: 1, amount: 10, name: 'John', age: 30 };
const orders: OrderWithCustomer[] = [
{id: 1, amount: 10, name: 'John', age: 30},
{id: 2, amount: 20, name: 'Jane', age: 25},
{id: 3, amount: 30, name: 'Joe', age: 35},
{id: 4, amount: 40, name: 'Jill', age: 45},
{id: 5, amount: 50, name: 'Jack', age: 40}];
console.log(`The amount > 30 is :${orders.filter(item => item.amount > 30)
.map(item => JSON.stringify(item))
.join(', ')}`);
orders.forEach(item => {
console.log(item.id, item.amount, item.name, item.age);
});

// Type Aliases
type Point = {
x: number;
y: number;
}

type Shape = 'circle' | 'square' | 'triangle';
let origin: Point = { x: 0, y: 0 };
let shape: Shape = 'circle';
console.log(origin, shape);

// Generics
function reverse<T>(items: T[]): T[] {
    return items.reverse();
}
const numbers = [1, 2, 3, 4, 5];
const reversedNumbers = reverse(numbers);
console.log(reversedNumbers);
const names = ['John', 'Jane', 'Joe'];
console.log(`The normal is ${JSON.stringify(names)}, the reverse is ${JSON.stringify(reverse(names))}`);