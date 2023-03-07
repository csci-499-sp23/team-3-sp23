import React from 'react'
import '../../styles/Info.css';

const Info = () => {
  return (
    <div className='entire-page'>

      <div className= "about-section"> 
        <h1>About us Page</h1>
        <p> 
        Get immersed into an animated world of farm animals trying to level up in a kill or be killed world of Animal Mafia. Trying to join the ranks of the mafia, you'll explore an animal farm in southern New Jersey in hopes of one day becoming “The Don”. But it won't come easy while making new enemies along the way. Play alone or compete against friends in the race to become the top of your mob 
        </p>
        <br></br>
        <p>
        Animal Mafia's game play is similar to Dungeon Explorer in terms of game layout and battle play. The farming portion of this game (similar to AFK) allows users to win seeds from battles that they can use to plant and grow crops to level up their animals. Each user starts out with a randomly generated farm animal with entry level stats and receives a small loan of 500 points to get them started in the game. The Don expects their money in full, therefore 500 points will automatically deduct from the user's wallet when their animal reaches 1000 points in profit (a small price to play to level up). Secured by Blockchain, this point system will allows users to transfer or sell points to other users registered in Animal Mafia. Conceptually this currency can be used in other games made by the same developers. In a scenario where the developers created a new game, veteran gamers of Animal Mafia can transfer their points to another game or sell it securely to other registered users. 
        </p>
      </div>

      <h1 className='meet-the-team'>Meet the Team</h1>

      <div className='info-row'>
        <div className="info-column">
          <div className='info-card'>
            <div className='info-container'>
              <h2>Shermol</h2>

              <br></br>

              <p className='card-title'>
                Useless Team Member
              </p>

              <br></br>

              <p className='card-body'>
                Working on Info Page
              </p>

              <br></br>

              <p className='card-email'>
                SP@gmail.com
              </p>

              <br></br>

            </div>  
          </div>
        </div>

        <div className="info-column">
          <div className='info-card'>
            {/* <img src="/w3images/team1.jpg" alt="Jane" style="width:100%"> */}
            <div className='info-container'>
              <h2>Chloe</h2>

              <br></br>

              <p className='card-title'>
                Da Project Owner
              </p>

              <br></br>

              <p className='card-body'>
              Working on Shanky HW
              </p>

              <br></br>

              <p className='card-email'>
              CB@gmail.com
              </p>

              <br></br>

            </div>  
          </div>
        </div>

        <div className="info-column">
          <div className='info-card'>
            {/* <img src="/w3images/team1.jpg" alt="Jane" style="width:100%"> */}
            <div className='info-container'>
              <h2>Annie</h2>

              <br></br>

              <p className='card-title'>
                *insert frog noise*
              </p>

              <br></br>

              <p className='card-body'>
              Working on Home Page
              </p>

              <br></br>

              <p className='card-email'>
                AM@gmail.com
              </p>

              <br></br>

            </div>  
          </div>
        </div>

        <div className="info-column">
          <div className='info-card'>
            {/* <img src="/w3images/team1.jpg" alt="Jane" style="width:100%"> */}
            <div className='info-container'>
              <h2>Daniel</h2>

              <br></br>

              <p className='card-title'>
                Sour Patch Kid
              </p>

              <br></br>

              <p className='card-body'>
              Working on Backend
              </p>

              <br></br>

              <p className='card-email'>
                DL@gmail.com
              </p>

              <br></br>

            </div>  
          </div>
        </div>

        <div className="info-column">
          <div className='info-card'>
            {/* <img src="/w3images/team1.jpg" alt="Jane" style="width:100%"> */}
            <div className='info-container'>
              <h2>Liza</h2>

              <br></br>

              <p className='card-title'>
                Team Ace
              </p>

              <br></br>

              <p className='card-body'>
              Working on Leaderboard
              </p>

              <br></br>

              <p className='card-email'>
                Liza@gmail.com
              </p>
              
              <br></br>

            </div>  
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default Info