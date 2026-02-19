import React, { useEffect, useRef } from 'react'
import ActivityBar from './Systems/ActivityBar'
import Window from './Windows/Window'
import { motion } from 'motion/react'
import gsap from 'gsap'
import { useNavigate } from 'react-router'
function Desktop({ isLoggedIn }) {
    const navigate = useNavigate();
    const desktopblur = useRef(null);

    console.log(isLoggedIn)
    if (isLoggedIn == false) navigate('/')
    useEffect(() => {
        // if(tl) tl.kill();
        let tl = gsap.timeline();
        setTimeout((()=>{
        desktopblur.current.classList.remove('backdrop-blur-xl')
        }), 200)
        tl.set('.activity-bar', { display: 'flex' })
        tl.fromTo('#desktop', {
            scale: 1.10,
        }, {
            scale: 1,
            // opacity: 1,
            // delay: 0.2,
            duration: 1,
        })
        tl.fromTo('.activity-bar', {
            y: '100%',
        }, {
            y: 0,
            duration: 1,
        }, 'sync')
        tl.fromTo('.window', {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 1,
            delay: 0.2,
        }, 'sync')
    }, [])

    document.addEventListener('keydown', (e) => {

    })

    return (
        <div id='desktop' className='desktopWallpaper w-screen h-screen relative overflow-hidden overflow-y-hidden scale-[110%]'>
            <div ref={desktopblur} id='desktopblur' className='w-full h-full duration-500 backdrop-blur-xl'>
                <ActivityBar className='activity-bar translate-y-full hidden' />
                <div className='absolute'>
                    <Window className='rounded-sm overflow-hidden window opacity-0'></Window>
                </div>
            </div>
        </div>
    )
}

export default Desktop