'use client';
import Search from '@/app/components/search/search';
import css from './page.module.css'
import React, { useEffect, useState } from 'react'
import fetchItem from '@/api/fetchItem';
import Message from '@/app/components/message/message';
import Link from 'next/link';
const Product = ({ params }: any) => {
    const { id }: { id: string } = React.use(params)
    const [fetchedData, setData] = useState<any>(null)
    const [message, setMessage] = useState<string>('')
    const [url, setUrl] = useState<string | null>(null)
    useEffect(() => {
        const res = async () => {
            await fetchItem({ id })
                .then(res => {
                    if (res.status === 200) {
                        console.log(res.data)
                        setData(res.data)
                    }
                    else setMessage('Some Error Occured!')
                })
        }
        res()
        setUrl(window.location.href)
        const msg = `Is this Product still available?\n${url}`
    }, [])
    const icon = (<>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=call" />
        <span className="material-symbols-outlined">
            call
        </span></>)

    return (
        fetchedData ? <section className={css.container}>
            <Message message={message} setMessage={setMessage} />
            <div className={css.box}>
                <Search data={null} />
                <div className={css.head}>
                    <h1>{fetchedData[0].name}</h1>
                </div>
                <div className={css.body}>
                    <div className={css.image}>
                        <img src={fetchedData[0].image_url || '/background.jpeg'} />
                    </div>
                    <div className={css.info}>
                        <div className={css.ingredients}>
                            <h2>OVERVIEW</h2>
                            <h3>Ingredients</h3>
                            <ul>
                                {fetchedData[0].ingredients.map((item: string, i: number) => <li key={i}>{item}</li>)}
                            </ul>
                            <h3>Cures</h3>
                            <ul>
                                {fetchedData[0].disease.map((item: string, i: number) => <li key={i}>{item}</li>)}
                            </ul>
                        </div>
                        <div className={css.description}>
                            <h2>DESCRIPTION</h2>
                            <p>{fetchedData[0].description}</p>
                        </div>
                        <div className={css.note}>
                            <p>
                                Home Delivery is currently not supported.
                            </p>
                        </div>
                        <div className={css.button}>
                            <Link href={`https://wa.me/+919933150280?text=${encodeURIComponent(`Is this Product still available?\n${url}`)}`}>
                                <button>
                                    <img src={'/whatsapp.png'} />
                                </button>
                            </Link>
                            <Link href={'tel: +9199338608320'}><button>
                                {icon}
                                Contact Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${css.box}`}>
                <div className={css.footer}>
                    <p>Thank you for visiting this site! Consider contacting in case of any health discomfort.</p>
                </div>
            </div>
        </section> :
            <section>
                <h1>Loading....</h1>
            </section>
    )
}

export default Product