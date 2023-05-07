import React from 'react'
import s from './Main.module.scss'
import MyPhoto from '../../assets/image/MyPhoto.jpg'
import {SvgIconDownload} from 'common/svgIcon'
import Particles from 'react-tsparticles'
import {loadFull} from 'tsparticles'
import type {Engine} from 'tsparticles-engine'
import ReactTypingEffect from 'react-typing-effect'
// import Anton_Brel from 'assets/image/Anton_Brel.pdf'

const particlesOptions = {
    particles: {
        color: {
            value: 'blue',
        },
        links: {
            color: '#4e93e6',
            distance: 200,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            enable: true,
            random: false,
            speed: 2,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                value_area: 1000,
            },
            value: 150,
        },
        opacity: {
            value: 0.7,
        },
        shape: {
            type: 'circle',
        },
    },
    fullScreen: {
        enable: false
    }
}

export const Fade = require('react-reveal/Fade')

export const Main = () => {

    const textAboutMe = 'Hi, I’m Anton Brel and I am web & app developer.I am goal-oriented person with a great motivation to ' +
        'achieve high results and become a highly qualified specialist. In am a responsible and communicative person ' +
        'with a positive attitude to the world. Together we can make the world a better place by creating exciting ' +
        'and useful products.'

    const particlesInit = (engine: Engine): any => {
        loadFull(engine)
    }

    return (
        <div className={s.mainBlock} id={'main'}>
            <Particles className={s.particles} init={particlesInit} options={particlesOptions}/>
            <Fade delay={150}>
                <div className={s.container}>
                    <img className={s.photo} src={MyPhoto} alt='my photo'></img>
                    <div className={s.text}>
                        <Fade left>
                            <h1>
                                <div>ANTON</div>
                                <div>BREL</div>
                            </h1>
                            <h6>Front-end Developer</h6>
                        </Fade>
                        <Fade bottom>
                            <div className={s.textAboutMe}>
                                <ReactTypingEffect text={textAboutMe} speed={80} typingDelay={1700}
                                                   eraseDelay={400000}/>
                            </div>
                            <div className={s.btnDownloadCv}>
                                <a href={'Anton_Brel'} download='CV_Anton_Brel.pdf'>Download CV
                                    <SvgIconDownload/></a>
                            </div>
                        </Fade>
                    </div>
                </div>
            </Fade>
        </div>
    )
}