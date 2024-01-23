import React from 'react'

import { Contact , Header , Skills ,  Work} from './container/index'
import { Navbar } from './components'
import './App.scss'

function App() {
  return (
<div className='app'>
<Navbar  />

<Header/>
<Skills/>
<Work/>
<Contact/>


    </div>
  )
}

export default App