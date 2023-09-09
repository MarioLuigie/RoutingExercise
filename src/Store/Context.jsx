import { useState } from "react"
import { createContext } from "react";
import PropTypes from "prop-types"
import { useMediaQuery } from "react-responsive"

export const Context = createContext();

export default function Provider ({ children }) {

    const isMobile = useMediaQuery({ maxWidth : 770 })

    const [isMenuBtnClicked, setIsMenuBtnClicked] = useState(false)
    const [category, setCategory] = useState(null)
    const [brand, setBrand] = useState(null)
    const [size, setSize] = useState(null)

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

