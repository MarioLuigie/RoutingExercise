import { NavLink } from "react-router-dom"
import { PropTypes } from "prop-types"
import "../styles/components/NavbarLink.scss"

export default function NavbarLink ({
    label,
    path
}) {

    return (
        <li className="navbarLink">
            <NavLink to={path}>{label}</NavLink>
        </li>
    )
}

NavbarLink.propTypes = {
    label : PropTypes.string.isRequired,
    path : PropTypes.string.isRequired,
}