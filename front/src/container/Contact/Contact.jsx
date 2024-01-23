import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.scss'
import { AppWrap, MotionWrap } from '../../wrapper';
import { CopyrightYear } from '../../components';
function Contact() {
  const form = useRef();
  const [templateId, setTemplateId] = useState('');
  const [isMessageSent, setIsMessageSent] = useState(false);
  useEffect(() => {
 
    const dynamicTemplateId = 'template_necdftw'; 

    setTemplateId(dynamicTemplateId);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jnuxfzc', templateId, form.current, 'm84d5cMAGVozOkvZ0')
    .then((result) => {
      console.log(result.text);
      setIsMessageSent(true);
      // Reload the page after a delay to allow the user to see the success message
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    })
    .catch((error) => {
      console.log(error.text);
    });
};

  return (
  
    <div>
      <section className='contact'>
      <div className='content' >

          <h2 >Get in  <span>Touch</span> </h2>
        </div>

        <div className='container'>
          <div className='contactInfo'>
            <div className='box'>
              <div className='icon'> 📍</div>
              <div className='text'>
                
                <p>Tunis , Monastir</p>
              </div>
            </div>

            <div className='box'>
              <div className='icon'>📲</div>
              <div className='text'>
                
                <p>+21654812998</p>
              </div>
            </div>

            <div className='box'>
              <div className='icon'>📧</div>
              <div className='text'>
                
                <p>dkhilisafadev@gmail.com</p>
              </div>
            </div>
            </div>
            <div className='contactForm'>

            {isMessageSent && (
              <div className='notification'>
                <p>Message sent successfully!</p>
              </div>
            )}

              <form ref={form} onSubmit={sendEmail}>
                <h2>Send Message</h2>
                <div className='inputBox'>
                <span>Name</span>
                  <input type="text" name="user_name"/>
                  
                </div>

                <div className='inputBox'>
                <span>Email</span>
                  <input type="email" name="user_email"/>
                  
                </div>

                <div className='inputBox'>
                <span>Type Ur Message</span>
                <input name="message" />
                 
                </div>

                    <div>
                    <input className='btn' type="submit" value="Send"  />
                    </div>
               
              </form>
            </div>
         
        </div>
        <CopyrightYear/>
      </section>
    </div>
  );
}
export default AppWrap(
  MotionWrap(Contact, 'app__contact'),
  'contact',
  'app__whitebg'
);

