'use client';
import React, { useEffect, useState } from 'react'
import css from './product.module.css'
import Block from '../components/block/blockViewer'
import Search from '../components/search/search'
import fetchItemList from '@/api/fetchItemList';
import Message from '../components/message/message';

function Product() {
    const [fetchedData, setData] = useState<any>(null)
    const [message, setMessage] = useState<string>('')
    useEffect(() => {
        const data = async () => await fetchItemList().then(res => {
            if (res.status === 200) setData(res.data)
            else setMessage('Some Error Occured!')
        })
        data()
    }, [])
    useEffect(() => {
        console.log(fetchedData)
    }, [fetchedData])
    return (
        <section className={css.container}>
            <Message setMessage={setMessage} message={message} />
            <div className={css.box}>
                <Search data={fetchedData} />
                {fetchedData ? <Block data={fetchedData} /> : <h1>Loading..</h1>}
            </div>
        </section>
    )
}

export default Product