import React from 'react'

export default function Profiles({ Leaderboard }) {
  return (
    <div id="profile">
      {Leaderboard.map((value, index) => (
        <div className="flex" key={index}>
          <div className="item">
            <img src= {value.img} alt="" />
            <h1>{value.img}</h1>
            <div className="info">
              <h3 className='name'>{value.name}</h3>
              <span>{value.location}</span>
            </div>

          </div>
          <div className="item">
            <span>{value.score}</span>
          </div>
        </div>

      ))}
    </div>
  )
}

