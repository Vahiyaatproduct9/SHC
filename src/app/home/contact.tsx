'use client';
import React, { useEffect, useState } from 'react'
import css from './contact.module.css'
import submitForm from '@/api/submitForm';
import Message from '../components/message/message';
import Loading from '../components/loading/loading';

const Contact = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState<null | boolean | 'loading'>(null)
    const handleSubmit = async () => {
        setSubmitted('loading')
        if (!name.trim()) {
            setMessage('Please include a Name!');
            setSubmitted(null)
            return;
        }

        const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        const validPhone = /^\d{10}$/.test(phone);

        if (!(validEmail || validPhone)) {
            setMessage('Please provide a valid Email or Phone!');
            setSubmitted(null)
            return;
        }

        try {
            const res = await submitForm({ name, email, phone });
            setSubmitted(res);
            if (res === true) {
                setName('')
                setEmail('')
                setPhone('')
            }
        } catch (err) {
            setMessage('Submission failed, please try again.');
        }
    };
    useEffect(() => {
        if (submitted === false) {
            setMessage('Couldn\'t submit, Try again!')
        }
        else if (submitted === true) {
            setMessage('Your Response has been recorded !')
            setTimeout(() => setSubmitted(null), 2000)
        }
    }, [submitted])
    return (
        <section className={css.container}>
            <Message message={message} setMessage={setMessage} />
            <div className={css.box}>
                <div className={css.head}>
                    <h1>Contact Us</h1>
                </div>
                <div className={css.body}>
                    <form>
                        <div className={css.formInput}>
                            <label htmlFor='name'>Name:</label>
                            <input id='name' value={name} onChange={t => setName(t.target.value)} name='name' placeholder='Ramesh Das' type='text' />
                        </div>
                        <div className={css.formInput}>
                            <label htmlFor='email'>Email:</label>
                            <input id='email'
                                name='email'
                                placeholder='ramesh.das@example.com'
                                value={email}
                                onChange={t => setEmail(t.target.value)}
                                type='email' />
                        </div>
                        <p>OR</p>
                        <div className={css.formInput}>
                            <label htmlFor='phone'>Phone:</label>
                            <input
                                id='phone'
                                name='phone'
                                placeholder='9876544321'
                                type='tel'
                                value={phone}
                                onChange={t => setPhone(t.target.value)}
                            />
                        </div>
                        <div className={css.buttonInput}>
                            <button
                                onClick={handleSubmit}
                                type='button'>
                                {submitted === null ? 'Submit' : (
                                    submitted === 'loading' ? <Loading /> : (
                                        submitted === true ? 'Submitted!' : 'Try Again! :('
                                    )
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact