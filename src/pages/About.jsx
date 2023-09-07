import PropTypes from "prop-types"
import "../styles/pages/About.scss"

export default function About ({
    label
}) {

    return (
        <div className="about">
            <p className="about__label">{label}</p>
        </div>
    )
}

About.propTypes = {
    label : PropTypes.string.isRequired,
}