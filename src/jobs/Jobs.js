import React from 'react';
import style from './Jobs.module.css';
import Job from './job/Job';
import styleContainer from '../common/styles/Container.module.css';
import Title from '../common/components/title/Title.js';
import socialImg from '../assets/image/social_network_img.jpg'
import todolistImg from '../assets/image/todolost_img.jpg'

function Jobs() {
    const todolist = {
        backgroundImage: `url(${todolistImg})`
    };

    const socialNetwork = {
        backgroundImage: `url(${socialImg})`
    };

    return (
        <div className={style.jobsBlock}>
            <div className={`${styleContainer.container} ${style.jobsContainer}`}>
               <Title text={"Projects"}/>
                <div className={style.jobs}>
                    <Job style={todolist} title={'Todolist'} description={'Todolist to optimize working hours.'} />
                    <Job style={socialNetwork} title={'Social network'} description={'Social network for meeting people and communicating with them.'}/>
                </div>
            </div>
        </div>
    );
}

export default Jobs;
