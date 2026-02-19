import React, { useState } from 'react'
import Desktop from './assets/Components/Desktop/Desktop'
import './assets/Logic/GlobalShortcuts'
import LockScreen from './assets/Components/Lock/LockScreen'
import { Route, Routes } from 'react-router';
import GlobalShortcuts from './assets/Logic/GlobalShortcuts';
function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <div id='OS' className='overflow-hidden'>
      {/* <Desktop /> */}
      <GlobalShortcuts />
      <Routes>
        <Route path='/' element={<LockScreen setLoggedIn={setLoggedIn} />} />
        <Route path='/desktop' element={<Desktop isLoggedIn={isLoggedIn}/>}/>
      </Routes>
    </div>
  )
}

export default App
