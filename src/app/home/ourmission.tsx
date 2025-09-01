import React from 'react'
import css from './ourmission.module.css'
import Link from 'next/link'

const Ourmission = () => {
    return (
        <section className={css.container}>
            <div className={css.box}>
                <div className={css.head}>
                    <h1>Our Mission</h1>
                </div>
                <div className={css.body}>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, fugit totam beatae necessitatibus porro
                            quae repellendus distinctio reprehenderit. Ipsa vero officiis animi vitae quia repellat repellendus modi. Nemo, optio dicta.</p>
                        <div className={css.buttonContainer}>
                            <Link href={'/product'}>
                                <button className={css.button}>
                                    Products
                                </button></Link>
                        </div>
                    </div>
                    <div>
                        <img src={'/background.jpeg'} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ourmission