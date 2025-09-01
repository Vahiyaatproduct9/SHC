'use client';
import React, { useEffect, useState } from 'react'
import css from './blockViewer.module.css'
import { useRouter } from 'next/navigation';

interface props {
    name: string;
    details: {
        id: string;
        name: string,
        image_url: null | string;
        desc: string;
        disease: string[];
        price: string;
    }[]
}

const Block = ({ data }: { data: props }) => {
    const [fetchedData, setData] = useState<any>(null)
    useEffect(() => {
        setData(data)
    }, [])
    const router = useRouter()
    const block = (data: props) => {
        return <section className={css.container}>
            <div className={css.head}>
                {data.name}
            </div>
            <div className={css.blockContainer}>
                {data.details.map(item =>
                    <div key={item.id}
                        onClick={() => { router.push(`/product/${item.id}`) }}
                        className={css.blocks}>
                        <div className={css.photo}>
                            <img src={item.image_url || '/background.jpeg'} />
                        </div>
                        <div className={css.blockInfo}>
                            <p>{item.name}</p>
                            <div>
                                <p>{item.disease[0]}</p>
                                <p>${item.price}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    }
    return (
        <section>{!fetchedData ?
            <h1>Loading....</h1> : block(fetchedData)}
        </section>
    )
}

export default Block