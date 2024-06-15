import React from 'react'
//imported assests =======>
  import video from '../../assets/video.mp4'
import aeroplane from '../../assets/tafeOff.png'

const Home = () => {
  return (
    <div className='home flex container'>

      <div className='mainText'>
        <h1>Create Ever-Lasting Memories With Us</h1>
      </div>


      <div className="homeImages flex"> 
        
        <div className="videoDiv">
          <video src={Video} autoplay muted loop className='Video'></video>
        </div>
        
        <img src={aeroplane} className='Plane' />
      </div>
    </div>
  )
}

export default Home
