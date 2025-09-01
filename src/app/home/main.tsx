'use client';
import React from 'react'
import css from './main.module.css'
import { useRouter } from 'next/navigation'

function Main() {
    const router = useRouter()
    return (
        <section className={css.container}>
            <div className={css.headerInfo}>
                <div className={css.headerInfoInfo}>
                    <h2>Discover!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eaque ut, quod accusantium tenetur illo dolores explicabo
                        molestias quam, dolorem, cum reiciendis sint? Beatae, quaerat laborum. Vitae et dolore consectetur?</p>
                </div>
                <div className={css.headerButton}>
                    <button onClick={() => router.push('/product')}>View Products</button>
                    <button onClick={() => router.push('/about')}>About Us</button>
                </div>
            </div>
            <div className={css.headerProduct}>
                <img src={'/product2.png'} />
            </div>
        </section>
    )
}

export default Main