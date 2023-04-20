import React from 'react'
import s from './Main.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import MyPhoto from '../../assets/image/MyPhoto.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowsDownToLine} from '@fortawesome/free-solid-svg-icons'
// import Anton_Brel from 'assets/image/Anton_Brel.pdf'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <img className={s.photo} src={MyPhoto} alt='my photo'></img>
                <div className={s.text}>
                    <h1>
                        <div>ANTON</div>
                        <div>BREL</div>
                    </h1>
                    <h6>Front-end Developer</h6>
                    <div className={s.textAboutMe}>
                        <p>Hi, I’m Anton Brel and I am web & app developer. I am goal-oriented person with a great
                            motivation to achieve high results and become a highly qualified specialist. In am a
                            responsible and communicative person with a positive attitude to the world.</p>
                        <p>Together we can make the world a better place by creating exciting and useful products.</p>
                    </div>
                    <div>
                        <div className={s.btnDownloadCv}>
                            <a href={'Anton_Brel'} download='CV_Anton_Brel.pdf' >Download CV
                                <FontAwesomeIcon icon={faArrowsDownToLine}/></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}