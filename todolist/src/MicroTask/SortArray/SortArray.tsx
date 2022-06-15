import React, {useState} from 'react'
import {v1} from "uuid";
import './style.css'

type SortArrayType = {
    id: string
    team: string
    position: number
}

const listOfTeams: Array<SortArrayType> = [
    {id: v1(), team: 'Manchester United', position: 1},
    {id: v1(), team: 'Manchester City', position: 2},
    {id: v1(), team: 'LiverPool', position: 3},
    {id: v1(), team: 'Chelsea', position: 4},
    {id: v1(), team: 'Arsenal', position: 5},
]

const SortArray = () => {
    const [table, setTable] = useState(listOfTeams)



    
    const teamsTable = table.map((t, key) => {
        return <tbody key={key} className='dataTable'>
        <tr>
            <td>{t.position}</td>
            <td>{t.team}</td>
        </tr>
        </tbody>
    })

    return <table className='table'>
        <thead>
        <tr className='titleTable'>
            <th className='place'>Place
                <button>s</button>
            </th>
            <th className='team'>
                <button>s</button>
                Team
            </th>
        </tr>
        </thead>

        {teamsTable}

    </table>
}
export default SortArray