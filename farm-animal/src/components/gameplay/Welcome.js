import React from 'react'
import Canvas from './Canvas';

const homeBase = new Image();
homeBase.src = "../src/assets/backgImg/homeBase.png";

//Put the offset of the image here (ie if you want to ste the player to 
//middle of the image then there would be an offset since it usually starts
// at (0,0)).
const offset = {
  x: -735,
  y: -650
}

//To keep track of the different images info
class Sprite {
  //Whenever new instance of sprite, constructor called.
  /**We pass an object (in {}) to the constructor because if we
    just pass posiiton and velocity, then we have to remember the 
    position they are in when we are passing arguments
  **/
  //frames property is for the player image sprite (has 4 frames)
  //We set frames to 1 on default and that can be overriden.
  // constructor({ position, velocity, image, frames = { max: 1 } }) {
  //   this.position = position
  //   /**We added image as a property because image variable wont be accesible 
  //    * from Headers, so we need to pass when we create a Sprite
  //    **/
  //   this.image = image
  //   this.frames = frames
  //   //this is so that we can crop our player image when it is loaded in 
  //   //(since the original is an image with 4 players).
  //   this.image.onload = () => {
  //     this.width = this.image.width / this.frames.max
  //     this.height = this.image.height
  //   }

  // }

  // //Code to drawImage()
  // draw() {
  //   c.drawImage(
  //     this.image,
  //     /**Since we are using a sprite with four images in row, we want to crop the 
  //       image. The 1st param after this message is the starting x coordinate.
  //       The 2nd param after this message is the starting y coordinate.
  //       The 3rd param after this message is the ending x coorindate (we divide by
  //       4 because there are 4 images and we want to crop equally between them).
  //       The 4th param after this messsage is the ending y coord (we want full 
  //       height of image).
  //     **/
  //     0,
  //     0,
  //     this.image.width / this.frames.max,
  //     this.image.height,
  //     this.position.x,
  //     this.position.y,
  //     //Now declaring the actual width and height that our image should be rendered out as
  //     this.image.width / this.frames.max,
  //     this.image.height,
  //   );
  // }
}

function draw() {
  window.requestAnimationFrame(draw)
  console.log('animate');
  background.draw();
}

const background = new Sprite({

  position: {
    x: offset.x,
    y: offset.y
  },
  image: homeBase
})

const movables = [background];

// const draw = context => {
//   //Code to draw an image

// }

function Welcome() {
  return (
    <Canvas draw={draw} height={1040} width={576} />
  )
}

export default Welcome