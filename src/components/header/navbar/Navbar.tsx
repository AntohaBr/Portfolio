import React from 'react'
import s from './Navbar.module.scss'
import {UniversalLink} from '../../../common/universalLink/UniversalLink'


export const Navbar = () => {
    return (
        <div className={s.nav}>
            <UniversalLink
                path='main'
                title={'Main'}
            />
            <UniversalLink
                path='skills'
                title={'Skills'}
            />
            <UniversalLink
                path='projects'
                title={'Projects'}
            />
            <UniversalLink
                path='contacts'
                title={'Contacts'}
            />
        </div>
    )
}

