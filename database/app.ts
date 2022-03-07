import database, { ITodo } from "./database";

class todoService {
    private readonly _db = database


    async create(title: ITodo['title']) {
        return this._db.newData({ title: title, completed: false })
    }

    async fetchTodos() {
        return this._db.getAllTodos()
    }

    async fetchByID(id: number) {
        return this._db.getTodoByID(id)
    }

    async filterTodoByCompleted(state: boolean) {
        return this._db.filterByCompleted(state)
    }

    async deleteTodo(id: number) {
        return this._db.deleteByID(id)
    }

    async editAndUpdateByID(id : number , data : Partial<Omit<ITodo, 'id'>>){
        this._db.update(id , data)
    }
}

let todo = new todoService()

todo.create('my first todo').then(msg => {
    // console.log(msg);
})

todo.create('second todo')
todo.create('third todo')

todo.fetchTodos().then(res => {
    // console.log(res);
})

todo.fetchByID(3).then(res => {
    console.log(res);
})

todo.filterTodoByCompleted(true).then(res => {
    // console.log('completed todo : ', res);
})
todo.filterTodoByCompleted(false).then(res => {
    // console.log('not completed todo : ', res);
})


setTimeout(() => {
    todo.deleteTodo(3).then(res => {
        console.log(res);
    })

    todo.deleteTodo(4).then(res => {
        console.log(res);
    })

    todo.fetchTodos().then(res => {
        console.log(res);
    })

}, 1000);



todo.editAndUpdateByID(1 , {
    title : 'edited todo id : 1',
    completed : true
})