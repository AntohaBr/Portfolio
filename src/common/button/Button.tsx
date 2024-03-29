import React, {FC} from 'react'
import s from './Button.module.scss'

type ButtonPropsType = {
    buttonTitle: string
    type?: 'button' | 'submit' | 'reset' | undefined
}

export const Button: FC<ButtonPropsType> = ({buttonTitle, type}) => {
    return <button type={type} className={s.button}>{buttonTitle}</button>
}