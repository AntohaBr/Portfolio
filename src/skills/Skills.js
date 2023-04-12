import React from 'react'
import s from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Title from '../common/components/title/Title'
import {Skill} from './skill/Skill'
import {reactIcon, javaScript, typeScript, redux, html, css, git, github, materialUI, responsiveDesign,
    storyBook, unitTest} from '../assets'


export const Skills = () => {
    const skills = [
        {id: 1, style: reactIcon, title: 'React'},
        {id: 2, style: redux, title: 'Redux'},
        {id: 3, style: typeScript, title: 'TypeScript'},
        {id: 4, style: javaScript, title: 'JavaScript'},
        {id: 5, style: html, title: 'HTML5'},
        {id: 6, style: css, title: 'CSS3'},
        {id: 7, style: git, title: 'Git'},
        {id: 8, style: github, title: 'GitHub'},
        {id: 9, style: materialUI, title: 'Material UI'},
        {id: 10, style: storyBook, title: 'StoryBook'},
        {id: 11, style: unitTest, title: 'Unit testing'},
        {id: 12, style: responsiveDesign, title: 'Responsive design'}
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


