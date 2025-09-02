'use client';
import React, { useEffect, useState } from 'react'
import css from './settings.module.css'
import listItems from '@/api/listItems';
import AddItem from './addItem';
import Message from '@/app/components/message/message';
import Popup from '@/app/components/popup/popup';

interface dataType {
    created_at: Date;
    description: string;
    disease: string[];
    id: string;
    image_url: string | null;
    ingredients: string[];
    name: string;
    price: string;
}

const Settings = () => {
    const [data, setData] = useState<any>(null)
    const [message, setMessage] = useState<string>('')
    const [add, setAdd] = useState<boolean>(false)
    const [popup, setPopup] = useState<boolean>(false)
    const [id, setId] = useState<string>('')
    useEffect(() => {
        const run = async () => {
            const { data, error, status } = await listItems()
            console.log(data)
            if (data && !error) setData(data)
            else setMessage('Some Error Occured!')
        }
        run()
    }, [])
    useEffect(() => {
        if (!popup) {
            const run = async () => {
                const { data, error, status } = await listItems()
                if (data && !error) setData(data)
                else setMessage('Some Error Occured!')
            }
            run()
        }
    }, [popup])

    const block = (data: dataType[]) => data.map(item => {
        return <div key={item.id} className={css.block}>
            <div className={css.image}>
                <img src={item.image_url || '/background.jpeg'} />

                <div className={css.footer}>
                    <button onClick={() => {
                        setPopup(true)
                        setId(item.id)
                    }}>Delete</button>
                </div>
            </div>
            <div className={css.info}>
                <span>{item.name}</span>
                <div className={css.list}>
                    <label>Price:</label>
                    {item.price}
                </div>
                <div className={css.list}>
                    <label>Ingredients:</label>
                    <ul>
                        {item.ingredients.map((i, n) => <li key={n}>{i}</li>)}
                    </ul>
                </div>
                <div className={css.list}>
                    <label>Cures:</label>
                    <ul>
                        {item.disease.map((i, n) => <li key={n}>{i}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    })


    return (
        <section className={css.container}>
            {popup && <Popup setPopup={setPopup} item='item' id={id} />}
            <Message setMessage={setMessage} message={message} />
            {data && block(data)}
            <button className={css.addItem}
                onClick={() => setAdd(true)}>+ Add</button>
            {add && <AddItem setAdd={setAdd} />}
        </section>
    )
}

export default Settings