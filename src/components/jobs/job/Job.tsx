import React, {FC} from 'react'
import s from './Job.module.scss'

type JobPropsType = {
    style: object,
    title: string,
    description: string
}

export const Job: FC<JobPropsType> = ({style, title, description}) => {
    return (
        <div className={s.wrapper}>
            <div className={s.job}>
                <div className={s.picture} style={style}>
                    <div>
                        <button className={s.button}>Demo</button>
                        <button className={s.button}>Code</button>
                    </div>

                </div>
                <div className={s.jobInfo}>
                    <h3 className={s.jobTitle}>{title}</h3>
                    <div className={s.description}>{description}</div>
                </div>
            </div>
        </div>

    )
}


