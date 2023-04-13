import React from 'react'
import s from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Title from '../common/components/title/Title'
import {Skill} from './skill/Skill'

export const Skills = () => {
    const skills = [
        {id: 1, title: 'React'},
        {id: 2, title: 'Redux'},
        {id: 3, title: 'TypeScript'},
        {id: 4, title: 'JavaScript'},
        {id: 5, title: 'HTML5'},
        {id: 6, title: 'CSS3'},
        {id: 7, title: 'Git'},
        {id: 8, title: 'GitHub'},
        {id: 9, title: 'Material UI'},
        {id: 10, title: 'StoryBook'},
        {id: 11, title: 'Unit testing'},
        {id: 12, title: 'Responsive design'},
    ]

    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title text={'Skills'}/>
                <div className={s.skills}>
                    {skills.map(skill => (
                        <Skill
                            key={skill._id}
                            title={skills.title}
                            skill={skill}
                        />
                    ))
                    }
                </div>
            </div>
        </div>
    )
}


