import React from 'react'
import Bar from './Bar'
import Program from './Program'
import { motion } from 'motion/react'
function Window({ className }) {
    return (
        <motion.div drag dragConstraints={{
            top: 0,
            left: 0,
            bottom: window.innerHeight - (window.innerHeight / 100) * 32,
            right: window.innerWidth - (window.innerWidth / 100) * 32,
        }}
            dragElastic={0.1}
            dragMomentum={false}
            className={'relative w-[32vw] h-[28vh] ' + className}>
            <Bar />
            <Program></Program>
        </motion.div>
    )
}

export default Window;