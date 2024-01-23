import React from 'react'
import {motion} from 'framer-motion'
import './Header.scss'
import {AppWrap } from '../../wrapper'


const imgmongo = "https://th.bing.com/th/id/OIP.mwJKYF6LLQ7U0_YKqdCATwHaEo?rs=1&pid=ImgDetMain"

const imgexpress = "https://th.bing.com/th/id/OIP.mbGqG9oLZIhHr4KoESQtIAHaJ4?w=750&h=1000&rs=1&pid=ImgDetMain"
const imgreact = "https://th.bing.com/th/id/OIP.-BpvNzwkSx9w9LdAK1qzcgHaGo?rs=1&pid=ImgDetMain"

const imgnode = "https://th.bing.com/th/id/OIP.Y2abU2X1ZeHm83pR9uYPZQHaGj?rs=1&pid=ImgDetMain"
const scaleVariants = {
  whileInView: {
    scale: [0,1] ,
    opacity : [0,1],
    transition : {
      duration : 1 ,
      ease : 'easeInOut'
    }
  }
}
function Header() {
  return (
    <div  className='app__header app__flex'>
      <motion.div
       whileInView={{ x: [-100, 0] , opacity: [0 , 1]}} 
      transition={{duration : 0.5}}
      className='app__header-info' >
      <div className='app__header-badge'>
        <div className=''>
        <div className="hero-content">
        <h2>Designing Tomorrow's Digital Landscape with Creative Excellence</h2>
        <p>
          Passionate FrontEnd developer | transforming Ideas into seamless and
          Visually stunning Web Solutions
        </p>
      </div>
         
        
         
        </div>
       
      </div>
      </motion.div>
      <motion.div   whileInView={{  opacity: [0 , 1]}} 
      transition={{duration : 0.5 , delayChildren : 0.5}}
      className='app__header-img'>
        <img src='https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-6/417160292_892294765872380_203794965724250761_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=Kz_zNlb2nUwAX-PNVRt&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfDPug5TtY7j8YGfvbOSiT_3kDF7yvoobE-ReZ9nFqcMfQ&oe=65B3156D' alt='safa'></img>
      </motion.div>
   
      <motion.div 
      variant={scaleVariants}
      whileInView={  scaleVariants.whileInView }
      className='app__header-circles'
    >
        {[imgreact, imgexpress, imgmongo  , imgnode ].map((circle , index)=>(
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
       <img src={circle} ></img>
           
          </div>
        ))}
        
        
      </motion.div>
    </div>
  )
}

export default AppWrap (Header , 'home')