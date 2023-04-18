import {Link} from 'react-router-dom'
import {FC} from 'react'

type ScrollItemPropsType = {
    path: string,
    onClick: () => void
    title: string
}

export const ScrollItem: FC<ScrollItemPropsType> = ({path, onClick, title}) => {
    return (
        <div>{title}</div>
        // <Link
        //     // activeClass={''}
        //     to={path}
        //     spy={true}
        //     smooth={true}
        //     offset={-50}
        //     duration={500}
        //     onClick={onClick}
        // >
        //     {title}
        // </Link>
    )
}