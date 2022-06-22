import React from 'react';
import {TaskStateType} from "../Todolist";
import {v1} from "uuid";
import {AddTodoListActionType, RemoveTodoListActionType} from "./todolist-reducer";


export type RemoveTaskActionType = {
    type: 'REMOVE_TASK'
    todoListID: string
    taskID: string
}
export type AddTaskActionType = {
    type:'ADD_TASK'
    todoListID:string
    title:string
}
export type ChangeTaskActionType = {
    type:'CHANGE_TASK_STATUS'
    todoListID:string
    taskID:string
    isDone:boolean
}
export type ChangeTaskTitleActionType = {
    type:'CHANGE_TASK_TITLE'
    todoListID:string
    taskID:string
    title:string
}

export type ActionTasksType =
  RemoveTaskActionType|
  AddTaskActionType|
  ChangeTaskActionType|
  ChangeTaskTitleActionType|
  AddTodoListActionType|
  RemoveTodoListActionType

export const tasksReducer = (state: TaskStateType, action: ActionTasksType): TaskStateType => {
    switch (action.type) {
        case 'REMOVE_TASK':
            return {...state, [action.todoListID]:state[action.todoListID].filter(t=>t.id !==action.taskID)}
        case 'ADD_TASK':
            let newTask = {id:v1(), title: action.title, isDone:true }
            return {...state, [action.todoListID]:[newTask, ...state[action.todoListID]]}
        case "CHANGE_TASK_STATUS":
            return {...state, [action.todoListID]:state[action.todoListID].map(t=>t.id === action.taskID?
                  {...t, isDone:action.isDone}:t)}
        case "CHANGE_TASK_TITLE":
            return {...state, [action.todoListID]:state[action.todoListID].map(t=>t.id === action.taskID?
                  {...t, title:action.title}:t)}
        case 'ADD-TODOLIST':
            return {...state, [action.todoListID]:[]}
        case "REMOVE-TODOLIST":
            const stateCopy = {...state}
            delete stateCopy[action.id]
            return stateCopy

        default:
            throw new Error("I don't understand this action type")
    }

};

export const removeTaskAC = (todoListID: string, taskID: string): RemoveTaskActionType => {
    return {type: 'REMOVE_TASK', todoListID, taskID}
}

export const addTaskAC = (todoListID: string, title: string):AddTaskActionType=>{
    return {type:'ADD_TASK', todoListID, title}
}
export const changeTaskStatusAC = (todoListID: string, taskID:string, isDone:boolean):ChangeTaskActionType=>{
    return  {type:'CHANGE_TASK_STATUS', todoListID, taskID, isDone}
}
export const changeTaskTitleAC = (todoListID: string, taskID:string, title:string):ChangeTaskTitleActionType=>{
    return  {type:'CHANGE_TASK_TITLE', todoListID,taskID,title}
}
