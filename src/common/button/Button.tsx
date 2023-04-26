import React, {FC} from 'react'
import s from './Button.module.scss'

type ButtonPropsType = {
    buttonTitle: string
    code?: string
    demo?: string
    type?: string
}

export const Button: FC<ButtonPropsType> = ({buttonTitle, code, demo}) => {

    return (
        <>
            <a href={code || demo} target='_blank' rel='noopener noreferrer'>
                <div className={s.button}>{buttonTitle}</div>
            </a>
        </>
    )
}