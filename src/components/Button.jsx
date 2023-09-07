import PropTypes from "prop-types"
import "../styles/components/Button.scss"

import "../styles/components/Button.scss"

export default function Button ({
    label,
    onHandle
}) {

    return (
        <div className="buttonWrapper">
            <button className="button" onClick={onHandle}>
                {label}
            </button>
        </div>
    )
}

Button.propTypes = {
    label : PropTypes.string.isRequired,
    onHandle : PropTypes.func.isRequired,
}