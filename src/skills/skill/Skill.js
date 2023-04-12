import React from 'react'
import s from './Skill.module.scss'
import {SvgIconSkill} from '../../assets/svgIcon/SvgIconSkill'


export const Skill = (props) => {
    return (
        <div className={s.skillBlock}>
            <div className={s.skill}>
                <SvgIconSkill/>
                <div>
                    <h5>{props.skill.title}</h5>
                </div>
            </div>
        </div>
    )
}

