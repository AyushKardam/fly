import React from 'react'
//imported imagrs========>
import imageGrid from '../../assets/images-Grid2.png'

const Lounge = () => {
    return (
        <div className='lounge container section'>
            <div className="sectionContainer grid">

                <div className="imgDiv">
                    <img src={imageGrid} />
                </div>


                <div className="textDiv">
                    <h2>Unaccompanied Minor Lounge</h2>


                    <div className="grids grid">

                        <div className="singlrGrid">
                            <span className='gridTitle'>
                                Help through the airport
                            </span>
                            <p>
                                You can also call airlines from your phone and book a flight ticket
                                to one of your favourite destinations.
                            </p>
                        </div>


                        <div className="singlrGrid">
                            <span className='gridTitle'>
                                Priority Boarding
                            </span>
                            <p>
                                You can also call airlines from your phone and book a flight ticket
                                to one of your favourite destinations.
                            </p>
                        </div>


                        <div className="singlrGrid">
                            <span className='gridTitle'>
                                Care on the flight
                            </span>
                            <p>
                                You can also call airlines from your phone and book a flight ticket
                                to one of your favourite destinations.
                            </p>
                        </div>

                        <div className="singlrGrid">
                            <span className='gridTitle'>
                                Chauffeur-drive service
                            </span>
                            <p>
                                You can also call airlines from your phone and book a flight ticket
                                to one of your favourite destinations.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Lounge
