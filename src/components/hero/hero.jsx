import React from 'react'
import image from "../../assets/me.jpg"
import "./hero.css"
function Hero() {
  return (
    <div className='hero'>
        <div className='img'>
            <img src={image}/>

        </div>
        <h1>React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.</h1>

    </div>
  )
}

export default Hero