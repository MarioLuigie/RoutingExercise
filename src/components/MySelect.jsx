import { useState } from "react"
import Select from "react-select"
import PropTypes from "prop-types"
import "../styles/components/MySelect.scss"

export default function MySelect ({
    label,
    options,
    placeholder
}) {

    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption)
    }

    return (
        <div className="mySelectWrapper">
            <label htmlFor="select" className="mySelectLabel">{label}</label>
            <Select 
                className="mySelect"
                inputId="select"
                value={selectedOption}
                options={options}
                placeholder={placeholder}
                onChange={handleChange}
                isSearchable={true}
            />
        </div>
    )
}

MySelect.propTypes = {
    label : PropTypes.string.isRequired,
    options : PropTypes.array.isRequired,
    placeholder : PropTypes.string.isRequired,
}