import React, { useState } from 'react'
import css from './popup.module.css'
import { deleteContact } from '@/api/listContact';
import Message from '../message/message';
import deleteItem from '@/api/deleteItem';

const Popup = ({ setPopup, item, id }: {
    setPopup: React.Dispatch<React.SetStateAction<boolean>>
    item: 'item' | 'user';
    id: string
}) => {
    const [message, setMessage] = useState<string>('')
    const handleDelete = async () => {
        if (item === 'user') {
            const { error } = await deleteContact({ id })
            if (!error) {
                setMessage('Deleted!')
                setTimeout(() => {
                    setPopup(false)
                }, 500)
            } else setMessage('Some Error Occured!')
        } else if (item === 'item') {
            const { error } = await deleteItem({ id })
            if (!error) {
                setMessage('Deleted!')
                setTimeout(() => {
                    setPopup(false)
                }, 500)
            } else setMessage('Some Error Occured!')

        }
    }
    return (
        <div className={css.popup} onClick={() => {
            setPopup(false)
        }}>
            <Message setMessage={setMessage} message={message} />
            <div className={css.popupBox} onClick={(e) => {
                e.stopPropagation()
            }}>
                <div className={css.title}>
                    <span>Are you sure?</span>
                </div>
                <div className={css.button}>
                    <button onClick={handleDelete}>Yes</button>
                    <button onClick={() => setPopup(false)}>No</button>
                </div>
            </div>
        </div>
    )
}

export default Popup