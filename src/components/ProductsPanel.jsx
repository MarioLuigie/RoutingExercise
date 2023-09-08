import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import MySelect from "./MySelect"
import "../styles/components/ProductsPanel.scss"

export default function ProductsPanel () {

    const optionsForCategory = [
        {value : "shoes", label : "shoes"},
        {value : "handbags", label : "handbags"},
    ]

    const optionsForSize = [
        {value : "36", label : "36"},
        {value : "37", label : "37"},
        {value : "38", label : "38"},
    ]

    const [isFilterVisable, setIsFilterVisable] = useState(false)

    const handleOpenFilter = () => {
        console.log(isFilterVisable)
        setIsFilterVisable(!isFilterVisable)
    }

    return (
        <div className="productsPanel">
            <div className="productsPanel__header">
                <button 
                    className="productsPanel__button"
                    onClick={handleOpenFilter}
                >
                    FILTER
                    {!isFilterVisable 
                        ? <FontAwesomeIcon icon={faChevronDown} /> 
                        : <FontAwesomeIcon icon={faChevronUp} />
                    }
                </button>
            </div>
            <div 
                className={
                    `${isFilterVisable 
                        ? "productsPanel__body productsPanel__body--visible" 
                        : "productsPanel__body"
                    }`
                }
            >
                <MySelect 
                    label="Category"
                    options={optionsForCategory}
                    placeholder="Select category"
                />
                <MySelect 
                    label="Size"
                    options={optionsForSize}
                    placeholder="Select size"
                />
            </div>
        </div>
    )
}