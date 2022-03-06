/*decorators*/
// توابعی هستند که بر روی یک کلاس اعمال میکنیم
// میتونه یک پراپرتی رو دریافت کنه و مقدارش رو به ما بده و روی مقدارش تغییراتی رو ایجاد کنه
// میتونه بر روی کلاس محدودیت ایجاد کنه
//میتونه بر روی متد ها تاثیر بگذارد

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


class testAge{

    @constraintAge({min : 12 , max : 22})
    age : number = 20
}

let TA = new testAge()

console.log(TA.age);


/*method decorator*/
