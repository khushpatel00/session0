import React from 'react'

function Program({ children }) {
  return (
    <div className='w-full h-full bg-zinc-100/80 backdrop-blur-md cursor-default'>
      Program
      {children}
    </div>
  )
}

export default Program