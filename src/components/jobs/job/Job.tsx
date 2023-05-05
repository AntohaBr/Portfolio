import React, {FC} from 'react'
import s from './Job.module.scss'
import sb from '../../../common/button/Button.module.scss'

type JobPropsType = {
    backgroundImage: string
    title: string
    description: string
    code?: string
    demo?: string
}

export const Job: FC<JobPropsType> = ({backgroundImage, title, description, code,
                                          demo}) => {
    return (
            <div className={s.job}>
                <div className={s.picture} style={{backgroundImage}}>
                    <a href={demo} className={sb.button} target={'_blank'} rel='noopener noreferrer'>View demo</a>
                    <a href={code} className={sb.button} target={'_blank'} rel='noopener noreferrer'>View code</a>
                </div>
                <div className={s.jobInfo}>
                    <h3 className={s.jobTitle}>{title}</h3>
                    <div className={s.description}>{description}</div>
                </div>
            </div>
    )
}


