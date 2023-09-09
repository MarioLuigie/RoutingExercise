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
        {value : "pants", label : "pants"},
    ]

    const optionsForBrand = [
        {value : "Caria", label : "Caria"},
        {value : "Aria", label : "Aria"},
        {value : "Baria", label : "Baria"},
    ]

    function createOptionsForSize () {
        console.log(category);
        return (
            category?.value !== "shoes"
                ? [
                    {value : "M", label : "M"},
                    {value : "XS", label : "XS"},
                    {value : "S", label : "S"},
                    {value : "L", label : "L"},
                    {value : "XL", label : "XL"},
                ]
                : [
                    {value : "36", label : "36"},
                    {value : "37", label : "37"},
                    {value : "38", label : "38"},
                    {value : "39", label : "39"},
                    {value : "40", label : "40"},
                    {value : "41", label : "41"},
                ]
        )
    }

    const [isFilterVisable, setIsFilterVisable] = useState(false)
    const [category, setCategory] = useState(null);
    const [brand, setBrand] = useState(null);
    const [size, setSize] = useState(null);

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
                <div className="selects">
                    <MySelect 
                        label="Category"
                        options={optionsForCategory}
                        placeholder="Select category"
                        selectedOption={category}
                        setSelectedOption={setCategory}
                    />
                    <MySelect 
                        label="Brands"
                        options={optionsForBrand}
                        placeholder="Select brand"
                        selectedOption={brand}
                        setSelectedOption={setBrand}
                    />
                    <MySelect 
                        label="Size"
                        options={createOptionsForSize()}
                        placeholder="Select size"
                        selectedOption={size}
                        setSelectedOption={setSize}
                    />
                </div>
            </div>
        </div>
    )
}