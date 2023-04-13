import React from 'react'
import s from './Skill.module.scss'
// import {SvgIconReact} from "../../common/components/svgIcon/SvgIcon";



export const Skill = (props) => {
    return (
        <div className={s.skillBlock}>
            <div className={s.skill}>
                <div className={s.icon}>
                    {/*<SvgIconReact id={props.skill.title}/>*/}
                </div>

                <div>
                    <h5>{props.skill.title}</h5>
                </div>
            </div>
        </div>
    )
}

