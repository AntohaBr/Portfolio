import React from 'react';
import style from './Jobs.module.css';
import Job from "./job/Job";
import styleContainer from "../common/styles/Container.module.css";


function Jobs() {
    return (
        <div className={style.jobsBlock}>
            <div className={`${styleContainer.container} ${style.jobsContainer}`}>
                <h2 className={style.title}>Jobs</h2>
                <div className={style.jobs}>
                    <Job  title={'Todolist'} description={'Todolist to optimize working hours. Todolist to optimize working hours.Todolist to optimize working hours.Todolist to optimize working hours.Todolist to optimize working hours.'} />
                    <Job  title={'Social network'} description={'Social network for meeting people and communicating with them. Social network for meeting people and communicating with them.Social network for meeting people and communicating with them.Social network for meeting people and communicating with them.Social network for meeting people and communicating with them.Social network for meeting people and communicating with them.Social network for meeting people and communicating with them.Social network for meeting people and communicating with them.'}/>
                </div>
            </div>
        </div>
    );
}

export default Jobs;
