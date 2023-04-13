import React from 'react'
import mainSvgIcon from '../assets/image/mainSvgIcon.svg'

export const SvgIconReact = (props) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg'>
            <use href={mainSvgIcon + '#' + props.id}/>
        </svg>
    )
}
