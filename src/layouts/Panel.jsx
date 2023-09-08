import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import "../styles/layouts/Panel.scss"

export default function Panel () {

    return (
        <div className="panel">
            <div className="loginWrapper">
                <button className="login">
                    Log in
                    <span className='heartIcon'><FontAwesomeIcon icon={faHeart} /></span>
                </button>
            </div>
        </div>
    )
}