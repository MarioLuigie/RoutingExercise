import PropTypes from "prop-types"
import "./RadioButton.scss"

export default function RadioButton ({ 
    changed, 
    id, 
    isSelected, 
    label, 
    value 
}) {

    return (
        <div className="RadioButton">
            <input
                id={id}
                onChange={changed}
                value={value}
                type="radio"
                checked={isSelected}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

RadioButton.propTypes = {
    changed : PropTypes.func.isRequired,
    id : PropTypes.string.isRequired,
    isSelected : PropTypes.bool.isRequired,
    label : PropTypes.string.isRequired,
    value : PropTypes.number.isRequired,
}