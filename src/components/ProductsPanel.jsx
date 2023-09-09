import { useState, useContext } from "react"
import { Context } from "../Store/Context"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import MySelect from "./MySelect"
import "../styles/components/ProductsPanel.scss"

export default function ProductsPanel () {

    const optionsForCategory = [
        {value : "all", label : "-All categories-"},
        {value : "shoes", label : "Shoes"},
        {value : "handbags", label : "Handbags"},
        {value : "pants", label : "Pants"},
    ]

    const optionsForBrand = [
        {value : "all", label : "-All brands-"},
        {value : "Caria", label : "Caria"},
        {value : "Aria", label : "Aria"},
        {value : "Baria", label : "Baria"},
        {value : "Levis", label : "Levis"},
    ]

    function createOptions (options) {
        const sortedList = options.map(option => option).sort((a, b) => {
            const A = a.label
            const B = b.label
            return A.localeCompare(B)
        })

        return (
            sortedList
        )
    }

    function createOptionsForSize () {
        // console.log(category);
        return (
            category?.value !== "shoes"
                ? [
                    {value : "all", label : "-All sizes-"},
                    {value : "M", label : "M"},
                    {value : "XS", label : "XS"},
                    {value : "S", label : "S"},
                    {value : "L", label : "L"},
                    {value : "XL", label : "XL"},
                ]
                : [
                    {value : "all", label : "-all sizes-"},
                    {value : "36", label : "36"},
                    {value : "37", label : "37"},
                    {value : "38", label : "38"},
                    {value : "39", label : "39"},
                    {value : "40", label : "40"},
                    {value : "41", label : "41"},
                ]
        )
    }

    const { category, setCategory, brand, setBrand, size, setSize } = useContext(Context)

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
                <div className="selects">
                    <MySelect 
                        label="Category"
                        options={createOptions(optionsForCategory)}
                        placeholder="Select category"
                        selectedOption={category}
                        setSelectedOption={setCategory}
                    />
                    <MySelect 
                        label="Brands"
                        options={createOptions(optionsForBrand)}
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