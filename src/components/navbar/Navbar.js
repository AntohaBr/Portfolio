import React from 'react'
import s from './Navbar.module.scss'

export const Navbar = () => {
    return (
        <div className={s.nav}>
            <a href='src/components/navbar/Navbar'>Main</a>
            <a href='src/components/navbar/Navbar'>Skills</a>
            <a href='src/components/navbar/Navbar'>Projects</a>
            <a href='src/components/navbar/Navbar'>Contacts</a>
        </div>
    )
}

