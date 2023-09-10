import { useState } from "react"
import { createContext } from "react";
import { useMediaQuery } from "react-responsive"
import PropTypes from "prop-types"

export const Context = createContext();
export default function Provider ({ children }) {

    const [isMenuBtnClicked, setIsMenuBtnClicked] = useState(false)
    const isMobile = useMediaQuery({ maxWidth : 770 })

    const [category, setCategory] = useState(null)
    const [brand, setBrand] = useState(null)
    const [size, setSize] = useState(null)
    const [amount, setAmount] = useState("all");

    const providerValues = {
        category,
        setCategory,
        brand,
        setBrand,
        size,
        setSize,
        isMenuBtnClicked,
        setIsMenuBtnClicked,
        isMobile,
        amount,
        setAmount,
    }
    
    return (
        <Context.Provider value={providerValues}>
            {children}
        </Context.Provider>
    )
}

Provider.propTypes = {
    children : PropTypes.node.isRequired,
}

