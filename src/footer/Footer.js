import React from 'react'
import s from './Footer.module.scss'
import styleContainer from '../common/styles/Container.module.css'


function Footer() {
    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <h3 className={s.title}>Anton Brel</h3>
                <div className={s.box}>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                </div>
                <div className={s.text}>© 2022 All Rights Reserved.</div>
            </div>
        </div>
    )
}

export default Footer;