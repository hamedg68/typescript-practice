let user: string = "hamed";
let age: number = 213;
let isOnline: boolean = true;
let myNum: 3;
// یک متغیر دیگر برای متغیر جدید type استفاده از
const p: typeof user = "3";

console.log(`tpye of p : ${typeof p}`);
if (typeof age !== "number") {
  console.log("ok");
} else {
  console.log("nok");
}

//type inference
// استفاده میکند (تشخیص اتوماتیک نوع داده)...نوع داده را نگذاریم خودش بر اساس مقداری که دادیم نوعش را تعیین میکند و بعدا امکان تغییر نوع داده وجود ندارد type inference از typescript در
// در جاوااسکریپت این قضیه صدق نمیکند و در هر لحظه میشود با مقدار دادن به متغیر نوع داده را عوض کنیم
let ytyt = "fff";

ytyt = "dsf";
// ytyt = 4

let myF;
// است .ما هر بار که مقدار دهی میکنیم میتواند نوع متغیر با توجه به مقداری که ما میدهیم تغییر کند any وعش مشخص نیست در واقع نوعش myf چون
myF = "rgr";
myF = 3;
myF = true;

console.log(typeof myF);

let options = {
  debug: false,
  vol: "asd",
  max: 4,
};

console.log(typeof options);

/*functions*/

//regular
// function getFullName(f: string , a: string): string {
//     return f +' - '+ a
// }

//arrow function
const getFullName = (f: number, a: string): string => {
  return f + " - " + a;
};

console.log(getFullName(1, "3"));

//چون یک آرایه نوعی از آبجکت است اینجا خروجی تابع میتواند آبجکت باشد و مقدار برگشتی آرایه باشد
// function setOption(options : object) : object{ //اینجا خروجی میتواند آریه ای از هر نوع باشد
function setOption(options: object): string[] {
  //اینجا خروجی باید آرایه ای از استرینگ ها باشد
  let ownProprties: string[] = Object.getOwnPropertyNames(options);
  //or
  // let ownProprties : string[] = [...Object.getOwnPropertyNames(options)]
  return ownProprties;
}

// هست که بعدا آشنا میشویم generic که Array<string> میتوان نوشت string[] به جای نوشتن خروجی تابع به صورت

console.log(setOption({ asd: "s", gr: 2, isActive: true }));

function printer(data: string): void {
  // تعریف شده نمیتواند مقدار برگشتی داشته باشد و خطا میده void چون نوع تابع به صورت
  // return data
  console.log(`data is : ${data}`);
}

printer("hellow sa");

//توابعی داریم خودش یک تابع دیگر را برمیگرداند
function callback(fun: Function): Function {
  //تابع مستقیما اجرا میشود اگر از پرانتز باز و بسته جلو اون استفاده کنیم اگر نباشد رفرنس اون تابع میاد
  return fun();
  // return fun;
}

console.log(
  callback(() => {
    return "ali";
  })
);

function generateUniqID() {
  let str = Date.now().toString(22);
  let str2 = Math.round(Math.random()).toString(32);
  return str + str2 + str;
}

console.log(generateUniqID());

/*union types*/

// در نظر بگیریم type میتوانیم به یک داده یک یا چند union type در
let mngrg: string | boolean;
//این متغییر میتواند فقط استرینگ یا بولین بگیرد هرچی دیگه بگیرد خطا میدهد
mngrg = "2";

function opd(option: object | string[]): object | string[] {
  return Object.getOwnPropertyNames(option);
}

console.log(opd({ kj: true }));

//چک نوع وردی تابع
function getAge(age: string | number): number | string {
  if (typeof age === "string") {
    return `string age is : ${age}`;
  } else {
    return age;
  }
}

console.log(getAge("44"));
console.log(getAge(23));

/*anonymous types*/

// به تایپ هایی گفته میشود که به شکل یک آبجکت تعریف میشوند و میتوانیم برای پراپرتی های این آبجکت تایپ تعیین کنیم
//در اینجا متغیری تعریف کردیم که فقط میتواند پراپرتی های تعریف شده داخل پرانتز با نوع مشخص شده را دریافت کند
//اگر پراپرتی اضافه بنویسیم خطا میگیرد
let todo: { subject: string; status: string | number; visible: boolean } = {
  subject: "sada",
  status: 32,
  visible: false,
};

console.log("ANONTMOUS TYPE ", typeof todo);

//anonymous types in function
function rectangle(point: { x: number; y: number }): number {
  return point.x * point.y;
}

console.log(rectangle({ x: 2, y: 3 }));
// ها استفاده میکنیمinterface استفاده نمیکنیم و از جایگزین آن یعنی anonymous type معمولا از

function signin(user: {
  email: string;
  password: string;
}): { email: string; password: string } | string {
  if (user.email === "hhh@yahoo.com" && user.password === "1111") {
    return user;
  } else {
    return "signin failed !!!";
  }
}

console.log(signin({ email: "hhh@yahoo.com", password: "1111" }));
console.log(signin({ email: "hhhe@yahoo.com", password: "1111" }));

/*optional properties and optional parameters*/

//optional properties
// را وارد کنیم یا نکنیم family در اینجا میتوانیم
// اختیاری است
let mUser: { name: string; family?: string } = {
  name: "soadj",
  // family : 'asd'
};

//optional parameters
//isActive is an optional parameters
function hUser(
  user: { name: string; age?: string },
  isActive?: boolean | string
): { name: string; age?: string } {
  return user;
}

console.log(hUser(mUser));

/*undefined and null types*/

// پیش فرض است undefined مقدار دهی مشود ولی null
let aaa = null;
let bbb;

console.log("aaa : " + aaa, typeof aaa);
console.log("aaa : " + bbb, typeof bbb);

//union types
let uInfo: object | null | undefined;

if (uInfo !== null && uInfo !== undefined) {
  console.log("object has proprty");
} else {
  console.log("object does not have proprty");
}

/*never, any and unknown types*/

//any type
// قرار دارند و میتوانیم هر مقداری خواستیم بدیم any در جاوااسکریپت همه متغییرها در حالت
// در اینجا هم میتوانیم هر مقداری خواستیم بدیم
let egd: any = 21;

egd = true;
egd = "sd";
egd = 312;

//unknown type
//تفاوت و شباهت unknown و any

let wee: any = 111;
let wee2: string = "asd";
wee2 = wee;

let sfr: unknown = 22;
let sfr2: string = "22";
//sfr2 = sfr

// است any بهتر از unknown از لحاظ امنیتی تایپ

//never type
//در این حالت قرار نیست هیچ مقداری برگردد و قرار است خطایی تولید شود
function catchError(): never {
  throw new Error("error !!!");
}

//یکی دیگر از کاربردها در حلقه های بینهایت استفاده میشود
function infinitLoop(): never {
  while (true) {}
}

//تفاوت never و void

/*assertion types (explicit casting)*/

//تبدیل دیتا تایپ متغیرها به هم دیگر

let mg: any = "22";

//با اینکار در ظاهر استرینگ هست ولی رفتاری مشابه با یک عدد رو باهاش داریم مثلا به متدهای پیش فرض درون شی اعداد رو این متغیر دسترسی داریم
let castVar = <number>mg;
//راه دیگر
let castVar2 = mg as boolean;

console.log("type assertions ==> ", typeof castVar, castVar);
console.log("type assertions ==> ", typeof castVar2, castVar2);

/*tuple types*/
//در اصل آرایه هایی هستند با مقدارهای مشخص و تایپ های مشخص
let tuple: [x: number, y: number] = [10, 14];

console.log(tuple);

let iii: [name: string, age: number, active: boolean];
iii = ["asdasd", 213, false];

console.log(iii, typeof iii);

let fd: [element: any];
fd = ["asd"];
fd = [tuple];
console.log(fd, typeof fd);

//optional tuple element
let stateVideo: [duration: number, format: string | number, title?: string];

stateVideo = [3, "s", "asd"];
stateVideo = [43, "gt"];

//tuple destructuring
let [Duration, Format] = stateVideo;
console.log(Duration);
console.log(Format);

//اینو خودم از جاوا اسکریپت نوشتم
let gh = { lat: "11111111111", lng: "2222222222" };
let { lng, lat } = gh;
console.log(lat, " - ", lng);

//tuple & spread syntax
//اینجا صرفا فقط نوع داده را انتخاب کردیم
let ddd: [number, ...string[]];
ddd = [2, "s", "w", "g", "1", "2"];
//اینجا میتوانیم پارامتر دوم هم اصلا وارد نکنیم
ddd = [2];

let khg: [string, string, string] = ["2", "1", "4"];
// شود spread باید khg در این حالت خاص
ddd = [44, ...khg];

/*Enum types*/

// در اینجا به طور پیش فرض خودش از 0 شروع به شماره گذاری میکند (موس روش بیاری میفهمی)
//enum default
enum State {
  Start,
  Done,
  Failed,
  Warning,
}

//enum types string
enum Direction {
  left = "left side",
  right = "right side",
  up = "up side",
  down = "down side",
}

//enum custom numeric
enum Point {
  A = 7,
  B,
  C,
  D,
}

//enum const type
//تفاوت رو در فایل کامپایل شده جاوااسکریپت ببین
const enum Post {
  Published,
  notPublished,
}

console.log(State.Done);

//نحوه جدید پارامترهای فانکشن
//ابتدا پراپرتی ها سپس در پرانتز بعدی نوع پراپرتی ها. صرفا سه تا از چهار پارامتر ورودی استخراج شده
function newTask({
  subject,
  state,
  post,
}: {
  subject: string;
  state: State;
  direction: Direction;
  post: Post;
}): { subject: string; state: State; post: Post } {
  return { subject, state, post };
}

console.log(
  newTask({
    subject: "dasd",
    state: State.Start,
    direction: Direction.down,
    post: Post.Published,
  })
);

/*expression conditional*/

let yok: string = 4 > 3 ? "000" : "111";
let yhr: string = 3 > 3 ? "333" : 4 > 4 ? "2232" : "1254";
let erge: string = 3 > 3 && 6 > 4 ? "333" : 4 > 4 || 4 > 5 ? "2232" : "1254";

//??????????
// let ghhh : object ={
//   p : 23
// }

// console.log(ghhh.p > 2);

//خودم نوشتم
function fun1({ min, max }: { min: number; max: number }, age: number): any {
  return age + min;
}

function fun2(minMax: { min: number; max: number }): any {
  return minMax.min;
}

console.log(fun1({ min: 2, max: 4 }, 22));
console.log(fun2({ min: 3, max: 3 }));

/*interfaces*/
//ساختاریا تایپ یک شی را برای ما تعیین میکنند در واقع چه متدهایی یا چه پراپرتی هایی داشته باشد
// استفاده کنیم interface استفاده میکردیم که میتوانیم از جایگزین آن یعنی anonymous type قبلا برای تعیین ساختار یک شی از
//در اینتر فیس فقط میتوان تعریف کرد نمیشود مقدار دهی کرد
interface IPerson {
  name: string;
  age: number;
  email: string;
  password: string;
}

// هست interface نوع این متغیر از جنس یک
let myPerson: IPerson;
myPerson = {
  name: "sad",
  age: 2,
  email: "asd",
  password: "ddsd",
};

console.log(typeof myPerson, myPerson);

interface IPost {
  subject: string;
  published: boolean;
  description: string;
  dateCreated?: Date;
  view: number | string;

  onPublished(): string;
}

function nPost(post: IPost): IPost {
  return { ...post };
  //or
  //return post
}

console.log(
  nPost({
    subject: "string",
    published: false,
    description: "string",
    view: 2,
    onPublished() {
      return "on published";
    },
  })
);

/*nullish coalescing and optional chaining*/

//nullish coalescing(تعیین مقدار پیش فرض)
let apiData = false;
// بود مقدار پیش فرض قرار میگیرد 0 یا false یا '' یا undefined یا null اگر مقدار || با گذاشتن
let getApiData = apiData || "default value 1";
//با گذاشتن ?? مقدار پیش فرض به متغیر به جای null یا undefined قرار داده میشود
let getApiData2 = apiData ?? "default value 2";
console.log(getApiData);
console.log(getApiData2);

//optional chaining
//چک که آیا یک پراپرتی درون یک آبجکت وجود دارد یا نه
let yy: any = {
  name: "asad",
  details: {
    fName: "asda",
    security: {
      email: "sdasd",
      password: "sadasd",
    },
  },
};
//???????????????
// وجود دارد یا نه fName چک اینکه مثلا پراپرتی
console.log("optional chaining ==> ", yy.details?.ff);

/*Type Aliases*/

// union type و object type این امکان را میدهد که جلوگیری کنیم از تکرار
//یک بار تعریف میکنیم و به هر چند تا متغییر که خواستیم اختصاص میدهیم
//تایپ به شکل مستعار
//type alias with union type 
type mID = string | number | null | undefined | boolean;

function getMID(id: mID): mID {
  return id;
}

console.log(getMID(false));
console.log(getMID("rew"));

// object type
// استفاده کنیم alias type یا interface معمولا طولانی هستند میتوانیم از object type چون

type iiio = [firstName: string, lastName: string]
type myPerson = {
  //tuple type
  fullName: iiio;
  details: {
    fName: string;
    account: {
      bank: string;
      number: number;
      security: {
        pass: string;
      };
    };
  };
};

function guser(user: myPerson): myPerson {
  return user;
}

console.log(
  guser({
    fullName: ["ha", "sad"],
    details: {
      fName: "sadasd",
      account: {
        bank: "sad",
        number: 312,
        security: {
          pass: "asda",
        },
      },
    },
  })
);

/*literal types*/

//در اصل تایپ نیستند بلکه مقدار هستند و تایپ یک متغیر را مقدار در نظر میگیریم
//هر چیزی غیر از مقادیری که به عنوان تایپ در نظر گرفتیم به عنوان مقدار متغیر بنویسیم خطا میگیرد
//مثلا تگ سلکت استفاده میشود
//union type in literal type, here is string literal type
let yu: "ks" | "asd" | "dsad" | '12' = "asd";

console.log(typeof yu, yu);

//number literal type
// ها استفاده کنیم enum بهتره از number literal type به جای
let sss: 1 | 2 | 3;
sss = 2;

// boolean literal type
// استفاده کنیم boolean خیلی کاربردی ندارد بهتره از همون boolean literal type
let isAc: true | false;

// type alias در literal type استفاده از
type kkk = "e" | "w" | "q" | "h" ;

let stwe: kkk = 'e';
let ref: kkk;

ref ='q';

/*ReadOnly Field*/
interface Iuu {
  name: string;
  readonly age: number;
}

function getIuu(person: Iuu): Iuu {
  return {
    ...person,
  };
}

let erg = getIuu({ name: "asd", age: 2 });

erg.name = "hhhhh";
//age is readonly property so it can not be changed
// erg.age = 2
console.log(erg);

//برای فقط خواندی کردن آبجکت ها و آرایه ها روش فرق میکند

const oekwf = {
  name: "sad",
  family: "asd",
} as const;
// تبدیل شود readonly کنیم میبینیم که تمام اعضای اون آبجکت به حالت hover استفاده کردیم اگر روی نام خود آبجکت as const چون از
// oekwf.name = 'asd'

let mnm = ["asd", "sad", "asd"] as const;
//or
let jkm: readonly number[] = [1, 2, 3];
// mnm[0] = 'as'
// jkm[2] = 2

/*function overloading*/

//OOP(classes)
//کلاس ها مدل سازی میکنن یک شی را بر اساس اطلاعات مورد نیاز
//در کلاس ها رفتار ها و متدها و ویژگی ها پراپرتی ها است
class uPerson {
  firstName: string;
  lastName: string;
  age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName(): string {
    return `full name : ${this.firstName + " " + this.lastName}`;
  }
}

let oreo = new uPerson("jack", "wilson", 44);

console.log(oreo.age);
console.log(oreo.getFullName());

//OOP(interfaces)
// اینترفیس ها ساختار یک شی را تعیین میکنند و نشان میدهند متغیر ما حتما باید همچین پراپرتی هایی رو داشته باشه
//میتوانیم برای کلاس توسط interfaceها یک سری قوانین رو تعریف کنیم

type usr = {
  //type alias
  ID: number;
  name: string;
  email: string;
  date: Date;
  gender: "male" | "female"; //literal type
};

interface Iusr {
  _users: usr[];

  create(date: usr): void;

  update(id: number, newData: any): void;

  delete(id: number): void;

  getAll(): usr[];

  getOne(id: number): usr;
}

//نحوه پیروی کردن یک کلاس از یک اینترفیس
class userModel implements Iusr {
  _users: usr[]; //repository

  constructor() {
    this._users = [];
  }

  create(data: usr): void {
    this._users.push(data);
  }

  delete(id: number): void {
    this._users.forEach((item, index) => {
      if (item.ID === id) {
        this._users.splice(index, 1);
      }
    });
  }

  getAll(): usr[] {
    return this._users;
  }

  getOne(id: number): usr {
    let one = this._users.filter((item) => item.ID === id);
    return one[0];
  }

  update(id: number, newData: any): void {
    this._users.forEach((item, index) => {
      if (item.ID == id) {
        this._users[index] = Object.assign(item, { ...newData });
      }
    });
  }
}

let newUsr = new userModel();

newUsr.create({
  ID: 1,
  name: "gimi jones",
  email: "gmimsd@gmail.com",
  date: new Date(),
  gender: "male",
});
newUsr.create({
  ID: 2,
  name: "judy stones",
  email: "judyt@gmail.com",
  date: new Date(),
  gender: "female",
});
newUsr.create({
  ID: 3,
  name: "bill jonson",
  email: "billj@gmail.com",
  date: new Date(),
  gender: "male",
});

newUsr.delete(3);

console.log(newUsr.getOne(2));

newUsr.update(1, { name: "greg" });

console.log(newUsr.getAll());

//inheritance
//وراثت

type permission = "admin" | "writer" | "normal";
type ussr = { id: number; name: string; role: permission };

class role {
  userModel: ussr;

  constructor(user: ussr) {
    this.userModel = user;
  }

  print(): ussr {
    return this.userModel;
  }
}

class admin extends role {
  constructor(id: number, name: string) {
    super({ id: id, name: name, role: "admin" });
  }
}

class writer extends role implements Iusr {
  _users: usr[];

  constructor(id: number, name: string) {
    super({ id: id, name: name, role: "writer" });
    this._users = [];
  }

  create(date: usr): void {
    throw new Error("Method not implemented.");
  }

  update(id: number, newData: any): void {
    throw new Error("Method not implemented.");
  }

  delete(id: number): void {
    throw new Error("Method not implemented.");
  }

  getAll(): usr[] {
    throw new Error("Method not implemented.");
  }

  getOne(id: number): usr {
    throw new Error("Method not implemented.");
  }
}

let adminUsr = new admin(1, "yasin");
let writerUsr = new writer(2, "ramin");

console.log(adminUsr.print());
console.log(writerUsr.print());

//OOP(access modifier or member visibility)
//این امکان را به ما میدهند تا برای پراپرتی ها و متدها یعنی (members) سطح دسترسی تعیین کنیم member visibility

class mnPerson {
  //حالت پیش فرض تمام member ها به صورت public هست چه بنویسیم چه ننویسیم به صورت public هست
  public id: number;
  public name: string;
  public age: number;
  date: Date;

  private active: boolean; //فقط در خود کلاس بهش دسترسی داریم
  protected role: string; //شبیه به private هست و همین طور فقط در کلاس های فرزند هم به این member دسترسی داریم

  constructor() {
    this.id = 0;
    this.name = "";
    this.age = 0;
    this.date = new Date();
    this.active = false;
    this.role = "";
  }

  public members() {
    return { id: this.id, name: this.name, age: this.age, date: this.date };
  }
}

let ppPerson = new mnPerson();
// console.log(ppPerson.active) //private member
// console.log(ppPerson.role) // protected member
console.log(ppPerson.members());

class mChild extends mnPerson {
  constructor() {
    super();
  }

  getMember() {
    //return this.active //private member
    return this.role; //protected member
  }
}

//abstract class
//این کلاس ها قابلیت نمونه سازی (ساختن نمونه جدید) ندارند و صرفا میشود فقط از آن ها ارث بری کرد
//همچنین میتوانند مثل کلاس های عادی implement کنند
//یک کلاس abstract کلاسی است که شامل حداقل یک متد abstract باشد. متدهای abstract متدهایی هستند که فاقد پیاده سازی هستند و فقط کلاس‌های فرزند را وادار می‌کنند آن متدها را در خود پیاده سازی کنند.
enum mnState {
  start,
  done,
  waiting,
  failed,
}

type todo = {
  subject: string;
  state: mnState;
};

interface IITodo {
  subject: string;
  state: mnState;
}

interface IITodoOperation {
  newTodo(todo: IITodo): todo;

  deleteTodo(subject: string): void;
}

abstract class mnxRepo implements IITodoOperation {
  protected todos: todo[]; //class repository
  //or
  // todos: IITodo[] //class repository

  protected constructor() {
    this.todos = [];
  }

  protected abstract make(): void;

  deleteTodo(subject: string): void {}

  newTodo(todo: IITodo): todo {
    return todo;
  }
}

class mnxTodoManger extends mnxRepo {
  make() {
    throw new Error("Method not implemented.");
  }

  constructor() {
    super();
  }

  newToDo(todo: todo) {
    this.todos.push(todo);
  }

  getTodos(): todo[] {
    return this.todos;
  }

  deleteTodo(subject: string) {
    super.deleteTodo(subject);
  }
}

let todoMNModel = new mnxTodoManger();
todoMNModel.newToDo({ subject: "sadas", state: mnState.done });
todoMNModel.newToDo({ subject: "ttttt", state: mnState.start });
console.log(todoMNModel.getTodos());

//OOP(static member)
//به عضوهایی گفته می شود که بدون نیاز به نمونه سازی از کلاسی به آن ها دسترسی داریم
//عضوهای استاتیک هم میتوانند متد باشند هم پراپرتی
//بارز ترین نمونه برای این موضوع Math
Math.random;
//صرفا درون متدهای استاتیک به دیگر عضوهای استاتیک با کلمه کلیدی (this) دسترسی داریم

type todoII = {
  uid?: string;
  subject: string;
  state: mnState;
};

abstract class mnxxRepo implements IITodoOperation {
  protected todos: todoII[]; //class repository

  protected constructor() {
    this.todos = [];
  }

  protected abstract make(): void;

  deleteTodo(subject: string): void {}

  newTodo(todo: todoII): todo {
    return todo;
  }
}

class mnxxxTodoManger extends mnxxRepo {
  private static uid: string = "";
  public static memb: string = "body this a static member";

  constructor() {
    super();
    mnxxxTodoManger.nextID();
  }

  private static nextID() {
    let head = Date.now().toString(16);
    let tail = Math.round(1 + Math.random() * 0x10000).toString(20);
    this.uid = head + tail;
  }

  protected make(): void {
    throw new Error("Method not implemented.");
  }

  newToDo(todo: todoII) {
    this.todos.push({ uid: mnxxxTodoManger.uid, ...todo });
    mnxxxTodoManger.nextID();
  }

  getTodos(): todoII[] {
    return this.todos;
  }

  deleteTodo(subject: string) {
    super.deleteTodo(subject);
  }
}

console.log(mnxxxTodoManger.memb);

mnxxxTodoManger.memb = "static member has been changed!";
console.log(mnxxxTodoManger.memb);

let todoMNXModel = new mnxxxTodoManger();

todoMNXModel.newToDo({ subject: "ttttttttt", state: mnState.done });
todoMNXModel.newToDo({ subject: "yyyyyy", state: mnState.failed });

console.log(todoMNXModel.getTodos());

//OOP(setter & getter)

class GMClass {
  private name: string = "sad";

  constructor() {
    this.name = "johnatan";
  }

  set setName(val: string) {
    this.name = val;
  }

  get getName() {
    return this.name;
  }
}

let gmcClass = new GMClass();

console.log(gmcClass.getName);
gmcClass.setName = "david";
console.log(gmcClass.getName);

//OOP(read only member)
class YHSClass {
  readonly name: string;

  constructor(name: string) {
    this.name = name;
  }

  // set setName(val: string) {
  //   this.name = val;
  // }

  get getName() {
    return this.name;
  }
}

let yhsClass = new YHSClass("zero in one");

// yhsClass.name = 'as'

console.log(yhsClass.name);
console.log(yhsClass.getName);
