import React from 'react'
import css from './loadingScreen.module.css'
import * as motion from 'motion/react-client'
const Loading = () => {
    const boxes = [1, 2, 3].map((_, i) =>
        <motion.div
            animate={{ y: [0, 0, 10, 0] }}
            transition={{ delay: i * 0.1, repeatType: 'loop' }}
            key={i} />)
    return (
        <div className={css.container}>
            {boxes}
        </div>
    )
}

export default Loading