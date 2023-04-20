import React, {FC} from 'react'
import s from './FooterIcon.module.scss'

type FooterIconPropsType = {
    icon: React.ReactNode,
    description: string
}

export const FooterIcon: FC<FooterIconPropsType> = ({icon, description}) => {
    return (
        <div className={s.icon}>
            <a href={description} target='_blank' rel="noopener noreferrer" >{icon}</a>
        </div>
    )
}