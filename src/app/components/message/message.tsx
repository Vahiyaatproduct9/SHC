import React, { useEffect, useState } from 'react'
import css from './message.module.css'
interface props {
    setMessage: React.Dispatch<React.SetStateAction<string>>;
    message: string
}

const Message = ({ setMessage, message }: props) => {
    const [show, setShow] = useState<boolean>(false)
    useEffect(() => {
        if (message.length > 0) {
            setShow(true)
            setTimeout(() => {
                setMessage('')
            }, 2500)
        }
    }, [message])
    useEffect(() => {
        if (message.length === 0) setShow(false)
    }, [message])
    return (
        show && (
            <div className={css.body}>
                <p>{message}</p>
            </div>)
    )
}

export default Message