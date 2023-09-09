import { useContext } from "react"
import { Context } from "../Store/Context"
import textContent from "../data/textContent.json"
import NavbarLink from "./NavbarLink"
import "../styles/components/Navbar.scss"

export default function Navbar () {

    const { navbar } = textContent
    const { isMobile, isMenuBtnClicked } = useContext(Context)

    const navLinks = Object.values(navbar).map((navLink, i) => {
        return (
            <NavbarLink 
                key={i}
                label={navLink.label}
                path={navLink.path}
            />
        )
    })

    return (
        <nav className={`navbar ${!isMobile && !isMenuBtnClicked ? "" : "navbar--hidden"}`}>
            <ul className="navbarList">
                {navLinks}
            </ul>
        </nav>
    )
}