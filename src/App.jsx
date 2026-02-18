import React, { useState } from 'react'
import Desktop from './assets/Components/Desktop/Desktop'
import './assets/Logic/core'
import LockScreen from './assets/Components/Lock/LockScreen'
function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <div id='OS'>
      {/* <Desktop /> */}
      {isLoggedIn ? <Desktop /> : <LockScreen setLoggedIn={setLoggedIn}/>}
    </div>
  )
}

export default App
