import {Link} from 'react-scroll'
import {FC} from 'react'
import s from './UniversalLink.module.scss'

type ScrollItemPropsType = {
    path: string,
    title: string
}

export const UniversalLink: FC<ScrollItemPropsType> = ({path, title}) => {

        return (
            <Link
                activeClass={s.active}
                to={path}
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
            >
                {title}
            </Link>
        )
    }