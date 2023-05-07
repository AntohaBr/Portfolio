import React from 'react'
import s from './Skills.module.scss'
import {Skill} from './skill/Skill'
import {Title} from 'common/title'
import {dataSkills} from 'common/data/dataSkills'
import {Fade} from 'components/main/Main'

export const Skills = () => {

    return (
        <div className={s.skillsBlock} id={'skills'}>
            <div className={s.container}>
                <Fade top delay={300}>
                    <Title text={'Skills'}/>
                </Fade>
                <div className={s.skills}>
                    {dataSkills.map(skill => (
                        <Skill
                            key={skill.id}
                            icon={skill.icon}
                            title={skill.title}
                        />
                    ))
                    }
                </div>
            </div>
        </div>
    )
}


