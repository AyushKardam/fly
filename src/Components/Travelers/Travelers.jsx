import React from 'react'
//imported destination images======>
import paris from '../../assets/Paris.jpg'
import NewYork from '../../assets/NewYork.jpg'
import london from '../../assets/London.jpg'
import dubai from '../../assets/Dubai.jpg'

//imported travellers image =======>
import traveler1 from '../../assets/user (1).png'
import traveler2 from '../../assets/user (2).png'
import traveler3 from '../../assets/user (3).png'
import traveler4 from '../../assets/user (4).png'

// we are going to use high array method called map to display all the data =======>
  const travelers = [
    {
      id:1,
      destinationImage: paris,
      travelerImage: traveler1,
      travelerName: 'Ashutosh Singh',
      socialLink: '@ashusng05',
    },

    {
      id:2,
      destinationImage: NewYork,
      travelerImage: traveler2,
      travelerName: 'Ayush Kardam',
      socialLink: '@ayushkardam18',
    },

    {
      id:3,
      destinationImage: london,
      travelerImage: traveler3,
      travelerName: 'Ashmit Verma',
      socialLink: '@ashmitverma01',
    },

    {
      id:4,
      destinationImage: dubai,
      travelerImage: traveler4,
      travelerName: 'Adarsh Singla',
      socialLink: '@adarshkumar08',
    }
  ]



const Travelers = () => {
  // useEffect to set animation duration

  useEffect(()=>{
     Aos.init({duration:2000})
  }, [])

  
  return (
    <><div>Travelers</div><div className=' travelers container section'>
      <div className="sectionContainer">
        <h2>
          Top travelers of this month
        </h2>

        <div className="travelersConatiner grid">

          {travelers.map(({ id, destinationImage, travelerImage, travelerName, socialLink }) => {
            return (
              // {/* single passenger card */}
              <div key={id} className="singleTraveler">

                <img src={destinationImage} className='destinationImage' />

                <div className="travelerDetails">
                  <div className="travelerPicture">
                    <img src={travelerImage} className='travelerImage' />
                  </div>
                  <div className="travelerName">
                    <span>{travelerName}</span>
                    <p>{socialLink}</p>
                  </div>
                </div>

              </div>
            )
          })}


        </div>
      </div>

    </div></>
  )
}
