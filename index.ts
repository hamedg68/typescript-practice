let user: string = 'hamed'
let age: number = 213
let isOnline: boolean = true
let myNum: 3

const p: typeof user = '3'

console.log(`tpye of p : ${typeof p}`);
if (typeof age !== 'number') {
    console.log('ok');
} else {
    console.log('nok');

}


let myF;
//چون myF نوعش مشخص نیست ما هر بار که مقدار دهی میکنیم میتواند نوع متغیر با توجه به مقداری که ما میدهیم تغییر کند
myF = 'rgr'
myF = 3
myF = true

console.log(typeof myF);

let options = {
    debug: false,
    vol: 'asd',
    max: 4
}


console.log(typeof options);

// function getFullName( f:string , a:string) : string{
//     return f +' - '+ a
// }

const getFullName = (f: number, a: string): string => {
    return f + ' - ' + a
}

console.log(getFullName(1, '3'));

//چون یک آرایه نوعی از آبجکت است اینجا خروجی تابع میتواند آبجکت باشد و مقدار برگشتی آرایه باشد
// function setOption(options : object) : object{ //اینجا خروجی میتواند آریه ای هر نوع باشد
function setOption(options: object): string[] { //اینجا خروجی باید آرایه ای از استرینگ ها باشد
    let ownProprties: string[] = Object.getOwnPropertyNames(options)
    //or
    // let ownProprties : string[] = [...Object.getOwnPropertyNames(options)]
    return ownProprties
}

console.log(setOption({ asd: 's', gr: 2, isActive: true }));

function printer(data: string): void {//چون نوع تابع به صورت void تعریف شده نمیتواند مقدار برگشتی داشته باشد و خطا میدهد
    // return data
    console.log(`data is : ${data}`);
}

printer('hellow sa')


//توابعی داریم خودش یک تابع دیگر را برمیگرداند
function callback(fun: Function): Function {
    return fun()
}

console.log(callback(() => {
    return 'ali'
}));

function generateUniqID() {
    let str = Date.now().toString(22)
    let str2 = Math.round(Math.random()).toString(32)
    return str + str2 + str
}

console.log(generateUniqID());



//union types
//این متغییر میتواند فقط استرینگ یا بولین بگیرد هرچی دیگه بگیرد خطا میدهد
let mngrg: string | boolean = '2'

function opd(option: object | string): object | string[] {
    return Object.getOwnPropertyNames(option)
}

console.log(opd({ kj: true }));


//چک نوع وردی تابع
function getAge(age: string | number): number | string {
    if (typeof age === 'string') {
        return `string age is : ${age}`
    } else {
        return `number age is : ${age}`
    }
}

console.log(getAge('44'));
console.log(getAge(23));

//anonymous types   
//در اینجا متغیری تعریف کردیم که فقط میتواند پراپرتی های تعریف شده داخل پرانتز با نوع مشخص شده را دریافت کند
//اگر پراپرتی اضافه بنویسیم خطا میگیرد
let todo: { subject: string, status: (string | number), visible: boolean } = {
    subject: 'sada',
    status: 32,
    visible: false,
}

console.log(typeof todo);

//anonymos types in function
function rectangle(point: { x: number, y: number }): number {
    return point.x * point.y
}

console.log(rectangle({ x: 2, y: 3 }));

// معمولا از این anonymous type ها استفاده نیمکنیم و از جایگزین ان ها یعنی interface استفاده میکنیم


function signin(user: { email: string, password: string }): { email: string, password: string } | string {
    if (user.email === 'hhh@yahoo.com' && user.password === '1111') {
        return user
    } else {
        return 'signin failed !!!'
    }
}

console.log(signin({ email: 'hhh@yahoo.com', password: '1111' }));
console.log(signin({ email: 'hhhe@yahoo.com', password: '1111' }));


//optional proprties and optional parameters

//در اینجا میتوانیم family را وارد کنیم یا نکنیم
//اختیاری است
let mUser: { name: string, family?: string } = {
    name: 'soadj',
    // family : 'asd'
}

function hUser(user: { name: string, age?: string }): { name: string, age?: string } {
    return user
}

console.log(hUser(mUser));
