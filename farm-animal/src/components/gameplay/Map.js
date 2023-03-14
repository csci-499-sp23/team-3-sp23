import React, {useState} from 'react'
function Map() {
    const [size, setSize] = useState(0);
    const [length, setLength] = useState(0);
    const [tunnel, setTunnel] = useState(0);
    const mapSize = (size) => {
        const map = []
        for(var i = 0; i < size; i++)
        {
            map.push([]);
            for(var j = 0; j < size; j++)
                map.push([1]);
        }
    }
    const mapCreate = () => 
    {

    }
  return (
    <div className='message'>Welcome to the game LADILADIDAH</div>
  )
}