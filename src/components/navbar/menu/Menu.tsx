import React, {useState} from 'react'
import {FaBars} from 'react-icons/fa'
import {AiOutlineHome, AiOutlinePicture, AiOutlineMail, AiOutlineSetting} from 'react-icons/ai'
import {ScrollItem} from '../scroll/ScrollItem'

export const Menu = () => {
    const [toggle, setToggle] = useState(false)

    const onToggle = () => {
        setToggle(!toggle)
    }

    return (
        <>
            <button onClick={onToggle}><FaBars/></button>
            {toggle &&
                <div>
                    {/*<ScrollItem*/}
                    {/*    // path='main'*/}
                    {/*    // title={<AiOutlineHome/> + 'Main'}*/}
                    {/*/>*/}
                    {/*<ScrollItem*/}
                    {/*    // path='skills'*/}
                    {/*    // title={<AiOutlineSetting/> + 'Skills'}*/}
                    {/*/>*/}
                    {/*<ScrollItem*/}
                    {/*    // path='projects'*/}
                    {/*    // title={<AiOutlinePicture/> + 'Projects'}*/}
                    {/*/>*/}
                    {/*<ScrollItem*/}
                    {/*    // path='contacts'*/}
                    {/*    // title={<AiOutlineMail/> + 'Contacts'}*/}
                    {/*/>*/}
                </div>
            }
        </>
    )
}