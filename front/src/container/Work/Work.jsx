import React, { useEffect, useState } from 'react'
import {AiFillEye , AiFillGithub} from 'react-icons/ai'
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor  , client} from '../../client';
import './Work.scss'
import SocialMedia from './SocialMedia';

function Work() {
 const [activeFilter , setActiveFilter] = useState('All')
 const [animateCard , setAnimateCart] = useState({y: 0 , opacity: 1})
const [Works , setWorks] = useState([])
const [filterWork , setFilterWork] = useState([])
 useEffect(() => {
const query = '*[_type == "works"]' ;

client.fetch(query)
.then((data) => {
  setWorks(data)
  setFilterWork(data)
})
  }, [])
  
 
 const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCart([{y:100, opacity: 0}])


setTimeout(() => {
  setAnimateCart([{y:0, opacity: 1}])

if (item ==='All') {
  setFilterWork(Works)
} else {
  setFilterWork(Works.filter((work) => work.tags.includes(item)))
}

}, 500 )

  }
  return (
    <>
    <h2 className="work-title">
      
       My creative <span>Portfolio</span>
     
      </h2>
      <div className='app__work-filter'>
        {['UI/UX' , 'Web App' , 'Reactjs' , 'All'].map((item, index) => (
        <div
        key={index}
        onClick={() => handleWorkFilter(item)}
        className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
        >
          {item}
        </div>
        ))}
      </div>
      <motion.div
      animate={animateCard}
      transition={{ duration : 0.5 , delayChildren : 0.5}}
      className='app__work-portfolio'
      >
        {filterWork.map((work , index) => (
          <div className='app__work-item app__flex' key={index}>

            <div className='app__work-img app__flex'>
              <img src={urlFor(work.imgUrl)} alt={work.name} />
           
           <motion.div
           whileHover={{opacity : [0 , 1]}}
           transition={{ duration : 0.25 , ease: 'easeInOut', staggerChildren : 0.5 }} //m3neha wa7ed wra lekher
           className='app__work-hover app__flex'
           >
            <a href={work.projectLink} target='_blank' rel='norefer'>
          <motion.div
          whileInView={{scale : [0 , 1] }}
          whileHover={{scale : [1 , 0.9]}}
          transition={{ duration : 0.25  }}
          className='app__flex'
          >
            <AiFillEye/>
          </motion.div>

            </a>
            <a href={work.codeLink} target='_blank' rel='norefer'>
          <motion.div
          whileInView={{scale : [0 , 1] }}
          whileHover={{scale : [1 , 0.9]}}
          transition={{ duration : 0.25  }}
          className='app__flex'
          >
            <AiFillGithub/>
          </motion.div>

            </a>
           </motion.div>
            </div>
            <div className='app__work-content app__flex'>
              <h4 className='bold-text'> {work.title} </h4>
              <p className='p-text' style={{ marginTop: 10}}> {work.description} </p>
              <div className='app__work-tag app__flex'>
              <h4> {work.tags} </h4>
              </div>
            </div>
          </div>
        ))}
    </motion.div>
    <SocialMedia
        facebook="https://www.facebook.com/safa.dkhili.12"
       
        github="https://github.com/safahasnaoui22/"
        whatsapp="+21654812998" 
        linkedin="https://www.linkedin.com/in/safa-dkhili-225112212/"
      />

     </>
  )
}

export default AppWrap (
  
  MotionWrap (Work , 'app__works' ) ,
  'work' ,
  "app__primarybg"
  );
 