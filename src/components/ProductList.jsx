import { useContext } from "react"
import { Context } from "../Store/Context"
import Product from "../components/Product"
import "../styles/components/ProductList.scss"

export default function ProductList () {

    const { list } = useContext(Context)

    return (
        <ul className="productList">
            {list.map((product, i) => <Product key={i} product={product}/>)}
        </ul>
    )
}

