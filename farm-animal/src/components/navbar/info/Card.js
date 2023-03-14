import React from 'react'
import "../../../styles/navbar_/info_/Card.css"
function Card() {
  return (
    <div className='info-row'>
    <div className="info-column">
    <div className='info-card'>
    {/* <img src={require('/src/assets/app-info/App_Info.jpg')}/> */}
        <div className='info-container'>
            <h2 className='card-header'>Shermol</h2>
            <p className='card-title'>
            Useless Team Member
            </p>
            <p className='card-body'>
            Working on Info Page
            </p>
            <p className='card-email'>
            SP@gmail.com
            </p>
            {/* sherrmol comment */}
        </div>  
        </div>
    </div>

    <div className="info-column">
        <div className='info-card'>
        {/* <img src="/w3images/team1.jpg" alt="Jane" style="width:100%"> */}
        <div className='info-container'>
            <h2 className='card-header'>Chloe</h2>
            <p className='card-title'>
            Da Project Owner
            </p>
            <p className='card-body'>
            Working on Shanky HW
            </p>
            <p className='card-email'>
            CB@gmail.com
            </p>
        </div>  
        </div>
    </div>

    <div className="info-column">
        <div className='info-card'>
        {/* <img src="/w3images/team1.jpg" alt="Jane" style="width:100%"> */}
        <div className='info-container'>
            <h2 className='card-header'>Annie</h2>
            <p className='card-title'>
            *insert frog noise*
            </p>
            <p className='card-body'>
            Working on Home Page
            </p>
            <p className='card-email'>
            AM@gmail.com
            </p>
        </div>  
        </div>
    </div>

    <div className="info-column">
        <div className='info-card'>
        {/* <img src="/w3images/team1.jpg" alt="Jane" style="width:100%"> */}
        <div className='info-container'>
            <h2 className='card-header'>Daniel</h2>
            <p className='card-title'>
            Sour Patch Kid
            </p>
            <p className='card-body'>
            Working on Backend
            </p>
            <p className='card-email'>
            DL@gmail.com
            </p>
        </div>  
        </div>
    </div>

    <div className="info-column">
        <div className='info-card'>
        {/* <img src="/w3images/team1.jpg" alt="Jane" style="width:100%"> */}
        <div className='info-container'>
            <h2 className='card-header'>Liza</h2>
            <p className='card-title'>
            Team Ace
            </p>
            <p className='card-body'>
            Working on Leaderboard
            </p>
            <p className='card-email'>
            Liza@gmail.com
            </p>
        </div>  
        </div>
        </div>

    </div>
  );
}

export default Card;