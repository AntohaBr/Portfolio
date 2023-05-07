import React, {FC} from 'react'
import s from './Skill.module.scss'

type SkillsPropsType = {
    icon: React.ReactNode,
    title: string
}

export const Zoom = require('react-reveal/Zoom')

export const Skill: FC<SkillsPropsType> = ({icon, title}) => {
    return (
        <>
            <Zoom>
                <div className={s.skillBlock}>
                    <span className={s.skillIcon}>{icon}</span>
                    <span className={s.skillTitle}>{title}</span>
                </div>
            </Zoom>
        </>
    )
}
