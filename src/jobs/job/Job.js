import React from 'react'
import style from './Job.module.scss'


function Job(props) {
    return (
        <div className={style.job}>
            <div className={style.picture} style={props.style}>
                <button className={style.button}>Look</button>
            </div>
            <div className={style.jobInfo}>
                <h3 className={style.jobTitle}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>

        </div>

    );
}

export default Job;
