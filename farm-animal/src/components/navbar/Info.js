import React from 'react'
import '../../styles/Info.css';

const Info = () => {
  return (
    <div className='entire-page'>
      <div className= "about-section"> 
        <h1>About us Page</h1>
        <p> 
        Animal Mafia is the mixture of a Dungeon Explorer Game and AFK farm simulator (revise later). 
        Get immersed into an animated world where you play the role of a farm animal lost in the ranks of the mob. 
        Tying to make a name for yourself, you explore the world of southern New Jersey in hopes of one day becoming the “Don”. 
        Making new fiends and foes along the way, Animal mafia is a great way to spend your day. 
        Play alone or compete against friends in the race to become the top of your mob 
        Click play to start your adventure!!!
        </p>
      </div>

      <h1 classname = "meet-team-css">Meet the Team</h1>

      <div className='row'>
        <div className="column">
          <div className='card'>
            <div className='container'>
              <h2>Shermol</h2>
              <p className='title'>
                Useless Team Member
              </p>
              <p>
                Shermol helps out sometimes
              </p>
              <p>
                shermolpeters@gmail.com
              </p>
            </div>  
          </div>
        </div>

        <div className="column">
          <div className='card'>
            {/* <img src="/w3images/team1.jpg" alt="Jane" style="width:100%"> */}
            <div className='container'>
              <h2>Chloe</h2>
              <p className='title'>
                Da Project Owner
              </p>
              <p>
                Chloe helps out sometimes
              </p>
              <p>
                ChloeAlrbright@gmail.com
              </p>
            </div>  
          </div>
        </div>

        <div className="column">
          <div className='card'>
            {/* <img src="/w3images/team1.jpg" alt="Jane" style="width:100%"> */}
            <div className='container'>
              <h2>Annie</h2>
              <p className='title'>
                *insert frog noise*
              </p>
              <p>
                Annie helps out sometimes
              </p>
              <p>
                AnnieMai@gmail.com
              </p>
            </div>  
          </div>
        </div>

        <div className="column">
          <div className='card'>
            {/* <img src="/w3images/team1.jpg" alt="Jane" style="width:100%"> */}
            <div className='container'>
              <h2>Daniel</h2>
              <p className='title'>
                Nightowl aka the sourpatch kid
              </p>
              <p>
                Daniel helps out sometimes
              </p>
              <p>
                DanielLastName@gmail.com
              </p>
            </div>  
          </div>
        </div>

        <div className="column">
          <div className='card'>
            {/* <img src="/w3images/team1.jpg" alt="Jane" style="width:100%"> */}
            <div className='container'>
              <h2>Liza</h2>
              <p className='title'>
                Team Ace
              </p>
              <p>
                Liza helps out sometimes
              </p>
              <p>
                LizaLastName@gmail.com
              </p>
            </div>  
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default Info