import React from 'react';
import style from './Skill.module.css';


function Skill(props) {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <h5 className={style.skillTitle}>{props.title}</h5>
            <span>{props.description}</span>
        </div>
    );
}

export default Skill;
