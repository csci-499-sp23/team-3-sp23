import React from 'react'
import '../../styles/navbar_/info_/Info.css';
import Card from './Card';

const Info = () => {
  return (
    <div className='entire-page'>

      <div className= "about-section"> 
        <h1 className='info-header'>About us Page</h1>
        <p className='info-txt'> 
        Get immersed into an animated world of farm animals trying to level up in a kill or be killed world of Animal Mafia. Trying to join the ranks of the mafia, you'll explore an animal farm in southern New Jersey in hopes of one day becoming “The Don”. But it won't come easy while making new enemies along the way. Play alone or compete against friends in the race to become the top of your mob 
        </p>
        <br></br>
        <p className='info-txt'>
        Animal Mafia's game play is similar to Dungeon Explorer in terms of game layout and battle play. The farming portion of this game (similar to AFK) allows users to win seeds from battles that they can use to plant and grow crops to level up their animals. Each user starts out with a randomly generated farm animal with entry level stats and receives a small loan of 500 points to get them started in the game. The Don expects their money in full, therefore 500 points will automatically deduct from the user's wallet when their animal reaches 1000 points in profit (a small price to play to level up). Secured by Blockchain, this point system will allows users to transfer or sell points to other users registered in Animal Mafia. Conceptually this currency can be used in other games made by the same developers. In a scenario where the developers created a new game, veteran gamers of Animal Mafia can transfer their points to another game or sell it securely to other registered users. 
        </p>
      </div>

      <div className='info-game-detail-section'>
        <div className='info-how-to-play'> {/*HTW = how to play */}
          <div className='info-GDS-colomn'>
            <div className='info-GDS-card'>
              this is the how to play section
            </div>

          </div>
  
        </div>

        <div className='info-about-mafia'> {/*AM = about mafia */}
          <div className='info-GDS-colomn'>
            <div className='info-GDS-card'>
              <b>Don</b> : The Offical Boss and First position of power in the family. His word is law and nothing ever gets
              past him without knowledge of it.

              <br></br> <br></br>

              <b>Underboss</b> : Second in positon in power of crime family heirarchy and the most likely next in line to become 
              the Don in the event the present Don retires, becomes incarcerated, become sick or is killed.

              <br></br> <br></br>


              <b>Consigliere</b> : He is the Don's right hand man, advisor, coordinator and even legal counsel to him and the crime family.

              <br></br> <br></br>


              <b>Caporegime</b> :He is the third postion of power in the crime heirarchy fam

              <br></br> <br></br>


              <b>Soldier</b> :

              <br></br> <br></br>


              <b>Associate</b> :

              <br></br> <br></br>

            </div>

          </div>
          
        </div>
        
      </div>

      <h1 className='info-header'>Meet the Team</h1>

      <Card />
      
    </div>
  )
}

export default Info