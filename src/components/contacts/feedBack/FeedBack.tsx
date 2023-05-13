import React, {FC} from 'react'
import s from './FeedBack.module.scss'

type FeedBackType = {
    error?: boolean
    messageSent?: boolean
}

export const FeedBack: FC<FeedBackType> = ({error, messageSent}) => {

    const successMessageText = 'Your mail has been successfully sent.'
    const errorMessageText = 'Something went wrong, please try again.'

    return (
        <div className={messageSent ? s.successMessage : s.errorMessage}>
            {messageSent &&
                <p>{successMessageText}</p>}
            {error &&
                <p>{errorMessageText}</p>}
        </div>
    )
}