import { useContext } from "react"
import { Context } from "../Store/Context"
import products from "../data/products.json"
import Product from "./Product"
import "../styles/components/ProductList.scss"

export default function ProductList () {

    const all = "all"
    const { category, brand, size, amount } = useContext(Context)
    const { productList } = products

    const filterProducts = (product) => {
        const categoryFilter = !category 
            || category.value === all
            || product.type === category.value

        const brandFilter = !brand 
            || brand.value === all
            || product.brand === brand.value

        const sizeFilter = !size 
            || size.value === all 
            || product.size === size.value

        const price = Number(product.price);
        let amountFilter = true;
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
            case "all":
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
        .map((product, i) => <Product key={i} product={product}/>)

    // console.log(list);
    return (
        <ul className="productList">
            {list}
        </ul>
    )
}