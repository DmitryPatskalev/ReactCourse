import  {FilterType, TodoListsType} from "../Todolist";
import {v1} from "uuid";
export type RemoveTodoListActionType = {
    type:'REMOVE-TODOLIST'
    id:string
}
export type AddTodoListActionType= {
    type: 'ADD-TODOLIST'
    title:string
    todoListID:string
}
export type ChangeTodoListTitleActionType = {
    type:'CHANGE-TODOLIST-TITLE'
    id:string
    title:string
}
export type ChangeTodoListFilterActionType = {
    type:'CHANGE-TODOLIST-FILTER'
    id:string
    filter:FilterType
}

export type ActionType =
  RemoveTodoListActionType |
  AddTodoListActionType |
  ChangeTodoListTitleActionType |
  ChangeTodoListFilterActionType


export const todoListsReducer = (state:Array<TodoListsType>, action:ActionType):Array<TodoListsType> =>{
    switch (action.type){
        case 'REMOVE-TODOLIST':
            return state.filter(tl=>tl.id !==action.id)
        case  'ADD-TODOLIST':
            return [...state, {id:action.todoListID, title:action.title, filter:'All'}]
        case 'CHANGE-TODOLIST-TITLE':
            return state.map((tl=>tl.id === action.id?{...tl, title:action.title}:tl))

        case 'CHANGE-TODOLIST-FILTER':
            return state.map(tl=>tl.id ===action.id? {...tl, filter:action.filter}:tl)

        default:
            throw new Error("I don't understand this action type")
    }
}

export const RemoveTodoListAC = (todoListId:string):RemoveTodoListActionType =>{
return {type: 'REMOVE-TODOLIST', id: todoListId}
}

export const AddTodoListAC = (title:string):AddTodoListActionType =>{
    return  {type: 'ADD-TODOLIST', title: title, todoListID:v1()}
}
export const ChangeTodoListAC = (id:string, title:string):ChangeTodoListTitleActionType =>{
    return {type: 'CHANGE-TODOLIST-TITLE', id:id, title:title}
}

export const ChangeTodoListFilterAC = (id:string, filter:FilterType):ChangeTodoListFilterActionType =>{
    return {type: 'CHANGE-TODOLIST-FILTER', id:id, filter:filter}
}