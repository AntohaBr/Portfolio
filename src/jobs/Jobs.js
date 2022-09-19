import React from 'react';
import style from './Jobs.module.css';
import styleContainer from "../common/styles/Container.module.css";
import Job from "./job/Job";


function Jobs() {
    return (
        <div className={style.jobsBlock}>
            <div className={`${styleContainer.container} ${style.jobsContainer}`}>
                <h2 className={style.title}>Jobs</h2>
                <div className={style.jobs}>
                    <Job  picture={'picture'} title={'Todolist'} description={'Todolist to optimize working hours.'} />
                    <Job  picture={'picture'} title={'Social network'} description={'Social network for meeting people and communicating with them.'}/>
                </div>
            </div>
        </div>
    );
}

export default Jobs;
