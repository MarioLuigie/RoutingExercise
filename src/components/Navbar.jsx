import "../styles/components/Navbar.scss"
import textContent from "../data/textContent.json"
import NavbarLink from "./NavbarLink"

export default function Navbar () {

    const { navbar } = textContent

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
        <nav className="navbar">
            <ul className="navbarList">
                {navLinks}
            </ul>
        </nav>
    )
}