import React from 'react'
import s from './Job.module.scss'

export const Job = (props) => {
    return (
        <div className={s.job}>
            <div className={s.picture} style={props.style}>
                <button className={s.button}>Look</button>
            </div>
            <div className={s.jobInfo}>
                <h3 className={s.jobTitle}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>
    )
}


