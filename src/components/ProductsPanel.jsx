import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import "../styles/components/ProductsPanel.scss"

export default function ProductsPanel () {

    const [isFilterVisable, setIsFilterVisable] = useState(false)

    const handleOpenFilter = () => {
        console.log(isFilterVisable);
        setIsFilterVisable(!isFilterVisable)
    }

    return (
        <div className="productsPanel">
            <div className="productsPanel__header">
                <button 
                    className="productsPanel__button"
                    onClick={handleOpenFilter}
                >
                    <span>FILTER</span>
                    <FontAwesomeIcon icon={faChevronDown} />
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

            </div>
        </div>
    )
}