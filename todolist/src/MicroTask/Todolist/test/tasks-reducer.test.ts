
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, tasksReducer} from "./tasks-reducer";

test('correct task should be removed from correct array', ()=>{

    const startState = {
        ['todoListID1']: [
            {id: '1', title: 'JS', isDone: true},
            {id: '2', title: 'React', isDone: true},
            {id: '3', title: 'C++/C#', isDone: false},
            {id: '4', title: 'Python', isDone: false},
            {id: '5', title: 'CSS/HTML', isDone: true},
        ],
        ['todoListID2']: [
            {id: '1', title: 'Water', isDone: true},
            {id: '2', title: 'Bear', isDone: true},
            {id: '3', title: 'Whisky', isDone: false},
        ]
    }
    const action = removeTaskAC('todoListID2','2')
    const endState = tasksReducer(startState, action )
    expect(endState['todoListID1'].length).toBe(5)
    expect(endState['todoListID2'].length).toBe(2)
})
test('correct task should be add to array', ()=> {
    const startState = {
        ['todoListID1']: [
            {id: '1', title: 'JS', isDone: true},
            {id: '2', title: 'React', isDone: true},
            {id: '3', title: 'C++/C#', isDone: false},
            {id: '4', title: 'Python', isDone: false},
            {id: '5', title: 'CSS/HTML', isDone: true},
        ],
        ['todoListID2']: [
            {id: '1', title: 'Water', isDone: true},
            {id: '2', title: 'Bear', isDone: true},
            {id: '3', title: 'Whisky', isDone: false},
        ]
    }
    const action = addTaskAC('todoListID2', 'My Team')
    const endState = tasksReducer(startState,action)
    expect(endState['todoListID1'].length).toBe(5)
    expect(endState['todoListID2'].length).toBe(4)
    expect(endState['todoListID2'][0].id).toBeDefined()
    expect(endState['todoListID2'][0].title).toBe('My Team')
    expect(endState['todoListID2'][0].isDone).toBe(true)
})

test('correct task should be changed', ()=>{
    const startState = {
        ['todoListID1']: [
            {id: '1', title: 'JS', isDone: true},
            {id: '2', title: 'React', isDone: true},
            {id: '3', title: 'C++/C#', isDone: false},
            {id: '4', title: 'Python', isDone: false},
            {id: '5', title: 'CSS/HTML', isDone: true},
        ],
        ['todoListID2']: [
            {id: '1', title: 'Water', isDone: true},
            {id: '2', title: 'Bear', isDone: true},
            {id: '3', title: 'Whisky', isDone: false},
        ]
    }
    const action = changeTaskStatusAC('todoListID2','2',false)
    const endState = tasksReducer(startState,action)
    expect(endState['todoListID2'][1].isDone).toBeFalsy()
    expect(endState['todoListID1'][1].isDone).toBeTruthy()
})

test('title task should be changed', ()=>{
    const startState = {
        ['todoListID1']: [
            {id: '1', title: 'JS', isDone: true},
            {id: '2', title: 'React', isDone: true},
            {id: '3', title: 'C++/C#', isDone: false},
            {id: '4', title: 'Python', isDone: false},
            {id: '5', title: 'CSS/HTML', isDone: true},
        ],
        ['todoListID2']: [
            {id: '1', title: 'Water', isDone: true},
            {id: '2', title: 'Bear', isDone: true},
            {id: '3', title: 'Whisky', isDone: false},
        ]
    }
    const action = changeTaskTitleAC('todoListID2','2','Milk')
    const endState = tasksReducer(startState, action)

    expect(endState['todoListID2'][1].title).toBe('Milk')
    expect(endState['todoListID2'][0].title).toBe('Water')
})