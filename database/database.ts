export interface ITodo {
    id: number
    title: string
    completed: boolean
}

export interface IDatabaseState {
    todos: ITodo[]
}

class Database {
    private state: IDatabaseState

    constructor() {
        this.state = { todos: [] }
    }

    async newData(data: Omit<ITodo, 'id'>): Promise<string> {
        let id = this.state.todos.length + 1
        this.state.todos.push({
            id,
            ...data
        })

        return `todo created with ID : ${id} and title : ${data.title}`
    }

    async getAllTodos(): Promise<ITodo[]> {
        return this.state.todos
    }

    async getTodoByID(id: number): Promise<ITodo> {
        return this.state.todos.filter(item => {
            return item.id === id
        })[0]
    }

    async filterByCompleted(state: boolean): Promise<ITodo[]> {
        return this.state.todos.filter(item => {
            return item.completed === state
        })
    }

    async deleteByID(id: number): Promise<string> {
        // state.tasks = state.tasks.filter(task => task.id !== id)

        const index = this.state.todos.findIndex(item => item.id === id)
        if (index !== -1) {
            this.state.todos.splice(index, 1)
            return `todo with id : ${id} deleted successfully`
        } else {
            return `todo with id : ${id} not found`
        }
    }


    async update(id : number , todoData : Partial<Omit<ITodo , 'id'>>){
        const index = this.state.todos.findIndex(item => item.id === id)
        if (index !== -1) {
            this.state.todos[index] = Object.assign(this.state.todos[index] , {...todoData})
            return `todo with id : ${id} updated`
        } else {
            return `todo with id : ${id} not found`
        }
    }
}

export default new Database()