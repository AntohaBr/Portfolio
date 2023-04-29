import React, {FC} from 'react'
import s from './Job.module.scss'
import {Button} from 'common/button/Button'

type JobPropsType = {
    style: object
    title: string
    description: string
    code?: string
    demo?: string
}

export const Job: FC<JobPropsType> = ({style, title, description, code, demo}) => {
    return (
        <div className={s.wrapper}>
            <div className={s.job}>
                <div className={s.picture} style={style}>
                    <Button
                        buttonTitle={'Demo'}
                        // demo={demo}
                    />
                    <Button
                        buttonTitle={'Code'}
                        // code={code}
                    />
                </div>
                <div className={s.jobInfo}>
                    <h3 className={s.jobTitle}>{title}</h3>
                    <div className={s.description}>{description}</div>
                </div>
            </div>
        </div>

    )
}


