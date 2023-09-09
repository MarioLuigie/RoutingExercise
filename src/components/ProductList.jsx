import { useContext } from "react"
import { Context } from "../Store/Context"
import products from "../data/products.json"
import Product from "./Product"

import "../styles/components/ProductList.scss"

export default function ProductList () {

    const { category, brand, size } = useContext(Context)

    const { productList } = products

    const filterProducts = (product) => {
        const categoryFilter = !category 
            || category.value === "all" 
            || product.type === category.value;
        const brandFilter = !brand 
            || brand.value === "all" 
            || product.brand === brand.value;
        const sizeFilter = !size 
            || size.value === "all" 
            || product.size === size.value;
        return categoryFilter 
            && brandFilter 
            && sizeFilter;
    };

    const list = productList
        .filter((product) => filterProducts(product))
        .map((product, i) => 
            <Product 
                key={i}
                product={product}
            />
        )

    // console.log(list);

    return (
        <ul className="productList">
            {list}
        </ul>
    )
}