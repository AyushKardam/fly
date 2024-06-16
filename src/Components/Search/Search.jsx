import React from 'react'
// imported icons =======>
  import {HiOutlineLocationMarker} from 'react-icons/hi'
  import {RiAccountPinCircleline} from 'react-icons/ri'
  import {RxCalender} from 'react-icons/rx'


const Search = () => {
  return (
    <div className='search container section'>
      <div className="sectionContainer grid">

        <div className="btns flex">

          <div className="singlebtn">
            <span>Economy</span>
          </div>

          <div className="singlebtn">
            <span>Business Class</span>
          </div>

          <div className="singlebtn">
            <span>First Class</span>
          </div>

        </div>

        <div className="searchInputs flex">
          {/*single input*/}
          <div className="singleinput flex">
            <div className="iconDiv">
               <HiOutlineLocationMarker className='icon'/>
               </div>
               <div className="texts">
                <h4>Location</h4>
                <input type="text" placeholder ='Where do you want to go?' />
               </div>
              </div>

               {/*single input*/}
          <div className="singleinput flex">
            <div className="iconDiv">
               <RiAccountPinCircleline className='icon'/>
               </div>
               <div className="texts">
                <h4>Travellers</h4>
                <input type="text" placeholder ='Add guests' />
               </div>
             </div>

               {/*single input*/}
          <div className="singleinput flex">
            <div className="iconDiv">
               <RxCalender className='icon'/>
               </div>
               <div className="texts">
                <h4>Check In</h4>
                <input type="text" placeholder ='Add date' />
               </div>
            </div>

            {/*single input*/}
          <div className="singleinput flex">
            <div className="iconDiv">
               <RxCalender className='icon'/>
               </div>
               <div className="texts">
                <h4>Check Out</h4>
                <input type="text" placeholder ='Add date' />
               </div>
            </div>
          

             <button className='btn btnblock flex'>Search Flight</button>
        </div>

       </div>
      </div>
      

   
  )
}

export default Search
