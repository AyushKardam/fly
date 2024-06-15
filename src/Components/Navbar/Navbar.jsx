import React, {useState} from 'react';
import { SiConsul } from 'react-icons/si'
import { BsPhoneVibrate } from 'react-icons/bs'
import { AiOutlineGlobal } from 'react-icons/ai'
import { CgMenuGridO } from 'react-icons/cg'
  //Imported images =======>
   import logo from '../../assets/logo.png'
   <div styleName={} />
   <assets />
   <logo className="png"></logo>
   <div styleName={}></div>
export const Navbar = () => {
 // let us remove the navbar in the small width 
  const[active, setActive]= useState('navBarMenu')
  const showNavBar = () => {
    setActive('navBarMenu showNavBar')
  } 

  const removeNavBar = () => {
    setActive('navBarMenu showNavBar')
  }
 // let add a background color to a second navbar
  const[noBg, addBg]= useState('navBarTwo')
  const addBgColor = () => {
   if(window.scrollY >=10){
    addBg('navBarTwo navbar_With_Bg')
   }else{
    addBg('navBarTwo')
   }
} 
window.addEventListener('scroll' ,addBgColor)



  return (
    <div className='navbar flex'>

      <div className="navBarOne flex">
        <div>
          <SiConsul classNmae='icon'/>
        </div>
        <div className= 'none flex'>
          <li className='flex' > <BsPhoneVibrate classNmae='icon'/>Support</li>
          <li className='flex' > <AiOutlineGlobal classNmae='icon'/>Language</li>



        </div>


        <div className="atb flex"></div>
        <span>Sign In</span>
        <span>Sign Out</span>

      </div>

      <div className={noBg}>  

      <div className="logoDiv"> 
        <img src= {logo} className='logo' />
      </div>
       <div className={active}>
       <ul className="menu flex">
       <li onClick={removeNavBar} className="listItem">Home</li>
       <li onClick={removeNavBar} className="listItem">About</li>
       <li onClick={removeNavBar} className="listItem">Offers</li>
       <li onClick={removeNavBar} className="listItem">Seats</li>
       <li onClick={removeNavBar} className="listItem">Destinations</li>
       </ul>

       <button onClick={removeNavBar} className='btn flex btnOne'>
        Contact
       </button>
       
      </div>
      <button className='btn flex btnTwo'>
        Contact
       </button>

      <div onClick={showNavBar} classNmae='toggleIcons'>
        < CgMenuGridO className='icon'/>

      </div>


    </div>
    </div>
    
  )
}

export default Navbar
