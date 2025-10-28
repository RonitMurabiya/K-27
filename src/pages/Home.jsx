import React from 'react'
import Video from '../components/home/Video.jsx'
import HomeHeroText from '../components/home/HomeHeroText.jsx'
import HomeBottomText from '../components/home/HomeBottomText.jsx'

function Home() {
    return (
        <div>
            <div className='h-screen fixed  w-screen'>
                <Video />
            </div>
            <div className='h-screen relative overflow-hidden  w-screen flex flex-col justify-between '>
                <HomeHeroText />
                <HomeBottomText />
            </div>
        </div>
    )
}

export default Home