import textContent from "../data/textContent.json"
import Product from "./Product"

import "../styles/components/ProductList.scss"

export default function ProductList () {

    const { main : { productPage : { productList } }} = textContent

    const list = productList.map((product, i) => {

        return (
            <Product 
                key={i}
                product={product}
            />
        )
    })

    console.log(list);

    return (
        <ul className="productList">
            {list}
        </ul>
    )
}