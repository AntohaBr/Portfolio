import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
              <Title text={'Skills'}/>
                <div className={style.skills}>
                    <Skill title={'React'}/>
                    <Skill title={'Redux'} />
                    <Skill title={'TypeScript'}/>
                    <Skill title={'JavaScript'}/>
                    <Skill title={'HTML5'}/>
                    <Skill title={'CSS3'}/>
                    <Skill title={'Git'}/>
                    <Skill title={'GitHub'}/>
                    <Skill title={'Material UI'}/>
                    <Skill title={'StoryBook'}/>
                    <Skill title={'Unit testing'}/>
                    <Skill title={'Responsive design'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
