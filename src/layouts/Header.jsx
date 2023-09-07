import "../styles/layouts/Header.scss"
import textContent from "../data/textContent.json"

export default function Header () {

    const { header : {label} } = textContent

    return (
        <header className="header">
            <h4 className="header__label">{label}</h4>
        </header>
    )
}