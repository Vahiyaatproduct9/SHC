'use client';
import React, { useEffect, useState } from 'react'
import css from './navbar.module.css'
import { motion } from 'motion/react'
import { usePathname, useRouter } from 'next/navigation';



function Navbar() {
    const pathList = [
        { link: '/', label: 'Home' },
        { link: '/product', label: 'Products' },
        { link: '/about', label: 'About Us' },
    ]
    const pathname = usePathname()
    const router = useRouter()
    const [activeTab, setActiveTab] = useState<string | null>(null)
    const [mobile, setMobile] = useState<boolean>(false)
    const [mobilenav, setmobileNav] = useState<boolean>(false)
    const [up, setUp] = useState<number>(0)


    useEffect(() => {
        if (window.innerWidth > 768) setMobile(false)
        else setMobile(true)
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) setMobile(false)
            else setMobile(true)
        })
        let scroll = window.scrollY;
        window.addEventListener('scroll', () => {
            if (scroll < window.scrollY && !mobilenav) {
                setUp(-120)
            } else {
                setUp(0)
            }
            scroll = window.scrollY;
        })
    }, [])
    useEffect(() => {
        pathname && setActiveTab(pathList.filter(item => item.link === pathname)[0]?.label || 'Products')
        console.log(pathname)
    }, [])
    useEffect(() => {
        setmobileNav(false)
        switch (activeTab) {
            case 'Home':
                if (pathname !== '/') router.push('/')
                break

            case 'Products':
                if (pathname !== '/product') router.push('/product')
                break

            case 'About Us':
                if (pathname !== '/about') router.push('/about')
                break
            default:
                break;
        }
    }, [activeTab])
    const list = () => {
        return pathList.map((item, index) => {
            return <li key={index} className={(activeTab === item.label) ? css.active : undefined} onClick={() => setActiveTab(item.label)}>{item.label}</li>
        })
    }
    return (
        <motion.div
            animate={{ top: up }}
            className={css.container}>
            <div className={css.box}>
                <motion.img className={css.logo} src={'/logo.avif'} />
                <h1 onClick={() => router.push('/')}
                    className={css.header}>Suraj Herbal Clinic</h1>
                {!mobile ? <ul className={css.listing}>
                    {list()}
                </ul>
                    :
                    <div onClick={() => setmobileNav(prev => !prev)} className={css.phoneNav}>
                        {!mobilenav ? <><div />
                            <div />
                            <div /> </> :
                            <p>&times;</p>}
                    </div>}

            </div>
            {
                mobile && <motion.div
                    animate={!mobilenav ? { height: 0 } : { height: 'fit-content' }}
                    transition={{ ease: 'easeOut' }}
                    className={css.mobileNav}>
                    <ul>
                        {list()}
                    </ul>
                </motion.div>
            }
        </motion.div >
    )
}

export default Navbar