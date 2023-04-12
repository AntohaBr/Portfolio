import React from 'react'
import s from './Hire.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Title from '../common/components/title/Title'


export const Hire = () => {
    return (
        <div className={s.hireBlock}>
            <div className={`${styleContainer.container} ${s.hireContainer}`}>
                <Title text={'I am available for freelancer'}/>
                <button className={s.button}>Hire me</button>
            </div>
        </div>
    )
}


