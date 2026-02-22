import React from 'react'

function Icons({ children, className }) {

    const launchProgram = (e) => {
        console.log(e.target.nextSibling.textContent)
    }


    return (
        <div className={'p-5 flex flex-col gap-6 ' + className}>
            <div className='w-18'>
                <img src="/dolphin.png" className='w-full h-auto cursor-pointer' onClick={launchProgram} alt="" srcset="" />
                <p className='text-white text-center cursor-default'>Files</p>
            </div>
            <div className='w-18'>
                <img src="/notepad.png" className='w-full h-auto cursor-pointer' onClick={launchProgram} alt="" srcset="" />
                <p className='text-white text-center cursor-default'>Notes</p>
            </div>
            <div className='w-18'>
                <img src="/code.png" className='w-full h-auto cursor-pointer' onClick={launchProgram} alt="" srcset="" />
                <p className='text-white text-center cursor-default'>Code</p>
            </div>
            <div className='w-18'>
                <img src="/paint.png" className='w-full h-auto cursor-pointer' onClick={launchProgram} alt="" srcset="" />
                <p className='text-white text-center cursor-default'>Paint</p>
            </div>
            <div className='w-18'>
                <img src="/folder.png" className='w-full h-auto cursor-pointer' onClick={launchProgram} alt="" srcset="" />
                <p className='text-white text-center cursor-default'>Aboutme</p>
            </div>
            {children}
        </div>
    )
}

export default Icons