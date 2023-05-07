import React, {FC} from 'react'
import s from './Skill.module.scss'
import {Fade} from 'components/main/Main'

type SkillsPropsType = {
    icon: React.ReactNode,
    title: string
}

export const Skill: FC<SkillsPropsType> = ({icon, title}) => {
    return (
        <>
            <div className={s.skillBlock}>
                <Fade>
                    <span className={s.skillIcon}>{icon}</span>
                    <span className={s.skillTitle}>{title}</span>
                </Fade>
            </div>
        </>
    )
}
