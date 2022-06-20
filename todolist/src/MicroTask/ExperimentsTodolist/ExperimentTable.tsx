import React, {useState} from 'react';
import {v1} from "uuid";
import './style.css'
import manCity from './image/manCity.png'
import manUtd from './image/manUtd.png'
import liver from './image/liver.png'
import chels from './image/chels.png'
import totHot from './image/totHot.png'
import ars from './image/ars.png'

type ExperimentTableType = {
    id: string
    rank: string
    img: any
    team: string
    MP: number
    W: number
    D: number
    L: number
    PTS: number
}

const teamsTable = [
    {
        id: v1(),
        rank: '1.',
        img: <img src={manCity} alt=""/>,
        team: 'Manchester City',
        MP: 38,
        W: 29,
        D: 6,
        L: 3,
        PTS: 93
    },
    {id: v1(), rank: '2.', img: <img src={liver} alt=""/>, team: 'Liverpool', MP: 38, W: 28, D: 8, L: 2, PTS: 92},
    {id: v1(), rank: '3.', img: <img src={chels} alt=""/>, team: 'Chelsea', MP: 38, W: 21, D: 11, L: 6, PTS: 74},
    {id: v1(), rank: '4.', img: <img src={totHot} alt=""/>, team: 'Tottenham', MP: 38, W: 22, D: 5, L: 11, PTS: 71},
    {id: v1(), rank: '5.', img: <img src={ars} alt=""/>, team: 'Arsenal', MP: 38, W: 22, D: 3, L: 13, PTS: 69},
    {
        id: v1(),
        rank: '6.',
        img: <img src={manUtd} alt=""/>,
        team: 'Manchester Utd',
        MP: 38,
        W: 16,
        D: 10,
        L: 12,
        PTS: 58
    },
]

const ExperimentTable = () => {
    const [table, setTable] = useState<Array<ExperimentTableType>>(teamsTable)
    const [sortConfig, setSortedField] = useState(null);

    const tableLeague = table.map((tl, key) => {
        return <tbody key={key} className='body'>
        <tr className='tr'>
            <td>{tl.rank}</td>
            <td className='teamNames'><span className='gerb'>{tl.img}</span>{tl.team}</td>
            <td>{tl.MP}</td>
            <td>{tl.W}</td>
            <td>{tl.D}</td>
            <td>{tl.L}</td>
            <td>{tl.PTS}</td>
        </tr>
        </tbody>
    })



    return (
      <table className='table'>
          <thead className='thead'>
          <tr className='tr'>
              <th className='rank'>#</th>
              <th className='team'>Team</th>
              <th className='MP'>MP</th>
              <th className='W'>W</th>
              <th className='D'>D</th>
              <th className='L'>L</th>
              <th className='PTS'>PTS</th>
          </tr>
          </thead>
          {tableLeague}
      </table>
    );
};

export default ExperimentTable;