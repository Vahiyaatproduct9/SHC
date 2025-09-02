'use client';
import React, { useEffect, useState } from 'react'
import css from './settings.module.css'
import listItems from '@/api/listItems';
import AddItem from './addItem';
import Message from '@/app/components/message/message';

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

    useEffect(() => {
        const run = async () => {
            const { data, error, status } = await listItems()
            console.log(data)
            if (data && !error) setData(data)
            else setMessage('Some Error Occured!')
        }
        run()
    }, [])

    const block = (data: dataType[]) => data.map(item => {
        return <div key={item.id} className={css.block}>
            <div className={css.image}>
                <img src={item.image_url || '/background.jpeg'} />

                <div className={css.footer}>
                    <button>Delete</button>
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
            <Message setMessage={setMessage} message={message} />
            {data && block(data)}
            <button className={css.addItem}
                onClick={() => setAdd(true)}>+ Add</button>
            {add && <AddItem setAdd={setAdd} />}
        </section>
    )
}

export default Settings