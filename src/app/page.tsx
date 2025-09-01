import React from 'react'
import Main from './home/main'
import Contact from './home/contact'
import Ourmission from './home/ourmission'

function page() {
  return (
    <>
      {/* <section style={{
        display: 'flex',
        maxWidth: 1400,
        flexDirection: 'column'
      }}>
      </section> */}

      <Main />
      <Contact />
      <Ourmission />
    </>
  )
}

export default page