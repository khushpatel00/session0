import React, { useEffect, useRef, useState } from 'react'
import ActivityBar from './Systems/ActivityBar'
import Window from './Windows/Window'
import { motion } from 'motion/react'
import gsap from 'gsap'
import { useNavigate } from 'react-router'
import Icons from './Icons/Icons'
function Desktop({ isLoggedIn }) {
    const navigate = useNavigate();
    const desktopblur = useRef(null);
    const desktop = useRef(null);

    const [isWindowOpen, setIsWindowOpen] = useState(true);

    const closeWindow = () => {
        setIsWindowOpen(false);
    };

    // console.log(isLoggedIn)
    if (isLoggedIn === false) navigate('/')
    let tl;
    useEffect(() => {
        if (tl) tl.kill();
        tl = gsap.timeline();
        setTimeout((() => {
            desktop.current.classList.remove('scale-[110%]');
            desktopblur.current.classList.remove('backdrop-blur-xl');
        }), 200)
        tl.set('.activity-bar', { display: 'flex' })
        // tl.to('#desktop', {
        //     scale: 1,
        //     // opacity: 1,
        //     delay: 0.1,
        //     duration: 0.5,
        // })
        tl.fromTo('.activity-bar', {
            y: '100%',
        }, {
            y: 0,
            duration: 0.5,
        }, 'sync')
        tl.fromTo('.window', {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 0.2,
            delay: 1,
        }, 'sync')
        tl.fromTo('.icons', {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 0.2,
            delay: 0.8,
        }, 'sync')
    }, [])
    return (
        <div id='desktop' ref={desktop} className='desktopWallpaper w-screen h-screen relative overflow-hidden overflow-y-hidden scale-[110%] duration-200 delay-100'>
            <div ref={desktopblur} id='desktopblur' className='w-full h-full backdrop-blur-xl duration-300'>
                <ActivityBar className='activity-bar translate-y-full hidden' />
                <div className='absolute z-10 pointer-events-none'>
                    {isWindowOpen && <Window className='rounded-sm overflow-hidden window opacity-0 pointer-events-auto' onClose={closeWindow}></Window>}
                </div>
                <Icons className='absolute icons opacity-0'></Icons>
            </div>
        </div>
    )
}

export default Desktop