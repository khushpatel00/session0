import React from 'react'

function Bar() {
  return (
    <div className='w-full flex flex-wrap justify-between h-[3vh] text-white bg-zinc-600/50 backdrop-blur-md px-3'>
        <p className='my-auto'>Notepad</p>
        <div className='action flex items-center justify-center gap-1'>
            <div className='bg-yellow-500/50 hover:bg-yellow-500/80 hover:text-white text-transparent flex justify-center items-center w-3.5 h-3.5 aspect-square rounded-full cursor-pointer p-1'>
            <img src="/minimize.png" alt="" />
            </div>
            <div className='bg-emerald-600/50 hover:bg-emerald-500/50 hover:text-white text-transparent flex justify-center items-center w-3.5 h-3.5  aspect-square rounded-full cursor-pointer p-0.75'>
            <img src="/maximize.png" alt="" />
            </div>
            <div className='bg-red-500/50 hover:bg-red-600/80 hover:text-white text-transparent flex justify-center items-center w-3.5 h-3.5  aspect-square rounded-full cursor-pointer p-0.5'>
            <img src="/close.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Bar