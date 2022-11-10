import React from 'react';
import style from './Job.module.css';


function Job(props) {
    return (
        <div className={style.job}>
            <div className={style.picture}>
                <button className={style.button}>Look</button>
            </div>
            <div className={style.jobInfo}>
                <h5 className={style.jobTitle}>{props.title}</h5>
                <span className={style.description}>{props.description}</span>
            </div>

        </div>

    );
}

export default Job;
