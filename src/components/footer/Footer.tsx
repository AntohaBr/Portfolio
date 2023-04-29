import React from 'react'
import s from './Footer.module.scss'
import {FooterIcon} from './footerIcon/FooterIcon'
import {dataContacts} from 'common/data/dataContacts'

export const Footer = () => {

    return (
        <div className={s.footerBlock} id={'contacts'}>
            <div className={s.container}>
                <h3 className={s.title}>Anton Brel</h3>
                <div className={s.box}>
                    {
                        dataContacts.map(footerIcon => (
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
