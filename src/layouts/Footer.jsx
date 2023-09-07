import textContent from "../data/textContent.json"
import "../styles/layouts/Footer.scss"

export default function Footer () {

    const { footer : { sign }} = textContent

    return (
        <footer className="footer">
            <p className="footer__sign">{sign}</p>
        </footer>
    )
}