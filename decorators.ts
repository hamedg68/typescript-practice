/*decorators*/
// توابعی هستند که بر روی یک کلاس اعمال میکنیم
// میتونه یک پراپرتی رو دریافت کنه و مقدارش رو به ما بده و روی مقدارش تغییراتی رو ایجاد کنه
// میتونه بر روی کلاس محدودیت ایجاد کنه
//میتونه بر روی متد ها تاثیر بگذارد

import { type } from "os";

// همون فانکشن معمول است decorator ساده ترین

function Logger(message: string): any {
  console.log(message);
}

// @ با علامت decorator صدا زدن
@Logger("logger messages decorator ...")
class Log {
  message: string = "";
  constructor() {}
}

function Logger2(): any {
  return function (target: any) {
    let log = new target();
    if (log.message) {
      console.log(log.message.toUpperCase());
    }
    console.log(log.message ?? "Default");
  };
}

// @ با علامت decorator صدا زدن
@Logger2()
class Log2 {
  message: string = "message from class log2";
  constructor() {}
}

// داریم decorator در کل چهار
/*
1 : class decorator 
2 : method decorator
3 : property decorator
4 : argument(parameter) decorator
*/

/*class decorator*/
function component(target: Function) {
  target.prototype.msg = "message has been initialized!";
}

@component
class myMessage {
  msg: string;
  constructor() {}
}

let myMsg = new myMessage();

console.log(myMsg.msg);

function component2(options: { key: string }) {
  return function (target: Function & typeof myMessage2) {
    target.key = options.key;
  };
}

@component2({ key: "hamed" })
class myMessage2 {
  static key: string;
  msg: string;
  constructor() {}
}

console.log(myMessage2.key);

/*property decorator*/

function prop() {
  let value: string;

  return function (target: Object, propertyName: string) {
    const getter = () => {
      console.log(`getting value ${value}`);
      return value;
    };

    const setter = (newValue) => {
      value = newValue.toUpperCase();
    };

    Object.defineProperty(target, propertyName, {
      set: setter,
      get: getter,
    });
  };
}

class CMessage {
  @prop()
  element: string;
}

let cM = new CMessage();

cM.element = "new element is detected"; //setter

console.log(cM.element);

// property decorator ایجاد محدودیت در

function constraintAge({ min, max }: { min: number; max: number }) {
  return function <T>(target: T, propertyKey: keyof T) {
    let value = target[propertyKey] as any;

    const setter = (newVal: unknown) => {
      if (newVal > min && newVal < max) {
        value = newVal;
      } else {
        throw new Error("constraint age value : please check age");
      }
    };

    const getter = () => value;

    Object.defineProperty(target, propertyKey, {
      set: setter,
      get: getter,
    });
  };
}

class testAge {
  @constraintAge({ min: 12, max: 22 })
  age: number = 20;
}

let TA = new testAge();

console.log(TA.age);

/*method decorator*/

/*parameter decorator*/

/*mapped types*/
interface info {
  id: number;
  readonly name: string;
  location?: string;
  age: number;
}

// mapped type با استفاده از optional تبدیل تمام پراپرتی ها به
type optional<T> = {
  [property in keyof T]?: T[property];
};

type getInfo = optional<info>;
//or use utility type partial
type getInfo2 = Partial<info>;

//convert every property which is optional to required
type requiredProp<type> = {
  [property in keyof type]-?: type[property];
};

type getR = requiredProp<info>;

//read only
type readonlyP<T> = {
  readonly [property in keyof T]: T[property];
};

type getRE = readonlyP<info>;

type getRE2 = readonlyP<requiredProp<info>>;

//convert every property which is readonly to not readonly
type nonReadonlyP<T> = {
  -readonly [property in keyof T]: T[property];
};

type getNRE = nonReadonlyP<info>;

// ها ساخته شده mapped type ها از utility type در واقع همه

interface myInfo {
  id: number;
  name: string;
  location: string;
  age: number;
}

//convert every property to function which returns void
type functionPropertyM<T> = {
  [prop in keyof T]: () => void;
};

type methodInfo = functionPropertyM<myInfo>;

//convert every property to boolean
type isExist<T> = {
  [prop in keyof T]: boolean;
};

type mBoolean = isExist<myInfo>;

let test: mBoolean;
test = {
  id: true,
  name: true,
  location: false,
  age: false,
};

type usefulMethod<T> = {
  // گفته نشد utility type حرف اول هر کلمه رو بزرگ میکند در قسمت آموزش utility type Capitalize
  [prop in keyof T as `get${Capitalize<string & prop>}`]: () => T[prop];
};

type listOfMethod = usefulMethod<myInfo>;


/*modules*/
// ها از زیاد شدن کدها در یک فایل جلوگیری میکند module
//میتوانیم کدهای خود را تقسیم بندی کنیم و درون چندین فایل قرار بدیم و در هنگام نیاز از اون فایل ها استفاده کنیم
