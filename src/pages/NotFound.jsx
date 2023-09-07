import PropTypes from "prop-types"

import Button from "../components/Button"

import "../styles/pages/NotFound.scss"

export default function NotFound ({
    label,
    buttonLabel,
    onHandle
}) {

    return (
        <div className="notFound">
            {label}
            <Button label={buttonLabel} onHandle={onHandle} />
        </div>
    )
}

NotFound.propTypes = {
    label : PropTypes.string.isRequired,
    buttonLabel : PropTypes.string.isRequired,
    onHandle : PropTypes.func.isRequired,
}