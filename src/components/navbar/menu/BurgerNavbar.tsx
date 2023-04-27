import React, {useState} from 'react'
import {FaBars} from 'react-icons/fa'
import {AiOutlineHome, AiOutlinePicture, AiOutlineMail, AiOutlineSetting} from 'react-icons/ai'
import {UniversalLink} from '../scroll/ScrollItem'

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
                        offset={-50}
                        title={'Main'}

                    />
                    <UniversalLink
                        path='skills'
                        offset={-50}
                        title={'Skills'}

                    />
                    <UniversalLink
                        path='projects'
                        offset={-50}
                        title={'Projects'}

                    />
                    <UniversalLink
                        path='contacts'
                        offset={-50}
                        // title={<AiOutlineMail/> + 'Contacts'}
                        title={'Contacts'}

                    />
                </div>
            }
        </div>
    )
}