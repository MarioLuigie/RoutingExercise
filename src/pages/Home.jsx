import PropTypes from "prop-types"
import "../styles/pages/Home.scss"

export default function Home ({
    label
}) {

    return (
        <div className="home">
            <p className="about__label">{label}</p>
        </div>
    )
}

Home.propTypes = {
    label : PropTypes.string.isRequired,
}