import { useState } from "react"
import { createContext } from "react";
import { useMediaQuery } from "react-responsive"
import PropTypes from "prop-types"

import products from "..//data/products.json"

export const Context = createContext();

export default function Provider ({ children }) {

    const [isMenuBtnClicked, setIsMenuBtnClicked] = useState(false)
    const isMobile = useMediaQuery({ maxWidth : 770 })

    const [category, setCategory] = useState(null)
    const [brand, setBrand] = useState(null)
    const [size, setSize] = useState(null)
    const [amount, setAmount] = useState("all")

    const all = "all"
    const { productList } = products

    const filterProducts = (product) => {
        const categoryFilter = !category 
            || category.value === all
            || category.value === product.type

        const brandFilter = !brand 
            || brand.value === all
            || brand.value === product.brand

        const sizeFilter = !size 
            || size.value === all 
            || size.value === product.size 

        const price = Number(product.price)
        let amountFilter = true
        // I am checking is price in users range
        switch (amount) {
            case 0:
            amountFilter = price >= 0 && price < 100;
            break
            case 100:
            amountFilter = price >= 100 && price <= 1000;
            break
            case 1000:
            amountFilter = price > 1000;
            break
            case all:
            break 
            default:
            break
        }

        return categoryFilter 
            && brandFilter 
            && sizeFilter
            && amountFilter
    }

    // console.log(amount);
    const list = productList
        .filter((product) => filterProducts(product))
        .sort((a, b) => {
            const A = a.price
            const B = b.price
            return A - B
        })

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
        list
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

