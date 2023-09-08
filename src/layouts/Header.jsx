import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVenusMars } from '@fortawesome/free-solid-svg-icons'

import textContent from "../data/textContent.json"

import "../styles/layouts/Header.scss"

export default function Header () {

    const { header : {label} } = textContent

    return (
        <header className="header">
            <h4 className="header__label">{label}</h4>
            <p className='header__icon'><FontAwesomeIcon icon={faVenusMars} /></p>
        </header>
    )
}