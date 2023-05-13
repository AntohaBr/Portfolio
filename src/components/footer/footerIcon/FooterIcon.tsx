import React, {FC} from 'react'
import s from './FooterIcon.module.scss'
import {Fade} from 'components/main/Main'

type FooterIconPropsType = {
    icon: React.ReactNode
    description: string
}

export const FooterIcon: FC<FooterIconPropsType> = ({icon, description}) => {
    return (
        <Fade>
            <div className={s.icon}>
                <a href={description} target='_blank' rel="noopener noreferrer">{icon}</a>
            </div>
        </Fade>
    )
}