/*decorators*/
// توابعی هستند که بر روی یک کلاس اعمال میکنیم
// میتونه یک پراپرتی رو درسافت کنه و مقدارش رو به ما بده و روی مقدارش تغییراتی رو اسجاد کنه
// میتونه بر روی کلاس محدودیت ایجاد کنه
//میتونه بر روی متد ها تاثیر بگذارد

// همون فانکشن معمول است decorator ساده ترین

function Logger(message: string): any {
    console.log(message);
}

// @ با علامت decorator صدا زدن
@Logger('logger messages decorator ...')
class Log {
    message: string = ''
    constructor() {

    }
}



function Logger2(): any {
    return function (target: any) {
        let log = new target()
        if (log.message) {
            console.log(log.message.toUpperCase())
        }
        console.log(log.message ?? 'Default')
    }
}

// @ با علامت decorator صدا زدن
@Logger2()
class Log2 {
    message: string = 'message from class log2'
    constructor() {

    }
}

// داریم decorator در کل چهار
/*
1 : class decorator 
2 : method decorator
3 : property decorator
4 : arguman(parameter) decorator
*/

//class decorator 
function component(target: Function) {
    target.prototype.msg = 'message has been intilized!'
}

@component
class myMessage {
    msg: string
    constructor() {

    }
}

let myMsg = new myMessage()

console.log(myMsg.msg);
