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

//anonymous types in function
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


//optional properties

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
function newTask({subject, state, post}: { subject: string, state: State, direction: Direction, post: Post }): { subject: string, state: State, post: Post } {
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
    post: Post.Published
}))


//expression conditional

let yok: string = 4 > 3 ? '000' : '111'
let yhr: string = 3 > 3 ? '333' : 4 > 4 ? '2232' : '1254'
let erge: string = (3 > 3 && 6 > 4) ? '333' : (4 > 4 || 4 > 5) ? '2232' : '1254'

//خودم نوشتم
function fun1({min, max}: { min: number, max: number }): any {
    return min
}

function fun2(minMax: { min: number, max: number }): any {
    return minMax.min
}

console.log(fun1({min: 2, max: 4}))
console.log(fun2({min: 3, max: 3}))

//Interfaces
//در اینتر فیس فقط میتوان تعریف کرد نمیشود مقدار دهس کرد
interface IPerson {
    name: string
    age: number
    email: string
    password: string
}

//نوع این متغیر از جنس یک interface هست
let myPerson: IPerson
myPerson = {
    name: 'sad',
    age: 2,
    email: 'asd',
    password: 'ddsd',
}

console.log(typeof myPerson, myPerson)

interface IPost {
    subject: string
    published: boolean
    description: string
    dateCreated?: Date
    view: number | string

    onPublished(): string
}

function nPost(post: IPost): IPost {
    return {...post}
    //or
    //return post
}

console.log(nPost(
    {
        subject: 'string',
        published: false,
        description: 'string',
        view: 2,
        onPublished() {
            return 'on published'
        }
    }
))


//nullish coalescing(تعیین مقدار پیش فرض)
let apiData = false
//با گذاشتن || مقدار پیش فرض به متغیر به جای null یا undefined یا '' یا false یا 0 قرار داده میشود
let getApiData = apiData || 'default value 1'
//با گذاشتن ?? مقدار پیش فرض به متغیر به جای null یا undefined قرار داده میشود
let getApiData2 = apiData ?? 'default value 2'
console.log(getApiData)
console.log(getApiData2)


//optional chaining
//چک که آیا یک پراپرتی درون یک آبجکت وجود دارد یا نه

let yy: any = {
    name: 'asad',
    details: {
        fName: 'asda',
        security: {
            email: 'sdasd',
            password: 'sadasd'
        }
    }
}
//چک اینکه مثلا پراپرتی fName وجود دارد یا نه
console.log(yy.details?.fName)

//Type Aliases
// این امکان را میدهد که جلوگیری کنیم از تکرار union type  و object type
//تایپ به شکل مستعار
//union type
type mID = string | number | null | undefined | boolean

function getMID(id: mID): mID {
    return id
}

console.log(getMID(231))
console.log(getMID('rew'))

//object type
//چون معمولا object type طولانی هستند میتوان از interface استفاده کنیم که البته میتوانیم از alias type هم استفاده کنیم
type myPerson = {
    fullName: [firstName: string, lastName: string]
    details: {
        fName: string
        account: {
            bank: string
            number: number
            security: {
                pass: string
            }
        }
    }
}

function guser(user: myPerson): myPerson {
    return user
}

console.log(guser({
    fullName: ['ha', 'sad'],
    details: {
        fName: 'sadasd',
        account: {
            bank: 'sad',
            number: 312,
            security: {
                pass: 'asda'
            }
        }
    }
}))


//literal types
//در اصل تایپ نیستند بلکه مقدار هستند و تایپ یک متغیر را مقدار در نظر میگیریم
//هر چیزی غیر از مقادیری که به عنوان تایپ در نظر گرفتیم به عنوان مقدار متغیر بنویسیم خطا میگیرد
//مثلا تگ سلکت استفاده میشود
//string literal type
let yu: 'ks' | 'asd' | 'dsad' | '1' = 'asd'

console.log(typeof yu, yu)

//number literal type
let sss: 1 | 2 | 3
sss = 3

//boolean literal type
//boolean literal typeخیلی کاربردی ندارد از همون boolean استفاده میکنیم
let isAc: true | false


//استفاده از type alias در literal type

type kkk = 'e' | 'w' | 'q' | 'h'

let stwe: kkk
let ref: kkk

ref = 'q'

//برای number literal بهتر است از enum استفاده کنیم که مفهومی تر شود چون در اونجا مقادیر دارای کلید هستند


//ReadOnly Field

interface Iuu {
    name: string
    readonly age: number
}

function getIuu(person: Iuu): Iuu {
    return {
        ...person
    }
}

let erg = getIuu({name: 'asd', age: 2})

erg.name = 'hhhhh'
// erg.age = 2
console.log(erg);

//برای فقط خواندی کردن آبجکت ها و آرایه ها روش فرق میکند

const oekwf = {
    name: 'sad',
    family: 'asd'
} as const
// oekwf.name = 'asd'

let mnm = ['asd', 'sad', 'asd'] as const
//or 
let jkm: readonly number[] = [1, 2, 3]
// mnm[0] = 'as'
// jkm[2] = 2


//function overloading


//OOP(classes)
//کلاس ها مدل سازی میکنن یک شی را بر اساس اطلاعات مورد نیاز
//در کلاس ها رفتار ها متدها و ویژگی ها پراپرتی ها است
class uPerson {

    firstName: string
    lastName: string
    age: number

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    getFullName(): string {
        return `full name : ${this.firstName + ' ' + this.lastName}`
    }
}

let oreo = new uPerson('jack', 'wilson', 44)

console.log(oreo.age)
console.log(oreo.getFullName())

//OOP(interfaces)
// اینترفیس ها ساختار یک شی را تعیین میکنند که تعیین  میکنند متغیر ما حتما باید همچین پراپرتی هایی رو داشته باشه
//میتوانیم برای کلاس توسط interfaceها یک سری قوانین رو تعریف کنیم

type usr = {//type alias
    ID: number
    name: string
    email: string
    date: Date
    gender: 'male' | 'female' //literal type
}

interface Iusr {
    _users: usr[]

    create(date: usr): void

    update(id: number, newData: any): void

    delete(id: number): void

    getAll(): usr[]

    getOne(id: number): usr
}

//نحوه پیروی کردن یک کلاس از یک اینترفیس
class userModel implements Iusr {
    _users: usr[]; // repository

    constructor() {
        this._users = []
    }

    create(data: usr): void {
        this._users.push(data)
    }

    delete(id: number): void {
        this._users.forEach((item, index) => {
            if (item.ID === id) {
                this._users.splice(index, 1)
            }
        })
    }

    getAll(): usr[] {
        return this._users;
    }

    getOne(id: number): usr {
        let one = this._users.filter(item => item.ID === id);
        return one[0]
    }

    update(id: number, newData: any): void {
        this._users.forEach((item, index) => {
            if (item.ID == id) {
                this._users[index] = Object.assign(item, {...newData})
            }
        })
    }
}

let newUsr = new userModel()

newUsr.create({ID: 1, name: 'gimi jones', email: 'gmimsd@gmail.com', date: new Date(), gender: 'male'})
newUsr.create({ID: 2, name: 'judy stones', email: 'judyt@gmail.com', date: new Date(), gender: 'female'})
newUsr.create({ID: 3, name: 'bill jonson', email: 'billj@gmail.com', date: new Date(), gender: 'male'})


newUsr.delete(3)

console.log(newUsr.getOne(2))

newUsr.update(1, {name: 'greg'})

console.log(newUsr.getAll())


//inheritance
//وراثت

type permission = 'admin' | 'writer' | 'normal'
type ussr = { id: number, name: string, role: permission }

class role {
    userModel: ussr

    constructor(user: ussr) {
        this.userModel = user
    }

    print(): ussr {
        return this.userModel
    }
}

class admin extends role {

    constructor(id: number, name: string) {
        super({id: id, name: name, role: 'admin'});
    }
}

class writer extends role implements Iusr {
    _users: usr[]

    constructor(id: number, name: string) {
        super({id: id, name: name, role: 'writer'});
        this._users = []
    }

    create(date: usr): void {
        throw new Error("Method not implemented.")
    }

    update(id: number, newData: any): void {
        throw new Error("Method not implemented.")
    }

    delete(id: number): void {
        throw new Error("Method not implemented.")
    }

    getAll(): usr[] {
        throw new Error("Method not implemented.")
    }

    getOne(id: number): usr {
        throw new Error("Method not implemented.")
    }
}

let adminUsr = new admin(1, 'yasin')
let writerUsr = new writer(2, 'ramin')

console.log(adminUsr.print())
console.log(writerUsr.print())


//OOP(access modifier or member visibility)
//این امکان را به ما میدهند تا برای پراپرتی ها و متدها یعنی (members) سطح دسترسی تعیین کنیم member visibility

class mnPerson {
    //حالت پیش فرض تمام member ها به صورت public هست چه بنویسیم چه ننویسیم به صورت public هست
    public id: number
    public name: string
    public age: number
    date: Date


    private active: boolean //فقط در خود کلاس بهش دسترسی داریم
    protected role: string //شبیه به private هست و همین طور فقط در کلاس های فرزند هم به این member دسترسی داریم


    constructor() {
        this.id = 0
        this.name = ''
        this.age = 0
        this.date = new Date()
        this.active = false
        this.role = ''
    }


    public members() {
        return {id: this.id, name: this.name, age: this.age, date: this.date}
    }
}

let ppPerson = new mnPerson()
// console.log(ppPerson.active) //private member
// console.log(ppPerson.role) // protected member
console.log(ppPerson.members())

class mChild extends mnPerson {
    constructor() {
        super();
    }

    getMember() {
        //return this.active //private member
        return this.role //protected member
    }
}

//abstract class
//این کلاس ها قابلیت نمونه سازی (ساختن نمونه جدید) ندارند و صرفا میشود فقط از آن ها ارث بری کرد
//همچنین میتوانند مثل کلاس های عادی implement کنند
//یک کلاس abstract کلاسی است که شامل حداقل یک متد abstract باشد. متدهای abstract متدهایی هستند که فاقد پیاده سازی هستند و فقط کلاس‌های فرزند را وادار می‌کنند آن متدها را در خود پیاده سازی کنند.
enum mnState {
    start, done, waiting, failed
}

type todo = {
    subject: string
    state: mnState
}

interface IITodo {
    subject: string
    state: mnState
}

interface IITodoOperation {
    newTodo(todo: IITodo): todo

    deleteTodo(subject: string): void
}

abstract class mnxRepo implements IITodoOperation {
   protected todos: todo[] //class repository
    //or
    // todos: IITodo[] //class repository

    protected constructor() {
        this.todos = []
    }

   protected abstract make() : void

     deleteTodo(subject: string): void {
    }

    newTodo(todo: IITodo): todo {
        return todo;
    }


}

class mnxTodoManger extends mnxRepo {
    make() {
        throw new Error("Method not implemented.")
    }
    constructor() {
        super();
    }

    newToDo(todo: todo) {
        this.todos.push(todo)
    }

    getTodos(): todo[] {
        return this.todos
    }

    deleteTodo(subject: string) {
        super.deleteTodo(subject);
    }
}

let todoMNModel = new mnxTodoManger()
todoMNModel.newToDo({subject: 'sadas', state: mnState.done})
todoMNModel.newToDo({subject: 'ttttt', state: mnState.start})
console.log(todoMNModel.getTodos())

