import PropTypes from "prop-types"
import "../styles/pages/Contact.scss"

export default function Contact ({
    label
}) {

    return (
        <div className="contact">
            <p className="contact__label">{label}</p>
        </div>
    )
}

Contact.propTypes = {
    label : PropTypes.string.isRequired,
}