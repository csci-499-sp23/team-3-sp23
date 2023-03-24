import React from 'react'
import Canvas from './Canvas';

const draw = (context) => {
  context.fillStyle = "rgb(200, 0, 0)";
  context.fillRect(10, 10, 50, 50);

  context.fillStyle = "rgba(0, 0, 200, 0.5)";
  context.fillRect(30, 30, 50, 50);
};


function Welcome() {
  return (
    <Canvas draw={draw} height={1040} width={576} />
  )
}

export default Welcome