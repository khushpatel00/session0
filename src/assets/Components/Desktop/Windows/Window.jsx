import React from 'react'
import Bar from './Bar'
import Program from './Program'
import { motion, useDragControls } from 'framer-motion'
function Window({ className }) {
    const dragControls = useDragControls();
    return (
        <motion.div drag dragConstraints={{
            top: 0,
            left: 0,
            bottom: window.innerHeight - (window.innerHeight / 100) * 32,
            right: window.innerWidth - (window.innerWidth / 100) * 32,
        }}

            dragListener={false}
            dragControls={dragControls}

            dragElastic={0.1}
            dragMomentum={false}
            className={'relative w-[32vw] h-[28vh] top-1/4 ' + className}>
            <div onPointerDown={(e) => {
                console.log("drag start");
                dragControls.start(e)
            }} >
                <Bar />
            </div>
            <Program></Program>
        </motion.div>
    )
}

export default Window;