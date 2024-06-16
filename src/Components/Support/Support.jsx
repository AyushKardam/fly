import React from 'react'
//imported images ======>
import gridImage from '../../assets/Images-Grid.png'

const Support = () => {
  return (
    <><div>Support</div><div className='support container section'>
      <div className="sectionContainer">

        <div className="tittlesDiv">
          <small>travel support</small>
          <h2>Plan your travel with confidence</h2>
          <p>Find help with booking and travel plans , see what to expect along
            the journey!</p>
        </div>

        <div className="infoDiv grid">

          <div className="textDiv grid">
            <div className="singleInfo">
              <span className='number'>01</span>
              <h4>Travel requirements for Dubai</h4>
              <p>
                Find help with booking and travel plans , see what to expect along
                the journey with your favourite destination!
              </p>
            </div>

            <div className="singleInfo">
              <span className='number colorOne'>02</span>
              <h4>Chauffeur services at your arrival</h4>
              <p>
                Find help with booking and travel plans , see what to expect along
                the journey with your favourite destination!
              </p>
            </div>

            <div className="singleInfo">
              <span className='number colorTwo'>03</span>
              <h4>Multi-risk travel insurance</h4>
              <p>
                Find help with booking and travel plans , see what to expect along
                the journey with your favourite destination!
              </p>
            </div>

          </div>

          <div className="imageDiv">
            <img src={gridImage} />
          </div>
        </div>

      </div>
    </div></>
  )
}
