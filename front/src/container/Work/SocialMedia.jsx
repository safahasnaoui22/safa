import React from 'react';
import './social.css'
import {
  FaFacebook,
 
  FaGithub,
  FaWhatsapp,
  FaLinkedin,
} from 'react-icons/fa';

const SocialMedia = ({
  facebook,
 
  github,
  whatsapp,
  linkedin,
}) => {
  return (
    <div className="social-media-icons">
      {facebook && (
        <a className='facebook' href={facebook} target="_blank" rel="noopener noreferrer">
          <FaFacebook />
          <p id='pFac'>Facebook</p>
        </a>
      )}
    
      {github && (
        <a className='github' href={github} target="_blank" rel="noopener noreferrer">
          
          <FaGithub />
          <p className='pgit'>GitHub</p>
        </a>
      )}
      {whatsapp && (
        <a className='whats' href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
          <p className='pwha'>Whatsapp</p>
        </a>
      )}
      {linkedin && (
        <a className='linked' href={linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
          <p className='plink'>Linkedin</p>
        </a>
      )}
    </div>
  );
};

export default SocialMedia;
