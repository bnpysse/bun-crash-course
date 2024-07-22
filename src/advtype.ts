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
let order: OrderWithCustomer = {id: 1, amount: 10, name: 'John', age: 30};
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
let origin: Point = {x: 0, y: 0};
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

// 拥有复杂参数的函数
interface User {
    id: number;
    name: string;
    email: string;
    profile: {
        age: number;
        address: {
            city: string;
            country: string;
        }
    }
    roles: string[];
}

function processUser(user: User): string {
    const {name, email, profile, roles} = user;
    const {age, address} = profile;
    const {city, country} = address;
    return `The user is ${name}, the email is ${email}, the age is ${age}, the address is ${city}, ${country}, the roles are ${roles.join(', ')}`;
}

const user: User = {
    id: 1,
    name: 'John',
    email: 'john@gmail.com',
    profile: {
        age: 30,
        address: {
            city: 'Beijing',
            country: 'China'
        }
    },
    roles: ['admin', 'editor']
}
console.log(processUser(user));

// 状态管理实例，比较复杂
type Listener<T> = (state: T) => void;

class Store<T> {
    private state: T;
    private listeners: Listener<T>[] = [];

    constructor(state: T) {
        this.state = state;
    }

    setState(newState: Partial<T>) {
        this.state = {...this.state, ...newState};
        this.listeners.forEach(listener => listener(this.state));
    }

    getState() {
        return this.state;
    }

    subscribe(listener: Listener<T>) {
        this.listeners.push(listener);
        return () => {
            const index = this.listeners.indexOf(listener);
            if (index > -1) {
                this.listeners.splice(index, 1);
            }
        }
    }
}

interface AppState {
    user: {
        name: string;
        isLoggedIn: boolean;
    }
    todos: {
        id: number;
        text: string;
        completed: boolean;
    }[];
}

// 创建应用Store
const appStore = new Store<AppState>({
    user: {
        name: '',
        isLoggedIn: false
    },
    todos: []
});

const login = (name: string) => appStore.setState({user: {name, isLoggedIn: true}});
const logout = () => appStore.setState({user: {name: '', isLoggedIn: false}});
const addTodo = (text: string) => {
    const todos = appStore.getState().todos;
    const newTodo = {id: todos.length + 1, text, completed: false};
    appStore.setState({todos: [...todos, newTodo]});
}
const toggleTodo = (id: number) => {
    const todos = appStore.getState().todos
        .map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo
        );
    appStore.setState({todos})
}

// 使用Store
const unsubscribe = appStore.subscribe(state => console.log('State updated:', state));

login('John');
addTodo('Buy milk');
addTodo('Buy eggs');
toggleTodo(1);
logout();
unsubscribe();