import React, {FC} from 'react'
import s from './Button.module.scss'

type ButtonPropsType = {
    buttonTitle: string
    type?: 'button' | 'submit' | 'reset' | undefined
    disabled?: boolean
}

export const Button: FC<ButtonPropsType> = ({buttonTitle, type,disabled}) => {
    return <button type={type} className={s.button} disabled={disabled}>{buttonTitle}</button>
}