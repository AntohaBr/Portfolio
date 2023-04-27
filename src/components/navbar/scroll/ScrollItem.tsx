import {Link} from 'react-scroll'
import {FC} from 'react'

type ScrollItemPropsType = {
    path: string,
    onClick?: () => void
    title: string
    offset: number
}

export const UniversalLink: FC<ScrollItemPropsType> =
    ({path, onClick, title, offset}) => {

        return (
            <Link
                activeClass='active'
                to={path}
                spy={true}
                smooth={true}
                duration={500}
                offset={offset}
                // onClick={onClick}
            >
                {title}
            </Link>
        )
    }