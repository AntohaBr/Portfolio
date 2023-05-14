import React from 'react'
import s from './Navbar.module.scss'
import {UniversalLink} from 'common/universalLink/UniversalLink'

export const Navbar = () => {
    return (
        <div className={s.nav}>
            <UniversalLink
                path='main'
                title='Main'
                offset={-50}
            />
            <UniversalLink
                path='skills'
                title='Skills'
                offset={-50}
            />
            <UniversalLink
                path='projects'
                title='Projects'
                offset={-50}
            />
            <UniversalLink
                path='contacts'
                title='Contacts'
                offset={1}
            />
        </div>
    )
}

