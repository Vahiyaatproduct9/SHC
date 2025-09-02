'use client'
import React, { useEffect, useState } from 'react'
import css from './contact.module.css'
import listContact from '@/api/listContact'
import Message from '@/app/components/message/message'
import { useRouter } from 'next/navigation'
import purifyPhone from '@/api/purifyPhone'
import Popup from '@/app/components/popup/popup'

const Contact = () => {
    const router = useRouter()
    const [data, setData] = useState<any>(null)
    const [message, setMessage] = useState<string>('')
    const [popup, setPopup] = useState<boolean>(false)
    const [id, setId] = useState<string>('')
    useEffect(() => {
        const run = async () => {
            const { data } = await listContact()
            console.log(data)
            if (data) setData(data)
            else setMessage('Unstable Internet Connection!')
        }
        if (!popup) run()
    }, [popup])
    interface props {
        id: string;
        created_at: Date;
        email: null | string;
        phone: string | null;
        name: string;
    }
    const block = (data: props[]) => {
        if (data) {
            return data.map(item => {
                return <div key={item.id} className={css.blockContainer}>
                    <div className={css.blockHead}>
                        <label>Name: </label>
                        <span>{item.name}</span>
                    </div>
                    <div className={css.blockBody}>
                        {item.phone && <span>
                            <label>Phone: </label>
                            {item.phone}</span>}
                        {item.email && <span>
                            <label>Email: </label>
                            kishordebnath@gmail.com</span>}
                        <span>
                            {(new Date(item.created_at.toString())).toLocaleString()}</span>
                    </div>
                    <div className={css.footer}>

                        <button onClick={() => {
                            setPopup(true)
                            setId(item.id)
                        }}>Delete</button>
                        {item.phone && <button onClick={() => router.push(`tel:${item.phone}`)}>Call</button>}
                        {item.phone && <button onClick={() => router.push(
                            `https://wa.me/${purifyPhone(item.phone)}?text=${encodeURIComponent(
                                "Thank you for Contacting Suraj Herbal Clinic!\nHow can I be of help?"
                            )}`
                        )
                        }>WhatsApp</button>}
                        {item.email && <button onClick={() => router.push(`mailto:${item.email}`)}>Email</button>}
                    </div>
                </div>
            })
        }
    }
    return (
        <section className={css.container}>
            {popup && <Popup setPopup={setPopup} popup={popup} id={id} />}
            <Message setMessage={setMessage} message={message} />
            {block(data)}
        </section>
    )
}

export default Contact