import React, {useState} from "react";
import './style.css'
import './../../App.css'
import {v1} from "uuid";
import {Tasks} from "./Tasks";
import {AddItemForm} from "./AddItemForm";
import {AppBar, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";


export type TodoListType = {
    id: string
    title: string
    isDone: boolean
}

export type FilterType = 'All' | 'Active' | 'Completed'

export type TodoListsType = {
    id: string
    title: string
    filter: FilterType
}

export type TaskStateType = {
    [key: string]: Array<TodoListType>
}

const Todolist = () => {

    const todoListID1 = v1()
    const todoListID2 = v1()

    const [todoLists, setTodoLists] = useState<Array<TodoListsType>>([
        {id: todoListID1, title: 'What I Learn', filter: 'All'},
        {id: todoListID2, title: 'What to Buy', filter: 'All'},
    ])
    const [task, setTask] = useState<TaskStateType>({
        [todoListID1]: [
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'React', isDone: true},
            {id: v1(), title: 'C++/C#', isDone: false},
            {id: v1(), title: 'Python', isDone: false},
            {id: v1(), title: 'CSS/HTML', isDone: true},
        ],
        [todoListID2]: [
            {id: v1(), title: 'Water', isDone: true},
            {id: v1(), title: 'Bear', isDone: true},
            {id: v1(), title: 'Whisky', isDone: false},
        ]
    })

    const buttonRemoveTask = (todoListId: string, id: string) => {
        let todolist = task[todoListId]
        task[todoListId] = todolist.filter(elem => elem.id !== id)
        setTodoLists([...todoLists])
    }

    let buttonFilterTask = (todoListId: string, value: FilterType) => {
        return setTodoLists(todoLists.map(tl => tl.id === todoListId ? {...tl, filter: value} : tl))
    }

    const addTasks = (todoListId: string, title: string) => {
        let newTask = {
            id: v1(),
            title,
            isDone: false
        }
        setTask({...task, [todoListId]: [newTask, ...task[todoListId]]})
    }

    const changeStatus = (todoListId: string, taskId: string, isDone: boolean) => {
        setTask({...task, [todoListId]: task[todoListId].map(tl => tl.id === taskId ? {...tl, isDone} : tl)})
        // let todolist = task[todoListId]
        // let changeChecked = todolist.find(elem => elem.id === taskId)
        // if (changeChecked) {
        //     changeChecked.isDone = isDone
        // }
        // setTask({...task})
    }
    const buttonRemTodoList = (todoListId: string) => {
        let filterTodolist = todoLists.filter(tl => tl.id !== todoListId)
        setTodoLists(filterTodolist)
        delete task[todoListId]
        setTask({...task})
    }
    const addTodoList = (title: string) => {
        let todoList: TodoListsType = {
            id: v1(),
            title,
            filter: 'All'
        }
        setTodoLists([todoList, ...todoLists])
        setTask({
            ...task,
            [todoList.id]: []
        })
    }
    const changeTaskTitle = (todoListId: string, id: string, newValue: string) => {
         setTask({...task, [todoListId]:task[todoListId].map(tl=>tl.id === id? {...tl, title:newValue}:tl)})
    }

    const changeTodoListTitle = (id: string, newTitle: string) => {
         setTodoLists(todoLists.map(tl=>tl.id === id? {...tl, title:newTitle}:tl))
    }

    return <Grid>
        <AppBar position='static'>
            <Toolbar>
                <IconButton edge='start' color='secondary' aria-label='menu'>
                    <Menu/>
                </IconButton>
                <Typography variant='h6'>
                    News
                </Typography>
            </Toolbar>
        </AppBar>
        <Container fixed>
            <Grid container style={{padding: '5px'}}>
                <AddItemForm addItem={addTodoList}/>
            </Grid>
            <Grid container spacing={3}>
                {todoLists.length ? todoLists.map(tl => {
                    let filterTasks = task[tl.id]
                    if (tl.filter === 'Active') {
                        filterTasks = filterTasks.filter(elem => !elem.isDone)
                    }
                    if (tl.filter === 'Completed') {
                        filterTasks = filterTasks.filter((elem => elem.isDone))
                    }
                    return <Grid item>
                        <Paper key={tl.id} style={{padding: '5px'}} elevation={3}>
                            <Tasks
                              todolistID={tl.id}
                              title={tl.title}
                              tasks={filterTasks}
                              buttonRemoveTask={buttonRemoveTask}
                              buttonFilterTask={buttonFilterTask}
                              addTasks={addTasks}
                              changeStatus={changeStatus}
                              filter={tl.filter}
                              buttonRemTodoList={buttonRemTodoList}
                              changeTaskTitle={changeTaskTitle}
                              changeTodoListTitle={changeTodoListTitle}
                            />
                        </Paper>
                    </Grid>
                }) : <span className='empty'>Create your first TodoList</span>}
            </Grid>
        </Container>
    </Grid>
}
export default Todolist