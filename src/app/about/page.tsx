import React from 'react'
import css from './about.module.css'

function AboutUs() {
    return (
        <section className={css.container}>
            <div className={css.background}>
                <img src={'/sea.jpg'} />
            </div>
            <div className={css.imageCover}>
                <div className={css.image}>
                    <img src={'/background.jpeg'} />
                </div>
            </div>
            <div className={css.bodyCover}>
                <div className={css.body}>
                    <div className={css.head}>
                        <h2>About Us</h2>
                    </div>
                    <p>
                        Our Story starts with Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eveniet, reiciendis fugit provident optio distinctio amet vero
                        dolores consequuntur accusamus illo. Alias, nobis necessitatibus id similique eum neque tempora! Accusamus.
                    </p>
                </div>
            </div>
            <section className={css.footer}>
                <div className={css.body}>
                    <p>Thank you again for visiting Suraj Herbal Clinic. <br />
                        Hope to see you soon!
                    </p>
                    <div className={css.logo}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
                            +91 99331 50280
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v58q0 59-40.5 100.5T740-280q-35 0-66-15t-52-43q-29 29-65.5 43.5T480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480v58q0 26 17 44t43 18q26 0 43-18t17-44v-58q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93h200v80H480Zm0-280q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/></svg>
                            gobinda@gmail.com
                        </div>
                        <div>
                            <img src={'/whatsapp.png'}/>
                            +91 99331 50280
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default AboutUs