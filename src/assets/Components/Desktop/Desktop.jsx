import React from 'react'
import ActivityBar from './Systems/ActivityBar'
import Window from './Windows/Window'
import { motion } from 'motion/react'
function Desktop() {
    return (
        <div id='desktop' className='w-screen h-screen relative overflow-hidden'>

            <ActivityBar />
            <div className='absolute'>
                <Window className='rounded-sm overflow-hidden'></Window>
            </div>
        </div>
    )
}

export default Desktop