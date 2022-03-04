/*generic types*/
//یک تایپ منعطف است

import { type } from "os";

// است generic type یک Array
let myArray1: Array<string> = ["das", "3"];
let myArray2: Array<number> = [2, 3];
let myArray3: Array<boolean> = [true, false];

type TUser = { id: number; name: string; active: boolean };

const mRes: Promise<TUser> = new Promise((resolve, reject) => {
    resolve({ id: 2, name: "hamed", active: true });
});

mRes.then((value) => {
    // console.log(value.name);
});

/*generic types in functions*/

function getRandomElement<T>(list: Array<T>): T {
    let index = Math.floor(Math.random() * list.length);
    return list[index];
}

console.log(getRandomElement<number>([1, 2, 3, 4, 5, 6]));
console.log(getRandomElement(["a", "b", "c", "d", "e", "f"]));

//intersection types

type IID = {
    id: number;
    name: string;
};

type CContact = {
    phone: number;
    email: string;
};

function mergeInfo<T, U>(args1: T, args2: U): T & U {
    return {
        ...args1,
        ...args2,
    };
}

console.log(mergeInfo<IID, CContact>({ id: 1, name: "hamed" }, { phone: 32434, email: "asd@yahoo.co" }));

/*constraint in generics*/
// ها generic محدودیت در

function mergeInfoII<T extends object, U extends object>(args1: T, args2: U): T & U {
    return {
        ...args1,
        ...args2,
    }
}

console.log(mergeInfoII<object, object>({ id: 1, name: 2 }, { phone: 212, email: 'asd' }));


function getPropertyValue<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key]
}

console.log(getPropertyValue({ id: 2, name: 'hamed', active: true }, 'name'));


// function getRandomItem<T extends Array<string | number>>(list : T){
function getRandomItem<T extends Array<string> | Array<number>>(list: T) {
    let index = Math.floor(Math.random() * list.length)
    return list[index]
}

console.log(getRandomItem<Array<string>>(['t', 'b', 'y']));
console.log(getRandomItem<Array<number>>([1, 4, 5]));

/*generic types in interfaces*/

interface MPair<T, U> {
    key: T
    value: U
}

let MPV: MPair<string, Array<string>>

MPV = {
    key: 'name',
    value: ['a', 'b', 'c', 'd', 'e']
}

console.log(MPV.key, ':', MPV.value);

interface MOptions<T> {
    [key: string]: T
}

let YYT: MOptions<boolean> = {
    active: true,
    'isON': false
}


interface IMECollection<T> {
    items: T[]

    addItem(item: T): void
    removeItem(item: T): void
    getItems(): T[]
}

class IMEList implements IMECollection<number>{
    items: number[];

    constructor() {
        this.items = []
    }

    addItem(item: number): void {
        this.items.push(item)
    }

    removeItem(item: number): void {
        let index = this.items.indexOf(item)
        if (index > -1) {
            this.items.splice(item, 1)
        }
    }

    getItems(): number[] {
        return this.items
    }
}

let IMECC = new IMEList()

IMECC.addItem(1)
IMECC.addItem(2)
IMECC.addItem(3)
IMECC.addItem(4)

console.log(IMECC.getItems());

IMECC.removeItem(2)

console.log(IMECC.getItems());


/*generic types in classes*/

class pairKey<K, V>{
    private key: K
    private value: V

    constructor(key: K, value: V) {
        this.key = key
        this.value = value
    }

    getValue() {
        return {
            key: this.key,
            value: this.value
        }
    }
}

let ppp = new pairKey<string, Array<string>>('names', ['ali', 'reza', 'hasan', 'hamed'])

console.log(ppp.getValue());


interface ZSHCollection<T> {
    add(item: T): void
    remove(item: T): void
    getItems(): T[]
}

class ZSHTest<T> implements ZSHCollection<T>{
    private items: T[];

    constructor() {
        this.items = []
    }

    add(item: T): void {
        this.items.push(item)
    }

    remove(item: T): void {
        let index = this.items.indexOf(item)
        if (index > -1)
            this.items.splice(index, 1)
    }

    getItems(): T[] {
        return this.items
    }
}

let TTTT = new ZSHTest<number>()

TTTT.add(0)
TTTT.add(2)
TTTT.add(4)
TTTT.add(6)
TTTT.add(8)

TTTT.remove(8)

console.log(TTTT.getItems());


class stack<T> {
    private elemens: Array<T>

    constructor(private size: number) {
        this.elemens = []
    }

    public isFull(): boolean {
        return this.elemens.length === this.size
    }

    public isEmpty(): boolean {
        return this.elemens.length === 0
    }

    public push(element: T): void {
        if (this.isFull())
            throw new Error('stack is full !!!')
        this.elemens.push(element)
    }

    public pop(): void {
        if (this.isEmpty())
            throw new Error('stack is empty !!!')
        this.elemens.pop()
    }
}

let stk = new stack<number>(5)


function generateRandomNumber(high: number, low: number) {
    return Math.floor(Math.random() * (high - low + 1) - low)
}

while (!stk.isFull()) {
    let n = generateRandomNumber(10, 1)
    console.log(`stack is pushed with element ${n}`);
    stk.push(n)
}


/*conditional types*/
 
type stringOrNot<T> = T  extends string ? string : never

type nonNull<T>  = T extends null | undefined ? never : T

type emailAddress = string

type nonNullEmail  = nonNull<emailAddress>

let email : nonNullEmail

email = 'sadas'