'use client';
import React, { useEffect, useState } from 'react'
import css from './supercontrol.module.css'
import checkPassword from '@/api/checkPassword';
import { useRouter } from 'next/navigation'
import Settings from './settings/settings';
import Contact from './contact/contact';

const Supercontrol = () => {
    const router = useRouter()
    const [activeTab, setActiveTab] = useState<'contact' | 'setting'>('contact')
    useEffect(() => {
        const r = localStorage.getItem('key')
        if (!r || !checkPassword(r)) router.push('/')
    }, [])
    return (
        <section className={css.container}>
            <div className={css.box}>
                <h1>SUper COntrol</h1>
                <div className={css.header}>
                    <span onClick={() => setActiveTab('contact')}>
                        Contacts</span>
                    <span onClick={() => setActiveTab('setting')}>
                        Settings</span>
                </div>
                <div className={css.body}>
                    {activeTab === 'contact' ? <Contact /> : <Settings />}
                </div>
            </div>
        </section>
    )
}

export default Supercontrol