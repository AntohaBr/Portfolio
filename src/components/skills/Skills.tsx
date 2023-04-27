import React from 'react'
import s from './Skills.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import {Skill} from './skill/Skill'
import {
    SvgIconCss, SvgIconGit, SvgIconGitHub, SvgIconHtml, SvgIconJavaScript, SvgIconMaterialUi, SvgIconReact,
    SvgIconRedux, SvgIconResponsiveDesign, SvgIconStoryBook, SvgIconTypeScript, SvgIconUnitTest
} from 'common/svgIcon'
import {Title} from 'common/title'

export const Skills = () => {
    const skills = [
        {id: 1, icon: <SvgIconReact/>, title: 'React'},
        {id: 2, icon: <SvgIconRedux/>, title: 'Redux'},
        {id: 3, icon: <SvgIconTypeScript/>, title: 'TypeScript'},
        {id: 4, icon: <SvgIconJavaScript/>, title: 'JavaScript'},
        {id: 5, icon: <SvgIconHtml/>, title: 'HTML5'},
        {id: 6, icon: <SvgIconCss/>, title: 'CSS3'},
        {id: 7, icon: <SvgIconGit/>, title: 'Git'},
        {id: 8, icon: <SvgIconGitHub/>, title: 'GitHub'},
        {id: 9, icon: <SvgIconMaterialUi/>, title: 'Material UI'},
        {id: 10, icon: <SvgIconStoryBook/>, title: 'StoryBook'},
        {id: 11, icon: <SvgIconUnitTest/>, title: 'Unit testing'},
        {id: 12, icon: <SvgIconResponsiveDesign/>, title: 'Responsive design'},
    ]

    return (
        <div className={s.skillsBlock} id={'skills'}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title text={'Skills'}/>
                <div className={s.skills}>
                    {skills.map(skill => (
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


