import {Link} from 'react-scroll'
import {FC} from 'react'
import s from './UniversalLink.module.scss'

type ScrollItemPropsType = {
    path: string,
    title: string
    onClickHandle?: () => void
}

export const UniversalLink: FC<ScrollItemPropsType> = ({path, onClickHandle, title}) => {

        return (
            <Link
                activeClass={s.active}
                to={path}
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                onClick={onClickHandle}
            >
                {title}
            </Link>
        )
    }