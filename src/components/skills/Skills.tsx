import React from 'react'
import s from './Skills.module.scss'
import {Skill} from './skill/Skill'
import {Title} from 'common/title'
import {dataSkills} from 'common/data/dataSkills'
import {Fade} from 'components/main/Main'

export const Skills = () => {

    return (
        <div className={s.skillsBlock} id={'skills'}>
            <Fade delay={150}>
                <div className={s.container}>
                    <Fade top delay={700}>
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
            </Fade>
        </div>
    )
}


