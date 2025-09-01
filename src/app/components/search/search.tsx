'use client'
import React, { useEffect, useState } from 'react'
import css from './search.module.css'
import Fuse from 'fuse.js'
import fetchItemList from '@/api/fetchItemList'
import { motion } from 'motion/react'
import { useRouter } from 'next/navigation'

const Search = ({ data }: any) => {
    const router = useRouter()
    const [fetchedData, setData] = useState<any>(null)
    const [value, setValue] = useState<string>('')
    const [searchRes, setSearchRes] = useState<any>(null)
    const [shown, setShown] = useState<boolean>(false)
    useEffect(() => {
        if (!data) {
            const fetchD = async () => {
                const { data, error, status } = await fetchItemList()
                if (data) setData(data.details)
            }
            fetchD()
        }
    }, [])
    useEffect(() => {
        if (fetchedData) {
            const fuse = new Fuse(fetchedData, {
                includeScore: true,
                keys: [{
                    name: 'name',
                    weight: 0.7
                },
                {
                    name: 'disease',
                    weight: 0.4
                }]
            })
            const res = fuse.search(`${value}`)
            setSearchRes(res)
        }
    }, [value])
    const searchBlock = () => {
        return searchRes.map((item: any, i: number) => {
            return <div key={i}
                onClick={() => router.push(`/product/${item.item.id}`)}
                className={css.searchBlock}>
                <div className={css.image}>
                    <img src={item.item.image_url || '/background.jpeg'} />
                </div>
                <div className={css.searchInfo}>
                    <p>{item.item.name}</p>
                    <div className={css.subInfo}>
                        <p>${item.item.price}</p>
                        <p>{`${item.item.disease[0]}${item.item.disease.length > 1 && ` +${item.item.disease.length - 1} more`}`}</p>
                    </div></div>
            </div>
        })
    }
    return (
        <section className={css.container}>
            <div className={css.search}>
                <input onBlur={() => setTimeout(() => setShown(false), 300)} onFocus={() => setShown(true)} type='text' value={value} onChange={(t) => setValue(t.target.value)} placeholder='Search' />
            </div>
            {shown && searchRes && searchRes.length > 0 && <div className={css.searchRes}>
                {searchBlock()}
            </div>}
        </section>
    )
}

export default Search