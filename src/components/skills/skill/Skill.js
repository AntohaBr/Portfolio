import React from 'react'
import s from './Skill.module.scss'
// import {SvgIconReact} from "../../common/components/svgIconSkills/SvgIcon";

export const Skill = (props) => {
    return (
        <>
            <div className={s.skillBlock}>
                <span className={s.skillIcon}>{/*<SvgIconReact id={props.skill.title}/>*/}</span>
                <span className={s.skillTitle}>{props.skill.title}</span>
            </div>
        </>
    )
}

