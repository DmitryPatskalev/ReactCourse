import {TaskStateType, TodoListsType} from "../Todolist";
import {AddTodoListAC, todoListsReducer} from "./todolist-reducer";
import {tasksReducer} from "./tasks-reducer";

test('id should be equals', () => {
    const startTaskState: TaskStateType = {}
    const startTodoListState: Array<TodoListsType> = []

    const action = AddTodoListAC('new TodoList')
    const endTaskState = tasksReducer(startTaskState, action)
    const endTodoListState = todoListsReducer(startTodoListState,action)

    const keys = Object.keys(endTaskState)
    const idFromTask = keys[0]
    const idFromTodoList = endTodoListState[0].id

    expect(idFromTask).toBe(action.todoListID)
    expect(idFromTodoList).toBe(action.todoListID)

})