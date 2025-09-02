import React from 'react'
import css from './loading.module.css'
import * as motion from 'motion/react-client'
const Loading = () => {
    const boxes = [1, 2, 3].map((_, i) =>
        <motion.div
            animate={{ y: [0, 0, 10, 0], height: [20, 25, 20, 20], opacity: [1, 0.7, 1, 1] }}
            transition={{ delay: i * 0.1, repeat: Infinity, duration: 1 }}
            key={i} />)
    return (
        <div className={css.container}>
            {boxes}
        </div>
    )
}

export default Loading