import React, {useState} from 'react'
import {FaBars} from 'react-icons/fa'
import {AiOutlineHome, AiOutlinePicture, AiOutlineMail, AiOutlineSetting} from 'react-icons/ai'
import {UniversalLink} from 'common'

export const BurgerNavbar = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(true)

    const onToggle = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    return (
        <div>
            <button onClick={onToggle}  type='button' id="burgerButton" ><FaBars/></button>
            {!menuIsOpen &&
                <div>
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
            }
        </div>
    )
}