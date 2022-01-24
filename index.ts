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
// function setOption(options : object) : object{ //اینجا خروجی میتواند آریه ای از هر نوع باشد
function setOption(options: object): string[] { //اینجا خروجی باید آرایه ای از استرینگ ها باشد
    let ownProprties: string[] = Object.getOwnPropertyNames(options)
    //or
    // let ownProprties : string[] = [...Object.getOwnPropertyNames(options)]
    return ownProprties
}

console.log(setOption({asd: 's', gr: 2, isActive: true}));

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

console.log(opd({kj: true}));


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

console.log(rectangle({x: 2, y: 3}));

// معمولا از این anonymous type ها استفاده نیمکنیم و از جایگزین ان ها یعنی interface استفاده میکنیم


function signin(user: { email: string, password: string }): { email: string, password: string } | string {
    if (user.email === 'hhh@yahoo.com' && user.password === '1111') {
        return user
    } else {
        return 'signin failed !!!'
    }
}

console.log(signin({email: 'hhh@yahoo.com', password: '1111'}));
console.log(signin({email: 'hhhe@yahoo.com', password: '1111'}));


//optional proprties

//در اینجا میتوانیم family را وارد کنیم یا نکنیم
//اختیاری است
let mUser: { name: string, family?: string } = {
    name: 'soadj',
    // family : 'asd'
}

//optional properties and optional parameters
//isActive is optional parameters
function hUser(user: { name: string, age?: string }, isActive?: boolean | string): { name: string, age?: string } {
    return user
}

console.log(hUser(mUser));

//undefined and null types
//نال مقدار دهی میشود ولی undefined پیش فرض است
let aaa = null
let bbb

console.log('aaa : ' + aaa, 'bbb : ' + bbb);

//union types
let uInfo: (object | null | undefined)

if (uInfo !== null && uInfo !== undefined) {
    console.log('object has proprty');
}

//any type

//  در این حالت هر مقداری خواستیم میتونیم وارد کنیم بدون خطا در واقع در جاوااسکریپت همه متغیرها حالت any دارد
let egd: any = 21

egd = true
egd = 'sd'
egd = 312

//unknown type
//تفاوت و شباهت unknown و any


//never type
//در این حالت قرار نیست هیچ مقداری برگردد و قرار است خطایی تولید شود
function catchError(): never {
    throw new Error('error !!!')
}

//یکی دیگر از کاربردها در حلقه های بینهایت استفاده میشود
function infinitLoop(): never {
    while (true) {
    }
}

//تفاوت never و void


//assertion types (explicit casting)
//تبدیل دیتا تایپ متغیرها به هم دیگر

let mg: any = '22'

//با اینکار در ظاهر استرینگ هست ولی رفتاری مشابه با یک عدد رو باهاش داریم مثلا به متدهای پیش فرض درون شی اعداد رو این متغیر دسترسی داریم
let castVar = <number>mg
//راه دیگر
let castVar2 = mg as boolean


console.log(typeof castVar, castVar);
console.log(typeof castVar2, castVar2);

//tuple types
//در اصل آرایه هایی هستند با مقدارهای مشخص و تایپ های مشخص
let tuple: [x: number, y: number] = [10, 14]

console.log(tuple);

let iii: [name: string, age: number, active: boolean]
iii = ['asdasd', 213, false]

console.log(iii, typeof iii);

let fd: [element: any]
fd = ['asd']
fd = [tuple]
console.log(fd, typeof fd);

//optional tuple element
let stateVideo: [duration: number, format: string | number, title?: string]

stateVideo = [3, 's', 'asd']
stateVideo = [43, 'gt']

//tuple destructuring
let [dur, frm] = stateVideo
console.log(dur);
console.log(frm);

//اینو خودم از جاوا اسکریپت نوشتم
let gh = {lat: '11111111111', lng: '2222222222'}
let {lng, lat} = gh
console.log(lat, ' - ', lng);


//tuple & spread syntax
//اینجا صرفا فقط نوع داده را انتخاب کردیم
let ddd: [number, ...string[]]
ddd = [2, 's', 'w', 'g', '1', '2']
//اینجا میتوانیم پارامتر دوم هم اصلا وارد نکنیم
ddd = [2]

let khg: [string, string, string] = ['2', '1', '4']

//در این حالت خاص khg باید spread شود
ddd = [44, ...khg]


//Enum types

// در اینجا به طور پیش فرض خودش از 0 شروع به شماره گذاری میکند (موس روش بیاری میفهمی)
//enum default
enum State {
    Start, Done, Failed, Warning
}

//enum types string
enum Direction {
    left = 'left side', right = 'right side', up = 'up side', down = 'down side'
}

//enum custom numeric
enum Point {
    A = 7, B, C, D
}

//enum const type
//تفاوت رو در فایل کامپایل شده جاوااسکریپت ببین
const enum Post {
    Published, notPublished
}

console.log(State.Done);

//نحوه جدید پارامترهای فانکشن
function newTask({subject, state, post}: { subject: string, state: State, direction: Direction , post : Post}): { subject: string, state: State, post : Post } {
    return {
        subject,
        state,
        post
    }
}

console.log(newTask({
    subject: 'dasd',
    state: State.Start,
    direction: Direction.down,
    post : Post.Published
}))
