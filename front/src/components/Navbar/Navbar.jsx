import React, { useState } from 'react'

 
import './Navbar.scss'
import {HiMenuAlt4 , HiX} from 'react-icons/hi'
import {motion} from 'framer-motion'
import image from './SD.png'

function Navbar() {
  const [isActive, setIsActive] = useState(false); //hM
  const [toggle , setToggle] = useState(false)
  
  return ( <div  className={`nav-container ${isActive ? 'active' : ''}`}  >
    <nav className='app__navbar' >
    <div className='app__navbar-logo'>
      <img  src={image} alt='img'/>
    </div>
    <ul className='app__navbar-links'>
      {['home' , 'skills' , 'work' , 'contact'  ].map((item) => (
        <li className='app__flex p-text' key={` link=${item}`}>
         <div></div>
          <a href={`#${item}`}>{item}  </a>
          
        </li>
        
      ))}
     
    </ul>
    <div className='app__navbar-menu'>
      
      <HiMenuAlt4 onClick={() => setToggle(true)}/>
     {/*setToggle is the function that we'll use to actually update the state of our component*/}
    
    {toggle && (
      <motion.div whileInView={{ x: [300, 0]}}
      transition={{duration: 0.85, ease: 'easeOut'}}
      >
<HiX onClick={() => setToggle(false)}/>
<ul >
{['home' , 'skills' , 'work' , 'contact'  ].map((item) => (
        <li key={item}>
       
          <a href={`#${item}`} onClick={() => setToggle(false)}>{item}  </a>
          
        </li>
      ))}
      
      </ul>
      <a href="/contact" className="contact-btn">
        Say Hi
      </a>
              
      </motion.div>
    )}
  
                
    </div>
    </nav>
  </div>
    
    
  )
}

export default Navbar