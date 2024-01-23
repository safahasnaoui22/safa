import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import 'react-tooltip/dist/react-tooltip.css'
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';
import Parti from '../../Particles';


const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <div className='skills'> 
  <Parti/>
      <h2 className="head-text">Skills </h2>
     
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                
              >
                <img className='image' src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-name">{skill.name}</p>
             
              <p className="p-text">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
       
      </div>
    </div>
  );
};


  export default AppWrap(
    MotionWrap(Skills, 'app__skills'),
    'skills',
    'app__whitebg'
  );
  