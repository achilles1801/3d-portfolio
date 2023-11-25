import { a } from '@react-spring/three'
import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons'

const InfoBox = ({text, link, btnText}) => (
    <div className = "info-box">
        <p className = "font-medium text-center sm:text-xl">
        {text}</p>
        <Link to = {link} className = "neo-brutalism-white neo-btn">
            {btnText}
            <img src = {arrow} className = "w-4 h-4 object-contain"/>
        </Link>

    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center
         neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hey, I'm
        <span className='font-semibold mx-2 text-white'>Majd Khawaldeh</span>
        👋
        <br/>
        A Software Engineer from USA.
        </h1>
    ),
    2: (
        <InfoBox
            text = "I'm a Software Engineer with a passion for building things that live on the internet."
            link = "/about"
            btnText={"More About Me"}
        
        />
    ),
    3: (
        <InfoBox
            text = "Led multiple projects to success over the years. Curious about the impact?"
            link = "/projects"
            btnText={"Visit My Projects"}
        
        />
    ),
    4: (
        <InfoBox
            text = "Need a Software Engineer? I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!"
            link = "/contact"
            btnText={"Let's Talk"}
        
        />
    ),
}




const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo;