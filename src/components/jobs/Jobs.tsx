import React from 'react'
import s from './Jobs.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import Public_network from '../../assets/image/Public_network.jpg'
import Card_training from '../../assets/image/Card_training.jpg'
import Order_of_Business from '../../assets/image/Order_of_Business.jpg'
import {Job} from './job/Job'
import {Title} from 'common/title'

export const Jobs = () => {
    const baseStack = 'Stack: React, Redux, Typescript, Javascript, Redux-Thunk, React-Router-dom, Axios, Rest API,'
    const orderOfBusiness = {backgroundImage: `url(${Order_of_Business})`}
    const publicNetwork = {backgroundImage: `url(${Public_network})`}
    const cardTraining = {backgroundImage: `url(${Card_training})`}

    const jobs = [
        {
            id: 1, style: cardTraining,
            title: 'Card training',
            description: `${baseStack} Formik, MUI`,
            demo: '' ,
            code: 'https://github.com/AntohaBr/Cards'
        },
        {
            id: 2, style: orderOfBusiness,
            title: 'Order Of business',
            description: `${baseStack} Formik, Storybook, Jest, MUI`,
            demo: 'https://antohabr.github.io/Todolist/',
            code: 'https://github.com/AntohaBr/Todolist'
        },
        {
            id: 3, style: publicNetwork,
            title: 'Public network',
            description: `${baseStack} React Hook Form, Jest`,
            demo: '' ,
            code: 'https://github.com/AntohaBr/Social-network'
        }
    ]

    return (
        <div className={s.jobsBlock}>
            <div className={`${styleContainer.container} ${s.jobsContainer}`}>
                <Title text={"Projects"}/>
                <div className={s.jobs}>
                    {jobs.map(job => (
                        <Job
                            key={job.id}
                            demo={job.demo}
                            code={job.code}
                            style={job.style}
                            title={job.title}
                            description={job.description}/>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

