import React from 'react'

function NavigationDots({active}) {
  return (
    <div className='app__navigation'>
        {['home' , 'skills' , 'work' , 'contact'   ].map((item , index) => (
      
       
          <a
           href={`#${item}`}
           key={item + index}
           className='app__navigation-dot'
           style={active === item ? {background: '#E0B69E'} : {}}
            />
            
      
      ))}

    </div>
  )
}

export default NavigationDots