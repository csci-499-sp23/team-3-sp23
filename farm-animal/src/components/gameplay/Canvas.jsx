import React from 'react';
//For drawing image on canvas
import PropTypes from "prop-types";


//Adding heigh and width to make the component more reusable.
const Canvas = ({ draw, height, width }) => {
  const canvas = React.useRef();

  //To draw an image in canvas element, need CanvasRenderingContext2D obj
  //"useEffect code block runs during the React component life cycle"
  React.useEffect(() => {
    //canvas.current refers to the <canvas> element above.
    const context = canvas.current.getContext('2d');
    context.fillRect(0, 0, canvas.width, canvas.height);
    //Draws image that will be defined in another file
    draw(context);
  });



  return (
    <canvas
      //Line after this allows us to reference canvas using useRef hook
      //create variable pointing to useRef() and use it as value of ref attribute
      //of the canvas element. 
      ref={canvas}
      width={width}       //"1024"
      height={height}     //"576"
    />
  )
};

//"add PropTypes to make explicit the data type of each prop"
/**"One benefit of using PropTypes...by adding .isRequired... alerted in
the console in case we forget" to set the prop values
 **/
Canvas.propTypes = {
  draw: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

export default Canvas;