import { useState, useContext } from "react"
import { Context } from "../Store/Context"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import MySelect from "./MySelect"
import RadioButton from "../tools/RadioButton"
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

    function createSortedOptions (options) {
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
                    {value : "UNI", label : "UNI"},
                ]
                : [
                    {value : "all", label : "-All sizes-"},
                    {value : "35", label : "35"},
                    {value : "36", label : "36"},
                    {value : "37", label : "37"},
                    {value : "38", label : "38"},
                    {value : "39", label : "39"},
                    {value : "40", label : "40"},
                    {value : "41", label : "41"},
                    {value : "42", label : "42"},
                ]
        )
    }

    const { 
        category, 
        setCategory, 
        brand, 
        setBrand, 
        size, 
        setSize, 
        amount, 
        setAmount 
    } = useContext(Context)

    const initialAmount = "all"
    const [isFilterVisable, setIsFilterVisable] = useState(false)

    const handleOpenFilter = () => {
        console.log(isFilterVisable)
        setIsFilterVisable(!isFilterVisable)
    }

    const handleChangeRadio = (evt) => {
        console.log(amount)
        console.log(typeof amount)
        const newAmount = evt.target.value === initialAmount 
            ? initialAmount 
            : Number(evt.target.value)
        setAmount(newAmount)
    };

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
                    `productsPanel__body ${isFilterVisable 
                        ? " productsPanel__body--visible" 
                        : ""
                    }`
                }
            >
                <div className="selects">
                    <MySelect 
                        label="Category"
                        options={createSortedOptions(optionsForCategory)}
                        placeholder="Select category"
                        selectedOption={category}
                        setSelectedOption={setCategory}
                    />
                    <MySelect 
                        label="Brands"
                        options={createSortedOptions(optionsForBrand)}
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
                <div className="selectsAmount">
                    <div className="selectsRadio__label">
                        Amount
                    </div>
                    <div className="selectsRadio">
                        <RadioButton 
                            changed={handleChangeRadio}
                            id="1"
                            isSelected={amount === 0}
                            label="under 100"
                            value={0}
                        />
                        <RadioButton 
                            changed={handleChangeRadio}
                            id="2"
                            isSelected={amount === 100}
                            label="100 - 1000"
                            value={100}
                        />
                        <RadioButton 
                            changed={handleChangeRadio}
                            id="3"
                            isSelected={amount === 1000}
                            label="over 1000"
                            value={1000}
                        />
                        <RadioButton 
                            changed={handleChangeRadio}
                            id={initialAmount}
                            isSelected={amount === initialAmount}
                            label={initialAmount}
                            value={initialAmount}
                        />
                    </div>
                </div>
                <div className="moreSelects">
                    <button className="moreSelectsButton"> 
                        LESS
                        {!isFilterVisable 
                            ? <FontAwesomeIcon icon={faChevronDown} /> 
                            : <FontAwesomeIcon icon={faChevronUp} />
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}