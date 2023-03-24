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

class Sprite {

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