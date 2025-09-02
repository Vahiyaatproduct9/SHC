'use client'
import React, { useEffect, useState } from 'react'
import css from './admin.module.css'
import { useRouter } from 'next/navigation'
import checkPassword from '@/api/checkPassword'
import Message from '../components/message/message'
const Admin = () => {
    const router = useRouter()
    const [pass, setPass] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const handleSubmit = (e: HTMLFormElement) => {
        e.preventDefault()
        const r = checkPassword(pass)
        if (r) {
            localStorage.setItem('key', pass)
            router.push('/supercontrol')
        }
        else setMessage('Incorrect Key :(')
    }
    useEffect(() => {
        const p = localStorage.getItem('key')
        if (p && checkPassword(p)) router.push('/supercontrol')
    }, [])
    return (
        <section className={css.container}>
            <Message setMessage={setMessage} message={message} />
            <div className={css.box}>
                <form onSubmit={() => handleSubmit}>
                    <input type='password'
                        value={pass}
                        onChange={(t) => setPass(t.target.value)}
                        placeholder='Enter Secret Key' />
                    <button>Enter</button>
                </form>
            </div>
        </section>
    )
}

export default Admin