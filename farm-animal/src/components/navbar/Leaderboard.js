// import Board from '../leaderboard/Leaderboard'
import { scores } from './database';
import Profiles from './Profile';
import React, { useState } from 'react'
import '../../styles/navbar_/Leaderboard.css'

export default function Board() {

  const [period, setPeriod] = useState(0);
  const handleClick = (e) => {
    setPeriod(e.target.dataset.id)
  }

  return (
    <div className='lead-page'>
    <div className="board">
      <h1 className="leaderboard">Leaderboard</h1>
      <div className="duration">
        <button className='board-button' onClick={handleClick} data-id='7'>This Week</button>
        <button className='board-button' onClick={handleClick} data-id='30'>This Month</button>
        <button className='board-button' onClick={handleClick} data-id='365'>This Year</button>
      </div>
      <div className='board-container'>
        <Profiles Leaderboard={between(scores, period)}></Profiles>
      </div>
    </div>
    </div>
  )
}

function between(data, between) {
  const today = new Date();
  const previous = new Date(today);
  previous.setDate(previous.getDate() - (between + 1));

  let filter = data.filter(val => {
    let userDate = new Date(val.dt);
    if (between === 0) return val;
    return previous <= userDate && today >= userDate;
  })

  return filter.sort((a, b) => {
    if (a.score === b.score) {
      return b.score - a.score;
    }
    else {
      return b.score - a.score;
    }
  })
}
