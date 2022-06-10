import {v1} from "uuid";
import {FilterType, TodoListsType} from "../Todolist";
import {
    AddTodoListAC,
    ChangeTodoListAC,
    ChangeTodoListFilterAC,
    RemoveTodoListAC,
    todoListsReducer
} from "./todolist-reducer";

test('correct todolist should be removed', () => {
    let todoListId1 = v1()
    let todoListId2 = v1()

    const startState: Array<TodoListsType> = [
        {id: todoListId1, title: 'What I Learn', filter: 'All'},
        {id: todoListId2, title: 'What to Buy', filter: 'All'},
    ]
    const endState = todoListsReducer(startState, RemoveTodoListAC(todoListId1))

    expect(endState.length).toBe(1)
    expect(endState[0].id).toBe(todoListId2)
})

test('correct todolist should be added', () => {
    let todoListId1 = v1()
    let todoListId2 = v1()

    let newTodoListTitle = 'New Todolist'

    const startState: Array<TodoListsType> = [
        {id: todoListId1, title: 'What I Learn', filter: 'All'},
        {id: todoListId2, title: 'What to Buy', filter: 'All'},
    ]
    const endState = todoListsReducer(startState, AddTodoListAC(newTodoListTitle))

    expect(endState.length).toBe(3)
    expect(endState[2].title).toBe(newTodoListTitle)
    expect(endState[2].filter).toBe('All')
})

test('correct todolist should it name', () => {
    let todoListId1 = v1()
    let todoListId2 = v1()

    let newTodoListTitle = 'New Todolist'

    const startState: Array<TodoListsType> = [
        {id: todoListId1, title: 'What I Learn', filter: 'All'},
        {id: todoListId2, title: 'What to Buy', filter: 'All'},
    ]
    const endState = todoListsReducer(startState, ChangeTodoListAC(todoListId2, newTodoListTitle))

    expect(endState[0].title).toBe('What I Learn')
    expect(endState[1].title).toBe(newTodoListTitle)

})

test('correct filter of todolist should be changed', () => {
    let todoListId1 = v1()
    let todoListId2 = v1()

    let newFilter: FilterType = 'Completed'

    const startState: Array<TodoListsType> = [
        {id: todoListId1, title: 'What I Learn', filter: 'All'},
        {id: todoListId2, title: 'What to Buy', filter: 'All'},
    ]
    const endState = todoListsReducer(startState, ChangeTodoListFilterAC(todoListId2,newFilter))

    expect(endState[0].filter).toBe('All')
    expect(endState[1].filter).toBe(newFilter)
})