'use client'
import React from 'react'
import css from './slider.module.css'
import { useRouter } from 'next/navigation'

const Slider = ({ data }: { data: any[] }) => {
    const router = useRouter()
    const block = data.map((item: any, i: number) => {
        return <div key={i} className={css.blockSection}>
            <div className={css.head}>{item.name}</div>
            <div className={css.blockContainer}>
                {item.details.map((item: any, i: number) =>
                    <div
                        onClick={() => router.push(`/product/${i}`)}
                        key={i} className={css.blocks}>
                        <div className={css.photo}>
                            <img src={item.image} />
                        </div>
                        <div className={css.blockInfo}>
                            <p>{item.name}</p>
                            <p>Disease</p>
                            <p>${item.price}</p>
                        </div>
                    </div>)}
            </div>
        </div>
    })
    return block
}

export default Slider