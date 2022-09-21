import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'Js'} description={'Modern JavaScript Tutorial: simple, but detailed explanations with examples and tasks, including: closures, document and events, object oriented programming and more.React makes it painless to create interactive UIs.React makes it painless to create interactive UIs.React makes it painless to create interactive UIs.React makes it painless to create interactive UIs.'}/>
                    <Skill title={'React'} description={'React makes it painless to create interactive UIs. React makes it painless to create interactive UIs.React makes it painless to create interactive UIs.React makes it painless to create interactive UIs.React makes it painless to create interactive UIs.React makes it painless to create interactive UIs.' }/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
