import { useContext } from "react"
import { Context } from "../Store/Context"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import MenuButton from "../tools/MenuButton"
import "../styles/layouts/Panel.scss"

export default function Panel () {

    const { isMobile } = useContext(Context)

    return (
        <div className="panel">
            {isMobile && <MenuButton />}
            <button className='shoppingIcon'>
                <FontAwesomeIcon icon={faBagShopping} />
            </button>
            <div className="loginWrapper">
                <button className="login">
                    Log in
                    <span className='heartIcon'><FontAwesomeIcon icon={faHeart} /></span>
                </button>
            </div>
        </div>
    )
}