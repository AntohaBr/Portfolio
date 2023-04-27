import React from 'react'
import s from './Footer.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import {SvgIconLinkedIn, SvgIconPhone, SvgIconTelegram, SvgIconWhatsApp} from 'common/svgIcon'
import {FooterIcon} from './footerIcon/FooterIcon'

export const Footer = () => {
    const footerIcons = [
        {id: 1, icon: <SvgIconPhone/>, description: 'tel:+375447768233'},
        {id: 2, icon: <SvgIconTelegram/>, description: 'https://t.me/AntonBrel'},
        {id: 3, icon: <SvgIconWhatsApp/>, description: 'https://api.whatsapp.com/send?phone=+375447768233'},
        {id: 4, icon: <SvgIconLinkedIn/>, description: 'https://www.linkedin.com/in/anton-brel-a8039a259/'}
    ]

    return (
        <div className={s.footerBlock} id={'contacts'}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <h3 className={s.title}>Anton Brel</h3>
                <div className={s.box}>
                    {
                        footerIcons.map(footerIcon => (
                            <FooterIcon
                                key={footerIcon.id}
                                icon={footerIcon.icon}
                                description={footerIcon.description}
                            />
                        ))
                    }
                </div>
                <div className={s.text}>© 2022 All Rights Reserved.</div>
            </div>
        </div>
    )
}
