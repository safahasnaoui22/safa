import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

function Testimonial() {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  return (
    <>
      {testimonials.length > 0 && testimonials[currentIndex] && (
        <div className='app__testimonial-item app__flex'>
          {testimonials[currentIndex].ImgUrl && (
            <img src={urlFor(testimonials[currentIndex].ImgUrl)} alt='testimonials' />
          )}
          <div className='app__testimonial-content'>
            <p className='p-text'>{testimonials[currentIndex].Feedback}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default AppWrap(MotionWrap(Testimonial, 'app__testimonial'), 'testimonial', 'app__primarybg');
