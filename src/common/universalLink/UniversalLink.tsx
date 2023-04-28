import {Link} from 'react-scroll'
import {FC} from 'react'
import s from './UniversalLink.module.scss'

type ScrollItemPropsType = {
    path: string,
    title: string
    onClick?: () => void
}

export const UniversalLink: FC<ScrollItemPropsType> = ({path, onClick, title}) => {

        return (
            <Link
                activeClass={s.active}
                to={path}
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                onClick={onClick}
            >
                {title}
            </Link>
        )
    }