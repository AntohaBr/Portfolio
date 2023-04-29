import React from 'react'
import s from './Jobs.module.scss'
import {Job} from './job/Job'
import {Title} from 'common/title'
import {dataJobs} from 'common/data/dataJobs'

export const Jobs = () => {

    return (
        <div className={s.jobsBlock} id={'projects'}>
            <div className={s.container}>
                <Title text={"Projects"}/>
                <div className={s.jobs}>
                    {dataJobs.map(job => (
                        <Job
                            key={job.id}
                            demo={job.demo}
                            code={job.code}
                            backgroundImage={job.backgroundImage}
                            title={job.title}
                            description={job.description}/>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

