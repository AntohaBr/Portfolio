import {Link} from 'react-scroll'
import {FC} from 'react'
import s from './UniversalLink.module.scss'

type ScrollItemPropsType = {
    path: string
    title: string
    onClick?: () => void
    offset: number
}

export const UniversalLink: FC<ScrollItemPropsType> = ({path, title,onClick,offset}) => {

        return (
            <Link
                activeClass={s.active}
                to={path}
                spy={true}
                smooth={true}
                duration={600}
                onClick={onClick}
                offset={offset}
            >
                {title}
            </Link>
        )
    }