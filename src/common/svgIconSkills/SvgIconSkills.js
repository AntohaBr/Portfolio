import React from 'react'
import svgIconSkill from '../../assets/image/svgIconSkill.svg'

export const SvgIconSkills = (props) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg'>
            <use href={svgIconSkill + '#' + props.id}/>
        </svg>
    )
}
